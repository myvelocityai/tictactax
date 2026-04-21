import HeroSection from "@/components/ui/glassmorphism-trust-hero";
import AcademySection from "@/components/ui/academy-section";
import PricingSection from "@/components/ui/pricing-section-3";

export default function Home() {
  return (
    <div className="w-full bg-zinc-950">
      <HeroSection />
      <AcademySection />
      <div className="bg-gradient-to-b from-blue-950 to-zinc-950 px-4">
        <PricingSection />
      </div>
      <footer className="border-t border-white/5 px-8 py-10 text-center text-sm text-zinc-600 bg-zinc-950">
        <div className="mb-2">
          <span className="font-black text-zinc-300 text-lg">TicTac<span className="text-blue-400">Tax</span></span>
        </div>
        <p>© 2026 TicTacTax. All rights reserved. ·{" "}
          <a href="mailto:support@ticktaxpro.com" className="hover:text-blue-400 transition-colors">
            support@ticktaxpro.com
          </a>
        </p>
      </footer>
    </div>
  );
}
