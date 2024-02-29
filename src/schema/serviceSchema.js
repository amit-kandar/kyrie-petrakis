import * as yup from 'yup';

const serviceSchema = yup.object().shape({
    first_name: yup.string().required('First name is required'),
    last_name: yup.string().required('Last name is required'),
    email: yup.string().email('Invalid email'),
    phone_number: yup.string().matches(/^\d{10}$/, 'Invalid phone number').required('Phone is required'),
    service: yup.string().required('Service is required'),
    subject: yup.string().required('Subject is required'),
    message: yup.string().required('Message is required'),
});

export default serviceSchema;
