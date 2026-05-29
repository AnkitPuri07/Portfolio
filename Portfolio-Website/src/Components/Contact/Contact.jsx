import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { Send, Download, Mail, MapPin } from "lucide-react";

function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStatus({ type: "success", message: "Message sent successfully!" });
          e.target.reset();
          setIsSubmitting(false);
          setTimeout(() => setStatus(null), 3000);
        },
        (error) => {
          setStatus({ type: "error", message: "Failed to send message. Please try again." });
          console.error("Error:", error);
          setIsSubmitting(false);
          setTimeout(() => setStatus(null), 3000);
        }
      );
  };

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/AnkitPuri07", color: "hover:text-white" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/ankit-puri-838899321", color: "hover:text-blue-400" },
    { icon: FaInstagram, href: "https://www.instagram.com/ankit_ho_k?igsh=dnB1Z2ZvYmE1ZjRv", color: "hover:text-pink-400" },
    { icon: FaFacebook, href: "https://www.facebook.com/share/16Z4TYevdV/", color: "hover:text-blue-500" },
  ];

  return (
    <section id="contact" className="py-24 px-4 md:px-8 bg-grid">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] mx-auto rounded-full mb-4" />
          <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 glass rounded-2xl p-8 w-full"
          >
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6">Send a Message</h3>

            <div className="space-y-5">
              <div>
                <label className="block text-[var(--text-secondary)] font-medium mb-2 text-sm">Name</label>
                <motion.input
                  type="text"
                  name="name"
                  required
                  className="w-full p-3.5 rounded-xl bg-[var(--bg-card)] text-[var(--text-primary)] placeholder-[var(--text-muted)] border border-[var(--border-color)] focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20 outline-none transition-all"
                  placeholder="Enter your name"
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              <div>
                <label className="block text-[var(--text-secondary)] font-medium mb-2 text-sm">Email</label>
                <motion.input
                  type="email"
                  name="email"
                  required
                  className="w-full p-3.5 rounded-xl bg-[var(--bg-card)] text-[var(--text-primary)] placeholder-[var(--text-muted)] border border-[var(--border-color)] focus:border-[var(--accent-secondary)] focus:ring-2 focus:ring-[var(--accent-secondary)]/20 outline-none transition-all"
                  placeholder="Enter your email"
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              <div>
                <label className="block text-[var(--text-secondary)] font-medium mb-2 text-sm">Subject</label>
                <motion.input
                  type="text"
                  name="subject"
                  required
                  className="w-full p-3.5 rounded-xl bg-[var(--bg-card)] text-[var(--text-primary)] placeholder-[var(--text-muted)] border border-[var(--border-color)] focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20 outline-none transition-all"
                  placeholder="What's this about?"
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              <div>
                <label className="block text-[var(--text-secondary)] font-medium mb-2 text-sm">Message</label>
                <motion.textarea
                  name="message"
                  rows="5"
                  required
                  className="w-full p-3.5 rounded-xl bg-[var(--bg-card)] text-[var(--text-primary)] placeholder-[var(--text-muted)] border border-[var(--border-color)] focus:border-[var(--accent-secondary)] focus:ring-2 focus:ring-[var(--accent-secondary)]/20 outline-none resize-none transition-all"
                  placeholder="Write your message here..."
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 relative overflow-hidden group disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]" />
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-secondary)] to-[var(--accent-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative flex items-center justify-center gap-2">
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="w-4 h-4" />
                </span>
              </motion.button>

              {status && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-3 rounded-lg text-center font-medium ${
                    status.type === "success"
                      ? "bg-green-500/10 text-green-400 border border-green-500/20"
                      : "bg-red-500/10 text-red-400 border border-red-500/20"
                  }`}
                >
                  {status.message}
                </motion.div>
              )}
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex-1 w-full space-y-6"
          >
            <div className="glass rounded-2xl p-6">
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">Connect With Me</h3>

              <div className="flex gap-4 mb-6">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl glass hover:bg-[var(--accent-primary)]/10 transition-colors"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <link.icon className={`w-6 h-6 text-[var(--text-secondary)] ${link.color} transition-colors`} />
                  </motion.a>
                ))}
              </div>

              <div className="space-y-3 text-[var(--text-muted)]">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[var(--accent-primary)]" />
                  <span>ankitpuri985@gmail.com</span>
                </div>
              </div>
            </div>

            <motion.a
              href="/Resume-ankit.pdf"
              download="Resume-ankit.pdf"
              className="flex items-center justify-center gap-3 py-4 px-6 rounded-xl glass border-2 border-[var(--accent-primary)] text-[var(--accent-primary)] font-semibold hover:bg-[var(--accent-primary)] hover:text-white transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
