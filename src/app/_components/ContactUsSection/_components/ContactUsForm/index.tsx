'use client';
import { Formik } from 'formik';
import { useCallback } from 'react';
import { FormikHelpers } from 'formik/dist/types';
import { Button, Stack } from '@mui/material';
import { TextInputField } from '@/shared/elements/TextInputField';

type TContactUsForm = {
  name: string;
  phoneNumber: string;
  email: string;
  message: string;
  attachment?: string;
};

export default function ContactUsForm() {
  const handleSubmit = useCallback((values: TContactUsForm, actions: FormikHelpers<TContactUsForm>) => {
    console.log(' > values', values);
    actions.setSubmitting(false);
  }, []);

  return (
    <Formik
      initialValues={{
        name: '',
        phoneNumber: '',
        email: '',
        message: '',
      }}
      onSubmit={handleSubmit}
    >
      {props => (
        <form onSubmit={props.handleSubmit} style={{ gap: '1rem' }}>
          <Stack spacing={2} mb={6}>
            <TextInputField<TContactUsForm>
              name="name"
              formik={props}
              placeholder="Enter your name"
              label="Name"
            />

            <TextInputField<TContactUsForm> name="phoneNumber" formik={props} placeholder="Enter your phone number"
                                            label="Phone Number"/>

            <TextInputField<TContactUsForm> name="email" formik={props} placeholder="Enter your email" label="Email"/>

            <TextInputField<TContactUsForm> name="message" formik={props} placeholder="Message" label="Message" multiline
                                            maxRows={4}/>
          </Stack>

          <Button
            disabled={!props.isValid}
            type="submit"
            variant="contained"
            color="primary"
            size="large"
          >
            Get In Touch
          </Button>
        </form>
      )}
    </Formik>
  );
}