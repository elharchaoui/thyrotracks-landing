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
    <section id="contact-form-section" className="min-h-screen w-full flex items-center justify-center bg-white px-6 py-12">
      <div className="max-w-4xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div className="!text-black">
          <p className="mb-2 text-sm uppercase tracking-wide !text-gray-600">Contact us</p>
          <h2 className="text-4xl font-semibold mb-6 !text-black">
            Join the Waitlist to get notified.
          </h2>
          <div className="space-y-4">
            <p className="text-lg !text-gray-700">Be among the first to experience AI-powered thyroid health management.</p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-sm font-bold !text-green-600">✓</span>
              </div>
              <span className="!text-gray-700">Personalized health insights</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-sm font-bold !text-green-600">✓</span>
              </div>
              <span className="!text-gray-700">AI-driven symptom tracking</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-sm font-bold !text-green-600">✓</span>
              </div>
              <span className="!text-gray-700">Early access to beta features</span>
            </div>
          </div>
          {status === 'success' && <p className="mt-4 text-green-400" role="status" aria-live="polite">Thank you! Your message has been sent.</p>}
          {status === 'error' && <p className="mt-4 text-red-400" role="alert" aria-live="assertive">Error: {errorMessage}</p>}
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Add `name` attributes to all inputs so FormData can read them */}
          <div className="grid sm:grid-cols-2 gap-6">
            <input name="firstName" type="text" placeholder="First name *" required aria-label="First name" className="bg-transparent border-b border-gray-500 p-2 focus:outline-none focus:border-white" />
            <input name="lastName" type="text" placeholder="Last name *" required aria-label="Last name" className="bg-transparent border-b border-gray-500 p-2 focus:outline-none focus:border-white" />
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <input name="company" type="text" placeholder="Company *" required aria-label="Company" className="bg-transparent border-b border-gray-500 p-2 focus:outline-none focus:border-white" />
            <input name="position" type="text" placeholder="Position *" required aria-label="Position" className="bg-transparent border-b border-gray-500 p-2 focus:outline-none focus:border-white" />
          </div>
          <input name="mail" type="email" placeholder="Email *" required aria-label="Email address" className="w-full bg-transparent border-b border-gray-500 p-2 focus:outline-none focus:border-white" />
          <textarea name="message" placeholder="Message *" required rows={4} aria-label="Message" className="w-full bg-transparent border-b border-gray-500 p-2 focus:outline-none focus:border-white resize-none"></textarea>
          
          <div className="flex items-start gap-3">
            <input name="terms" type="checkbox" id="terms" required className="mt-1 accent-brand-green" />
            <label htmlFor="terms" className="text-sm text-gray-400">
              By ticking this box, I agree to the <a href="/terms" className="underline hover:text-white">Terms and Conditions</a> and <a href="/privacy" className="underline hover:text-white">Privacy Policy</a>, and consent to receiving information and updates about Thyrotracks.
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