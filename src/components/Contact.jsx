import React, { useState } from "react";
import { Mail, Phone, CheckCircle, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import useInView from "../hooks/useInView";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Scroll animation
  const [ref, visible] = useInView();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    setSubmitLoading(true);
    setIsSubmitted(false);
    setErrorMessage("");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setIsSubmitted(true);

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);

      setErrorMessage(
        "Something went wrong while sending your message. Please try again."
      );
    } finally {
      setSubmitLoading(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 md:py-20 lg:py-28"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* =====================================================
            LEFT COLUMN
        ====================================================== */}
        <div
          className={`
            lg:col-span-5
            space-y-6
            transition-all
            duration-1000
            ease-out
            ${
              visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-16"
            }
          `}
        >
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/5 text-violet-600 dark:text-violet-400 text-xs font-semibold uppercase tracking-wider badge-glow-purple">
            <Mail size={12} />
            <span>Get in touch</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold font-display leading-tight text-slate-900 dark:text-slate-50">
            Let's Discuss <br />

            <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
              Your Project
            </span>
          </h2>

          {/* Description */}
          <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">
            If you have a design requirement, static templates to slice,
            React components to build, or need support with Kajabi/Webflow,
            drop a message!
          </p>

          {/* Contact Details */}
          <div className="space-y-4 pt-4">

            {/* Email */}
            <div
              className={`
                flex items-center space-x-4
                transition-all duration-700 ease-out
                ${
                  visible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }
              `}
              style={{
                transitionDelay: visible ? "300ms" : "0ms",
              }}
            >
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-500 shrink-0">
                <Mail size={18} />
              </div>

              <div>
                <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                  Email Address
                </p>

                <a
                  href="mailto:riyadogra162001@gmail.com"
                  className="text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
                >
                  riyadogra162001@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            {/* <div
              className={`
                flex items-center space-x-4
                transition-all duration-700 ease-out
                ${
                  visible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }
              `}
              style={{
                transitionDelay: visible ? "450ms" : "0ms",
              }}
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500 shrink-0">
                <Phone size={18} />
              </div>

              <div>
                <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                  Phone Number
                </p>

                <a
                  href="tel:+918968728161"
                  className="text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
                >
                  +91 8968728161
                </a>
              </div>

            </div> */}

          </div>
        </div>

        {/* =====================================================
            RIGHT COLUMN - FORM
        ====================================================== */}
        <div
          className={`
            lg:col-span-7
            bg-white/30
            dark:bg-slate-900/40
            border
            border-slate-200/60
            dark:border-slate-700/60
            rounded-3xl
            p-6
            sm:p-8
            backdrop-blur-sm
            shadow-xl

            transition-all
            duration-1000
            ease-out

            ${
              visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-16"
            }
          `}
          style={{
            transitionDelay: visible ? "200ms" : "0ms",
          }}
        >

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* =================================================
                NAME + EMAIL
            ================================================== */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              {/* Name */}
              <div
                className={`
                  space-y-1
                  transition-all duration-700 ease-out
                  ${
                    visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }
                `}
                style={{
                  transitionDelay: visible ? "400ms" : "0ms",
                }}
              >
                <label
                  htmlFor="name"
                  className="text-xs font-semibold text-slate-500 dark:text-slate-400"
                >
                  Full Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="
                    w-full
                    px-4 py-3
                    rounded-xl
                    border
                    border-slate-200
                    dark:border-slate-700
                    bg-white/70
                    dark:bg-slate-800/70
                    text-slate-800
                    dark:text-slate-100
                    placeholder-slate-400
                    dark:placeholder-slate-500
                    text-sm
                    focus:outline-none
                    focus:ring-2
                    focus:ring-violet-500/50
                    focus:border-violet-500/50
                    hover:border-violet-500/30
                    transition-all
                    duration-300
                  "
                  placeholder="Enter your name"
                />
              </div>

              {/* Email */}
              <div
                className={`
                  space-y-1
                  transition-all duration-700 ease-out
                  ${
                    visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }
                `}
                style={{
                  transitionDelay: visible ? "500ms" : "0ms",
                }}
              >
                <label
                  htmlFor="email"
                  className="text-xs font-semibold text-slate-500 dark:text-slate-400"
                >
                  Email Address
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="
                    w-full
                    px-4 py-3
                    rounded-xl
                    border
                    border-slate-200
                    dark:border-slate-700
                    bg-white/70
                    dark:bg-slate-800/70
                    text-slate-800
                    dark:text-slate-100
                    placeholder-slate-400
                    dark:placeholder-slate-500
                    text-sm
                    focus:outline-none
                    focus:ring-2
                    focus:ring-violet-500/50
                    focus:border-violet-500/50
                    hover:border-violet-500/30
                    transition-all
                    duration-300
                  "
                  placeholder="name@example.com"
                />
              </div>
            </div>

            {/* =================================================
                MESSAGE
            ================================================== */}
            <div
              className={`
                space-y-1
                transition-all duration-700 ease-out
                ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }
              `}
              style={{
                transitionDelay: visible ? "600ms" : "0ms",
              }}
            >
              <label
                htmlFor="message"
                className="text-xs font-semibold text-slate-500 dark:text-slate-400"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="
                  w-full
                  px-4 py-3
                  rounded-xl
                  border
                  border-slate-200
                  dark:border-slate-700
                  bg-white/70
                  dark:bg-slate-800/70
                  text-slate-800
                  dark:text-slate-100
                  placeholder-slate-400
                  dark:placeholder-slate-500
                  text-sm
                  focus:outline-none
                  focus:ring-2
                  focus:ring-violet-500/50
                  focus:border-violet-500/50
                  hover:border-violet-500/30
                  resize-none
                  transition-all
                  duration-300
                "
                placeholder="Tell me about your project..."
              />
            </div>

            {/* =================================================
                SUCCESS MESSAGE
            ================================================== */}
            {isSubmitted && (
              <div
                className="
                  flex items-center space-x-2
                  text-emerald-600
                  dark:text-emerald-400
                  bg-emerald-500/10
                  p-3
                  rounded-xl
                  border
                  border-emerald-500/20
                  text-xs
                  font-semibold
                  animate-fade-up
                "
              >
                <CheckCircle size={16} />

                <span>
                  Thank you! Your message was submitted successfully.
                  I'll get back to you shortly.
                </span>
              </div>
            )}

            {/* =================================================
                ERROR MESSAGE
            ================================================== */}
            {errorMessage && (
              <div
                className="
                  p-3
                  rounded-xl
                  border
                  border-red-500/20
                  bg-red-500/10
                  text-red-600
                  dark:text-red-400
                  text-xs
                  font-semibold
                  animate-fade-up
                "
              >
                {errorMessage}
              </div>
            )}

            {/* =================================================
                SUBMIT BUTTON
            ================================================== */}
            <div
              className={`
                transition-all duration-700 ease-out
                ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }
              `}
              style={{
                transitionDelay: visible ? "700ms" : "0ms",
              }}
            >
              <button
                type="submit"
                disabled={submitLoading}
                className="
                  w-full
                  py-3
                  rounded-xl
                  bg-gradient-to-r
                  from-violet-600
                  to-cyan-500
                  text-white
                  font-semibold
                  text-sm
                  hover:shadow-xl
                  hover:shadow-violet-600/20
                  hover:scale-[1.01]
                  active:scale-[0.99]
                  disabled:opacity-50
                  disabled:scale-100
                  transition-all
                  duration-300
                  flex
                  items-center
                  justify-center
                  space-x-2
                  cursor-pointer
                "
              >
                {submitLoading ? (
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;