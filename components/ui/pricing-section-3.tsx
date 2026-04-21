"use client";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import { Briefcase, CheckCheck, Database, Server } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const plans = [
  {
    name: "Solo Preparer",
    description: "Perfect for independent tax preparers just getting started or running a one-person office.",
    price: 49,
    yearlyPrice: 399,
    buttonText: "Get started",
    buttonVariant: "outline" as const,
    features: [
      { text: "Up to 150 returns/season", icon: <Briefcase size={20} /> },
      { text: "Federal & state e-filing", icon: <Database size={20} /> },
      { text: "Chat & email support", icon: <Server size={20} /> },
    ],
    includes: [
      "Includes:",
      "2,000+ tax forms & schedules",
      "Real-time error checking",
      "Mobile client document app",
      "2-factor authentication",
    ],
  },
  {
    name: "Office Pro",
    description: "Best value for growing tax offices that need more capacity and advanced features.",
    price: 99,
    yearlyPrice: 799,
    buttonText: "Get started",
    buttonVariant: "outline" as const,
    features: [
      { text: "Unlimited returns", icon: <Briefcase size={20} /> },
      { text: "Bank product integration", icon: <Database size={20} /> },
      { text: "Priority support", icon: <Server size={20} /> },
    ],
    includes: [
      "Everything in Solo, plus:",
      "Spanish language forms",
      "Custom client reporting",
      "Audit support tools",
      "Academy video training",
    ],
  },
  {
    name: "Multi-Office",
    description: "Enterprise-grade platform for tax businesses managing multiple locations and large teams.",
    price: 199,
    yearlyPrice: 1599,
    popular: true,
    buttonText: "Contact Us",
    buttonVariant: "default" as const,
    features: [
      { text: "Unlimited offices", icon: <Briefcase size={20} /> },
      { text: "Centralized management", icon: <Database size={20} /> },
      { text: "Dedicated account manager", icon: <Server size={20} /> },
    ],
    includes: [
      "Everything in Office Pro, plus:",
      "Multi-office dashboard",
      "Remote desktop support",
      "Custom branding",
      "White-glove onboarding",
    ],
  },
];

