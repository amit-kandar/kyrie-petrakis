import React from "react";
import { useParams } from "react-router-dom";
import { services } from "../utils/services";
import { TESTIMONIALS_BG_IMG } from "../config/constant";

function Service() {
  const { serviceName } = useParams();
  const formattedTitle = serviceName.replace(/-/g, ' ');

  const selectedService = services.find((service) => {
    return service.title.toLowerCase() === formattedTitle.toLowerCase();
  });

  const backgroundStyle = {
    backgroundImage: `url(${TESTIMONIALS_BG_IMG})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: 'center bottom  ',
  };

  return (
    <section className="w-full flex justify-center flex-col">
      <div className="w-full flex items-center flex-col py-12 lg:py-16 xl:py-24 bg-gray-600">
        <div className="container px-4 md:px-6">
          <div className="w-full flex flex-col gap-6 items-center mb-10 lg:px-40 lg:mb-14">
            <h1 className="text-3xl font-bold tracking-widest sm:text-5xl lg:text-7xl text-gray-100">{selectedService.title}</h1>
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
          <div className="max-w-3xl mx-auto grid items-start gap-4 my-8">
            <div className="grid gap-1.5">
              <label className="block text-sm font-medium text-gray-100" htmlFor="first-name">
                First name
              </label>
              <input id="first-name" placeholder="Enter your first name" className="bg-gray-900 border-2 border-zinc-500 rounded-md py-3 pl-5 outline-none text-gray-100 focus:border-zinc-200 duration-200" />
            </div>
            <div className="grid gap-1.5">
              <label className="block text-sm font-medium text-gray-100" htmlFor="last-name">
                Last name
              </label>
              <input id="last-name" placeholder="Enter your last name" className="bg-gray-900 border-2 border-zinc-500 rounded-md py-3 pl-5 outline-none text-gray-100 focus:border-zinc-200 duration-200" />
            </div>
            <div className="grid gap-1.5">
              <label className="block text-sm font-medium text-gray-100" htmlFor="email">
                Email
              </label>
              <input id="email" placeholder="Enter your email" type="email" className="bg-gray-900 border-2 border-zinc-500 rounded-md py-3 pl-5 outline-none text-gray-100 focus:border-zinc-200 duration-200" />
            </div>
            <div className="grid gap-1.5">
              <label className="block text-sm font-medium text-gray-100" htmlFor="email">
                Service
              </label>
              <input id="service" placeholder="Enter service name" type="text" value={selectedService.title} className="border-2 border-zinc-500 rounded-md py-3 pl-5 outline-none text-white focus:border-zinc-200 duration-200 cursor-not-allowed bg-gray-400 opacity-80" disabled />
            </div>
            <div className="grid gap-1.5">
              <label className="block text-sm font-medium text-gray-100" htmlFor="subject">
                Subject
              </label>
              <input id="subject" placeholder="Enter your subject" className="bg-gray-900 border-2 border-zinc-500 rounded-md py-3 pl-5 outline-none text-gray-100 focus:border-zinc-200 duration-200" />
            </div>
            <div className="grid gap-1.5">
              <label className="block text-sm font-medium text-gray-100" htmlFor="message">
                Message
              </label>
              <textarea className="min-h-[150px] resize-y bg-gray-900 border-2 border-zinc-500 rounded-md outline-none text-gray-100 focus:border-zinc-200 duration-200 pl-5 py-3" id="message" placeholder="Enter your message" />
            </div>
            <div className="w-full flex justify-center items-center md:justify-start lg:justify-center">
              <button className="w-full md:w-36 py-3 text-lg text-white font-medium rounded-md bg-green-500 duration-200 hover:bg-green-600" >Submit</button>
            </div>
          </div>
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