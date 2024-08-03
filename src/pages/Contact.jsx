import React from 'react';

const Contact = () => {
  return (
    <div className='max-w-6xl mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold text-center mb-6'>
        Get in Touch with Raha Global Marketing
      </h1>
      <p className='text-lg text-center mb-6'>
        We'd love to hear from you! Whether you have a question about our services, need
        support, or just want to say hello, our team is here to help.
      </p>
      
      <div className='grid md:grid-cols-2 gap-8'>
        {/* Contact Form */}
        <div className='bg-white p-6 rounded-lg shadow-lg'>
          <h2 className='text-2xl font-semibold mb-4'>Contact Form</h2>
          <form>
            <div className='mb-4'>
              <label htmlFor='name' className='block text-sm font-medium text-gray-700'>Name</label>
              <input
                type='text'
                id='name'
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                required
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label>
              <input
                type='email'
                id='email'
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                required
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='message' className='block text-sm font-medium text-gray-700'>Message</label>
              <textarea
                id='message'
                rows='4'
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm'
                required
              ></textarea>
            </div>
            <button
              type='submit'
              className='w-full py-2 px-4 bg-purple-900 text-white font-semibold rounded-lg shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500'
            >
              Send
            </button>
          </form>
        </div>

        <div className='bg-white p-6 rounded-lg shadow-lg'>
          <h2 className='text-2xl font-semibold mb-4'>Contact Information</h2>
          <p className='mb-4'>
            <strong>Email Addresses:</strong> info@rahaglobal.com
          </p>
          <p className='mb-4'>
            <strong>Office Locations:</strong>
            <br />
            Head Office: 1st Floor, Basaveshawara HBCS Layout, 2nd Stage Rd, Chandra Layout, Attiguppe, Bengaluru, Karnataka 560040
          </p>
          <div className='mt-4'>
            <h3 className='text-xl font-semibold'>Map</h3>
            <iframe
              title='Google Maps'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3700.8625558531767!2d77.52442537479354!3d12.960080315131297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f79820d4949%3A0x84d8a7328c902cec!2sRVG%20Technologies%20Pvt.%20Ltd!5e1!3m2!1sen!2sin!4v1722492394463!5m2!1sen!2sin'
              width='100%'
              height='300'
              style={{ border: 0 }}
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
