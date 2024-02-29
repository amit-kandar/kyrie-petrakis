import * as yup from 'yup';

const contactSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email address'),
    phone_number: yup.string().matches(/^\d{10}$/, 'Invalid phone number').required('Phone is required'),
    subject: yup.string().required('Subject is required'),
    message: yup.string().required('Message is required'),
});

export default contactSchema;
