import { motion, useScroll, useTransform } from 'framer-motion'
import { Code2, Cpu, Rocket } from 'lucide-react'

export default function About() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <section id="about" className="relative py-28">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_50%_0%,rgba(168,85,247,0.08),transparent)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.h2 style={{ y }} className="text-3xl sm:text-5xl font-bold text-white mb-10">
          About me
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[{
            icon: <Code2 className="w-6 h-6" />, title: 'Full‑stack engineering', desc: 'TypeScript, React, Node, Python. Pixel‑perfect UIs, reliable backends, great DX.'
          },{
            icon: <Cpu className="w-6 h-6" />, title: 'AI & ML', desc: 'LLMs, agents, vector search, RAG, orchestration, evals, and deployment.'
          },{
            icon: <Rocket className="w-6 h-6" />, title: 'Product velocity', desc: 'From idea to production quickly with quality, observability, and polish.'
          }].map((c,i)=> (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: i*0.1 }} className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10 text-slate-200">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-fuchsia-500/30 to-cyan-500/30 text-fuchsia-200 flex items-center justify-center mb-4">
                {c.icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-1">{c.title}</h3>
              <p className="text-slate-300/80 text-sm">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
