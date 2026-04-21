"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, TrendingUp, Zap, Users, Award, PlayCircle } from "lucide-react";

const pillars = [
  {
    icon: PlayCircle,
    title: "Video-First Training",
    desc: "Step-by-step lessons built around real tax workflows — not theory. Watch, apply, repeat.",
  },
  {
    icon: Zap,
    title: "Speed & Accuracy",
    desc: "Train on the same software you'll use with clients. Cut prep time and eliminate costly errors.",
  },
  {
    icon: TrendingUp,
    title: "Build a Business",
    desc: "Every module ties back to profitability — how to price, retain clients, and scale your office.",
  },
  {
    icon: Users,
    title: "Beginners Welcome",
    desc: "No prior tax knowledge required. Start from zero and reach income-ready in one season.",
  },
  {
    icon: Award,
    title: "Pro Certification",
    desc: "Complete the program and earn credentials that signal expertise to every potential client.",
  },
  {
    icon: BookOpen,
    title: "Always Up to Date",
    desc: "Tax law changes every year. Academy content is updated each season so you're never behind.",
  },
];

export default function AcademySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });

  return (
    <section
      id="academy"
      ref={ref}
      className="relative bg-gradient-to-b from-zinc-950 via-slate-900 to-blue-950 px-6 py-28 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-blue-500/20 mb-6">
            TicTacTax Academy
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6 tracking-tight">
            Master Tax Preparation<br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Through Expert Video Training
            </span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            TicTacTax Academy transforms beginners and seasoned professionals into
            confident, income-ready tax preparers. Structured lessons, real-world workflows,
            and a relentless focus on speed, accuracy, and profitability — so every hour
            you spend learning pays you back in the field.
          </p>
        </motion.div>

        {/* Pillars grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm p-7 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 border border-blue-500/20 mb-5 group-hover:bg-blue-500/25 transition-colors">
                <pillar.icon className="h-5 w-5 text-blue-400" />
              </div>
              <h3 className="text-white font-bold text-base mb-2">{pillar.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <a
            href="mailto:support@ticktaxpro.com"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-full transition-colors shadow-lg shadow-blue-900/50"
          >
            <PlayCircle className="w-5 h-5" />
            Request Video Tutorials
          </a>
          <p className="text-zinc-600 text-sm mt-4">Available for all plan holders · New content added every season</p>
        </motion.div>
      </div>
    </section>
  );
}
