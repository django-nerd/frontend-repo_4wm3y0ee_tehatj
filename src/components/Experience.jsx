import { motion } from 'framer-motion'

const items = [
  {
    role: 'Senior Software Engineer',
    company: 'TechCorp AI',
    period: '2022 — Present',
    points: [
      'Lead development of agentic AI features powering voice and chat experiences.',
      'Architected scalable backends and data pipelines with robust monitoring.',
      'Mentored engineers and drove UI polish with animations and accessibility.'
    ]
  },
  {
    role: 'Software Engineer',
    company: 'Startup Labs',
    period: '2019 — 2022',
    points: [
      'Shipped full‑stack apps used by thousands of users.',
      'Built design systems and component libraries for speed and consistency.',
      'Optimized performance, reducing TTI by 35% across key pages.'
    ]
  }
]

export default function Experience(){
  return (
    <section id="experience" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-10">Experience</h2>
        <div className="space-y-6">
          {items.map((item, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-white font-semibold text-xl">{item.role}</h3>
                  <p className="text-slate-300">{item.company}</p>
                </div>
                <p className="text-slate-400 text-sm">{item.period}</p>
              </div>
              <ul className="mt-4 list-disc list-inside text-slate-300/90 space-y-1">
                {item.points.map((p,i)=> <li key={i}>{p}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
