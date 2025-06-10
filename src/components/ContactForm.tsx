'use client'; // <-- ADD THIS LINE
const ContactForm = () => {
  return (
    <section id="contact-form" className="bg-brand-green py-20 px-6">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left Side Text */}
        <div>
          <p className="text-gray-400 mb-2">Contact us</p>
          <h2 className="text-4xl font-semibold text-white">
            Join the Waitlist to get notified.
          </h2>
        </div>

        {/* Right Side Form */}
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <input type="text" placeholder="First name *" required className="bg-transparent border-b border-gray-500 p-2 focus:outline-none focus:border-white" />
            <input type="text" placeholder="Name *" required className="bg-transparent border-b border-gray-500 p-2 focus:outline-none focus:border-white" />
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <input type="text" placeholder="Company *" required className="bg-transparent border-b border-gray-500 p-2 focus:outline-none focus:border-white" />
            <input type="text" placeholder="Position *" required className="bg-transparent border-b border-gray-500 p-2 focus:outline-none focus:border-white" />
          </div>
          <input type="email" placeholder="Mail *" required className="w-full bg-transparent border-b border-gray-500 p-2 focus:outline-none focus:border-white" />
          <textarea placeholder="Message *" required rows={4} className="w-full bg-transparent border-b border-gray-500 p-2 focus:outline-none focus:border-white resize-none"></textarea>
          
          <div className="flex items-start gap-3">
            <input type="checkbox" id="terms" required className="mt-1 accent-brand-green" />
            <label htmlFor="terms" className="text-sm text-gray-400">
              By ticking this box, I agree to the <a href="#" className="underline hover:text-white">Terms and Conditions</a> and consent to receiving information and updates about the company's latest news and developments.
            </label>
          </div>

          <button type="submit" className="bg-white text-black font-bold py-3 px-8 rounded-sm hover:bg-gray-200 transition-colors">
            JOIN THE WAITLIST
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;