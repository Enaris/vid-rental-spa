import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import './vid-dropzone.styles.scss';

const VidDropzone = ({ 
  maxSize, 
  multiple, 
  acceptType, 
  label, 
  handleAccepted, 
  handleRejected, 
  errorsInside = true }) => {
  const [errors, setErrors] = useState([]);
  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (!rejectedFiles || rejectedFiles.length > 0) {
      const errors = rejectedFiles.map(f => {
        let error = '';
        const fileName = f.name;
        if (!f.type.startsWith(acceptType.slice(0, acceptType.length - 1))) {
          error += 'Wrong file type. ';
        }
        if (f.size > maxSize) {
          error += 'File is too big. ';
        }
        return { fileName, error };
      })
      setErrors(errors);
      if (handleRejected)
        handleRejected(errors);
      return;
    }
    
    setErrors([]);
    handleAccepted(multiple ? acceptedFiles : acceptedFiles[0]);
    
  }, [acceptType, maxSize, handleAccepted, multiple, handleRejected]);

  const {getRootProps, getInputProps} = useDropzone({
    accept: acceptType,
    onDrop: onDrop,
    multiple: multiple,
    maxSize: maxSize
  });

  return (
    <div className='w100 h100 vid-dropzone'>
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        {
          label 
          ? <p>{ label }</p>
          : <p>Drag 'n' drop some files here, or click to select files</p>
        }
        {
          errors && errorsInside &&
          errors.map(e => <div key={e.fileName} className='error-text'>{ e.error }</div>)
        }
      </div>
    </div>
  )

}

export default VidDropzone;