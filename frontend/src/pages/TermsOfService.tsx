import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Terms of Service | Speshway Solutions</title>
        <meta name="description" content="Terms of Service for Speshway Solutions" />
      </Helmet>
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-20 mt-16">
        <h1 className="text-4xl font-bold mb-8 text-primary">Terms of Service</h1>
        <div className="prose max-w-none text-muted-foreground">
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          <p className="mb-4">
            Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Speshway Solutions website operated by Speshway Solutions Private Limited.
          </p>
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
          </p>
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Intellectual Property</h2>
          <p className="mb-4">
            The Service and its original content, features and functionality are and will remain the exclusive property of Speshway Solutions and its licensors.
          </p>
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Links To Other Web Sites</h2>
          <p className="mb-4">
            Our Service may contain links to third-party web sites or services that are not owned or controlled by Speshway Solutions.
          </p>
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about these Terms, please contact us at <a href="mailto:info@speshway.com" className="text-primary hover:underline">info@speshway.com</a>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
