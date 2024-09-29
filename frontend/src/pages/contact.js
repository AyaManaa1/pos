import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField, Checkbox, Button, FormControlLabel } from '@mui/material';
import * as Yup from 'yup';
import NavBar from '../components/NavBar';  
import Footer from '../components/Footer';  
import '../styles/contact.css'; 

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  message: Yup.string().required('Message is required'),
  permission: Yup.boolean().oneOf([true], 'Permission is required to email you')
});

const ContactUs = () => {
  return (
    <>
      <NavBar />
      <div className="contact-form-container" style={{ paddingTop: '20px' }}>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            message: '',
            permission: false,
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            alert("Thank you for your message!");
            resetForm();
          }}
        >
          {({ errors, touched, handleChange, values }) => (
            <Form style={{ maxWidth: '600px', margin: 'auto' }}>
              <h1>Contact Us</h1>

              <Field
                name="firstName"
                as={TextField}
                label="First Name"
                fullWidth
                error={touched.firstName && Boolean(errors.firstName)}
                helperText={touched.firstName && errors.firstName}
                margin="normal"
              />

              <Field
                name="lastName"
                as={TextField}
                label="Last Name"
                fullWidth
                error={touched.lastName && Boolean(errors.lastName)}
                helperText={touched.lastName && errors.lastName}
                margin="normal"
              />

              <Field
                name="email"
                as={TextField}
                type="email"
                label="Email"
                fullWidth
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                margin="normal"
              />

              <Field
                name="message"
                as={TextField}
                label="Your Message"
                fullWidth
                multiline
                rows={4}
                error={touched.message && Boolean(errors.message)}
                helperText={touched.message && errors.message}
                margin="normal"
              />

              <FormControlLabel
                control={
                  <Field
                    name="permission"
                    as={Checkbox}
                    checked={values.permission}
                    onChange={handleChange}
                    color="primary"
                  />
                }
                label="By checking this box, you grant us permission to email you."
              />
              {touched.permission && errors.permission && <div style={{ color: 'red' }}>{errors.permission}</div>}

              <Button type="submit" variant="contained" color="primary" fullWidth>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
