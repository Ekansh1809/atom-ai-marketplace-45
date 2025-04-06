
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Eye, Lock, Database } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-secondary/30 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-glow text-atom">Privacy Policy</span>
              </h1>
              <p className="text-muted-foreground">
                Last updated: April 1, 2025
              </p>
            </div>
          </div>
        </div>
        
        {/* Key Privacy Points */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card className="glass-card">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-atom/20 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-atom" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Token Handling</h3>
                  <p className="text-muted-foreground">
                    We implement industry-standard security measures to protect your ATOM tokens and transaction data.
                    All token transactions are encrypted and securely processed.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass-card">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-atom/20 flex items-center justify-center mb-4">
                    <Lock className="h-6 w-6 text-atom" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Wallet Safety</h3>
                  <p className="text-muted-foreground">
                    Your ATOM wallet is protected with multiple layers of security, including encryption, 
                    two-factor authentication, and continuous monitoring for suspicious activities.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass-card">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-atom/20 flex items-center justify-center mb-4">
                    <Database className="h-6 w-6 text-atom" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Data Collection</h3>
                  <p className="text-muted-foreground">
                    We collect only the information necessary to provide our services, improve user experience, 
                    and ensure compliance with applicable laws and regulations.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass-card">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-atom/20 flex items-center justify-center mb-4">
                    <Eye className="h-6 w-6 text-atom" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">No Data Resale</h3>
                  <p className="text-muted-foreground">
                    We do not sell, trade, or rent your personal information to third parties. Your data is yours, 
                    and we respect your privacy by not monetizing it.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Detailed Policy Sections */}
            <div className="space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-bold">1. Information We Collect</h2>
                <div className="pl-4 border-l-2 border-atom/30 space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg">1.1 Account Information</h3>
                    <p className="text-muted-foreground">
                      When you create a BrahmAIstra account, we collect your name, email address, and password. 
                      For developer accounts, we may also collect professional information and payment details.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg">1.2 Transaction Data</h3>
                    <p className="text-muted-foreground">
                      We collect information about the ATOM token transactions you conduct on our platform, 
                      including purchases, rentals, earnings, and withdrawals.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg">1.3 Usage Data</h3>
                    <p className="text-muted-foreground">
                      We collect data about how you use our platform, including the AI models you access, 
                      the features you use, and your interactions with the platform.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg">1.4 Technical Data</h3>
                    <p className="text-muted-foreground">
                      We collect information about your device, browser, IP address, and other technical details 
                      for security, analytics, and service improvement purposes.
                    </p>
                  </div>
                </div>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-2xl font-bold">2. How We Use Your Information</h2>
                <div className="pl-4 border-l-2 border-atom/30 space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg">2.1 Service Provision</h3>
                    <p className="text-muted-foreground">
                      We use your information to provide, maintain, and improve our platform, process transactions, 
                      and facilitate communication between users and developers.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg">2.2 Security</h3>
                    <p className="text-muted-foreground">
                      We use your information to protect your account, detect and prevent fraud, and ensure 
                      the security of our platform and its users.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg">2.3 Analytics and Improvement</h3>
                    <p className="text-muted-foreground">
                      We analyze usage patterns to better understand how our platform is used and to make 
                      improvements to enhance user experience.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg">2.4 Communication</h3>
                    <p className="text-muted-foreground">
                      We use your contact information to send you important updates, security alerts, 
                      and (with your consent) marketing communications.
                    </p>
                  </div>
                </div>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-2xl font-bold">3. Token and Wallet Security</h2>
                <div className="pl-4 border-l-2 border-atom/30 space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg">3.1 Token Protection</h3>
                    <p className="text-muted-foreground">
                      All ATOM token transactions are processed through secure protocols. We employ encryption, 
                      authentication, and other security measures to protect your tokens.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg">3.2 Wallet Access</h3>
                    <p className="text-muted-foreground">
                      Access to your ATOM wallet is protected by your account credentials and, if enabled, 
                      two-factor authentication. We recommend using strong, unique passwords and enabling 
                      all available security features.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg">3.3 Monitoring</h3>
                    <p className="text-muted-foreground">
                      We continuously monitor for suspicious activities that may indicate unauthorized access 
                      attempts or fraudulent transactions.
                    </p>
                  </div>
                </div>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-2xl font-bold">4. Data Sharing and Disclosure</h2>
                <div className="pl-4 border-l-2 border-atom/30 space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg">4.1 No Data Selling</h3>
                    <p className="text-muted-foreground">
                      We do not sell, rent, or trade your personal information to third parties for 
                      their marketing purposes or any other commercial use.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg">4.2 Service Providers</h3>
                    <p className="text-muted-foreground">
                      We may share your information with trusted service providers who help us operate our platform, 
                      such as payment processors, hosting services, and analytics providers. These providers are 
                      contractually obligated to protect your information.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg">4.3 Legal Requirements</h3>
                    <p className="text-muted-foreground">
                      We may disclose your information when required by law, such as in response to a valid legal 
                      request or to comply with our legal obligations.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg">4.4 Business Transfers</h3>
                    <p className="text-muted-foreground">
                      In the event of a merger, acquisition, or sale of assets, your information may be transferred 
                      as part of the transaction, but we will notify you before your information becomes subject to 
                      a different privacy policy.
                    </p>
                  </div>
                </div>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-2xl font-bold">5. Your Rights and Choices</h2>
                <div className="pl-4 border-l-2 border-atom/30 space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg">5.1 Account Information</h3>
                    <p className="text-muted-foreground">
                      You can review and update your account information at any time through your account settings.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg">5.2 Data Access and Portability</h3>
                    <p className="text-muted-foreground">
                      You can request a copy of the personal information we hold about you, and in certain 
                      circumstances, you can request that we transfer this information to another service provider.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg">5.3 Data Deletion</h3>
                    <p className="text-muted-foreground">
                      You can request the deletion of your account and associated personal information, 
                      subject to certain exceptions, such as information we are legally required to retain.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg">5.4 Communication Preferences</h3>
                    <p className="text-muted-foreground">
                      You can manage your communication preferences, including opting out of marketing communications, 
                      through your account settings or by following the unsubscribe instructions in our emails.
                    </p>
                  </div>
                </div>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-2xl font-bold">6. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, 
                  please contact our Data Protection Officer at privacy@brahmaistra.ai or through our contact form.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
