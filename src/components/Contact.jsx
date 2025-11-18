import { motion } from 'framer-motion'

export default function Contact(){
  return (
    <section id="contact" className="py-28">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">Let’s build something great</h2>
        <p className="text-slate-300/90 mb-8">Have an idea or role I’d be perfect for? I’m currently taking on select projects and open to interesting opportunities.</p>
        <motion.a whileHover={{ scale: 1.03 }} href="mailto:hi@example.com" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-600/20">
          Email me
        </motion.a>
      </div>
    </section>
  )
}
