import React from 'react';

const AboutPage = () => {
  return (
    <div className=" py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h1 className="text-4xl font-bold text-center mb-4">About Us</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate
            eu pharetra nec, mattis ac neque.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <form className="bg-gray-200 rounded-lg shadow-md px-8 py-6 mb-6">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                rows={4}
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
                type="button"
              >
                Send Message
              </button>
            </div>
          </form>

          <div className="text-center text-gray-600">
            <p>Or reach out via email at:</p>
            <p className="font-bold">contact@example.com</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4">Address & Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-gray-700">
              <p className="mb-2">
                <span className="font-bold">Address:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="mb-2">
                <span className="font-bold">Phone:</span> +1 (123) 456-7890
              </p>
            </div>
            <div className="text-gray-700">
              <p className="mb-2">
                <span className="font-bold">Social Media:</span>
                <a href="#" className="ml-2 text-indigo-500 hover:text-indigo-700" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
                <a href="#" className="ml-2 text-indigo-500 hover:text-indigo-700" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
                <a href="#" className="ml-2 text-indigo-500 hover:text-indigo-700" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold mb-4">Mission & Vision</h2>
          <div className="text-gray-700">
            <p className="mb-4">
              <span className="font-bold">Our Mission:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate
              eu pharetra nec, mattis ac neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate
              eu pharetra nec, mattis ac neque.
            </p>
            <p className="mb-4">
              <span className="font-bold">Our Vision:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate
              eu pharetra nec, mattis ac neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate
              eu pharetra nec, mattis ac neque.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;

