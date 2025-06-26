"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function PrivacyPolicy() {
  const [language, setLanguage] = useState<"en" | "fr">("en");

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
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            {language === "en" ? "Privacy Policy" : "Politique de protection des données personnelles"}
          </h1>
          
          {/* Language toggle */}
          <div className="flex items-center gap-2 bg-neutral-900 rounded-full p-1">
            <button 
              onClick={() => setLanguage("en")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                language === "en" 
                  ? "bg-gradient-to-r from-accent-cyan to-brand-blue text-white" 
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              English
            </button>
            <button 
              onClick={() => setLanguage("fr")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                language === "fr" 
                  ? "bg-gradient-to-r from-accent-cyan to-brand-blue text-white" 
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Français
            </button>
          </div>
        </div>

        {/* Content container */}
        <div className="bg-neutral-900 rounded-2xl p-6 md:p-8 space-y-8 text-neutral-300">
          {language === "en" ? <EnglishContent /> : <FrenchContent />}
        </div>
      </div>

      <Footer />
    </div>
  );
}

function EnglishContent() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">1. Preamble</h2>
        <p>
          Thyrotracks places the utmost importance on protecting your personal data and ensuring 
          compliance with Regulation (EU) 2016/679 – the General Data Protection Regulation 
          (&quot;GDPR&quot;).
        </p>
        <p>
          This Privacy Policy is intended to provide you with clear and transparent information 
          regarding:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>The personal data we collect;</li>
          <li>The purposes for which we collect such data and the legal basis for doing so;</li>
          <li>How your data is processed, secured, and retained;</li>
          <li>Your rights and how to exercise them;</li>
          <li>Who may access your data;</li>
          <li>Our use of cookies.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">2. Principles of Data Processing</h2>
        <p>
          In accordance with the GDPR, all data processing operations carried out by Thyrotracks 
          comply with the following principles:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Lawfulness, fairness, and transparency: Data is processed lawfully, fairly, and transparently.</li>
          <li>Purpose limitation: Data is collected for specific, explicit, and legitimate purposes.</li>
          <li>Data minimization: Only data that is strictly necessary is collected.</li>
          <li>Accuracy: Inaccurate data is updated or corrected.</li>
          <li>Storage limitation: Data is retained only for as long as necessary for the stated purposes.</li>
          <li>Security: Appropriate technical and organizational measures are implemented to ensure the confidentiality, integrity, and availability of your data.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">3. Data Collected and Purposes</h2>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">3.1 – Types of Data Collected</h3>
          <p>
            As part of using our services (mobile application, web application, website), we collect 
            the following categories of data:
          </p>
          
          <div className="space-y-2">
            <h4 className="text-lg font-medium text-white">Identification Data</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>First and last name, gender, date of birth</li>
              <li>Email address, phone number, mailing address</li>
              <li>Login credentials</li>
            </ul>
          </div>
          
          <div className="space-y-2">
            <h4 className="text-lg font-medium text-white">Browsing Data</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>IP address, date/time of connection, device type, operating system, navigation logs</li>
            </ul>
          </div>
          
          <div className="space-y-2">
            <h4 className="text-lg font-medium text-white">Location Data</h4>
            <p>
              When certain features are enabled (e.g., appointment reminders), approximate location data 
              may be used but is never stored.
            </p>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">3.2 – Purposes of Data Processing</h3>
          <p>The data collected is used to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Create, manage, and secure your user account</li>
            <li>Enable personalized health monitoring based on recommended care protocols</li>
            <li>Facilitate communication and collaboration between you and your physician</li>
            <li>Manage your health agenda (reminders, lab tests, ultrasounds, etc.)</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">3.3 – Legal Basis for Processing</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Consent: For processing health-related data, newsletters, or participation in research</li>
            <li>Contractual necessity: For providing access to the platform, creating user accounts, and delivering personalized services</li>
            <li>Legal obligations: For securely storing health data (HDS-compliant hosting)</li>
            <li>Legitimate interest: For continuous improvement of the service and user support</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">4. Data Controller</h2>
        <p>The data controller is:</p>
        <p>
          Thyrotracks, a simplified joint-stock company (SAS) with a share capital of €1,000, 
          registered with the Paris Trade and Companies Register under registration number 
          (pending).
        </p>
        <p>Represented by its President (to be confirmed).</p>
        <p>
          For all inquiries: <a href="mailto:contact@thyrotracks.com" className="text-accent-cyan hover:underline">contact@thyrotracks.com</a>
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">5. User Rights</h2>
        <p>
          In accordance with the GDPR, you have the following rights regarding your personal data:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Right of access: Obtain a copy of your personal data</li>
          <li>Right to rectification: Correct inaccurate or outdated data</li>
          <li>Right to erasure: Request the deletion of your data (subject to legal retention obligations)</li>
          <li>Right to data portability: Receive your data in a structured, commonly used, machine-readable format</li>
          <li>Right to restriction or objection: Restrict or object to certain processing operations under specific conditions</li>
          <li>Right to withdraw consent: At any time, for processing based on consent</li>
          <li>Right to define post-mortem directives: Regarding the handling of your data after your death</li>
          <li>Right to lodge a complaint: With the French Data Protection Authority (CNIL) – <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-accent-cyan hover:underline">www.cnil.fr</a></li>
        </ul>
        <p>
          To exercise your rights: <a href="mailto:contact@thyrotracks.com" className="text-accent-cyan hover:underline">contact@thyrotracks.com</a>
        </p>
        <p className="italic">Proof of identity may be required.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">6. Data Hosting</h2>
        <p>
          Your health data is hosted in France by a certified Health Data Hosting (HDS) provider:
          OVH Groupe, 2 rue Kellermann, 59100 Roubaix, France.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">7. Cookies</h2>
        <p>
          When browsing our website (thyrotracks.com), cookies may be stored on your device. These include:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Strictly necessary cookies: For proper functioning of the website</li>
          <li>Analytics cookies: For anonymous traffic measurement (e.g., Google Analytics or equivalent)</li>
          <li>Customization cookies: Activated only with your consent</li>
        </ul>
        <p>
          You can manage your cookie preferences at any time via the consent banner or your browser settings.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">8. Policy Updates</h2>
        <p>
          Thyrotracks reserves the right to update this Privacy Policy at any time to reflect legal, 
          technical, or functional changes.
        </p>
        <p className="font-medium">Last updated: June 25, 2025</p>
        <p>
          We encourage you to review this page regularly. In the event of significant changes, we will 
          notify you by email or through the platform.
        </p>
      </section>
    </div>
  );
}

