import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j851vjj", // replace with your EmailJS Service ID
        "template_e8wqmkr", // replace with your Template ID
        form.current,
        "UrqsOMQEbDMJY5DPe"  // replace with your Public Key
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Please try again.");
          console.error("Error:", error);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-r from-gray-950 to-violet-950 flex flex-col md:flex-row justify-center items-center gap-10 py-16 px-6"
    >
      {/* LEFT: Contact Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-[#1F1F33]/80 backdrop-blur-md shadow-2xl rounded-2xl p-8 w-full max-w-lg border shadow-indigo-500/70  border-[#2E2E44]"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text 
                       bg-gradient-to-r from-[#FF6B00] to-[#FFD93D] text-center mb-10 tracking-wide">
          CONTACT ME
        </h2>

        <label className="block text-gray-200 font-semibold mb-1">Name</label>
        <input
          type="text"
          name="name"
          required
          className="w-full p-3 mb-4 rounded-lg bg-[#2B2B3F] text-gray-100 placeholder-gray-400
                     border border-[#3A3A52] focus:ring-2 focus:ring-[#FF6B00] outline-none"
          placeholder="Enter your name"
        />

        <label className="block text-gray-200 font-semibold mb-1">Email</label>
        <input
          type="email"
          name="email"
          required
          className="w-full p-3 mb-4 rounded-lg bg-[#2B2B3F] text-gray-100 placeholder-gray-400
                     border border-[#3A3A52] focus:ring-2 focus:ring-[#FFD93D] outline-none"
          placeholder="Enter your email"
        />

        <label className="block text-gray-200 font-semibold mb-1">Subject</label>
        <input
          type="text"
          name="subject"
          required
          className="w-full p-3 mb-4 rounded-lg bg-[#2B2B3F] text-gray-100 placeholder-gray-400
                     border border-[#3A3A52] focus:ring-2 focus:ring-[#FF6B00] outline-none"
          placeholder="Enter subject"
        />

        <label className="block text-gray-200 font-semibold mb-1">Message</label>
        <textarea
          name="message"
          rows="5"
          required
          className="w-full p-3 mb-6 rounded-lg bg-[#2B2B3F] text-gray-100 placeholder-gray-400
                     border border-[#3A3A52] focus:ring-2 focus:ring-[#FFD93D] outline-none resize-none"
          placeholder="Write your message here..."
        ></textarea>

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-[#FF6B00] to-[#FFD93D] 
                     hover:opacity-90 text-[#1B1B2A] font-semibold rounded-lg 
                     transition-all duration-300 hover:scale-[1.03] shadow-lg"
        >
          Send Message
        </button>
      </form>

      {/* RIGHT: Social Links + Resume */}
      <div className="flex flex-col items-center justify-center gap-6 bg-[#1F1F33]/80 shadow-green-500/70 
                      backdrop-blur-md shadow-2xl rounded-2xl p-8 w-full max-w-sm border border-[#2E2E44]">
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#FFD93D]">
          Connect With Me
        </h3>

        <div className="flex justify-center gap-6 text-3xl text-gray-300">
          <a
            href="https://github.com/AnkitPuri07"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FF6B00] transition-all duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ankit-puri-838899321"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FFD93D] transition-all duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/ankit_ho_k?igsh=dnB1Z2ZvYmE1ZjRv"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FF6B00] transition-all duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/share/16Z4TYevdV/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FFD93D] transition-all duration-300"
          >
            <FaFacebook />
          </a>
        </div>

        <a
                            href="/your_resume.pdf"
                            download="Your_Name_Resume.pdf" 
                            className="py-3 px-8 bg-white text-indigo-600 font-bold rounded-lg 
                                       shadow-2xl shadow-white/50 
                                       hover:bg-gray-100 transition duration-300 
                                       focus:outline-none focus:ring-4 focus:ring-white 
                                       transform hover:scale-[1.05] active:scale-[0.98] mt-2"
                        >
                            Download Resume
                        </a>
      </div>
    </section>
  );
}

export default Contact;