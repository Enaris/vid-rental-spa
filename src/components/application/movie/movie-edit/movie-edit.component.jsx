import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import './movie-edit.styles.scss';
import ImageEditList from '../../../application/image-edit-list/image-edit-list.component';
import MultiDropzone from '../../dropzone/multi-dropzone-w-preview/multi-dropzone-w-preview.component';
import DropzoneWithPreview from '../../dropzone/dropzone-w-preview/dropzone-w-preview.component';
import VidRichTextbox from '../../../general/vid-rich-textbox/vid-rich-textbox.component';
import CustomButton from '../../../general/custom-button/custom-button.component';
import VidFormInput from '../../../forms/form-input/form-input.component';

const MovieEdit = ({ movie }) => {
  const { title, images, description, director } = movie;
  
  const formik = useFormik({
    initialValues: {
      title: title,
      director: director,
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .required('Title is required'),
    }),
    onSubmit: values => console.log(values)
  });

  const [ newImages, setNewImages ] = useState([]);
  const [ removedImages, setRemovedImages ] = useState([]);

  const cover = images.find(i => i.type === 'cover');
  const coverUrl = cover ? cover.url : '';

  const handleDrop = accepted => {
    const newImgs = [];
    accepted.map(a => {
      console.log(a);
      if (newImages.some(ni => ni.name === a.name)) {
        return;
      }
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        newImgs.push({ url: fileReader.result, name: a.name });
        setNewImages([ ...newImages, ...newImgs]);
      };
      fileReader.readAsDataURL(a);
    });
  }

  const handleXBtn = name => {
    const filteredImages = newImages.filter(ni => ni.name !== name);
    setNewImages(filteredImages);
  }

  return (
    <form className='movie-edit'>
      <div className='movie-edit-main'>
        <div className='movie-cover'>
          <DropzoneWithPreview initImage={ coverUrl }/>
        </div>
        <div className='movie-details'>
          <VidFormInput formik={ formik } name='title' label='Title' />
          <VidFormInput formik={ formik } name='director' label='Director' />
          <div className='movie-desc'>
            Description:
            <VidRichTextbox initialVal={ description } />
          </div>
        </div>
      </div>
      <div className='movie-edit-images'>
        <div className='edit-images'> 
          {
            images.map(i => <ImageEditList imgUrl={i.url} />)
          }
          {
            newImages.map(i => <ImageEditList key={i.name} imgUrl={i.url} btnLabel='X' btnAction={() => handleXBtn(i.name)} /> )
          }
          <div className='new-image'>
            <MultiDropzone handleDrop={ handleDrop } />
          </div>
        </div>
      </div>
      <CustomButton type='submit' label='SAVE'  />
    </form>
  )
}

export default MovieEdit;