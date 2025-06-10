'use client';

import { useState } from 'react';

const ContactForm = () => {
  // State to manage form submission status
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    // Get form data
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message.');
      }

      setStatus('success');
      // Optionally reset the form
      // e.currentTarget.reset();
    } catch (error) { // Let TypeScript infer the type, or be specific
      setStatus('error');
      // To safely access .message, we check if it's an instance of Error
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('An unknown error occurred.');
      }
    }
  };

  return (
    <section id="contact-form-section" className="h-screen w-full flex items-center justify-center bg-brand-green px-6">
      <div className="max-w-4xl w-full mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-gray-400 mb-2">Contact us</p>
          <h2 className="text-4xl font-semibold text-white">
            Join the Waitlist to get notified.
          </h2>
          {status === 'success' && <p className="mt-4 text-green-400">Thank you! Your message has been sent.</p>}
          {status === 'error' && <p className="mt-4 text-red-400">Error: {errorMessage}</p>}
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Add `name` attributes to all inputs so FormData can read them */}
          <div className="grid sm:grid-cols-2 gap-6">
            <input name="firstName" type="text" placeholder="First name *" required className="bg-transparent border-b border-gray-500 p-2 focus:outline-none focus:border-white" />
            <input name="name" type="text" placeholder="Name *" required className="bg-transparent border-b border-gray-500 p-2 focus:outline-none focus:border-white" />
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <input name="company" type="text" placeholder="Company *" required className="bg-transparent border-b border-gray-500 p-2 focus:outline-none focus:border-white" />
            <input name="position" type="text" placeholder="Position *" required className="bg-transparent border-b border-gray-500 p-2 focus:outline-none focus:border-white" />
          </div>
          <input name="mail" type="email" placeholder="Mail *" required className="w-full bg-transparent border-b border-gray-500 p-2 focus:outline-none focus:border-white" />
          <textarea name="message" placeholder="Message *" required rows={4} className="w-full bg-transparent border-b border-gray-500 p-2 focus:outline-none focus:border-white resize-none"></textarea>
          
          <div className="flex items-start gap-3">
            <input name="terms" type="checkbox" id="terms" required className="mt-1 accent-brand-green" />
            <label htmlFor="terms" className="text-sm text-gray-400">
              By ticking this box, I agree to the <a href="#" className="underline hover:text-white">Terms and Conditions</a> and consent to receiving information and updates.
            </label>
          </div>

          <button type="submit" disabled={status === 'submitting'} className="bg-white text-black font-bold py-3 px-8 rounded-sm hover:bg-gray-200 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed">
            {status === 'submitting' ? 'SENDING...' : 'JOIN THE WAITLIST'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;