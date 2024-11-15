import React, { useState } from 'react';
import logo from '../assets/images/elitelogo.png';
import minilogo from '../assets/images/Elite logo.png';
import icon1 from '../assets/images/blue-collar.png';
import icon2 from '../assets/images/hybrid.png';
import icon3 from '../assets/images/remote-work 1.png';
import icon4 from '../assets/images/white-collar.png';
import xicon from '../assets/images/xicon.png'
import join from '../assets/images/join.png'
import ui from '../assets/images/UI.png'
import playstore from '../assets/images/playstore.png'
import apple from '../assets/images/apple.png'
import flyer from '../assets/images/flyer2.png';
import background from '../assets/images/man.jpg';
import { ArrowLeft, ArrowRight, BookmarkIcon, DiamondIcon, DotIcon, FacebookIcon, InstagramIcon, Star, StarHalfIcon, StarIcon, XIcon } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import Footer from './Footer';
import WaitlistModal from './WaitlistModal';






const jobtypes = [
  {
    name: 'Remote',
    icon: icon3
  },
  {
    name: 'Hybrid',
    icon: icon2
  },
  {
    name: 'White-Collar',
    icon: icon4
  },
  {
    name: 'Blue-Collar',
    icon: icon1
  }
];

const profiles = [
  {
    name: 'Dani Scotfield',
    role: 'Product Designer',
    location: 'Newyork, USA',
    rate: '$27/hr',
    experience: '4yrs Experience',
    rating: 4.5,
    skills: ['Figma Design', 'Graphics Design', '3D Design', 'UI/UX Design', 'Wireframe']
  },
  {
    name: 'Ronald Franklin',
    role: 'Web Designer',
    location: 'California, USA',
    rate: '$27/hr',
    experience: '4yrs Experience',
    rating: 4.5,
    skills: ['Frontend Design', 'Graphics Design', 'ReactJs', 'UI/UX Design', 'WordPress']
  },
  {
    name: 'Zack Woods',
    role: 'UX Designer',
    location: 'Washington DC, USA',
    rate: '$20/hr',
    experience: '4yrs Experience',
    rating: 4,
    skills: ['Figma Design', 'Graphics Design', '3D Design', 'UI/UX Design', 'Wireframe']
  },
  {
    name: 'John Doe ',
    role: 'Accountant',
    location: 'California, USA',
    rate: '$30/hr',
    experience: '3yrs Experience',
    rating: 4.5,
    skills: ['Ms Excel', 'Database Management', 'NetSuite', 'Spreadsheet', 'Wireframe']
  }
];

const Jobs = [
    {
        image:minilogo,
        company:"Elite.jobs",
        title:"UI/UX Designer",
        timeframe:"1hr ago",
        schedule: "Full time",
        type:"Remote",
        noApplicant : "4"
    },
    {
        image:minilogo,
        company:"Elite.jobs",
        title:"Marketing specialist",
        timeframe:"3hr ago",
        schedule: "Full time",
        type:"Remote",
        noApplicant : "12"
    },   {
        image:xicon,
        company:"X",
        title:"Web Designer",
        timeframe:"1hr ago",
        schedule: "Full time",
        type:"Remote",
        noApplicant : "4"
    },   {
        image:xicon,
        company:"X",
        title:"UI/UX Designer",
        timeframe:"1hr ago",
        schedule: "Full time",
        type:"Remote",
        noApplicant : "4"
    },
   
]

