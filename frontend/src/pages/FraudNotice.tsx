import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InternalLinks from "@/components/InternalLinks";
import { Card } from "@/components/ui/card";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  ShieldAlert, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  Mail, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Youtube,
  Building, 
  Search, 
  ChevronRight, 
  FileCheck, 
  Lock, 
  Video, 
  ArrowRight,
  Shield,
  Smartphone
} from "lucide-react";

const FraudNotice = () => {
  const [emailInput, setEmailInput] = useState("");
  const [verificationResult, setVerificationResult] = useState<null | {
    status: 'official' | 'scam' | 'invalid';
    title: string;
    description: string;
  }>(null);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const email = emailInput.trim().toLowerCase();
    
    if (!email) {
      setVerificationResult(null);
      return;
    }

    // Basic email check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setVerificationResult({
        status: 'invalid',
        title: "Invalid Email Format",
        description: "Please enter a fully qualified email address (e.g. recruiter@speshway.com) to verify."
      });
      return;
    }

    const domain = email.split('@')[1];

    if (domain === 'speshway.com') {
      setVerificationResult({
        status: 'official',
        title: "VERIFIED OFFICIAL DOMAIN",
        description: "This is a legitimate Speshway Solutions email address. This communication is secure, authentic, and safe to trust."
      });
    } else {
      setVerificationResult({
        status: 'scam',
        title: "ALERT: UNOFFICIAL DOMAIN",
        description: `WARNING! Speshway Solutions operates exclusively under the "speshway.com" domain. Emails from "@${domain}" are NOT official and are highly likely to be a recruitment scam.`
      });
    }
  };

  const scamSteps = [
    {
      step: "01",
      title: "Unsolicited Contact",
      desc: "Scammers reach out via WhatsApp, Telegram, or unofficial Gmails offering entry-level or remote jobs (like 'Data Entry' or 'App Reviewer') with highly inflated compensation.",
      glow: "group-hover:border-red-500/30 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.15)]"
    },
    {
      step: "02",
      title: "Immediate 'Interview'",
      desc: "They conduct a fake interview via chat platforms or send a simple questionnaire, bypassing technical assessments, and then immediately extend a job offer.",
      glow: "group-hover:border-red-500/30 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.15)]"
    },
    {
      step: "03",
      title: "Rapid Offer Letter",
      desc: "A professionally designed (but entirely fake) offer letter is issued, often misusing Speshway's registered Hyderabad address, registration numbers, and logo.",
      glow: "group-hover:border-red-500/30 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.15)]"
    },
    {
      step: "04",
      title: "The Demand for Fees",
      desc: "They ask you to transfer funds for 'security deposits', 'laptop insurance', or 'mandatory training materials'. Speshway has a 100% zero-fee recruitment policy.",
      glow: "group-hover:border-red-500/30 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.15)]"
    }
  ];

  const safetyRules = [
    {
      icon: <Lock className="w-6 h-6 text-red-400" />,
      title: "100% Zero Fees",
      desc: "Speshway Solutions never requests security deposits, laptop configuration charges, background check fees, or training payments at any stage."
    },
    {
      icon: <Mail className="w-6 h-6 text-indigo-400" />,
      title: "Official @speshway.com domain",
      desc: "All official hiring communications, online tests, and job offer announcements come strictly from verified @speshway.com email addresses."
    },
    {
      icon: <Video className="w-6 h-6 text-emerald-400" />,
      title: "Rigorous Video Interviews",
      desc: "We never extend offers solely via text message questionnaire. Our process includes thorough face-to-face video reviews by technical managers."
    },
    {
      icon: <Building className="w-6 h-6 text-sky-400" />,
      title: "Physical Hub Operations",
      desc: "Our primary hub is at T-Hub Phase 2, Knowledge City, Hyderabad. Scammers often falsify remote listings without verifiable technical oversight."
    }
  ];

  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-red-500/30 selection:text-white overflow-x-hidden font-sans">
      <Helmet>
        <title>Speshway Solutions: Real or Fake? | Official Verification & Fraud Alert</title>
        <meta name="description" content="Is Speshway Solutions real or fake? Get official verification here. Learn how to identify fraudulent job offers and avoid recruitment scams. Speshway Solutions is a registered IT company in Hyderabad." />
        <meta name="keywords" content="Speshway Solutions real or fake, is speshway real, speshway solutions legitimacy, speshway solutions fake, recruitment scam, Speshway Solutions, job offer verification, speshway solutions official verification" />
        <link rel="canonical" href="https://speshway.com/fraud-notice" />
      </Helmet>

      <Navbar />

      {/* Cyber Grid Hero Banner */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden border-b border-white/5">
        {/* Ambient Warning Blooms */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none" />
        
        {/* Subtle dot matrix grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.08),rgba(255,255,255,0))]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(239,68,68,0.1)]">
                <ShieldAlert className="w-3.5 h-3.5" /> Cyber Security & Legitimacy Hub
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] bg-gradient-to-b from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent">
                Is Speshway Solutions <br />
                <span className="text-red-500 bg-gradient-to-r from-red-500 to-rose-400 bg-clip-text text-transparent">Real or Fake?</span>
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                Speshway Solutions Private Limited is a registered IT services firm operating from T-Hub Hyderabad. Verify recruitment authenticity instantly using our certified security tool below.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Interactive Domain Verification Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <Card className="p-8 md:p-10 bg-white/[0.01] border border-white/5 backdrop-blur-2xl rounded-[2rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-transparent pointer-events-none" />
                
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 flex items-center justify-center gap-2">
                  <Shield className="w-7 h-7 text-red-500 animate-pulse" /> Domain Authenticator
                </h2>
                <p className="text-center text-sm text-neutral-400 mb-8 max-w-lg mx-auto">
                  Type the exact email address of the recruiter who contacted you to check if they are verified.
                </p>

                <form onSubmit={handleVerify} className="space-y-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="e.g. hr@speshway.com or recruiter@gmail.com"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      className="w-full h-14 pl-12 pr-4 rounded-2xl bg-white/[0.02] border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all font-medium"
                    />
                    <Search className="w-5 h-5 text-neutral-500 absolute left-4 top-1/2 -translate-y-1/2" />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full h-14 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-extrabold text-sm uppercase tracking-wider rounded-2xl transition-all shadow-xl shadow-red-900/10"
                  >
                    Verify Authenticity
                  </Button>
                </form>

                {verificationResult && (
                  <div className="mt-8 animate-in fade-in slide-in-from-top-4 duration-300">
                    {verificationResult.status === 'official' ? (
                      <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.05)]">
                        <h4 className="font-bold flex items-center gap-2 text-base text-emerald-400">
                          <ShieldCheck className="w-5 h-5 shrink-0" /> {verificationResult.title}
                        </h4>
                        <p className="text-xs mt-2 text-emerald-200/80 leading-relaxed font-semibold">
                          {verificationResult.description}
                        </p>
                      </div>
                    ) : verificationResult.status === 'scam' ? (
                      <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/20 text-red-300 shadow-[0_0_20px_rgba(239,68,68,0.05)] animate-shake">
                        <h4 className="font-bold flex items-center gap-2 text-base text-red-400">
                          <AlertTriangle className="w-5 h-5 shrink-0" /> {verificationResult.title}
                        </h4>
                        <p className="text-xs mt-2 text-red-200/80 leading-relaxed font-semibold">
                          {verificationResult.description}
                        </p>
                      </div>
                    ) : (
                      <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 text-amber-300">
                        <h4 className="font-bold flex items-center gap-2 text-base text-amber-400">
                          <ShieldAlert className="w-5 h-5 shrink-0" /> {verificationResult.title}
                        </h4>
                        <p className="text-xs mt-2 text-amber-200/80 leading-relaxed">
                          {verificationResult.description}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Anatomy of a Recruitment Scam */}
      <section className="py-16 md:py-24 border-t border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
                Anatomy of a Recruitment Scam
              </h2>
              <p className="text-neutral-400 text-sm md:text-base max-w-lg mx-auto">
                Understanding their patterns is the ultimate way to protect your personal details and savings.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {scamSteps.map((step, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <Card className={`p-6 h-full bg-black/40 border border-white/5 backdrop-blur-xl hover:border-red-500/20 rounded-3xl transition-all duration-500 group flex flex-col justify-between ${step.glow}`}>
                  <div>
                    <span className="text-3xl font-black text-red-500/20 group-hover:text-red-500/40 transition-colors duration-500 mb-6 block">
                      {step.step}
                    </span>
                    <h3 className="text-lg font-bold mb-3 group-hover:text-white transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                      {step.desc}
                    </p>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Rules Grid */}
      <section className="py-16 md:py-24 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
                Recruitment Safety Rules
              </h2>
              <p className="text-neutral-400 text-sm md:text-base max-w-lg mx-auto">
                Speshway operates in complete transparency. Memorize these guidelines before proceeding with any technical assessment.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {safetyRules.map((rule, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="p-8 border border-white/5 bg-white/[0.01] hover:border-indigo-500/20 rounded-3xl transition-all duration-500 flex gap-6 items-start">
                  <div className="p-3 bg-white/5 rounded-2xl border border-white/10 shrink-0">
                    {rule.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-white">
                      {rule.title}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {rule.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Official Handles & Verification Hub */}
      <section className="py-16 md:py-24 border-t border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-b from-white/[0.02] to-transparent border border-white/5 backdrop-blur-3xl shadow-2xl relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-10">
                <div className="space-y-4 max-w-lg text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-extrabold">Official Social Verification</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    Some malicious actors have spread misinformed warnings on social networks. To protect yourself, only verify company posts, careers, and addresses from our official, verified accounts listed here.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 w-full md:w-auto shrink-0">
                  <a 
                    href="https://www.instagram.com/speshwaysolutionsofficial/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex flex-col items-center justify-center p-4 border border-white/5 bg-black/40 hover:bg-pink-500/5 hover:border-pink-500/20 rounded-2xl transition-all group w-32 h-28"
                  >
                    <Instagram className="w-7 h-7 text-pink-500 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-400 group-hover:text-white transition-colors mt-3">Instagram</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/speshway-solutions-pvt-ltd/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex flex-col items-center justify-center p-4 border border-white/5 bg-black/40 hover:bg-blue-500/5 hover:border-blue-500/20 rounded-2xl transition-all group w-32 h-28"
                  >
                    <Linkedin className="w-7 h-7 text-blue-500 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-400 group-hover:text-white transition-colors mt-3">LinkedIn</span>
                  </a>
                  <a 
                    href="https://x.com/SpeshwayM56509" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex flex-col items-center justify-center p-4 border border-white/5 bg-black/40 hover:bg-neutral-500/10 hover:border-neutral-500/20 rounded-2xl transition-all group w-32 h-28"
                  >
                    <Twitter className="w-7 h-7 text-neutral-300 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-400 group-hover:text-white transition-colors mt-3">Twitter (X)</span>
                  </a>
                  <a 
                    href="https://www.youtube.com/@speshwaysolutionspvtltd" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex flex-col items-center justify-center p-4 border border-white/5 bg-black/40 hover:bg-red-500/5 hover:border-red-500/20 rounded-2xl transition-all group w-32 h-28"
                  >
                    <Youtube className="w-7 h-7 text-red-500 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-400 group-hover:text-white transition-colors mt-3">YouTube</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Report Fraud Section */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <Card className="p-8 md:p-16 bg-gradient-to-br from-red-950/20 via-black to-black border-2 border-red-500/10 rounded-[2.5rem] text-center shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <ShieldAlert className="w-48 h-48 rotate-12 text-red-500" />
                </div>
                
                <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 text-red-400 flex items-center justify-center gap-3">
                  <ShieldAlert className="w-9 h-9" /> Help Us Stop Fraud
                </h3>
                <p className="text-neutral-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-10">
                  If you have been approached by scammers posing as Speshway recruiters, please do not release any personal data or make payment transfers. Immediately report their handles, WhatsApp details, or documents to our dedicated security desk.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 max-w-xl mx-auto">
                  <a 
                    href="mailto:info@speshway.com" 
                    className="w-full sm:w-auto h-14 px-8 inline-flex items-center justify-center bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-2xl transition-all duration-300 gap-2 shadow-[0_0_20px_rgba(239,68,68,0.2)] hover:shadow-[0_0_30px_rgba(239,68,68,0.4)] whitespace-nowrap"
                  >
                    <Mail className="w-5 h-5 shrink-0" /> Email Security Desk
                  </a>
                  <Button asChild variant="outline" className="w-full sm:w-auto h-14 px-8 border-white/10 hover:border-white/25 hover:bg-white/5 text-white font-bold text-xs sm:text-sm rounded-2xl transition-all duration-300 whitespace-nowrap">
                    <Link to="/contact" className="inline-flex items-center gap-1.5">
                      Submit Scam Alert <ChevronRight className="w-4 h-4 shrink-0" />
                    </Link>
                  </Button>
                </div>

                <div className="mt-12 not-prose flex justify-center">
                  <InternalLinks 
                    layout="chips"
                    title="Verified resources for job seeker safety"
                  />
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FraudNotice;
