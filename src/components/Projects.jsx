import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Voice Agent Platform',
    desc: 'Realtime voice assistant with streaming transcription, tools, and memory.',
    tags: ['LLM', 'WebRTC', 'Agents'],
    link: '#'
  },
  {
    title: 'RAG Search Engine',
    desc: 'Hybrid search with embeddings, reranking, and analytics.',
    tags: ['RAG', 'Vector DB', 'Next.js'],
    link: '#'
  },
  {
    title: 'Design System',
    desc: 'Component library with theming, tokens, and motion primitives.',
    tags: ['React', 'Storybook', 'Framer Motion'],
    link: '#'
  }
]

export default function Projects(){
  return (
    <section id="projects" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-10">Featured projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.a key={idx} href={p.link} target="_blank" rel="noreferrer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} whileHover={{ y: -6 }} className="group p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10 block">
              <div className="h-36 rounded-xl bg-gradient-to-br from-fuchsia-500/20 via-indigo-500/20 to-cyan-500/20 border border-white/10 mb-4" />
              <h3 className="text-white font-semibold text-lg mb-1">{p.title}</h3>
              <p className="text-slate-300/80 text-sm">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t,i)=> (
                  <span key={i} className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
