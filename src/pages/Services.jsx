import React from 'react';
import ServiceCard from '../pages/Servicecard';
import img1 from '../images/150798.jpg'; // Example image import, update with your actual images

const services = [
  {
    title: 'Digital Marketing',
    description: 'Our digital marketing strategies are designed to increase your online visibility, engage your audience, and drive conversions. From SEO to social media marketing, we tailor our approach to meet your specific needs.',
    features: [
      'Comprehensive SEO audits',
      'Targeted social media campaigns',
      'Data-driven pay-per-click advertising',
    ],
    backgroundImage: img1, // Ensure this is a string representing the image URL
    icon: '🎯',
  },
  {
    title: 'Video Production',
    description: 'We produce high-quality videos that capture your brand\'s essence and tell your story in a compelling way. Our team handles everything from scripting to post-production.',
    features: [
      'Scriptwriting and storyboarding',
      'Professional filming and editing',
      'Motion graphics and animation',
    ],
    backgroundImage: img1, // Update this with the actual path to the background image
    icon: '🎥',
  },
  {
    title: 'Photoshoot',
    description: 'Our professional photoshoot services help you create stunning visuals that resonate with your audience. Whether it\'s for product photography or corporate portraits, we\'ve got you covered.',
    features: [
      'Studio and on-location shoots',
      'High-resolution images',
      'Post-production editing',
    ],
    backgroundImage: img1, // Update this with the actual path to the background image
    icon: '📷',
  },
  {
    title: 'Messaging Services',
    description: 'We craft clear and impactful messages that communicate your brand\'s value proposition effectively. Our messaging services ensure your audience receives the right message at the right time.',
    features: [
      'Copywriting for various platforms',
      'Email marketing campaigns',
      'SMS marketing',
    ],
    backgroundImage: img1, // Update this with the actual path to the background image
    icon: '💬',
  },
  {
    title: 'OTT Ads',
    description: 'Reach your audience through popular OTT platforms with our targeted ad campaigns. We create ads that are not only visually appealing but also strategically placed for maximum impact.',
    features: [
      'Customized ad placements',
      'Audience targeting',
      'Performance tracking',
    ],
    backgroundImage: img1, // Update this with the actual path to the background image
    icon: '📺',
  },
  {
    title: 'Native Ads',
    description: 'Our native advertising solutions integrate your brand seamlessly into relevant content, providing a non-disruptive user experience.',
    features: [
      'Content creation and placement',
      'Audience segmentation',
      'Engagement metrics',
    ],
    backgroundImage: img1, // Update this with the actual path to the background image
    icon: '📰',
  },
  {
    title: 'Offline Ads',
    description: 'We offer a range of offline advertising solutions, from print media to outdoor advertising, to ensure your brand reaches its audience wherever they are.',
    features: [
      'Print ads in magazines and newspapers',
      'Billboard and outdoor advertising',
      'Direct mail campaigns',
    ],
    backgroundImage: img1, // Update this with the actual path to the background image
    icon: '📇',
  },
];

const Services = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full text-center mt-10">
      <h1 className="text-3xl font-bold mb-10">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;