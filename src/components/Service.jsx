import React from "react";
import { useParams } from "react-router-dom";
import { services } from "../utils/services";
import { TESTIMONIALS_BG_IMG } from "../config/constant";
import { useFormik } from "formik";
import serviceSchema from '../schema/serviceSchema';
import Error from '../components/Error';
import axios from "axios";

const backgroundStyle = {
  backgroundImage: `url(${TESTIMONIALS_BG_IMG})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: 'center bottom',
};

function Service() {
  const { serviceName } = useParams();
  const formattedTitle = serviceName.replace(/-/g, ' ');

  const selectedService = services.find((service) => {
    return service.title.toLowerCase() === formattedTitle.toLowerCase();
  });

  const initial_values = {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    service: selectedService.title,
    subject: "",
    message: ""
  }

  const {
    values,
    handleBlur,
    handleChange,
    errors,
    handleSubmit,
    touched
  } = useFormik({
    initialValues: initial_values,
    validateOnBlur: true,
    validationSchema: serviceSchema,
    validateOnChange: true,
    onSubmit: async (values, { resetForm }) => {
      const host = "http://localhost:8080/api/v1/services/"
      try {
        console.log(values);
        const response = await axios.post(host, values);
        console.log(response);
        resetForm();
      } catch (error) {
        console.log(error);
      }
    }
  })

  return (
    <section className="w-full flex justify-center flex-col">
      <div className="w-full flex items-center flex-col py-12 lg:py-16 xl:py-24 bg-gray-600">
        <div className="container px-4 md:px-6">
          <div className="w-full flex flex-col gap-6 items-center mb-10 lg:px-40 lg:mb-14">
            <h1 className="text-3xl text-center font-bold tracking-widest sm:text-5xl lg:text-7xl text-gray-100">{selectedService.title}</h1>
            <p className="text-sm text-center opacity-60 text-gray-100">{selectedService.description}</p>
          </div>
          <div className="grid items-start lg:grid-cols-2 gap-6 lg:gap-6 xl:gap-3">
            <img
              alt="service"
              className="w-full h-60 md:h-80 mx-auto aspect-auto overflow-hidden rounded-xl object-cover object-center "
              height="336"
              src={selectedService.image}
              width="600"
            />
            <div className="space-y-4 mx-auto">
              <div className="space-y-1">
                <h2 className="max-w-[600px] text-gray-100 text-2xl md:text-3xl lg:text-4xl font-semibold">
                  {selectedService.summary}
                </h2>
              </div>
              <div className="grid gap-4">
                {
                  selectedService.points.map((item, index) => {
                    return (
                      <div className="grid grid-cols-[min-content_1fr] gap-1" key={index}>
                        <CheckCircleIcon className="w-4 h-4 grid text-blue-600" />
                        <p className="text-sm text-gray-100">
                          {item}
                        </p>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center flex-col py-12 lg:py-16 xl:py-24 bg-gray-900" style={backgroundStyle}>
        <div className="container px-4 md-px6">
          <div className="mx-auto w-full my-10 max-w-3xl flex justify-center">
            <h2 className="text-2xl text-start md:text-3xl text-white font-medium tracking-wider">{selectedService.CTA}</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="max-w-3xl mx-auto grid items-start gap-4 my-8">
              <div className="grid gap-1.5">
                <label className="block text-sm font-medium text-gray-100" htmlFor="first-name">
                  First name<sup className='text-red-500 text-sm mt-10'>*</sup>
                </label>
                <input
                  id="first_name"
                  placeholder="Enter your first name"
                  className={`bg-gray-900 border-2 rounded-md py-3 pl-5 outline-none text-gray-100 ${errors.first_name && touched.first_name ? "border-red-500 focus:outline-[3px] focus:-outline-offset-[3px] focus:outline-red-500" : "border-zink-500 focus:outline-[3px] focus:-outline-offset-[3px] focus:outline-white"}`}
                  value={values.first_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.first_name && touched.first_name ? <Error msg={errors.first_name} /> : null}
              </div>
              <div className="grid gap-1.5">
                <label className="block text-sm font-medium text-gray-100" htmlFor="last-name">
                  Last name<sup className='text-red-500 text-sm mt-10'>*</sup>
                </label>
                <input
                  id="last_name"
                  placeholder="Enter your last name"
                  className={`bg-gray-900 border-2 rounded-md py-3 pl-5 outline-none text-gray-100 ${errors.last_name && touched.last_name ? "border-red-500 focus:outline-[3px] focus:-outline-offset-[3px] focus:outline-red-500" : "border-zink-500 focus:outline-[3px] focus:-outline-offset-[3px] focus:outline-white"}`}
                  value={values.last_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.last_name && touched.last_name ? <Error msg={errors.last_name} /> : null}
              </div>
              <div className="grid gap-1.5">
                <label className="block text-sm font-medium text-gray-100" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                  className={`bg-gray-900 border-2 rounded-md py-3 pl-5 outline-none text-gray-100 ${errors.email && touched.email ? "border-red-500 focus:outline-[3px] focus:-outline-offset-[3px] focus:outline-red-500" : "border-zink-500 focus:outline-[3px] focus:-outline-offset-[3px] focus:outline-white"}`}
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? <Error msg={errors.email} /> : null}
              </div>
              <div className="grid gap-1.5">
                <label className="block text-sm font-medium text-gray-100" htmlFor="phone_number">
                  Phone Number<sup className='text-red-500 text-sm mt-10'>*</sup>
                </label>
                <input
                  id="phone_number"
                  placeholder="Enter your phone"
                  type="tel"
                  className={`bg-gray-900 border-2 rounded-md py-3 pl-5 outline-none text-gray-100 ${errors.phone_number && touched.phone_number ? "border-red-500 focus:outline-[3px] focus:-outline-offset-[3px] focus:outline-red-500" : "border-zink-500 focus:outline-[3px] focus:-outline-offset-[3px] focus:outline-white"}`}
                  value={values.phone_number}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.phone_number && touched.phone_number ? <Error msg={errors.phone_number} /> : null}
              </div>
              <div className="grid gap-1.5">
                <label className="block text-sm font-medium text-gray-100" htmlFor="email">
                  Service<sup className='text-red-500 text-sm mt-10'>*</sup>
                </label>
                <input
                  id="service"
                  placeholder="Enter service name"
                  type="text"
                  value={selectedService.title}
                  className={`bg-gray-900 border-2 rounded-md py-3 pl-5 outline-none text-gray-100 ${errors.service && touched.service ? "border-red-500 focus:outline-[3px] focus:-outline-offset-[3px] focus:outline-red-500" : "border-zink-500 focus:outline-[3px] focus:-outline-offset-[3px] focus:outline-white"}`}
                  disabled
                />
              </div>
              <div className="grid gap-1.5">
                <label className="block text-sm font-medium text-gray-100" htmlFor="subject">
                  Subject<sup className='text-red-500 text-sm mt-10'>*</sup>
                </label>
                <input
                  id="subject"
                  placeholder="Enter your subject"
                  className={`bg-gray-900 border-2 rounded-md py-3 pl-5 outline-none text-gray-100 duration-200 ${errors.subject && touched.subject ? "border-red-500 focus:outline-[3.5px] focus:outline-offset-[-3px] focus:outline-red-500" : "border-zink-500 focus:outline-[3.5px] focus:outline-offset-[-3px] focus:outline-white"}`}
                  value={values.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.subject && touched.subject ? <Error msg={errors.subject} /> : null}
              </div>
              <div className="grid gap-1.5">
                <label className="block text-sm font-medium text-gray-100" htmlFor="message">
                  Message<sup className='text-red-500 text-sm mt-10'>*</sup>
                </label>
                <textarea
                  id="message"
                  className={`min-h-[150px] resize-y bg-gray-900 border-2 rounded-md outline-none text-gray-100 duration-200 pl-5 py-3 ${errors.message && touched.message ? "border-red-500 focus:outline-[3px] focus:-outline-offset-[3px] focus:outline-red-500" : "border-zink-500 focus:outline-[3px] focus:-outline-offset-[3px] focus:outline-white"}`}
                  placeholder="Enter your message"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.message && touched.message ? <Error msg={errors.message} /> : null}
              </div>
              <div className="w-full flex justify-center items-center md:justify-start lg:justify-center">
                <button type="submit" className="w-full md:w-36 py-3 text-lg text-white font-medium rounded-md bg-green-500 duration-200 hover:bg-green-600" >Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

function CheckCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}

export default Service;