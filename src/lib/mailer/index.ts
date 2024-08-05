import emailjs from '@emailjs/browser';

type ContactEmailTemplateParams = {
  from_name: string;
  from_email: string;
  phone_number: string;
  message: string;
};

const emailToCopy = process.env.NEXT_PUBLIC_EMAIL_TO_COPY;
const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

if (!serviceID || !templateID || !publicKey) {
  throw new Error('Failed to setup mailer service');
}

export function sendContactMail(templateParams: ContactEmailTemplateParams) {
  if (!serviceID || !templateID || !publicKey) {
    throw new Error('Failed to setup mailer service');
  }

  return emailjs.send(
    serviceID,
    templateID,
    {
      ...templateParams,
      to_email_copy: emailToCopy,
    },
    {
      publicKey,
      limitRate: {
        // Set the limit rate for the application
        id: 'sh.sw',
        // Allow 1 request per 10s
        throttle: 10000,
      },
    }
  );
}



