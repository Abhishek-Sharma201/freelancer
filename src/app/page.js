import Head from 'next/head';
import Image from 'next/image';


export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-900">
      <Head>
        <title>Freelancer Website</title>
        <meta name="description" content="Find top freelance services with ease" />
      </Head>

      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-white drop-shadow-xl rounded-lg font-bold h-10 sticky top-0 ">
        <h1 className="text-2xl font-bold">FreelanceHub</h1>
        <div className=' hover:text-slate-600'>
          <a href="#services" className="px-4 ">Services</a>
          <a href="#contact" className="px-4">Contact</a>
          <a href="#About_us" className="px-4">About Us</a>
        </div>
        <button className='text-l rounded-3xl cursor-pointer bg-blue-600 h-10 w-20 text-white hover:bg-blue-700 '>
          <a href='/signup'>Sign In</a>
        </button>
      </nav>

      {/* Hero Section */}

      <section className="min-h-screen flex flex-col md:flex-row justify-center items-start text-left bg-green-100 text-white p-6">
        <div className="w-full max-w-2xl mt-24">
          <h1 className="text-5xl font-bold text-black">Got Talent? Meet Opportunity</h1>
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
            <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-3xl shadow-lg hover:bg-blue-700 transition-all w-full md:w-auto whitespace-nowrap">
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
      <section id="services" className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-6 mt-0">Our Services</h2>
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

        {/* 2row */}

        <div className="mt-7 grid grid-cols-1 md:grid-cols-5 gap-6 max-w-6xl mx-auto ">
          <div className="p-6 bg-green-100 rounded-lg shadow-md flex flex-col items-center text-center">
            <img src="https://cdn-icons-png.flaticon.com/128/3573/3573187.png" alt="" className="w-10 h-10 " />
            <h3 className="text-lg font-semibold mt-4">Development</h3>
            <p className="text-gray-700 text-sm mt-5">Frontend, backend, web, and app developer jobs</p>
          </div>
          <div className="p-6 bg-green-100 rounded-lg shadow-md flex flex-col items-center text-center">
            <img src="https://cdn-icons-png.flaticon.com/128/16877/16877308.png" alt="" className="w-10 h-10" />
            <h3 className="text-lg font-semibold mt-4">Marketing & Sales</h3>
            <p className="text-gray-700 text-sm mt-5">Advertising , digital marketing and brand..</p>
          </div>
          <div className="p-6 bg-green-100 rounded-lg shadow-md flex flex-col items-center text-center">
            <img src="https://cdn-icons-png.flaticon.com/128/1014/1014347.png" alt="" className="w-10 h-10" />
            <h3 className="text-lg font-semibold mt-4">Design & creative</h3>
            <p className="text-gray-700 text-sm mt-5">Graphic, digital, web, and UI/UX designer jobs</p>
          </div>
          <div className="p-6 bg-green-100 rounded-lg shadow-md flex flex-col items-center text-center">
            <img src="https://cdn-icons-png.flaticon.com/128/1067/1067566.png" alt="" className="w-10 h-10" />
            <h3 className="text-lg font-semibold mt-4">Customer Services</h3>
            <p className="text-gray-700 text-sm mt-5">Customer experiences and account management jobs.</p>
          </div>
          <div className="p-6 bg-green-100 rounded-lg shadow-md flex flex-col items-center text-center">
            <img src="https://cdn-icons-png.flaticon.com/128/1570/1570102.png" alt="" className="w-10 h-10" />
            <h3 className="text-lg font-semibold mt-4">Manager</h3>
            <p className="text-gray-700 text-sm mt-5">Social media, accounting, data analytics..</p>
          </div>
          
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 text-center bg-gray-200">
        <h2 className="text-3xl font-bold mb-6">Our Work</h2>
        <p className="text-lg">Showcasing top projects from our freelancers.</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-900 text-white py-16 text-center">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <p className="mt-4">Let's discuss your next project.</p>
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition-all">Contact Us</button>
      </section>
    </div>
  );
}
