import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Privacy Policy | Speshway Solutions</title>
        <meta name="description" content="Privacy Policy for Speshway Solutions" />
      </Helmet>
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-20 mt-16">
        <h1 className="text-4xl font-bold mb-8 text-primary">Privacy Policy</h1>
        <div className="prose max-w-none text-muted-foreground">
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          <p className="mb-4">
            At Speshway Solutions, we take your privacy seriously. This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from our website.
          </p>
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Information We Collect</h2>
          <p className="mb-4">
            We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support.
          </p>
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">How We Use Your Information</h2>
          <p className="mb-4">
            We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect Speshway and our users.
          </p>
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@speshway.com" className="text-primary hover:underline">info@speshway.com</a>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
