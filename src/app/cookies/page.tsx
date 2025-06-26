"use client";

import Link from "next/link";
import Footer from "@/components/Footer";

export default function CookiesPolicy() {
  return (
    <div className="min-h-screen bg-black">
      {/* Back navigation */}
      <div className="max-w-6xl mx-auto px-6 pt-8">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-300"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Cookie Policy
        </h1>
        
        {/* Content container */}
        <div className="bg-neutral-900 rounded-2xl p-6 md:p-8 space-y-8 text-neutral-300">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">What are cookies?</h2>
            <p>
              Cookies are small text files that are stored on your device (computer, tablet, or mobile) 
              when you visit a website. They allow the website to recognize your device and remember 
              certain information about your visit, such as your preferences and actions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">How we use cookies</h2>
            <p>
              When browsing our website (thyrotracks.com), cookies may be stored on your device. 
              These include:
            </p>
            
            <div className="space-y-6 mt-4">
              <div className="bg-neutral-800 rounded-xl p-5 border border-neutral-700">
                <h3 className="text-xl font-semibold text-white mb-3">Strictly Necessary Cookies</h3>
                <p>
                  These cookies are essential for the proper functioning of our website. They enable 
                  core functionality such as security, network management, and account access. You 
                  cannot opt out of these cookies as the website cannot function properly without them.
                </p>
              </div>
              
              <div className="bg-neutral-800 rounded-xl p-5 border border-neutral-700">
                <h3 className="text-xl font-semibold text-white mb-3">Analytics Cookies</h3>
                <p>
                  We use analytics cookies (such as Google Analytics or equivalent) to collect 
                  anonymous information about how visitors use our website. This helps us improve 
                  our website and your browsing experience. The data is aggregated and anonymized, 
                  meaning we cannot identify you personally from this information.
                </p>
                <p className="mt-2">
                  These cookies track information such as:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>How many visitors come to our site</li>
                  <li>Which pages are most popular</li>
                  <li>How long visitors stay on each page</li>
                  <li>What type of device and browser visitors use</li>
                </ul>
              </div>
              
              <div className="bg-neutral-800 rounded-xl p-5 border border-neutral-700">
                <h3 className="text-xl font-semibold text-white mb-3">Customization Cookies</h3>
                <p>
                  These cookies allow us to remember choices you make and provide enhanced, 
                  personalized features. They may be set by us or by third-party providers whose 
                  services we have added to our pages. These cookies are only used with your explicit 
                  consent.
                </p>
                <p className="mt-2">
                  They may be used to:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Remember your language or region preferences</li>
                  <li>Personalize content based on your interests</li>
                  <li>Remember settings you&apos;ve applied</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Managing cookies</h2>
            <p>
              You can manage your cookie preferences at any time via the consent banner that appears 
              when you first visit our website. You can also control cookies through your browser settings.
            </p>
            <p>
              Most web browsers allow you to manage your cookie preferences. You can:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Delete cookies from your device</li>
              <li>Block cookies by activating the setting on your browser that allows you to refuse all or some cookies</li>
              <li>Set your browser to notify you when you receive a cookie</li>
            </ul>
            <p className="mt-2">
              Please note that if you choose to block or delete cookies, you may not be able to access 
              certain areas or features of our website, and some services may not function properly.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Updates to this policy</h2>
            <p>
              We may update our Cookie Policy from time to time to reflect changes in technology, 
              regulation, or our business practices. Any changes will be posted on this page, and 
              if the changes are significant, we will provide a more prominent notice.
            </p>
            <p className="font-medium">Last updated: June 25, 2025</p>
          </section>

          <div className="pt-6 border-t border-neutral-800 mt-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-between">
              <Link 
                href="/privacy" 
                className="inline-flex items-center gap-2 text-accent-cyan hover:underline"
              >
                <span>View our Privacy Policy</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              
              <Link 
                href="/terms" 
                className="inline-flex items-center gap-2 text-accent-cyan hover:underline"
              >
                <span>View our Terms of Service</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