function FrenchContent() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">1. Préambule</h2>
        <p>
          Thyrotracks attache une importance primordiale à la protection de vos données personnelles 
          et au respect du Règlement Général sur la Protection des Données (UE) 2016/679 (« RGPD »).
        </p>
        <p>
          La présente politique vise à vous informer de manière claire et transparente sur :
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Les données personnelles que nous collectons ;</li>
          <li>Les finalités de cette collecte et leur base légale ;</li>
          <li>La manière dont ces données sont traitées, sécurisées, conservées ;</li>
          <li>Vos droits et comment les exercer ;</li>
          <li>Les destinataires de vos données ;</li>
          <li>L&rsquo;utilisation des cookies.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">2. Principes de traitement</h2>
        <p>
          Conformément au RGPD, les traitements opérés par Thyrotracks respectent les principes 
          suivants :
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Licéité, loyauté, transparence : les données sont traitées de manière licite et transparente ;</li>
          <li>Finalité déterminée : elles sont collectées pour des finalités explicites, légitimes et déterminées à l&rsquo;avance ;</li>
          <li>Minimisation : seules les données strictement nécessaires sont collectées ;</li>
          <li>Exactitude : nous mettons à jour les données inexactes ;</li>
          <li>Limitation de conservation : les données sont conservées uniquement le temps nécessaire à la finalité du traitement ;</li>
          <li>Sécurité : nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour garantir leur confidentialité, intégrité et disponibilité.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">3. Données collectées et finalités</h2>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">3.1 – Typologies de données collectées</h3>
          <p>
            Dans le cadre de l&rsquo;utilisation de nos services (application mobile, application web, site 
            internet), nous collectons :
          </p>
          
          <div className="space-y-2">
            <h4 className="text-lg font-medium text-white">Données d&rsquo;identification</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Nom, prénom, genre, date de naissance</li>
              <li>Adresse e-mail, téléphone, adresse postale</li>
              <li>Identifiants de connexion</li>
            </ul>
          </div>
          
          <div className="space-y-2">
            <h4 className="text-lg font-medium text-white">Données de navigation</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Adresse IP, date/heure de connexion, type de terminal, système d&rsquo;exploitation, logs de navigation</li>
            </ul>
          </div>
          
          <div className="space-y-2">
            <h4 className="text-lg font-medium text-white">Données de localisation</h4>
            <p>
              Lors de l&rsquo;activation de certaines fonctionnalités (comme les rappels liés à des rendez-vous 
              de suivi), une localisation approximative peut être utilisée mais n&rsquo;est jamais stockée.
            </p>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">3.2 – Finalités des traitements</h3>
          <p>Les données collectées sont utilisées pour :</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Créer, gérer et sécuriser votre compte utilisateur</li>
            <li>Permettre le suivi de votre santé selon les protocoles recommandés</li>
            <li>Faciliter la collaboration entre vous et votre médecin via l&rsquo;application</li>
            <li>Gérer votre agenda santé (rappels, bilans, écho...)</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">3.3 – Base légale des traitements</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Consentement : pour les données de santé, les newsletters ou la participation à la recherche</li>
            <li>Exécution d&rsquo;un contrat : accès à la plateforme, création de compte, suivi personnalisé</li>
            <li>Obligation légale : conservation sécurisée des données de santé (hébergement HDS)</li>
            <li>Intérêt légitime : amélioration continue du service et du suivi des utilisateurs</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">4. Responsable du traitement</h2>
        <p>Le responsable du traitement est :</p>
        <p>
          Thyrotracks, société par actions simplifiée au capital de 1.000€, immatriculée au RCS de 
          Paris sous le n° en cours
        </p>
        <p>Représentée par son président, en cours.</p>
        <p>
          Pour toute question : <a href="mailto:contact@thyrotracks.com" className="text-accent-cyan hover:underline">contact@thyrotracks.com</a>
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">5. Droits des utilisateurs</h2>
        <p>
          Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles :
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Droit d&rsquo;accès : obtenir une copie de vos données</li>
          <li>Droit de rectification : corriger les données inexactes</li>
          <li>Droit à l&rsquo;effacement : demander la suppression de vos données (sauf obligation légale de conservation)</li>
          <li>Droit à la portabilité : récupérer vos données sous format structuré</li>
          <li>Droit à la limitation ou opposition : dans certains cas, limiter ou refuser un traitement</li>
          <li>Droit de retirer votre consentement à tout moment</li>
          <li>Droit de définir des directives sur le sort de vos données après votre décès</li>
          <li>Droit d&rsquo;introduire une réclamation auprès de la CNIL : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-accent-cyan hover:underline">www.cnil.fr</a></li>
        </ul>
        <p>
          Pour exercer vos droits : <a href="mailto:contact@thyrotracks.com" className="text-accent-cyan hover:underline">contact@thyrotracks.com</a>
        </p>
        <p className="italic">Une preuve d&rsquo;identité pourra vous être demandée.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">6. Hébergement des données</h2>
        <p>
          Vos données de santé sont hébergées en France, par un prestataire certifié Hébergeur de 
          Données de Santé (HDS) : OVH Groupe, 2 rue Kellermann, 59100 Roubaix.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">7. Cookies</h2>
        <p>
          Lors de votre navigation sur le site thyrotracks.com, des cookies peuvent être installés sur 
          votre navigateur :
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Cookies strictement nécessaires au fonctionnement</li>
          <li>Cookies de mesure d&rsquo;audience (Google Analytics ou équivalent anonymisé)</li>
          <li>Cookies de personnalisation (avec votre consentement)</li>
        </ul>
        <p>
          Vous pouvez paramétrer vos préférences à tout moment depuis le bandeau de 
          consentement ou en modifiant les réglages de votre navigateur.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">8. Modifications de la politique</h2>
        <p>
          Thyrotracks peut à tout moment mettre à jour la présente Politique pour refléter les 
          évolutions légales, techniques ou fonctionnelles du service.
        </p>
        <p className="font-medium">Dernière mise à jour : 25 juin 2025</p>
        <p>
          Nous vous invitons à consulter cette page régulièrement. En cas de changement majeur, 
          nous vous en informerons par email ou au sein de l&rsquo;application.
        </p>
      </section>
    </div>
  );
}
