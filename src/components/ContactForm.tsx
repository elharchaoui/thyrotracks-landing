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
    <section id="contact-form-section" className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-neutral-50 to-white px-6 py-20">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-cyan/10 text-accent-cyan text-sm font-medium rounded-full">
              <div className="w-2 h-2 bg-accent-cyan rounded-full animate-pulse"></div>
              Join the Revolution
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-neutral-900 leading-tight">
              Be among the <span className="text-brand-blue font-extrabold">first</span> to experience the future
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Join our exclusive waitlist and get priority access to revolutionary AI-powered thyroid health management.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-accent-cyan rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">Personalized AI Insights</h3>
                <p className="text-neutral-600">Get tailored health recommendations based on your unique thyroid profile</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">Smart Symptom Tracking</h3>
                <p className="text-neutral-600">Advanced AI algorithms that learn and adapt to your health patterns</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-green rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">Exclusive Early Access</h3>
                <p className="text-neutral-600">Be the first to unlock premium features and beta testing opportunities</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-accent-cyan/5 to-brand-blue/5 rounded-2xl border border-accent-cyan/20">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-accent-cyan to-brand-blue border-2 border-white"></div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-brand-purple to-brand-blue border-2 border-white"></div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-brand-green to-accent-cyan border-2 border-white"></div>
              <div className="w-10 h-10 rounded-full bg-neutral-200 border-2 border-white flex items-center justify-center text-xs font-bold text-neutral-600">+500</div>
            </div>
            <div>
              <p className="text-sm font-medium text-neutral-900">Join 500+ healthcare professionals</p>
              <p className="text-xs text-neutral-600">Already on the waitlist</p>
            </div>
          </div>
          
          {status === 'success' && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
              <p className="text-green-800 font-medium" role="status" aria-live="polite">
                🎉 Welcome aboard! Check your email for next steps.
              </p>
            </div>
          )}
          {status === 'error' && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
              <p className="text-red-800 font-medium" role="alert" aria-live="assertive">
                ⚠️ {errorMessage}
              </p>
            </div>
          )}
        </div>
        
        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border border-neutral-100">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">Secure Your Spot</h3>
            <p className="text-neutral-600">Fill out the form below to join our exclusive waitlist</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="relative">
                <input 
                  name="firstName" 
                  type="text" 
                  placeholder="First name" 
                  required 
                  aria-label="First name" 
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-transparent transition-all duration-300 placeholder-neutral-400"
                />
              </div>
              <div className="relative">
                <input 
                  name="lastName" 
                  type="text" 
                  placeholder="Last name" 
                  required 
                  aria-label="Last name" 
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-transparent transition-all duration-300 placeholder-neutral-400"
                />
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="relative">
                <input 
                  name="company" 
                  type="text" 
                  placeholder="Company" 
                  required 
                  aria-label="Company" 
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-transparent transition-all duration-300 placeholder-neutral-400"
                />
              </div>
              <div className="relative">
                <input 
                  name="position" 
                  type="text" 
                  placeholder="Position" 
                  required 
                  aria-label="Position" 
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-transparent transition-all duration-300 placeholder-neutral-400"
                />
              </div>
            </div>
            
            <div className="relative">
              <input 
                name="mail" 
                type="email" 
                placeholder="Email address" 
                required 
                aria-label="Email address" 
                className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-transparent transition-all duration-300 placeholder-neutral-400"
              />
            </div>
            
            <div className="relative">
              <textarea 
                name="message" 
                placeholder="Tell us about your interest in thyroid health management" 
                required 
                rows={4} 
                aria-label="Message" 
                className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-transparent transition-all duration-300 placeholder-neutral-400 resize-none"
              ></textarea>
            </div>
            
            <div className="flex items-start gap-3">
              <input 
                name="terms" 
                type="checkbox" 
                id="terms" 
                required 
                className="mt-1 w-4 h-4 text-accent-cyan bg-neutral-50 border-neutral-300 rounded focus:ring-accent-cyan focus:ring-2"
              />
              <label htmlFor="terms" className="text-sm text-neutral-600 leading-relaxed">
                I agree to the <a href="/terms" className="text-accent-cyan hover:underline font-medium">Terms and Conditions</a> and <a href="/privacy" className="text-accent-cyan hover:underline font-medium">Privacy Policy</a>, and consent to receiving updates about Thyrotracks.
              </label>
            </div>

            <button 
              type="submit" 
              disabled={status === 'submitting'} 
              className="w-full bg-gradient-to-r from-accent-cyan to-brand-blue text-white font-semibold py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-accent-cyan/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
            >
              <span className="relative z-10">
                {status === 'submitting' ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Securing your spot...
                  </span>
                ) : (
                  'Join the Waitlist'
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;