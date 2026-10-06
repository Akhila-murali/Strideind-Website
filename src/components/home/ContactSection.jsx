import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  useEffect(() => {
    if (showModal) {
      document.body.classList.add('contact-modal-open');
    } else {
      document.body.classList.remove('contact-modal-open');
    }
    return () => document.body.classList.remove('contact-modal-open');
  }, [showModal]);



  const contactDetails = [
    { 
      icon: <FiMapPin />, 
      label: 'Location', 
      val: (
        <>
          STRIDEIND INNOVATIONS PRIVATE LIMITED<br />
          STRIDECENTER, ATTINGAL BYPASS, NEAR MANAMBOOR<br />
          TRIVANDRUM, KERALA – PIN 695611
        </>
      ),
      href: 'https://maps.google.com/?q=STRIDEIND+INNOVATIONS+PRIVATE+LIMITED+ATTINGAL+BYPASS+TRIVANDRUM+KERALA'
    },
    { icon: <FiPhone />, label: 'Phone', val: '+91 7736878515', href: 'tel:+917736878515' },
    { icon: <FiMail />, label: 'Email', val: 'support@strideind.com', href: 'mailto:support@strideind.com' },
  ];
  return (
    <section className="contact section bg-[#161616] py-[120px] min-[992px]:scroll-mt-[150px] max-[991px]:scroll-mt-20 max-[965px]:py-16" id="contact">
      <div className="container ml-[5%] mr-0 max-w-none pr-5 max-[965px]:m-0 max-[965px]:px-5 min-[1400px]:mx-auto min-[1400px]:max-w-[1300px] min-[1400px]:px-10">
        <div className="section-label mb-4 text-xs uppercase tracking-[0.12em] text-[#1a9fa0]">Get In Touch</div>
        <div className="contact-layout grid grid-cols-[1fr_1.2fr] items-start gap-20 max-[965px]:grid-cols-1 max-[965px]:gap-12">
          <div className="contact-left max-w-[600px] max-[965px]:max-w-full max-[965px]:text-left">
            <h2 className="section-title text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.1] text-white">
              Let's Build<br />
              <span className="teal text-[#1a9fa0]">Something</span><br />
              Together
            </h2>
            <p className="contact-sub mb-12 mt-5 max-w-[340px] text-[15px] font-light leading-[1.8] text-white/50 max-[965px]:mx-auto max-[965px]:max-w-full">
              Tell us about your project and our team will get back to you within 24 hours.
            </p>

            <div className="contact-info flex flex-col gap-6">
              {contactDetails.map((item) => (
                <div className="info-row group flex items-start gap-4" key={item.label}>
                  <span className="info-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#1a9fa0]/[0.12] text-xl text-[#1a9fa0] transition-transform duration-300 group-hover:scale-[1.15]">{item.icon}</span>
                  <div>
                    <div className="info-label mb-[3px] text-left text-[11px] font-bold uppercase tracking-[0.1em] text-[#1a9fa0]">{item.label}</div>
                    <div className="info-val break-words text-left text-sm font-light leading-[1.6] text-white/80">
                      {item.href ? (
                        <a 
                          href={item.href} 
                          target={item.href.startsWith('http') ? "_blank" : undefined}
                          rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                          style={{ color: 'inherit', textDecoration: 'none' }}
                          onMouseOver={(e) => e.target.style.color = 'var(--teal)'}
                          onMouseOut={(e) => e.target.style.color = 'inherit'}
                        >
                          {item.val}
                        </a>
                      ) : (
                        item.val
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-right" id="contact-form">
            <form className="contact-form flex max-w-[640px] flex-col gap-5 rounded-sm border border-white/[0.06] bg-[#111] p-10 max-[965px]:max-w-full max-[600px]:px-5 max-[600px]:py-7" onSubmit={handleSubmit} noValidate>
              <div className="form-row grid grid-cols-2 gap-4 max-[600px]:grid-cols-1">
                <div className="form-group flex flex-col gap-2">
                  <label className="text-[11px] font-bold uppercase tracking-[0.1em] text-white/50">Full Name</label>
                  <input
                    className="resize-y rounded-sm border border-white/10 bg-[#161616] px-4 py-3 font-['Manrope'] text-sm font-light text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#1a9fa0]"
                    type="text"
                    name="name"
                    placeholder="John Smith"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group flex flex-col gap-2">
                  <label className="text-[11px] font-bold uppercase tracking-[0.1em] text-white/50">Email Address</label>
                  <input
                    className="resize-y rounded-sm border border-white/10 bg-[#161616] px-4 py-3 font-['Manrope'] text-sm font-light text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#1a9fa0]"
                    type="email"
                    name="email"
                    placeholder="john@company.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group flex flex-col gap-2">
                <label className="text-[11px] font-bold uppercase tracking-[0.1em] text-white/50">Company</label>
                <input
                  className="resize-y rounded-sm border border-white/10 bg-[#161616] px-4 py-3 font-['Manrope'] text-sm font-light text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#1a9fa0]"
                  type="text"
                  name="company"
                  placeholder="Your company name"
                  value={form.company}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group flex flex-col gap-2">
                <label className="text-[11px] font-bold uppercase tracking-[0.1em] text-white/50">Message</label>
                <textarea
                  className="resize-y rounded-sm border border-white/10 bg-[#161616] px-4 py-3 font-['Manrope'] text-sm font-light text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#1a9fa0]"
                  name="message"
                  placeholder="Tell us about your project or challenge..."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="form-submit self-start rounded-sm border-0 bg-[#1a9fa0] px-7 py-3.5 font-['Manrope'] text-sm font-bold uppercase tracking-[0.06em] text-black transition-all hover:-translate-y-0.5 hover:bg-[#22b8b9]">
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="service-modal-overlay fixed inset-0 z-[1000] flex h-full w-full animate-[fadeIn_0.3s_ease] items-center justify-center bg-black/70 backdrop-blur-[5px]">
          <div
            className="service-modal-box w-[calc(100%_-_48px)] max-w-[400px] animate-[slideUp_0.3s_ease] rounded-[7px] bg-[#111] p-10 text-center shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
            style={{ border: "1px solid #15585a" }}
          >
            <div className="service-modal-icon mx-auto mb-5 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#ff4d4f]/10 text-2xl font-bold text-[#ff4d4f]">!</div>
            <h3 className="mb-3 text-[22px] font-bold text-white">Service Unavailable</h3>
            <p className="mb-6 text-sm leading-[1.6] text-white/50">Our messaging service is currently down for maintenance. Please reach out to us directly via email or phone.</p>
            <button className="service-modal-close h-11 w-24 rounded-[4px] border-0 bg-[#1a9fa0] p-0 font-['Manrope'] text-sm font-bold uppercase tracking-[0.05em] text-black transition-all hover:-translate-y-0.5 hover:bg-[#22b8b9]" onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}
