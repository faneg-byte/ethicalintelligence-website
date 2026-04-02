import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Shield, Leaf, TrendingUp, Zap, Globe, Users } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="text-2xl font-bold text-accent">Ethical Intelligence</div>
          <div className="hidden md:flex gap-8">
            <Link href="/" className="hover:text-accent transition">Home</Link>
            <Link href="/products" className="hover:text-accent transition">Products</Link>
            <Link href="/services" className="hover:text-accent transition">Services</Link>
            <Link href="/about" className="hover:text-accent transition">About</Link>
          </div>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
            Request a Demo
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent" />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <p className="text-sm text-muted-foreground mb-4 tracking-wider uppercase">
              A Lignes LLC Company — Maryland, USA
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Intelligence <br />
              <span className="text-accent">That Sustains.</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Enterprise-grade AI infrastructure and sustainability consulting designed to future-proof your business. From predictive analytics to lifecycle assessment, we deliver the intelligence that drives responsible growth.
            </p>
            <div className="flex gap-4">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
                Request a Demo <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-20 bg-card/50">
        <div className="container">
          <h2 className="text-4xl font-bold mb-16 text-center">Three Pillars of Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-card border-border hover:border-accent/50 transition">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-4">B2B SaaS Solutions</h3>
              <p className="text-muted-foreground">
                Scalable, AI-driven platforms including our Lifecycle Integrated Value Matrix Engine and Soccer Prediction Engine. Built for enterprise performance.
              </p>
            </Card>
            <Card className="p-8 bg-card border-border hover:border-accent/50 transition">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-6">
                <Leaf className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-4">Sustainability Consulting</h3>
              <p className="text-muted-foreground">
                Strategic guidance to navigate complex environmental regulations, achieve ESG goals, and build genuinely sustainable business operations.
              </p>
            </Card>
            <Card className="p-8 bg-card border-border hover:border-accent/50 transition">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-4">Corporate Supply & M&A</h3>
              <p className="text-muted-foreground">
                End-to-end RFP fulfillment, wholesale vendor services, and strategic business acquisitions that align with ethical growth principles.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Ethical Intelligence Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold mb-16 text-center">Built for Enterprise. Driven by Ethics.</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <Shield className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">SOC 2 Ready</h3>
                <p className="text-muted-foreground">Enterprise-grade security compliance and audit readiness.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Globe className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Cloud-Native</h3>
                <p className="text-muted-foreground">Scalable infrastructure built for modern cloud environments.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Users className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">AI Infrastructure</h3>
                <p className="text-muted-foreground">Advanced machine learning and predictive analytics capabilities.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Leaf className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Sustainability First</h3>
                <p className="text-muted-foreground">Environmental responsibility embedded in every solution.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card/50">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Enterprise Intelligence?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a demo to see how our AI infrastructure and sustainability expertise can drive measurable impact for your organization.
          </p>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 px-8 py-6 text-lg">
            Request a Demo <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-card/30">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/products/soccer" className="hover:text-accent">Soccer Prediction Engine</Link></li>
                <li><Link href="/products/livme" className="hover:text-accent">LIVME Platform</Link></li>
                <li><Link href="/products/future" className="hover:text-accent">Future Innovations</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/services/consulting" className="hover:text-accent">Sustainability Consulting</Link></li>
                <li><Link href="/services/saas" className="hover:text-accent">B2B SaaS Integration</Link></li>
                <li><Link href="/services/supply" className="hover:text-accent">RFP Response & Supply</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about" className="hover:text-accent">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-accent">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-accent">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 Ethical Intelligence, a Lignes LLC Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
