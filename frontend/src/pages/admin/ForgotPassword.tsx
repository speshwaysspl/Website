import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import api from "@/lib/api";
import { Eye, EyeOff, Mail, KeyRound, ShieldCheck } from "lucide-react";
import { ScrollReveal } from "@/components/animations";
import { Helmet } from 'react-helmet-async';

const ForgotPassword = () => {
  const { toast } = useToast();
  const [step, setStep] = useState<"request" | "verify" | "reset">("request");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    if (cooldown <= 0) return;
    const id = setInterval(() => setCooldown((c) => (c > 0 ? c - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, [cooldown]);

  const sendOtp = async () => {
    if (!email.trim()) {
      toast({ title: "Email required", description: "Enter your email", variant: "destructive" });
      return;
    }
    setIsSending(true);
    try {
      await api.post("/auth/forgot/request-otp", { email: email.trim() });
      toast({ title: "OTP sent", description: "Check your email for the OTP" });
      setStep("verify");
      setCooldown(30);
    } catch (error: any) {
      toast({ title: "Failed to send OTP", description: error.response?.data?.message || "Try again" , variant: "destructive" });
    } finally {
      setIsSending(false);
    }
  };

  const verifyOtp = async () => {
    if (!otp.trim()) {
      toast({ title: "Enter OTP", variant: "destructive" });
      return;
    }
    setIsResetting(true);
    try {
      await api.post("/auth/forgot/verify", { email: email.trim(), otp: otp.trim() });
      toast({ title: "OTP verified", description: "You can set a new password" });
      setStep("reset");
    } catch (error: any) {
      toast({ title: "Invalid OTP", description: error.response?.data?.message || "Try again", variant: "destructive" });
    } finally {
      setIsResetting(false);
    }
  };

  const resetPassword = async () => {
    if (!otp.trim() || !password.trim()) {
      toast({ title: "OTP and new password required", variant: "destructive" });
      return;
    }
    setIsResetting(true);
    try {
      await api.post("/auth/forgot/reset", { email: email.trim(), otp: otp.trim(), password });
      toast({ title: "Password updated", description: "You can now sign in" });
      window.location.href = "/admin/login";
    } catch (error: any) {
      toast({ title: "Reset failed", description: error.response?.data?.message || "Invalid OTP or expired", variant: "destructive" });
    } finally {
      setIsResetting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Admin – Forgot Password | Speshway Solutions</title>
        <meta name="robots" content="noindex,nofollow" />
        <link rel="canonical" href="https://www.speshway.com/admin/forgot-password" />
      </Helmet>
      <Navbar />

      <section className="pt-40 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <ScrollReveal>
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border">
              <div className="text-center mb-6">
                <h1 className="text-3xl font-bold text-foreground mb-2">Forgot Password</h1>
                <p className="text-muted-foreground">Reset your admin account password</p>
              </div>

              {step === "request" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <div className="relative">
                      <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full pl-9"
                      />
                      <Mail size={16} className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    </div>
                  </div>
                  <Button className="w-full" onClick={sendOtp} disabled={isSending}>
                    {isSending ? "Sending..." : "Send OTP"}
                  </Button>
                </div>
              )}

              {step === "verify" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">OTP</label>
                    <div className="relative">
                      <Input
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value.slice(0,6))}
                        placeholder="Enter 6-digit OTP"
                        className="w-full pl-9"
                      />
                      <KeyRound size={16} className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    </div>
                    <div className="mt-2 flex items-center justify-between text-sm">
                      <Button variant="secondary" size="sm" onClick={verifyOtp} disabled={isResetting}>Verify OTP</Button>
                      <Button variant="ghost" size="sm" onClick={sendOtp} disabled={cooldown > 0 || isSending}>
                        {cooldown > 0 ? `Resend in ${cooldown}s` : "Resend OTP"}
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {step === "reset" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">New Password</label>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter new password"
                        className="w-full pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((v) => !v)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded hover:bg-secondary/50"
                      >
                        {showPassword ? <EyeOff size={18} className="text-muted-foreground" /> : <Eye size={18} className="text-muted-foreground" />}
                      </button>
                    </div>
                  </div>

                  <Button className="w-full" onClick={resetPassword} disabled={isResetting}>
                    {isResetting ? "Updating..." : "Reset Password"}
                  </Button>
                  <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                    <ShieldCheck size={14} />
                    <span>OTP verification protects your account</span>
                  </div>
                </div>
              )}
            </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForgotPassword;
