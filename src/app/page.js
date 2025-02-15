
import { CardBody, CardContainer, CardItem } from '@/components/3d-card';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import RootLayout from './layout';


const jobCategories = [



  {
    id: 0,
    title: "Development",
    description: "Frontend, backend, web, and app developer jobs",
    icon: "https://cdn-icons-png.flaticon.com/128/3573/3573187.png",
    imageUrl: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 1,
    title: "Marketing & Sales",
    description: "Advertising, digital marketing and brand..",
    icon: "https://cdn-icons-png.flaticon.com/128/16877/16877308.png",
    imageUrl: "https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    title: "Design & Creative",
    description: "Graphic, digital, web, and UI/UX designer jobs",
    icon: "https://cdn-icons-png.flaticon.com/128/1014/1014347.png",
    imageUrl: "https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    title: "Customer Services",
    description: "Customer experiences and account management jobs.",
    icon: "https://cdn-icons-png.flaticon.com/128/1067/1067566.png",
    imageUrl: "https://images.pexels.com/photos/7682340/pexels-photo-7682340.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    title: "Manager",
    description: "Social media, accounting, data analytics..",
    icon: "https://cdn-icons-png.flaticon.com/128/1570/1570102.png",
    imageUrl: "https://images.pexels.com/photos/4342493/pexels-photo-4342493.jpeg?auto=compress&cs=tinysrgb&w=600",
  }
];



export default function Home() {
  return (

    <div className="bg-green-200 text-gray-900 ">
      <Head>
        <title>Freelancer Website</title>
        <meta name="description" content="Find top freelance services with ease" />
      </Head>

      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-gradient-to-r from-black to-gray-700 drop-shadow-xl rounded-b-lg font-bold h-14 sticky top-0 z-50 shadow-2xl">
        <h1 className="text-2xl font-bold text-green-300">FreelanceHub</h1>
        <div className=' text-green-300'>
          <a href="#services" className="px-4 hover:text-green-600 ">Services</a>
          <a href="#contact" className="px-4 hover:text-green-600 ">Contact</a>
          <a href="#About_us" className="px-4 hover:text-green-600 ">About Us</a>
        </div>
        <button className='text-l rounded-3xl cursor-pointer bg-green-700 h-10 w-40 text-white hover:bg-green-800 transition-all'>
          <a href='/signup'>Sign In / Log In</a>
        </button>
      </nav>

      {/* Hero Section */}

      <section className="min-h-screen flex flex-col md:flex-row justify-center items-start text-left bg-green-200 text-white p-6">
        <div className="w-full max-w-2xl mt-24">
          <h1 className=" text-5xl font-bold text-black">Got Talent? Meet Opportunity</h1>
          <p className="text-xl mt-4 text-black font-semibold">Find top talent for your projects instantly.</p>
          <p className="text-l mt-1 text-black font-semibold">Company reviews, Salaries, Interviews, Jobs.</p>

          {/* Search Bar */}
          <div className="mt-6 flex flex-col md:flex-row gap-4 bg-white p-4 rounded-3xl shadow-lg h-auto">
            <input
              type="text"
              placeholder="Job title, keyword, or company"
              className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg text-black"
            />
            <input
              type="text"
              placeholder="Location (City, State, or Zip)"
              className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg text-black"
            />
            <button className="px-6 py-2 bg-green-700 text-white font-semibold rounded-3xl shadow-lg hover:bg-green-800 transition-all w-full md:w-auto whitespace-nowrap">
              Search Jobs
            </button>
          </div>

          <p className="text-black mt-4">Popular searches:</p>
          <h2 className="text-black font-bold">Web Development, Graphic Design, Data Management, Marketing Management..</h2>
        </div>

        <div className="w-full md:w-1/2 flex justify-end mt-6 md:mt-0">
          <img
            src="https://img.freepik.com/free-vector/designer-life-concept-illustration_114360-1105.jpg?ga=GA1.1.222564756.1739371277&semt=ais_hybrid"
            alt="Talent Searching"
            className="w-full max-w-md h-96 rounded-lg shadow-lg mt-16"
          />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 text-center bg-black">
        <h1 className=" text-5xl font-bold mb-6 mt-0 text-white">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="p-6 bg-red-200 rounded-lg shadow-md h-48">
            <h3 className="text-2xl font-semibold flex justify-start"> For Employers</h3>
            <p className="mt-2 flex justify-start mr-56">Find professionals from around </p>
            <p className="mt-1 flex justify-start mr-56"> the world and across all skills</p>
            <button className='bg-green-700 mt-3 rounded-3xl h-10 w-36 flex items-center justify-start px-2 text-white'>Post jobs for free</button>
          </div>
          <div className="p-6 bg-red-200 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold flex justify-start">For Candidates</h3>
            <p className="mt-2 flex justify-start mr-56">Build your professional profile,</p>
            <p className="mt-1 flex justify-start mr-56">find new job Opportunity</p>
            <button className='bg-green-700 mt-3 rounded-3xl h-10 w-36 flex items-center justify-start px-2 text-white'>Post jobs for free</button>
          </div>
        </div>
      </section>

      <div className='flex flex-wrap justify-center gap-4 bg-black '>

        {jobCategories.map((index, key) => (
          <CardContainer className="inter-var" key={key}>
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {index.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {index.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={index.imageUrl}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">

                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Sign up
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
      {/* Contact Section */}
      <section id="contact" className="bg-gray-900 text-white py-16 text-center">

        <p className="mt-4">@2025FreelancerHub</p>

      </section>
    </div>
  );
}
