// import React from 'react';
// import { FaLinkedin } from 'react-icons/fa';
// // import img1 from '../assets/images1.jpg'


// const About = () => {
//   return (

   
//     <div className="flex flex-col items-center p-10  min-h-screen ">
//       <h1 className="text-3xl  font-bold mb-8">About Us</h1>
     
     
//       <section className="flex items-center justify-center  p-5">
//       <div className="bg-white p-6 shadow-lg rounded-lg flex items-center max-w-4xl h-96 overflow-hidden">
//         <div className="w-full md:w-1/2 p-4">
//         <h3 className="text-xl   font-semibold mb-4 flex items-center">
//             <span>Mission</span>
//           </h3>
//          <p className=" mb-3 text-base">
//             Founded on the principles of innovation and excellence, Raha Global Marketing Private Limited has been a beacon of creativity in the marketing industry. Our journey began with a mission to help brands connect with their audience in meaningful ways, and that mission continues to drive us today.
//           </p>
//         </div>
//         <div className="w-full md:w-1/2 p-4">
//         <img src="" alt="About Us" className="rounded-lg shadow-lg w-full object-cover h-full"  />
//         </div>
//       </div>
//     </section>



   
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mb-8">
//         <div className="bg-white p-6 shadow-lg  rounded-lg border-2  border-black hover:bg-purple-300 transition">
//           <h3 className="text-xl  font-semibold mb-4 flex items-center">
//             <span>Mission</span>
//           </h3>
//           <p className="text-base ">
//             To deliver exceptional marketing solutions that create lasting impressions and drive measurable results.
//           </p>
//         </div>
//         <div className="bg-white p-6 shadow-lg   rounded-lg border-2 border-black hover:bg-purple-300 transition">
//           <h3 className="text-xl   font-semibold mb-4 flex items-center">
//             <span>Vision</span>
//           </h3>
//           <p className="text-base">
//             To be the leading marketing agency known for creativity, innovation, and client satisfaction.
//           </p>
//         </div>
//         <div className="bg-white p-6 shadow-lg  rounded-lg border-2  border-black hover:bg-purple-300 transition">
//           <h3 className="text-xl   font-semibold mb-4 flex items-center ">
//             <span>Values</span>
//           </h3>
//           <ul className="list-disc list-inside text-base ">
//             <li>Integrity: We believe in honest and transparent communication.</li>
//             <li>Innovation: We strive to stay ahead of the curve with creative solutions.</li>
//             <li>Excellence: We are committed to delivering the highest quality in everything we do.</li>
//           </ul>
//         </div>
//       </div>
//       <section className="w-full max-w-4xl bg-white p-8 shadow-lg rounded-lg">
//         <h3 className="text-3xl   font-bold mb-8 text-center">Leadership</h3>
//         {/* text-3xl  font-bold mb-8 */}
//         <div className="flex justify-around items-center">
//           <div className="flex flex-col items-center">
//             <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
//               <img src="" alt="Sneha Rakesh" className="w-full h-full object-cover" />
//             </div>
//             <h4 className="text-xl   font-bold">Sneha Rakesh</h4>
//             <p className="text-base text-gray-700">Chief Executive Officer</p>
//             <a href="https://www.linkedin.com/in/snehaa-raakesh-gowda/" target="_blank" rel="noopener noreferrer">
//             <FaLinkedin className="text-gray-700 mt-2" size={30} />
//             </a>
//           </div>
//           <div className="flex flex-col items-center">
//   <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
//     <img src="" alt="Rajath V" className="w-full h-full object-cover" />
//   </div>
//   <h4 className="text-xl   font-bold">Rajath V</h4>
//   <p className="text-base text-gray-700">Chief Operational Officer</p>
//   <a href="https://www.linkedin.com/in/rajath-venkatesh-b089651ab/" target="_blank" rel="noopener noreferrer">
//   <FaLinkedin className="text-gray-700 mt-2" size={30} />
//   </a>
// </div>

//         </div>
//       </section>
//     </div>
//   );
// };
// export default About;






import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
// import img1 from '../assets/images1.jpg'

const About = () => {
  return (
    <div className="flex flex-col items-center p-10 min-h-screen w-full">
      <h1 className="text-3xl font-bold mb-8">About Us</h1>

      <section className="flex items-center justify-center p-5 w-full">
        <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col md:flex-row items-center max-w-6xl w-full h-96 overflow-hidden">
          <div className="w-full md:w-1/2 p-4">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span>About</span>
            </h3>
            <p className="mb-3 text-base">
              Founded on the principles of innovation and excellence, Raha Global Marketing Private Limited has been a beacon of creativity in the marketing industry. Our journey began with a mission to help brands connect with their audience in meaningful ways, and that mission continues to drive us today.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <img src="" alt="About Us" className="rounded-lg shadow-lg w-full object-cover h-full" />
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mb-8">
        <div className="bg-white p-6 shadow-lg rounded-lg border-2 border-black hover:bg-purple-300 transition">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <span>Mission</span>
          </h3>
          <p className="text-base">
            To deliver exceptional marketing solutions that create lasting impressions and drive measurable results.
          </p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg border-2 border-black hover:bg-purple-300 transition">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <span>Vision</span>
          </h3>
          <p className="text-base">
            To be the leading marketing agency known for creativity, innovation, and client satisfaction.
          </p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg border-2 border-black hover:bg-purple-300 transition">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <span>Values</span>
          </h3>
          <ul className="list-disc list-inside text-base">
            <li>Integrity: We believe in honest and transparent communication.</li>
            <li>Innovation: We strive to stay ahead of the curve with creative solutions.</li>
            <li>Excellence: We are committed to delivering the highest quality in everything we do.</li>
          </ul>
        </div>
      </div>

      <section className="w-full max-w-6xl bg-white p-8 shadow-lg rounded-lg">
        <h3 className="text-3xl font-bold mb-8 text-center">Leadership</h3>
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div className="flex flex-col items-center mb-8 md:mb-0">
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
              <img src="" alt="Sneha Rakesh" className="w-full h-full object-cover" />
            </div>
            <h4 className="text-xl font-bold">Sneha Rakesh</h4>
            <p className="text-base text-gray-700">Chief Executive Officer</p>
            <a href="https://www.linkedin.com/in/snehaa-raakesh-gowda/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-gray-700 mt-2" size={30} />
            </a>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
              <img src="" alt="Rajath V" className="w-full h-full object-cover" />
            </div>
            <h4 className="text-xl font-bold">Rajath V</h4>
            <p className="text-base text-gray-700">Chief Operational Officer</p>
            <a href="https://www.linkedin.com/in/rajath-venkatesh-b089651ab/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-gray-700 mt-2" size={30} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
