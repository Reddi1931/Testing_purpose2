import image from '../images/stock-market-analysis-concept.png'; // Replace with the correct image path if necessary




const Career = () => {

  const jobs = [
    { id: 1, title: 'Digital Marketing Specialist' },
    { id: 2, title: 'Video Production Manager' },
    { id: 3, title: 'Graphic Designer' },
    { id: 4, title: 'Sales Executive' }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="pt-0">
        {/* Join Our Team Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden md:flex md:items-center md:justify-between p-6">
          <div className="md:w-1/2 md:pr-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h1>
            <p className="text-lg mb-6">
              At Raha Global Marketing, we believe in fostering a collaborative and dynamic work 
              environment. If you're passionate about marketing and looking to make a difference, we 
              want to hear from you.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-6">
            <img src={image} alt="team working" className="rounded-lg w-full" />
          </div>
        </div>

        {/* Company Benefits Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full text-center mt-10">
          <h1 className="text-3xl font-bold mb-10">Company Benefits</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            <div className="flex flex-col items-center">
              <div className="text-5xl mb-4">
                <span>💸</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Competitive salary and benefits</h3>
              <p >
                We offer competitive salaries and a comprehensive benefits package to ensure our team members are well-compensated.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-5xl mb-4">
                <span>💻</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional development opportunities</h3>
              <p >
                We provide opportunities for professional development to help you grow and succeed in your career.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-5xl mb-4">
                <span>⏰</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible work environment</h3>
              <p >
                We believe in your freedom to work when and how you work best, providing a flexible work environment.
              </p>
            </div>
          </div>
        </div>

        {/* Job Openings Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full text-center mt-10 mb-10 ">
          <h1 className="text-3xl font-bold text-gray-900 mb-10">Openings</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {jobs.map(job => (
              <div 
                key={job.id} 
                className="bg-gray-50 p-6 rounded-lg shadow-md cursor-pointer"
              >
                <h3 className="text-xl font-bold mb-2">{job.department}</h3>
                <p className=" mb-4">{job.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

  
    </div>
  );
};

export default Career;
