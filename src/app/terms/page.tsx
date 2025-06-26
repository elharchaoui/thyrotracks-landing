"use client";

import Link from "next/link";
import Footer from "@/components/Footer";

export default function TermsOfService() {
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
          Terms of Service
        </h1>
        
        {/* Content container */}
        <div className="bg-neutral-900 rounded-2xl p-6 md:p-8 space-y-8 text-neutral-300">
          <div className="flex flex-col items-center justify-center py-12 text-center space-y-6">
            <div className="w-16 h-16 bg-gradient-to-r from-accent-cyan to-brand-blue rounded-xl flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white">Terms of Service Coming Soon</h2>
            <p className="max-w-md">
              We're currently finalizing our Terms of Service document to ensure it provides clear and comprehensive information about using Thyrotracks services.
            </p>
            <p className="text-sm text-neutral-500">
              Expected publication: July 2025
            </p>
            <div className="mt-6">
              <Link 
                href="/privacy" 
                className="inline-flex items-center gap-2 text-accent-cyan hover:underline"
              >
                <span>View our Privacy Policy</span>
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
