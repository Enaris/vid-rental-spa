import React, { useState } from 'react';

import './movie-edit.styles.scss';
import ImageEditList from '../../../application/image-edit-list/image-edit-list.component';
import MultiDropzone from '../../dropzone/multi-dropzone-w-preview/multi-dropzone-w-preview.component';
import DropzoneWithPreview from '../../dropzone/dropzone-w-preview/dropzone-w-preview.component';
import VidRichTextbox from '../../../general/vid-rich-textbox/vid-rich-textbox.component';

const MovieEdit = ({ movie }) => {
  const [ newImages, setNewImages ] = useState([]);
  const [ removedImages, setRemovedImages ] = useState([]);

  const { title, images, description, director } = movie;
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
    <div className='movie-edit'>
      <div className='movie-edit-main'>
        <div className='movie-cover'>
          <DropzoneWithPreview initImage={ coverUrl }/>
        </div>
        <div className='movie-details'>
          <h2 className='movie-title'>{ title }</h2>
          <h3 className='movie-director'>Director: { director }</h3>
          <div className='movie-desc'>
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
    </div>
  )
}

export default MovieEdit;