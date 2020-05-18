import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import './movie-edit.styles.scss';
import MultiDropzone from '../../dropzone/multi-dropzone-w-preview/multi-dropzone-w-preview.component';
import DropzoneWithPreview from '../../dropzone/dropzone-w-preview/dropzone-w-preview.component';
import CustomButton from '../../../general/custom-button/custom-button.component';
import VidFormInput from '../../../forms/form-input/form-input.component';
import VidFormTextarea from '../../../forms/form-textarea/form-textarea.component';
import { updateMovieStart } from '../../../../redux/movie/movie.actions'; 
import { getImageSrc } from '../../../../redux/api/api.urls';
import ImageList from '../../image-list/image-list.component';
import ImageForEditList from '../../image-for-edit-list/image-for-edit-list.component';

const MovieEdit = ({ movie, updateMovieStart }) => {
  const [ imageErrors, setImageErrors ] = useState([]);

  const { id, title, images, description, director } = movie;

  const formik = useFormik({
    initialValues: {
      title: title,
      description: description,
      director: director
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .required('Title is required'),
      description: Yup.string()
        .max(4096, 'Description is too long')
    }),
    onSubmit: () => updateMovieStart(getUpdateData())
  });

  const [ movieImages, setMovieImages ] = useState([ ...images.filter(i => i.imageType === 'Image')])
  const [ newImages, setNewImages ] = useState([]);
  const [ newImageFiles, setNewImageFiles] = useState([]);
  const [ newCover, setNewCover ] = useState(null);
  const [ removedCover, setRemovedCover ] = useState(null);
  const [ removedImages, setRemovedImages ] = useState([]);

  const getUpdateData = () => {
    const removed = removedImages.map(ri => ri.id);
    if (removedCover)
      removed.push(removedCover.id); 
    return {
      ...formik.values,
      id,
      newImages: newImageFiles,
      newCover,
      removedImages: removed,
    }
  }

  const cover = images.find(i => i.imageType === 'Cover');
  const coverUrl = cover ? cover.url : '';

  const handleDrop = accepted => {
    const newImgs = [];
    const newImgFiles = [];
    accepted.forEach(a => {
      if (newImages.some(ni => ni.name === a.name)) {
        return;
      }
      newImgFiles.push(a);
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        newImgs.push({ url: fileReader.result, name: a.name });
        setNewImages([ ...newImages, ...newImgs]);
      };
      fileReader.readAsDataURL(a);
    });
    setNewImageFiles([ ...newImageFiles, ...newImgFiles ]);
  }

  const handleDropCover = image => {
    setNewCover(image);
  }

  const handleXCover = () => {
    setNewCover(null);
    if (cover)
      setRemovedCover(cover);
  }

  const handleUndoRemoveCover = () => {
    if (!cover)
      return;
    setRemovedCover(null);
    setNewCover(null); 
  }

  const getInitImage = () => {
    return newCover ? newCover
      : cover && !removedCover ? getImageSrc(coverUrl) 
      : null
  }

  const initImg = getInitImage();

  const handleXBtn = name => {
    const filteredImages = newImages.filter(ni => ni.name !== name);
    setNewImages(filteredImages);
  }

  const handleRejectedImages = errors => {
    setImageErrors(errors)
  }

  const handleAcceptedImages = () => {
    setImageErrors([]);
  }

  const handleRemoveImage = id => {
    const image = images.find(i => i.id === id);
    const filtered = movieImages.filter(i => i.id !== id);
    setRemovedImages([ ...removedImages, image ]);
    filtered && filtered.length ? setMovieImages([ ...filtered ]) : setMovieImages([]);
  }

  const handleUndoRemove = id => {
    const image = images.find(i => i.id === id);
    const filtered = removedImages.filter(i => i.id !== id);
    filtered && filtered.length ? setRemovedImages([ ...filtered ]) : setRemovedImages([]);
    setMovieImages([ ...movieImages, image ]);
  }

  return (
    <div className='movie-edit'>
      <div className='movie-edit-main'>
        <div className='movie-cover'>
          <DropzoneWithPreview initImage={ initImg } handleDrop={ handleDropCover } onRemove={handleXCover} errorsInside />
        </div>
        <form className='movie-details' id='movie-details' onSubmit={ formik.handleSubmit }>
          <VidFormInput formik={ formik } name='title' label='Title' />
          <VidFormInput formik={ formik } name='director' label='Director' />
          <VidFormTextarea formik={ formik } name='description' label='Description' />
        </form>
      </div>
      <div className='movie-edit-images'>
        <div className='edit-images'> 
          {
            movieImages && 
            <ImageList 
              label='Movie Images'
              images={ movieImages.map(i => ({ url: getImageSrc(i.url), keyVal: i.id }))}
              btnLabel='REMOVE'
              btnAction={ handleRemoveImage }
            />
          }
          {
            newImages && 
            <ImageList 
              label='Added Images'
              images={ newImages.map(i => ({ url: i.url, keyVal: i.name }))}
              btnLabel='X'
              btnAction={ handleXBtn }
            />
          }
          <div className='new-image'>
            <MultiDropzone 
              handleDrop={ handleDrop } 
              handleRejected={ handleRejectedImages } 
              handleAccepted={ handleAcceptedImages }
              errorsInside={ false }
            />
          </div>
          {
            imageErrors &&
            <div>
              { imageErrors.map(ie => 
                <div className='error-text' key={ ie.fileName }>{ ie.fileName }: { ie.error }</div>) 
              }
            </div>
          }
          {
            removedCover &&
            <div>
              Removed Cover
              <ImageForEditList 
                key={ removedCover.id }
                imgUrl={ getImageSrc(removedCover.url) } 
                btnLabel='UNDO'
                btnAction={ handleUndoRemoveCover }
                label='COVER'
              />
            </div>
          }
          {
            removedImages && 
            <ImageList 
              label='Removed Images'
              images={ removedImages.map(i => ({ url: getImageSrc(i.url), keyVal: i.id }))}
              btnLabel='UNDO'
              btnAction={ handleUndoRemove }
            />
          }
        </div>
      </div>
      <CustomButton type='submit' label='SAVE' form='movie-details'/>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  updateMovieStart: data => dispatch(updateMovieStart(data))
})

export default connect(null, mapDispatchToProps)(MovieEdit);