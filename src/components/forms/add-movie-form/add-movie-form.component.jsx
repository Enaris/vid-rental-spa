import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import './add-movie-form.styles.scss';
import { mbToKb } from '../../../helpers/size.helper';

import VidFormInput from '../form-input/form-input.component';
import CustomButton from '../../general/custom-button/custom-button.component';
import DropzoneWithPreview from '../../application/dropzone/dropzone-w-preview/dropzone-w-preview.component';

const AddMovieForm = () => {
  
  const formik = useFormik({
    initialValues: {
      title: '',
      releaseDate: '',
      director: '',
      description: ''
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .required('Title is required'),
      releaseDate: Yup.date()
        .required("Release date is required")
        .max(new Date(), 'Release date must be at earlier than today'),
      description: Yup.string().max(4096, "Description is too long"),
    }),
    onSubmit: values => console.log(values)
  });
  return (
    <div className='add-movie-form'>
      <form onSubmit={ formik.handleSubmit }>
        <VidFormInput formik={ formik } name='title' label='Title' />
        <VidFormInput formik={ formik } name='releaseDate' label='Release Date' type='Date' />
        <VidFormInput formik={ formik } name='director' label='Director' />
        <VidFormInput formik={ formik } name='description' label='Description' /> 
        <DropzoneWithPreview maxSize={ mbToKb(3) } />
        <CustomButton className='w100' type='submit' label='SAVE' />
      </form>
    </div>
  )
}

export default AddMovieForm;