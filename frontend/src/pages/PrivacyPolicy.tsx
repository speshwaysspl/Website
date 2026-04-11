import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/animations";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Privacy Policy | Speshway Solutions</title>
        <meta name="description" content="Privacy Policy for Speshway Solutions Private Limited" />
      </Helmet>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 leading-tight">Privacy Policy</h1>
              <p className="text-xl text-muted-foreground">
                How we protect and manage your data at Speshway Solutions.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <main className="flex-grow container mx-auto px-4 py-10">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal delay={0.2}>
            <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border shadow-xl">
              <div className="prose prose-lg max-w-none dark:prose-invert text-muted-foreground space-y-10">
                <div className="flex items-center justify-between border-b border-border pb-6">
                  <p className="text-sm font-medium uppercase tracking-wider text-primary">Last updated: {new Date().toLocaleDateString()}</p>
                </div>
                
                <section className="space-y-4">
                  <h2 className="text-3xl font-bold text-foreground">Introduction</h2>
                  <p className="leading-relaxed">
                    Welcome to <strong>Speshway Solutions Private Limited</strong>. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-3xl font-bold text-foreground">The Data We Collect About You</h2>
                  <p className="leading-relaxed">
                    Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="p-4 rounded-lg bg-secondary/30 border border-border">
                      <h4 className="font-bold text-foreground mb-1">Identity Data</h4>
                      <p className="text-sm">Includes first name, last name, username or similar identifier.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-secondary/30 border border-border">
                      <h4 className="font-bold text-foreground mb-1">Contact Data</h4>
                      <p className="text-sm">Includes email address and telephone numbers.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-secondary/30 border border-border">
                      <h4 className="font-bold text-foreground mb-1">Technical Data</h4>
                      <p className="text-sm">Includes IP address, browser type, location, and device technology.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-secondary/30 border border-border">
                      <h4 className="font-bold text-foreground mb-1">Usage Data</h4>
                      <p className="text-sm">Includes information about how you use our website and services.</p>
                    </div>
                  </div>
                </section>

                <section className="space-y-4">
                  <h2 className="text-3xl font-bold text-foreground">How We Use Your Personal Data</h2>
                  <p className="leading-relaxed">
                    We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span>To provide and maintain our Service, including monitoring usage.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span>To manage your account and registration as a user.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span>For the performance of a contract and development of products.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span>To contact you via email, telephone, or SMS regarding updates.</span>
                    </li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-3xl font-bold text-foreground">Data Security</h2>
                  <p className="leading-relaxed">
                    We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-3xl font-bold text-foreground">Your Legal Rights</h2>
                  <p className="leading-relaxed">
                    Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.
                  </p>
                </section>

                <section className="pt-10 border-t border-border">
                  <h2 className="text-3xl font-bold text-foreground mb-6">Contact Us</h2>
                  <p className="mb-6">
                    If you have any questions about this Privacy Policy or our privacy practices, please reach out to us:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                      <p className="text-sm font-semibold text-primary uppercase mb-2">Email Support</p>
                      <a href="mailto:info@speshway.com" className="text-xl font-bold text-foreground hover:text-primary transition-colors">info@speshway.com</a>
                    </div>
                    <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                      <p className="text-sm font-semibold text-primary uppercase mb-2">Office Address</p>
                      <p className="text-foreground font-medium">T-Hub, Plot No 1/C, Sy No 83/1, Raidurgam, Knowledge City Rd, panmaktha, Hyderabad, Serilingampalle (M), Telangana 500032</p>
                    </div>
                  </div>
                </section>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
