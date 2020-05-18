import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import './simple-date-in.styles.scss';
import CustomButton from '../../../components/general/custom-button/custom-button.component';
import VidDatepicker from '../../forms/vid-datepicker/vid-datepicker.component';

const SimpleDateInput = ({ minDate, onSubmit, title, date, saveBtnAction, closeModal }) => {

  console.log(minDate);
  const formik = useFormik({
    initialValues: {
      date: date ? new Date(date) : new Date()
    },
    validationSchema: Yup.object({
      date: Yup.date()
        .required("Date is required")
        .max(new Date(), 'Return date must be at earlier than today')
        .min(new Date(minDate), 'Return date past rent date')
    }),
    onSubmit: values => handleSave(values)
  });

  const handleSave = values => {
    console.log('adfs');
    if (saveBtnAction)
      saveBtnAction();
    onSubmit(values);
    if (closeModal)
      closeModal();
  }

  const handleCancel = e => {
    e.preventDefault();
    onSubmit({ date: null });
    if (closeModal)
      closeModal();
  }

  return (
    <form onSubmit={ formik.handleSubmit }>
      <div>{ title }</div>
      <VidDatepicker formik={ formik } name='date' />
      <CustomButton type='submit' label='Save' className='mt-5 w100' />
      <CustomButton type='button' label='Set not returned' className='mt-5 w100' onClick={ e => handleCancel(e) } />
    </form>
  )
}

export default SimpleDateInput;