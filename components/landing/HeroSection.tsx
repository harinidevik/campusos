"use client";

import { motion } from "framer-motion";
import HeroBackground from "./HeroBackground";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const float = {
  animate: {
    y: [0, -10, 0],
    transition: {
      repeat: Infinity,
      duration: 4,
      ease: "easeInOut",
    },
  },
};

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] min-h-screen flex items-center justify-center">

      <HeroBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white backdrop-blur">
            🚀 New version is out →
          </div>

          <h1 className="mt-10 text-6xl font-black leading-none text-white md:text-8xl">
            Manage Your
            <br />
            Campus
            <span className="text-orange-500"> With Intelligence</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-zinc-400">
            AI-powered campus management software for modern educational
            institutions.
          </p>

          <div className="mt-10 flex justify-center gap-5">
            <button className="rounded-full bg-orange-500 px-8 py-4 text-white font-semibold hover:bg-orange-600 transition">
              Get Started
            </button>

            <button className="rounded-full border border-white/20 px-8 py-4 text-white">
              Watch Demo
            </button>
          </div>

        </motion.div>

        <motion.div
          variants={float}
          animate="animate"
          className="mx-auto mt-24 max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
        >
          <div className="h-72 rounded-2xl bg-gradient-to-br from-orange-500/30 to-zinc-900" />
        </motion.div>

        <div className="mt-10 text-zinc-500">
          Trusted by 200+ Institutions
        </div>

      </div>

    </section>
  );
}