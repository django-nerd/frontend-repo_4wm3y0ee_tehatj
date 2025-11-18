import { motion } from 'framer-motion'

const groups = [
  { title: 'Core', items: ['TypeScript', 'React', 'Node', 'Python', 'FastAPI'] },
  { title: 'AI/ML', items: ['OpenAI', 'Transformers', 'LangChain', 'RAG', 'Vector DBs'] },
  { title: 'Cloud & Data', items: ['Vercel', 'AWS', 'Docker', 'Postgres', 'MongoDB'] },
  { title: 'Tooling', items: ['Vitest', 'Playwright', 'Storybook', 'Eslint/Prettier'] },
]

export default function Skills(){
  return (
    <section id="skills" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-10">Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {groups.map((g, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
              <h3 className="text-white font-semibold mb-3">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((t,i)=> (
                  <span key={i} className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
