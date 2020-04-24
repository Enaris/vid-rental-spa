import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import './add-movie-form.styles.scss';

import VidFormInput from '../form-input/form-input.component';
import CustomButton from '../../general/custom-button/custom-button.component';

const AddMovieForm = () => {
  
  const formik = useFormik({
    initialValues: {
      title: '',
      releaseDate: null,
      director: '',
      thumbnail: '',
      images: [],
      description: '',
      coverImage: ''
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .required('Title is required'),
      releaseDate: Yup.date()
        .required("Release date is required")
        .max(new Date()),
      thumbnail: Yup.string()
        .when('thumbnail', {
          is: true,
          then: Yup.string().url("Wrong url format")
        }),
      images: Yup.string()
        .when('images', {
          is: true,
          then:
            Yup.array()
              .of(Yup.string().url("Wrong url format"))
        }),
      description: Yup.string()
        .when('description', {
          is: true,
          then: Yup.string().max(4096, "Description is too long")
        }),
      coverImage: Yup.string()
        .when('coverImage', {
          is: true,
          then: Yup.string().url("Wrong url format")
        })
    }),
    onSubmit: values => console.log(values)
  });
  
  return (
    <div className='add-movie-form'>
      <form onSubmit={ formik.handleSubmit }>
        <VidFormInput formik={ formik } name='title' label='Title' />
        <VidFormInput formik={ formik } name='releaseDate' label='Release Date' type='Date' />
        <VidFormInput formik={ formik } name='director' label='Director' />
        <VidFormInput formik={ formik } name='thumbnail' label='Thumbnail' />
        <VidFormInput formik={ formik } name='images' label='Images' />
        <VidFormInput formik={ formik } name='description' label='Description' /> 
        <VidFormInput formik={ formik } name='coverImage' label='Cover Image' /> 
        <CustomButton className='w100' type='submit' label='SAVE' />
      </form>
    </div>
  )
}

export default AddMovieForm;