const PricingSwitch = ({
  onSwitch,
  className,
}: {
  onSwitch: (value: string) => void;
  className?: string;
}) => {
  const [selected, setSelected] = useState("0");

  const handleSwitch = (value: string) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div className={cn("flex justify-center", className)}>
      <div className="relative z-10 mx-auto flex w-fit rounded-full bg-zinc-800 border border-zinc-700 p-1">
        <button
          onClick={() => handleSwitch("0")}
          className={cn(
            "relative z-10 w-fit sm:h-12 cursor-pointer h-10 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors",
            selected === "0" ? "text-white" : "text-zinc-400 hover:text-white"
          )}
        >
          {selected === "0" && (
            <motion.span
              layoutId="switch"
              className="absolute top-0 left-0 sm:h-12 h-10 w-full rounded-full border-4 shadow-sm shadow-zinc-700 border-zinc-600 bg-gradient-to-t from-zinc-600 via-zinc-500 to-zinc-400"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative">Monthly</span>
        </button>

        <button
          onClick={() => handleSwitch("1")}
          className={cn(
            "relative z-10 w-fit cursor-pointer sm:h-12 h-10 flex-shrink-0 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors",
            selected === "1" ? "text-white" : "text-zinc-400 hover:text-white"
          )}
        >
          {selected === "1" && (
            <motion.span
              layoutId="switch"
              className="absolute top-0 left-0 sm:h-12 h-10 w-full rounded-full border-4 shadow-sm shadow-zinc-700 border-zinc-600 bg-gradient-to-t from-zinc-600 via-zinc-500 to-zinc-400"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative flex items-center gap-2">
            Yearly
            <span className="rounded-full bg-blue-900/60 px-2 py-0.5 text-xs font-medium text-blue-300">
              Save 20%
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  const pricingRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
    hidden: { filter: "blur(10px)", y: -20, opacity: 0 },
  };

  const togglePricingPeriod = (value: string) =>
    setIsYearly(Number.parseInt(value) === 1);

  return (
    <div
      id="pricing"
      className="px-4 pt-20 pb-20 min-h-screen max-w-7xl mx-auto relative text-white"
      ref={pricingRef}
    >
      <article className="flex sm:flex-row flex-col sm:pb-0 pb-4 sm:items-center items-start justify-between">
        <div className="text-left mb-6">
          <h2 className="text-4xl font-medium leading-[130%] text-white mb-4">
            <VerticalCutReveal
              splitBy="words"
              staggerDuration={0.15}
              staggerFrom="first"
              reverse={true}
              containerClassName="justify-start"
              transition={{ type: "spring", stiffness: 250, damping: 40, delay: 0 }}
            >
              Plans & Pricing
            </VerticalCutReveal>
          </h2>
          <TimelineContent
            as="p"
            animationNum={0}
            timelineRef={pricingRef}
            customVariants={revealVariants}
            className="text-zinc-400 w-[80%]"
          >
            Trusted by 950+ tax offices. Choose the plan that fits your business — scale anytime.
          </TimelineContent>
        </div>

        <TimelineContent
          as="div"
          animationNum={1}
          timelineRef={pricingRef}
          customVariants={revealVariants}
        >
          <PricingSwitch onSwitch={togglePricingPeriod} className="shrink-0" />
        </TimelineContent>
      </article>

      <TimelineContent
        as="div"
        animationNum={2}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="grid md:grid-cols-3 gap-4 mx-auto bg-gradient-to-b from-zinc-800/50 to-zinc-900/50 border border-white/5 sm:p-3 rounded-lg"
      >
        {plans.map((plan, index) => (
          <TimelineContent
            as="div"
            key={plan.name}
            animationNum={index + 3}
            timelineRef={pricingRef}
            customVariants={revealVariants}
          >
            <Card
              className={`relative flex-col flex justify-between ${
                plan.popular
                  ? "scale-110 ring-2 ring-blue-500 bg-gradient-to-t from-blue-950 to-slate-900 text-white"
                  : "border border-white/10 shadow-none bg-zinc-800/40 pt-4 text-white"
              }`}
            >
              <CardContent className="pt-0">
                <div className="space-y-2 pb-3">
                  {plan.popular && (
                    <div className="pt-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="flex items-baseline">
                    <span className="text-4xl font-semibold">
                      $
                      <NumberFlow
                        format={{ currency: "USD" }}
                        value={isYearly ? plan.yearlyPrice : plan.price}
                        className="text-4xl font-semibold"
                      />
                    </span>
                    <span className={plan.popular ? "text-neutral-200 ml-1" : "text-zinc-400 ml-1"}>
                      /{isYearly ? "year" : "month"}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between">
                  <h3 className="text-3xl font-semibold mb-2">{plan.name}</h3>
                </div>
                <p className={plan.popular ? "text-sm text-neutral-200 mb-4" : "text-sm text-zinc-400 mb-4"}>
                  {plan.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-neutral-200">
                  <h4 className="font-medium text-base mb-3">{plan.includes[0]}</h4>
                  <ul className="space-y-2 font-semibold">
                    {plan.includes.slice(1).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span
                          className={
                            plan.popular
                              ? "text-white h-6 w-6 bg-neutral-600 border border-neutral-500 rounded-full grid place-content-center mt-0.5 mr-3"
                              : "text-white h-6 w-6 bg-zinc-700 border border-zinc-500 rounded-full grid place-content-center mt-0.5 mr-3"
                          }
                        >
                          <CheckCheck className="h-4 w-4" />
                        </span>
                        <span className={plan.popular ? "text-sm text-neutral-100" : "text-sm text-zinc-300"}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <button
                  className={`w-full mb-6 p-4 text-xl rounded-xl ${
                    plan.popular
                      ? "bg-gradient-to-t from-blue-400 to-blue-300 font-semibold shadow-lg shadow-blue-900 border border-blue-400 text-black"
                      : "bg-gradient-to-t from-neutral-900 to-neutral-600 shadow-lg shadow-neutral-900 border border-neutral-700 text-white"
                  }`}
                >
                  {plan.buttonText}
                </button>
              </CardFooter>
            </Card>
          </TimelineContent>
        ))}
      </TimelineContent>
    </div>
  );
}
