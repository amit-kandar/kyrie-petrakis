import * as yup from 'yup';

const contactSchema = yup.object().shape({
    first_name: yup.string().required('First name is required'),
    last_name: yup.string().required('Last name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    service: yup.string().required('Service is required'),
    subject: yup.string().required('Subject is required'),
    message: yup.string().required('Message is required'),
});

export default contactSchema;
