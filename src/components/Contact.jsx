import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Install using npm install emailjs-com
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import Lottie from 'lottie-react';
import contact from '../assets/Contact.json';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    emailjs
      .send(
        'service_93f80r4', // Replace with actual Service ID
        'template_9pkagw2', // Replace with actual Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'UgKgqzFUFxcjimMjr' // Replace with actual Public Key
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setIsSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('FAILED...', error);
          alert('Failed to send message. Please try again.');
        }
      );
  };
  

  return (
    <section id="contact" className="z-50 bg-gray-800 relative py-10 px-5 md:px-0">
      <div className="mb-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 mb-8 ml-2 md:mb-0">
            <h2 className="text-3xl font-bold mb-3 text-red-500">Get in Touch</h2>
            <p className="mb-4 text-white/85">
              I'm always open to new opportunities and collaboration. Feel free to reach out!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/60 hover:text-foreground/80">
                <img src={facebook} alt="" className="h-6 w-6" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-foreground/80">
                <img src={instagram} alt="" className="h-6 w-6" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-foreground/80">
                <img src={linkedin} alt="" className="h-6 w-6" />
              </a>
            </div>
            <Lottie animationData={contact} className="w-[350px] mx-auto lg:w-[500px]" />
          </div>
          <form
            className="w-full md:w-1/2 bg-gray-100 rounded-lg border border-red-300 shadow-lg shadow-red-500 p-10"
            onSubmit={handleSubmit}
          >
            <h1 className="text-gray-900 text-4xl font-bold mb-7">Contact Me</h1>
            {isSubmitted && <p className="text-green-500 mb-4">Message sent successfully!</p>}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter Your Message"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <button className="bg-red-500 text-white px-3 py-2 rounded-lg">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
