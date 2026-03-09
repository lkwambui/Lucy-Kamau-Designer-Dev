import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IoLogoWhatsapp } from 'react-icons/io'
import { HiX } from 'react-icons/hi'

const WHATSAPP_NUM = '254799656264'

/**
 * Build a pre-filled wa.me link with a friendly opener message.
 */
function buildLink() {
  const msg =
    "Hi Lucy! 👋 I visited your portfolio and I'd love to discuss a project with you. Are you available for a quick chat?"
  return `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(msg)}`
}

/**
 * FloatingWhatsApp — Sticky bottom-right WhatsApp button.
 * Shows a small tooltip/preview bubble before the user clicks.
 */
export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* ── Preview bubble ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="bubble"
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            transition={{ type: 'spring', damping: 22, stiffness: 300 }}
            className="w-72 rounded-2xl overflow-hidden shadow-2xl
                       bg-white dark:bg-slate-800
                       border border-slate-200 dark:border-slate-700"
          >
            {/* Bubble header */}
            <div className="flex items-center gap-3 bg-[#25D366] px-4 py-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-white/20">
                <IoLogoWhatsapp size={20} className="text-white" />
              </div>
              <div className="flex-1">
                <p className="text-white font-semibold text-sm leading-tight">Lucy Kamau</p>
                <p className="text-green-100 text-xs">Typically replies within minutes</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat bubble"
                className="text-white/70 hover:text-white transition-colors"
              >
                <HiX size={17} />
              </button>
            </div>

            {/* Chat preview message */}
            <div className="px-4 py-4">
              <div className="bg-[#dcf8c6] dark:bg-[#1a3a24] rounded-xl rounded-tl-none
                              px-3 py-2.5 text-sm text-slate-800 dark:text-slate-100
                              shadow-sm inline-block max-w-full leading-relaxed">
                👋 Hi there! I'm Lucy.
                <br />
                Looking to discuss a project, need a web app built, or want to explore working together?
                <br /><br />
                Send me a message — I'd love to help! 🚀
                <span className="block text-right text-[10px] text-slate-400 mt-1">
                  LogicoreX
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="px-4 pb-4">
              <a
                href={buildLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl
                           bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-sm
                           transition-colors shadow-md"
              >
                <IoLogoWhatsapp size={18} />
                Start Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Main floating button ── */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.93 }}
        aria-label="Chat on WhatsApp"
        className="relative flex items-center justify-center
                   w-14 h-14 rounded-full
                   bg-[#25D366] hover:bg-[#1ebe5d]
                   text-white shadow-2xl
                   transition-colors duration-200"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="absolute"
            >
              <HiX size={24} />
            </motion.span>
          ) : (
            <motion.span
              key="whatsapp"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="absolute"
            >
              <IoLogoWhatsapp size={28} />
            </motion.span>
          )}
        </AnimatePresence>

        {/* Pulse ring when closed */}
        {!open && (
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />
        )}
      </motion.button>
    </div>
  )
}
