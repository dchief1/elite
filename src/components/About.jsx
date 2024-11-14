import React from 'react';
import about from '../assets/images/about.png';
import mission from '../assets/images/mission.png';
import offer from '../assets/images/offer.png';
import tech from '../assets/images/tech.png';
import community from '../assets/images/community.png'

const AboutPage = () => {
  const sections = [
    {
      title: "About Us",
      image: about,
      description:
        "Welcome to Elite, a transformative platform reshaping how talented professionals, businesses, and independent workers connect and thrive. At Elite, we blend cutting-edge AI with a unique matching algorithm to streamline and personalize the job search experience. Our mission is simple: to make work more fulfilling, accessible, and efficient for everyone involved. Whether you’re a job seeker, a recruiter, a freelancer, or a tradesperson, Elite opens new doors to success by helping you find the perfect match with just a tap.",
    },
    {
      title: "Our Mission",
      image: mission,
      description:
        "Elite was founded with a core belief: everyone should have the opportunity to find fulfilling work, and every business should be able to discover the talent they need to grow. We aim to remove the barriers and frustrations often associated with hiring and job hunting by providing a platform that prioritizes ease, precision, and opportunity. We envision a world where meaningful work connections happen effortlessly, careers are built, businesses flourish, and freelancers achieve sustainable independence.",
    },
    {
      title: "What We Offer",
      image: offer,
      description: [
        {
          title: "1. For Job Seekers",
          text: "Finding the right job can be daunting, but Elite makes it simple. With our advanced AI-powered matching system, job seekers are instantly connected with roles that align with their skills, interests, and career goals. From entry-level positions to executive roles, Elite covers a wide range of industries, allowing users to find jobs that fit their expertise and aspirations. Job seekers can also take advantage of personalized recommendations, professional development tips, and a streamlined application process, putting their dream job just a few clicks away.",
        },
        {
          title: "2. For Recruiters",
          text: "Recruiting the right talent is essential for any business’s success, and Elite is here to make that process as efficient and effective as possible. Our platform leverages AI to analyze job requirements, candidate skills, and experience levels to create ideal matches, ensuring that recruiters can quickly identify and engage top candidates. Elite simplifies the hiring process, saving time and resources by providing tools for job posting, candidate screening, and communication—all in one place.",
        },
        {
          title: "3. For Freelancers and Tradespeople",
          text: "Freelancers and tradespeople often face unique challenges in finding consistent work and managing client relationships. Elite’s tailored approach for independent professionals empowers them to build sustainable businesses, connect with clients seeking their specific skills, and grow their reputations. From gig-based projects to longer-term engagements, Elite supports freelancers by offering a platform where they can showcase their expertise and access a steady stream of relevant opportunities.",
        },
      ],
    },
    {
      title: "Our Technology",
      image: tech,
      description:
        "At the core of Elite is our proprietary AI-driven algorithm, designed to make smart, accurate, and personalized matches between users and opportunities. By analyzing a multitude of factors—skills, experience, preferences, market trends, and job specifics—our technology ensures that every recommendation feels tailored, relevant, and valuable. This enables us to create a seamless experience for all users, whether they’re posting a job, applying for a role, or looking to expand their freelance clientele.",
    },
  ];

  return (
    <div className=" text-white py-16 mb-40 space-y-24">
      {sections.map((section, index) => (
        <div key={index} className="flex px-4 flex-col items-center space-y-6 max-w-3xl mx-auto">
          {/* Section Title */}
          <h1 className="md:text-6xl text-3xl font-bold text-center text-white mb-4">
            {section.title}
          </h1>

          {/* Section Container with Image and Text */}
          <div className="bg-gray-600  rounded-lg shadow-lg flex flex-col items-center">
            <img src={section.image} alt={section.title} className="w-full h-72 object-cover rounded-lg mb-4" />
            
            {/* Conditional rendering for 'What We Offer' subsections */}
            {section.title === "What We Offer" ? (
              <div className="p-4 space-y-6">
                {section.description.map((subsection, subIndex) => (
                  <div key={subIndex} className="text-center">
                    <h3 className="text-2xl font-semibold mb-2">{subsection.title}</h3>
                    <p className="text-lg text-white">{subsection.text}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-xl text-white p-4">{section.description}</p>
            )}
          </div>
        </div>
      ))}

      {/* choose elite */}
      <div className='flex flex-col gap-8 px-4 items-center justify-center'>
      <h1 className="md:text-6xl text-3xl font-bold text-center text-white">Why Choose Elite</h1>
      {/* first section */}
      <div className='flex flex-col md:flex-row items-center w-full md:max-w-4xl mx-auto justify-center gap-5 text-white'>
        <span className='bg-transparent text-base md:text-lg  border-2 rounded-3xl border-[#CC00FF] p-4 font-bold'>
        Precision Matching: Our AI and algorithm ensure that each match is highly relevant, reducing the time and effort needed to find the right fit.
        </span>
        <span className='bg-transparent text-base md:text-lg md:max-w-2xl rounded-3xl border-2 border-[#CC00FF] p-4 font-bold'>
        Intuitive Design: We’ve created a user-friendly interface that’s easy to navigate for job seekers, recruiters, and freelancers alike.
        </span>
      </div>

      {/* second */}
      <div className='flex flex-col md:flex-row items-center w-full md:max-w-4xl mx-auto justify-center gap-5 text-white'>
        <span className='bg-transparent  border-2 text-base md:text-lg rounded-3xl border-[#CC00FF] p-4 font-bold'>
        Career Growth Tools: In addition to job matches, we offer resources like skill development guides, career advice, and networking opportunities to support continuous growth.
        </span>
        <span className='bg-transparent md:max-w-2xl rounded-3xl border-2 text-base md:text-lg border-[#CC00FF] p-4 font-bold'>
        Trust and Security: Elite prioritizes user data privacy and employs best-in-class security measures, so users can confidently explore opportunities and connect with others.
        </span>
      </div>

      {/* third */}
      <span className='bg-transparent text-base md:text-lg w-full md:max-w-lg rounded-3xl border-2 border-[#CC00FF] p-4 font-bold'>
        Intuitive Design: We’ve created a user-friendly interface that’s easy to navigate for job seekers, recruiters, and freelancers alike.
        </span>
      </div>

      {/* vision section */}
      <div className='bg-gray-700 py-12 w-full px-4 flex flex-col items-center md:justify-center gap-5'>
      <h1 className="md:text-6xl text-3xl font-semibold text-center text-white">Our Vision For The Future</h1>
      <span className='bg-black text-base md:text-lg w-full md:max-w-5xl rounded-3xl border-2 border-[#CC00FF] mx-4 p-4 py-6 font-medium'>
      As we continue to innovate, Elite’s vision is to become the leading career platform, known for helping people find meaningful work and empowering businesses to succeed with the right talent. We are constantly evolving our platform, driven by user feedback, emerging trends, and new technology, to enhance our offerings and remain at the forefront of job-matching innovation.
        </span>
      </div>

      {/* community section */}
      <div className="relative w-full">
        <img src={community} alt="Community" className="w-full h-[243px] md:h-[888px] object-cover" />
      
        <h1 className='absolute inset-0 flex items-start justify-center text-black font-bold text-base md:text-6xl text-center pt-4 md:pt-12'>Join The Elite <br /> Community</h1>
       

{/* Join Elite section container */}
        <div className="absolute bottom-[-200px] px-2 md:bottom-[-160px] inset-x-0 flex items-center justify-center">
          <span className="bg-black bg-opacity-80 text-base md:text-lg w-full md:max-w-3xl rounded-3xl  p-4 py-6 font-medium">
          By joining Elite, you’re not just signing up for a job platform; you’re becoming part of a community that values growth, opportunity, and meaningful connections. Together, we can build a future where everyone has access to fulfilling work, and where finding the perfect match in talent or career is just a few taps away. Let’s make work better, one connection at a time.
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
