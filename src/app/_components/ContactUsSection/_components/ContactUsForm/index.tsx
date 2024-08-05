'use client';
import { Formik } from 'formik';
import { useCallback, useState } from 'react';
import { FormikHelpers } from 'formik/dist/types';
import { Snackbar, Stack } from '@mui/material';
import { TextInputField } from '@/shared/elements/TextInputField';
import { sendContactMail } from '@/lib/mailer';
import { LoadingButton } from '@mui/lab';
import { ContactUsSchema } from './data';

type TContactUsForm = {
  name: string;
  phoneNumber: string;
  email: string;
  message: string;
  attachment?: string;
};

export default function ContactUsForm() {
  const [emailSentNotify, setEmailSentNotify] = useState(false);

  const handleSubmit = useCallback(async (values: TContactUsForm, actions: FormikHelpers<TContactUsForm>) => {
    await sendContactMail({
      from_name: values.name,
      from_email: values.email,
      phone_number: values.phoneNumber,
      message: values.message,
    });
    actions.setSubmitting(false);
    actions.resetForm();
    setEmailSentNotify(true);
  }, []);

  return (
    <Formik
      initialValues={{
        name: '',
        phoneNumber: '',
        email: '',
        message: '',
      }}
      validationSchema={ContactUsSchema}
      validateOnChange={false}
      validateOnBlur={false}
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

            <TextInputField<TContactUsForm> name="message" formik={props} placeholder="Message" label="Message"
                                            multiline
                                            maxRows={4}/>
          </Stack>

          <LoadingButton
            disabled={!props.isValid || !props.touched}
            loading={props.isSubmitting}
            type="submit"
            variant="contained"
            color="primary"
            size="large"
          >
            Get In Touch
          </LoadingButton>

          {emailSentNotify && (
            <Snackbar
              open
              onClose={() => setEmailSentNotify(false)}
              autoHideDuration={3000}
              message="Thank you! Your email has been successfully sent"
            />
          )}
        </form>
      )}
    </Formik>
  );
}