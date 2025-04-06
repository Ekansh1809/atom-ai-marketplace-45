
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollText, ShieldCheck, Coins, AlertTriangle } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-secondary/30 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-glow text-atom">Terms of Service</span>
              </h1>
              <p className="text-muted-foreground">
                Last updated: April 1, 2025
              </p>
            </div>
          </div>
        </div>
        
        {/* Key Terms Points */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card className="glass-card">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-atom/20 flex items-center justify-center mb-4">
                    <ScrollText className="h-6 w-6 text-atom" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Usage of Models</h3>
                  <p className="text-muted-foreground">
                    Clear guidelines on how rented and purchased AI models can be used, 
                    including usage restrictions and intellectual property rights.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass-card">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-atom/20 flex items-center justify-center mb-4">
                    <Coins className="h-6 w-6 text-atom" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Developer Payouts</h3>
                  <p className="text-muted-foreground">
                    Detailed terms for developer revenue sharing, payout schedules, 
                    minimum withdrawal amounts, and payment processing.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass-card">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-atom/20 flex items-center justify-center mb-4">
                    <AlertTriangle className="h-6 w-6 text-atom" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Content Policies</h3>
                  <p className="text-muted-foreground">
                    Rules regarding prohibited content, responsible AI usage, 
                    and our approach to handling policy violations.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass-card">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-atom/20 flex items-center justify-center mb-4">
                    <ShieldCheck className="h-6 w-6 text-atom" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Account Security</h3>
                  <p className="text-muted-foreground">
                    User responsibilities for maintaining account security, 
                    reporting unauthorized access, and account suspension policies.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Detailed Terms Sections */}
            <div className="space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-bold">1. Agreement to Terms</h2>
                <div className="pl-4 border-l-2 border-atom/30 space-y-4">
                  <p className="text-muted-foreground">
                    By accessing or using the BrahmAIstra platform, you agree to be bound by these Terms of Service. 
                    If you do not agree to these terms, you should not use our platform.
                  </p>
                  
                  <p className="text-muted-foreground">
                    We reserve the right to modify these terms at any time. Changes will be effective immediately upon 
                    posting on our platform. Your continued use of the platform constitutes acceptance of the modified terms.
                  </p>
                </div>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-2xl font-bold">2. AI Model Usage</h2>
                <div className="pl-4 border-l-2 border-atom/30 space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg">2.1 Rental Terms</h3>
                    <p className="text-muted-foreground">
                      When you rent an AI model, you gain access for the specified rental period. The rental begins 
                      immediately upon payment and expires automatically at the end of the rental period. You may renew 
                      your rental before or after expiration.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg">2.2 Lifetime Access</h3>
                    <p className="text-muted-foreground">
                      "Lifetime Access" grants you perpetual access to the model in its current and future versions, 
                      for as long as the model remains available on BrahmAIstra. If a model is removed from the platform, 
                      we will make reasonable efforts to provide advance notice.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg">2.3 Ownership Transfer</h3>
                    <p className="text-muted-foreground">
                      When you purchase a model under "Complete Ownership Sale," you acquire all rights to the model as 
                      specified in the purchase agreement. The developer relinquishes all rights to the model, except as 
                      explicitly stated in the agreement.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg">2.4 Usage Restrictions</h3>
                    <p className="text-muted-foreground">
                      Unless explicitly permitted, you may not:
                    </p>
                    <ul className="list-disc pl-5 text-muted-foreground">
                      <li>Resell, redistribute, or sublicense access to a rented or lifetime access model</li>
                      <li>Reverse engineer, decompile, or extract the model's code or architecture</li>
                      <li>Use the model to create a substantially similar competing model</li>
                      <li>Use the model for any illegal or harmful purpose</li>
                      <li>Exceed any usage limitations specified by the model developer</li>
                    </ul>
                  </div>
                </div>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-2xl font-bold">3. Developer Terms</h2>
                <div className="pl-4 border-l-2 border-atom/30 space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg">3.1 Revenue Sharing</h3>
                    <p className="text-muted-foreground">
                      Developers receive 90% of the revenue generated from their models. BrahmAIstra retains 10% as a 
                      platform fee. Revenue is calculated based on the actual payments received from users, after 
                      payment processing fees.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg">3.2 Payout Terms</h3>
                    <p className="text-muted-foreground">
                      Earnings are credited to your ATOM wallet in real-time. You may withdraw your earnings to your 
                      designated payout method when your balance reaches the minimum withdrawal amount of 100 ATOM. 
                      Withdrawals are typically processed within 3-5 business days.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg">3.3 Model Ownership</h3>
                    <p className="text-muted-foreground">
                      By uploading a model to BrahmAIstra, you represent that you have all necessary rights to the model 
                      and are authorized to make it available on our platform. You retain ownership of your model, except 
                      in the case of "Complete Ownership Sale" transactions.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg">3.4 Model Removal</h3>
                    <p className="text-muted-foreground">
                      Developers may remove their models from the platform with 30 days' notice. However, existing 
                      rentals and lifetime access purchases will be honored for their full duration. For "Complete 
                      Ownership Sale" models, removal is at the new owner's discretion.
                    </p>
                  </div>
                </div>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-2xl font-bold">4. ATOM Tokens</h2>
                <div className="pl-4 border-l-2 border-atom/30 space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg">4.1 Token Value</h3>
                    <p className="text-muted-foreground">
                      ATOM tokens are the currency used within the BrahmAIstra platform. Each ATOM token has an approximate 
                      value of ₹10 INR, though this may fluctuate. Tokens can be purchased through our platform at the 
                      current exchange rate.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg">4.2 Token Usage</h3>
                    <p className="text-muted-foreground">
                      ATOM tokens can be used to rent or purchase AI models, access premium features, and receive payouts 
                      as a developer. Tokens are non-transferable outside the BrahmAIstra platform and cannot be exchanged 
                      between users.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg">4.3 Refunds</h3>
                    <p className="text-muted-foreground">
                      ATOM token purchases are generally non-refundable. In exceptional circumstances, such as service 
                      unavailability or model malfunction, refunds may be issued at our discretion. Model rental and 
                      purchase fees are non-refundable once access has been granted.
                    </p>
                  </div>
                </div>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-2xl font-bold">5. Content Policies</h2>
                <div className="pl-4 border-l-2 border-atom/30 space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg">5.1 Prohibited Content</h3>
                    <p className="text-muted-foreground">
                      You may not use AI models on our platform to generate, promote, or distribute:
                    </p>
                    <ul className="list-disc pl-5 text-muted-foreground">
                      <li>Illegal content or content that promotes illegal activities</li>
                      <li>Harmful, threatening, or harassing content</li>
                      <li>Content that infringes on intellectual property rights</li>
                      <li>Malware, spyware, or other malicious software</li>
                      <li>Misleading or fraudulent content</li>
                      <li>Content that violates others' privacy</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg">5.2 Responsible AI Usage</h3>
                    <p className="text-muted-foreground">
                      Users and developers are expected to use AI responsibly, considering the potential impact of their 
                      actions. This includes being transparent about AI-generated content, respecting privacy, and avoiding 
                      uses that could cause harm or perpetuate bias.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg">5.3 Policy Violations</h3>
                    <p className="text-muted-foreground">
                      We reserve the right to remove content, restrict access to models, suspend accounts, or take other 
                      appropriate action in response to policy violations. Serious or repeated violations may result in 
                      permanent account termination and forfeiture of earnings or tokens.
                    </p>
                  </div>
                </div>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-2xl font-bold">6. Account Security</h2>
                <div className="pl-4 border-l-2 border-atom/30 space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg">6.1 User Responsibilities</h3>
                    <p className="text-muted-foreground">
                      You are responsible for maintaining the security of your account, including keeping your password 
                      secure and not sharing your account credentials. We strongly recommend enabling two-factor 
                      authentication for added security.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg">6.2 Unauthorized Access</h3>
                    <p className="text-muted-foreground">
                      You must notify us immediately if you become aware of any unauthorized access to your account or 
                      other security breaches. You are responsible for all activities that occur under your account, 
                      unless you can demonstrate that the activity occurred despite your use of reasonable security measures.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg">6.3 Account Suspension</h3>
                    <p className="text-muted-foreground">
                      We may suspend or terminate your account if we detect suspicious activity, policy violations, 
                      or if required by law. In case of suspension, we will make reasonable efforts to notify you and 
                      provide an opportunity to address the issue, unless prohibited by law or if doing so would compromise 
                      platform security.
                    </p>
                  </div>
                </div>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-2xl font-bold">7. Limitation of Liability</h2>
                <div className="pl-4 border-l-2 border-atom/30 space-y-4">
                  <p className="text-muted-foreground">
                    To the maximum extent permitted by law, BrahmAIstra, its affiliates, and their respective officers, 
                    directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, 
                    or punitive damages, including but not limited to loss of profits, data, or business opportunities, 
                    arising out of or in connection with your use of the platform.
                  </p>
                  
                  <p className="text-muted-foreground">
                    Our total liability for any claims arising from or related to these Terms of Service shall not exceed 
                    the amount you have paid to BrahmAIstra in the six months preceding the claim.
                  </p>
                </div>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-2xl font-bold">8. Governing Law</h2>
                <div className="pl-4 border-l-2 border-atom/30 space-y-4">
                  <p className="text-muted-foreground">
                    These Terms of Service shall be governed by and construed in accordance with the laws of India, 
                    without regard to its conflict of law provisions. Any disputes arising under these terms shall be 
                    resolved exclusively in the courts located in Bengaluru, Karnataka, India.
                  </p>
                </div>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-2xl font-bold">9. Contact Information</h2>
                <div className="pl-4 border-l-2 border-atom/30 space-y-4">
                  <p className="text-muted-foreground">
                    If you have any questions about these Terms of Service, please contact us at legal@brahmaistra.ai 
                    or through our contact form.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
