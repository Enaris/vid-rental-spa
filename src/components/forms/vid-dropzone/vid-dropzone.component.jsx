import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import './vid-dropzone.styles.scss';

const VidDropzone = ({ maxSize, multiple, acceptType, handleAccepted, handleRejected }) => {
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
      handleRejected();
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
    <div className='w100 vid-dropzone'>
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      {
        errors &&
        errors.map(e => <div key={e.fileName}> {`${e.fileName}: ${e.error}`} </div>)
      }
    </div>
  )

}

export default VidDropzone;