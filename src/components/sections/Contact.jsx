import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiExternalLink, FiSend, FiPhone } from 'react-icons/fi'
import SectionHeader from '../ui/SectionHeader'

const CONTACT_LINKS = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'info@logicorex.co.ke',
    href: 'mailto:info@logicorex.co.ke',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '+254 799 656 264  /  +254 750 649 936',
    href: 'tel:+254799656264',
    color: 'from-green-500 to-emerald-700',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'github.com/lkwambui',
    href: 'https://github.com/lkwambui',
    color: 'from-slate-600 to-slate-800',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/lucy-kamau',
    href: 'https://www.linkedin.com/in/lucy-kamau-87bb75209',
    color: 'from-sky-500 to-blue-700',
  },
  {
    icon: FiExternalLink,
    label: 'Company',
    value: 'logicorex.co.ke',
    href: 'https://logicorex.co.ke',
    color: 'from-violet-500 to-purple-700',
  },
]

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' }

/**
 * Contact — Contact info cards + working contact form.
 * The form uses mailto as a zero-dependency solution; swap with a
 * serverless endpoint (e.g. Resend / EmailJS) for production.
 */
export default function Contact() {
  const [form, setForm]         = useState(INITIAL_FORM)
  const [status, setStatus]     = useState('idle') // idle | sending | sent | error
  const [errors, setErrors]     = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Name is required'
    if (!form.email.trim())   e.email   = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email address'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setStatus('sending')
    try {
      // Mailto fallback — replace with your preferred email API
      const mailto = `mailto:info@logicorex.co.ke?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
      window.location.href = mailto
      setStatus('sent')
      setForm(INITIAL_FORM)
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="section-padding bg-slate-50 dark:bg-dark-850">
      <div className="section-container">
        <SectionHeader
          label="Contact"
          title={<>Let's <span className="gradient-text">Work Together</span></>}
          subtitle="Have a project in mind? I'd love to hear about it. Send me a message and let's talk."
        />

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* ── Left: Info cards ── */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
              I'm currently available for freelance work and open to full-time opportunities.
              Whether you need a full stack application, a polished landing page, or an M-Pesa
              integration — let's connect. You can also reach me by phone on{' '}
              <a href="tel:+254799656264" className="text-primary-600 dark:text-primary-400 font-semibold hover:underline">+254 799 656 264</a>{' '}
              or{' '}
              <a href="tel:+254750649936" className="text-primary-600 dark:text-primary-400 font-semibold hover:underline">+254 750 649 936</a>.
            </p>

            {CONTACT_LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 card p-4 group"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${link.color}
                                  flex items-center justify-center text-white flex-shrink-0`}>
                  <link.icon size={17} />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wide">
                    {link.label}
                  </p>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200
                                 group-hover:text-primary-600 dark:group-hover:text-primary-400
                                 transition-colors">
                    {link.value}
                  </p>
                </div>
                <FiExternalLink size={14} className="ml-auto text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            ))}
          </div>

          {/* ── Right: Contact form ── */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-3 card p-8 space-y-5"
            noValidate
          >
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Send a Message
            </h3>

            {/* Name + Email row */}
            <div className="grid sm:grid-cols-2 gap-5">
              <Field
                label="Your Name"
                name="name"
                type="text"
                placeholder="Lucy Wanjiku"
                value={form.name}
                onChange={handleChange}
                error={errors.name}
              />
              <Field
                label="Email Address"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                error={errors.email}
              />
            </div>

            {/* Subject */}
            <Field
              label="Subject"
              name="subject"
              type="text"
              placeholder="Project enquiry / Hiring / Collaboration"
              value={form.subject}
              onChange={handleChange}
            />

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell me about your project, timeline, and budget..."
                value={form.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl text-sm resize-none
                  border ${errors.message ? 'border-red-400' : 'border-slate-200 dark:border-slate-700'}
                  bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200
                  placeholder:text-slate-400 dark:placeholder:text-slate-600
                  focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent
                  transition-all duration-200`}
              />
              {errors.message && (
                <p className="text-xs text-red-500 mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-primary w-full justify-center disabled:opacity-60"
            >
              {status === 'sending' ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  <FiSend size={16} /> Send Message
                </>
              )}
            </button>

            {/* Success / Error messages */}
            {status === 'sent' && (
              <p className="text-sm text-green-600 dark:text-green-400 text-center">
                ✓ Email client opened. Message ready to send!
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-500 text-center">
                Something went wrong. Please email me directly at info@logicorex.co.ke
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </div>
  )
}

/* ─── Reusable Field ─────────────────────────────────────── */
function Field({ label, name, type, placeholder, value, onChange, error }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 rounded-xl text-sm
          border ${error ? 'border-red-400' : 'border-slate-200 dark:border-slate-700'}
          bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200
          placeholder:text-slate-400 dark:placeholder:text-slate-600
          focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent
          transition-all duration-200`}
      />
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  )
}
