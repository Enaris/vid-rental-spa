import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const VidRichTextbox = ({ initialVal }) => {
  const [value, setValue] = useState(initialVal ? initialVal : '');

  return (
    <ReactQuill theme="snow" value={value} onChange={setValue}/>
  );
}

export default VidRichTextbox;