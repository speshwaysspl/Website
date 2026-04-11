import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/animations";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Terms of Service | Speshway Solutions</title>
        <meta name="description" content="Terms of Service for Speshway Solutions Private Limited" />
      </Helmet>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 leading-tight">Terms of Service</h1>
              <p className="text-xl text-muted-foreground">
                The guidelines and agreements for using Speshway Solutions services.
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
                
                <p className="text-lg leading-relaxed italic">
                  Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Speshway Solutions website (the "Service") operated by Speshway Solutions Private Limited ("us", "we", or "our").
                </p>

                <section className="space-y-4">
                  <h2 className="text-3xl font-bold text-foreground">1. Acceptance of Terms</h2>
                  <p className="leading-relaxed">
                    By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service. These Terms apply to all visitors, users, and others who access or use the Service.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-3xl font-bold text-foreground">2. Intellectual Property</h2>
                  <p className="leading-relaxed">
                    The Service and its original content, features, and functionality are and will remain the exclusive property of <strong>Speshway Solutions Private Limited</strong> and its licensors. The Service is protected by copyright, trademark, and other laws of both India and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Speshway Solutions Private Limited.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-3xl font-bold text-foreground">3. Links To Other Web Sites</h2>
                  <p className="leading-relaxed">
                    Our Service may contain links to third-party web sites or services that are not owned or controlled by Speshway Solutions Private Limited. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party web sites or services. You further acknowledge and agree that Speshway Solutions Private Limited shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-3xl font-bold text-foreground">4. Limitation of Liability</h2>
                  <p className="leading-relaxed">
                    In no event shall Speshway Solutions Private Limited, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-3xl font-bold text-foreground">5. Disclaimer</h2>
                  <p className="leading-relaxed">
                    Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-3xl font-bold text-foreground">6. Governing Law</h2>
                  <p className="leading-relaxed">
                    These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                  </p>
                </section>

                <section className="pt-10 border-t border-border">
                  <h2 className="text-3xl font-bold text-foreground mb-6">Contact Us</h2>
                  <p className="mb-6">
                    If you have any questions about these Terms, please reach out to us:
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

export default TermsOfService;