const Explore = () => {
  const [activeTab, setActiveTab] = useState('Remote');
  const [isModalOpen, setIsModalOpen] = useState(false); 

  return (
    <div className="bg-black py-10 w-full">
      <div className="text-center text-white">
        <h3 className="text-1xl lg:text-2xl mb-2">HAVE A JOB?</h3>
        <h1 className="text-3xl lg:text-5xl font-bold">Explore Top Professionals</h1>
      </div>

      <div className="border-t border-b border-gray-400 px-2 text-white mt-6 w-full">
        <div className="flex gap-4 lg:w-3/5 lg:mx-auto lg:justify-center overflow-x-auto ">
          {jobtypes.map((tab) => (
            <div
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`cursor-pointer bg-gray-400 border-t-2 border-b-2  flex-shrink-0 border-white text-sm lg:text-[1.2rem]  lg:w-auto  gap-2 p-2 px-3 flex items-center ${
                activeTab === tab.name ? '' : 'border-none opacity-30'
              }`}
            >
              <img src={tab.icon} width={25} alt={tab.name} />
              {tab.name}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 lg:hidden">
        <Swiper
          spaceBetween={30}  // Space between slides
          slidesPerView={1}  // Show one profile at a time
          loop={true}  // Loop the carousel
          navigation={{
            prevEl: '.prev-btn',
            nextEl: '.next-btn',
          }} // Enable navigation
          modules={[Navigation]}  // Use navigation module
          className="flex justify-center"
        >
          {profiles.map((profile, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gradient-to-b from-purple-500 to-pink-500 p-6 rounded-[2rem] w-96 lg:w-96 mx-auto text-center text-white mb-6 lg:mb-0">
                <h2 className="text-2xl font-bold">{profile.name}</h2>
                <p className="text-sm">{profile.role}</p>
                <p className="text-sm text-gray-200">{profile.location}</p>

                <div className="flex justify-center gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <span>{profile.rate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>{profile.experience}</span>
                  </div>
                </div>

                <p className="mt-4">Rating</p>
                <div className="flex justify-center text-yellow-400">
                  {Array.from({ length: Math.floor(profile.rating) }).map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 fill-yellow-500" />
                  ))}
                  {profile.rating % 1 !== 0 && <StarHalfIcon className="w-5 h-5 fill-yellow-500" />} {/* Half-star icon */}
                </div>

                <div className="bg-purple-800 rounded-xl mt-6 p-4 flex flex-wrap justify-center gap-2">
                  {profile.skills.map((skill) => (
                    <span key={skill} className="bg-red-400 text-xs px-2 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>

                <button className="bg-white text-purple-800 font-semibold mt-6 px-4 py-2 rounded-full">
                  View Profile
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex items-center gap-2 mt-4 mx-auto justify-center text-white  ">
            <button className="w-8 h-8 rounded-full border border-white prev-btn " ><ArrowLeft /></button>
            <button className="w-8 h-8 rounded-full  border border-white next-btn " ><ArrowRight /></button>
          </div>
      </div>


      <div className="mt-10 hidden lg:block">
        <Swiper
          spaceBetween={20}  // Space between slides
          slidesPerView={3}  // Show one profile at a time
          loop={true}  // Loop the carousel
          navigation={{
            prevEl: '.prev-btn',
            nextEl: '.next-btn',
          }}   // Enable navigation
          modules={[Navigation]}  // Use navigation module
          className="flex justify-center"
        >
          {profiles.map((profile, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gradient-to-b from-purple-500 to-pink-500 p-6 rounded-[2rem] w-[90%] lg:w-96 mx-auto text-center text-white mb-6 lg:mb-0">
                <h2 className="text-2xl font-bold">{profile.name}</h2>
                <p className="text-sm">{profile.role}</p>
                <p className="text-sm text-gray-200">{profile.location}</p>

                <div className="flex justify-center gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <span>{profile.rate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>{profile.experience}</span>
                  </div>
                </div>

                <p className="mt-4">Rating</p>
                <div className="flex justify-center text-yellow-400">
                  {Array.from({ length: Math.floor(profile.rating) }).map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 fill-yellow-500" />
                  ))}
                  {profile.rating % 1 !== 0 && <StarHalfIcon className="w-5 h-5 fill-yellow-500" />} {/* Half-star icon */}
                </div>

                <div className="bg-purple-800 rounded-xl mt-6 p-4 flex flex-wrap justify-center gap-2">
                  {profile.skills.map((skill) => (
                    <span key={skill} className="bg-red-400 text-xs px-2 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>

                <button className="bg-white text-purple-800 font-semibold mt-6 px-4 py-2 rounded-full">
                  View Profile
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex items-center gap-2 mt-4 mx-auto justify-center text-white  ">
            <button className="w-8 h-8 rounded-full border border-white prev-btn " ><ArrowLeft /></button>
            <button className="w-8 h-8 rounded-full  border border-white next-btn " ><ArrowRight /></button>
          </div>
      </div>

     
      {/* <img src={flyer} className="lg:w-3/5 w-full mx-auto mt-6 mb-6" alt="Flyer" /> */}
      <div className="relative mt-5">
      <div className="relative w-full lg:h-screen  lg:block  hidden h-auto mx-auto rounded-bl-[40px] rounded-br-[40px]">
  <img 
    src={background} 
    alt="Background Image" 
    className="absolute inset-0 w-full h-full object-cover object-center rounded-bl-[200px] rounded-br-[200px] opacity-40 transform scale-x-[-1]" 
  />
  <h2 className="text-3xl lg:text-5xl absolute font-bold left-5 lg:left-20 top-6 text-white">For Companies</h2>
  
  <div className="absolute z-10 left-5 lg:left-10 text-white text-left p-4 lg:p-8 bottom-16 mt-12 w-full lg:w-[45%]">
    <p className='text-4xl lg:text-6xl font-semibold mb-2'>Get the best match for the job</p>
    <p className='text-lg lg:text-2xl'>Finding the best candidate _______________</p>
  </div>
</div>

<div className="relative w-[98%] h-[50vh] mx-auto rounded-bl-[30px] rounded-br-[30px] lg:hidden">
  <img 
    src={background} 
    alt="Background Image" 
    className="absolute inset-0 w-full h-full object-cover object-center rounded-bl-[100px] rounded-br-[100px] opacity-40 transform scale-x-[-1]" 
  />
  <h2 className="text-1xl absolute font-bold left-10 top-3 text-white">For Companies</h2>
  
  <div className="absolute z-10 left-5 text-white text-left p-4 bottom-4 mt-12 w-[65%]">
    <p className='text-3xl font-semibold mb-2'>Get the best match for the job</p>
    <p className='text-1xl'>Finding the best candidate ________</p>
  </div>
</div>
<div className=' w-full'>
    <div className='text-white bg-[#CC00FF] rounded-md p-3 w-4/5 mx-auto mb-2'>
            <h1 className='text-3xl lg:text-4xl font-semibold'>Post a job</h1>
            <p className='text-[0.7rem] lg:text-sm'>Providing neccessary information and description for the job</p>
    </div>
    <div className='text-white bg-purple-700 rounded-md p-3 w-[70%] mx-auto mb-2'>
            <h1 className='text-3xl lg:text-4xl font-semibold'>Job match</h1>
            <p className='text-[0.7rem] lg:text-sm'>Automatic match with candidates that are best fit for the job</p>
    </div>
    <div className='text-white bg-purple-700 rounded-md p-3 w-[65%] mx-auto mb-2'>
            <h1 className='text-3xl lg:text-4xl font-semibold'>Interview Process</h1>
            <p className='text-[0.7rem] lg:text-sm'>Get into the interview process with  AI guiding you step by step'</p>
    </div>


</div>



<div className='mt-12 rounded-md bg-white text-black mx-auto text-center justify-center lg:w-2/5 w-3/5 py-1 font-semibold text-1xl'>Learn more about our AI features</div>
   

</div>
<div className="text-center text-white mt-12">
        <h3 className="text-1xl lg:text-2xl mb-2">LOOKING FOR A JOB?</h3>
        <h1 className="text-3xl lg:text-5xl font-bold">Explore Related Jobs</h1>
      </div>
      <div className="border-t border-b border-gray-400 px-2 text-white mt-6 w-full">
        <div className="flex gap-4 lg:w-3/5 lg:mx-auto lg:justify-center overflow-x-auto">
          {jobtypes.map((tab) => (
            <li
              key={tab.name}
              
              onClick={() => setActiveTab(tab.name)}
              className={`cursor-pointer bg-gray-400 border-t-2 border-b-2 flex-shrink-0 border-white text-sm lg:text-[1.2rem] gap-2 p-2 px-3 flex items-center ${
                activeTab === tab.name ? '' : 'border-none opacity-30'
              }`}
            >
              <img src={tab.icon} width={25} alt={tab.name} />
              {tab.name}
            </li>
          ))}
        </div>
      </div>

<div className="mt-10 lg:px-10 px-3 lg:flex block lg:flex-wrap gap-4 mx-auto w-full justify-center">
    {
        Jobs.map((item) =>{
          return(  <div className='flex space-around text-white items-center lg:px-3  px-1 py-2 lg:py-2 lg:gap-4 gap-1 mb-2  bg-gray-400 border border-gray-400 rounded-md w-full lg:w-[45%]'>
        <img src={item.image} className='rounded-md lg:w-24 lg:h-24 w-16 h-16' ></img>
        <div className="block">
            <h2 className='lg:text-2xl text-1xl font-semibold'>{item.title}</h2>
            <p className='text-sm'>{item.company}</p>
            <div className="flex">
                <span className='flex items-center lg:text-sm text-[0.7rem]'>{item.timeframe}<DotIcon /></span>
                <span className='flex items-center lg:text-sm text-[0.7rem]'>{item.schedule}<DotIcon /></span>
                <span className='flex items-center lg:text-sm text-[0.7rem]'>{item.type}<DotIcon /></span>
                <span className='flex items-center lg:text-sm text-[0.7rem]'>{item.noApplicant} applied </span>
            </div>
        </div>
        <button className="w-12 h-12 rounded-full prev-btn bg-[#000000] text-center justify-center" ><BookmarkIcon  className='text-4xl w-full' /></button>
        
      </div>)

        })
    }
</div>


<div className="relative mt-10 mb-12 py-4 lg:w-4/5 mx-auto ">
<img src={join} className='w-full  h-full '></img>
<button  onClick={() => setIsModalOpen(true)}  className='bg-white rounded-md lg:py-3 lg:px-5  py-2 px-3 absolute right-6 text-black text-sm bottom-5 lg:bottom-10 font-semibold'>Join Waitlist</button>

</div>
<div className="bg-gray-400 justify-center py-4">
<div className="bg-gray-400 justify-center text-center items-center py-4 lg:flex block lg:w-4/5  w-full mx-auto gap-10">
    <img src={ui}  className='mx-auto lg:mx-0 lg:2/5'/>
    <div className=" text-center lg:w-3/5">
        <h2 className='text-2xl text-white'>Launching Soon On</h2>
        <div className='text-white text-center flex gap-3 mt-5 px-2'>
            <div className="w-1/2 text-center bg-[#000000] border rounded-md lg:px-14 px-10 py-1 lg:py-3">
                    <img src={playstore} alt="" className='block mx-auto' srcset="" width={40} />
                    <p className='lg:text-1xl text-sm'>Playstore</p>
            </div>
            <div className="w-1/2 text-center bg-[#000000] border rounded-md lg:px-14 px-10 py-1 lg:py-3">
                    <img src={apple} alt="" className='block mx-auto' srcset="" width={40}/>
                    <p> App store</p>

            </div>

        </div>
<button className='bg-white text-black rounded-md py-3 px-5 w-4/5  mt-6 font-semibold'>Be the first to use the app on free subscription</button>

    </div>
</div>
<div className='mt-10 text-white'>
    <h2 className='text-center text-3xl mb-6 underline'>What we do</h2>
    <div className="lg:flex gap-4 mx-auto lg:w-4/5  w-[90%] py-6">
            <div className="bg-[#D85DF61A] p-3 mb-3 rounded-[50px] lg:w-1/2 w-full shadow-lg">

                <h1 className="text-white text-center  text-3xl lg:text-4xl font-semibold mb-3">For Companies</h1>
                <p className='lg:text-2xl text-1xl'>Sign up today, post your job and we will match you with professionals</p>
                <div className="w-full mt-4 font-bold">
                <li className='lg:text-2xl text-1xl mb-3 flex gap-5 items-center w-full'>
                    <DiamondIcon />
                    Brand Promotion

                </li>

                <li className='lg:text-2xl text-1xl mb-3 flex gap-5 items-center w-full'>
                    <DiamondIcon />
                    Post a job

                </li>

                <li className='lg:text-2xl text-1xl mb-3 flex gap-5 items-center w-full'>
                    <DiamondIcon />
                    Match with professional

                </li>
                <li className='lg:text-2xl text-1xl mb-3 flex gap-5 items-center w-full'>
                    <DiamondIcon />
                    Schedule for interview

                </li>
                <li className='lg:text-2xl text-1xl mb-3 flex gap-5 items-center w-full'>
                    <DiamondIcon />
                    Expand Company size

                </li>
                <li className='lg:text-2xl text-1xl mb-3 flex gap-5 items-center w-full'>
                    <DiamondIcon />
                   Get full transparency

                </li>
                <li className='lg:text-2xl text-1xl mb-3 flex gap-5 items-center w-full'>
                    <DiamondIcon />
                   Do more with AI

                </li>
                </div>
               

            </div>
            <div className="bg-[#F9C48333] p-3 block mb-3 rounded-[50px] lg:w-1/2 w-full shadow-lg">
                <h1 className="text-white  text-center  text-3xl lg:text-4xl font-semibold mb-3">For Professionals</h1>
                <p className='text-2xl'>Sign up today, post your job and we will match you with professionals</p>
               
                <div className="w-full mt-4 font-bold">
                <li className='lg:text-2xl text-1xl mb-3 flex gap-5 items-center w-full'>
                    <DiamondIcon />
                    Promote your skills
                </li>
                <li className='lg:text-2xl text-1xl mb-3 flex gap-5 items-center w-full'>
                    <DiamondIcon />
                    Get matched with jobs
                </li>
                <li className='lg:text-2xl text-1xl mb-3 flex gap-5 items-center w-full'>
                    <DiamondIcon />
                    Create/update resume with AI
                </li>
                <li className='lg:text-2xl text-1xl mb-3 flex gap-5 items-center w-full'>
                    <DiamondIcon />
                   Prep for interview
                </li>
                <li className='lg:text-2xl text-1xl mb-3 flex gap-5 items-center w-full'>
                    <DiamondIcon />
                    Learn more skills
                </li>
                <li className='lg:text-2xl text-1xl mb-3 flex gap-5 items-center w-full'>
                    <DiamondIcon />
                  In-app communication
                </li>
                <li className='lg:text-2xl text-1xl mb-3 flex gap-5 items-center w-full'>
                    <DiamondIcon />
                    100% gauarntee payment
                </li>
                </div>
           </div>

    </div>
</div>

<div className="mb-4 text-white bg-[#000000] border border-[#CC00FF] rounded-md p-4 lg:w-4/5 w-[95%] mx-auto">
<div className="flex items-center justify-between w-full mb-4">
  <h1 className="text-2xl font-bold text-white">About Elite</h1>
  <a href='/about' className="bg-white rounded-md py-2 px-4 text-black font-semibold hover:bg-gray-200 transition-colors">
    Read More
  </a>
</div>

<p className='text-1xl'>
Elite is your fast track to career success. We use AI and a unique algorithm to make the perfect matches between professionals and exciting opportunities. Recruiters finding the right people is a snap. For job seekers, your dream job is a tap away. And for freelancers/business owners we’re your go-to app for building a successful career and business.
</p>
</div>

{/* Modal */}
{isModalOpen && <WaitlistModal onClose={() => setIsModalOpen(false)} />} 
</div>

{/* <Footer /> */}





    </div>
  );
};

export default Explore;
