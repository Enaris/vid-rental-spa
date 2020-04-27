import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';

import './add-movie-form.styles.scss';

import VidFormInput from '../form-input/form-input.component';
import CustomButton from '../../general/custom-button/custom-button.component';
import { addMovieStart } from '../../../redux/movie/movie.actions'; 

const AddMovieForm = ({ addMovieStart }) => {
  
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
    onSubmit: values => addMovieStart(values)
  });
  return (
    <div className='add-movie-form'>
      <form onSubmit={ formik.handleSubmit }>
        <VidFormInput formik={ formik } name='title' label='Title' />
        <VidFormInput formik={ formik } name='releaseDate' label='Release Date' type='Date' />
        <VidFormInput formik={ formik } name='director' label='Director' />
        <VidFormInput formik={ formik } name='description' label='Description' /> 
        <CustomButton className='w100' type='submit' label='SAVE' />
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addMovieStart: movie => dispatch(addMovieStart(movie))
})

export default connect(null, mapDispatchToProps)(AddMovieForm);