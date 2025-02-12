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
      <nav className="flex justify-between items-center p-6 bg-white shadow-md rounded-lg font-bold">
        <h1 className="text-2xl font-bold">FreelanceHub</h1>
        <div>
          <a href="#services" className="px-4">Services</a>
          <a href="#contact" className="px-4">Contact</a>
          <a href="#About_us" className="px-4">About Us</a>
        </div>
      <button className='text-l rounded-lg cursor-pointer bg-blue-500 h-10 w-20 text-white hover:bg-blue-700 '>
        <a href='/signup'>Sign In</a>
      </button>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center bg-green-100 text-white p-6">
        <h1 className="text-5xl font-bold text-black">Got Talent? Meet Opportunity</h1>
        <p className="text-xl mt-4 text-black font-semibold">Find top talent for your projects instantly.</p>
        <p className='text-l mt-1 text-black font-semibold'>Company reviews, Salaries, Interviews, Jobs.</p>
        <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition-all">Find Jobs</button>
        <p className='text-black'>popular searches:</p>
        <h2 className='text-black font-bold'>Web Development, Graphic Design, Data Management, Marketing Management</h2>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Web Development</h3>
            <p className="mt-2">Building scalable and modern websites.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Graphic Design</h3>
            <p className="mt-2">Creating stunning visuals and branding.</p>
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
