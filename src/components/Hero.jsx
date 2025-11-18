import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/50 to-slate-950/80 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-fuchsia-300/80 bg-white/5 rounded-full px-4 py-2 border border-white/10">Building AI • Software Engineer</p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-white">
            Crafting intelligent products with delightful experiences
          </h1>
          <p className="mt-6 text-slate-200/80 max-w-2xl mx-auto">
            I design, build, and deploy AI-powered applications end-to-end — from model-driven backends to modern, animated interfaces.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a href="#projects" className="px-5 py-3 rounded-full bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-600/20 hover:opacity-90 transition">See my work</a>
            <a href="#contact" className="px-5 py-3 rounded-full bg-white/10 text-white backdrop-blur border border-white/20 hover:bg-white/20 transition">Contact me</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
