import { useState } from "react";

// Formspree-style endpoint, e.g. https://formspree.io/f/xxxxxxx (set in .env)
const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT;

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ msg: "", type: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      setStatus({ msg: "Please fill in all fields.", type: "error" });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({ msg: "Please enter a valid email address.", type: "error" });
      return;
    }

    if (CONTACT_ENDPOINT) {
      setSending(true);
      try {
        const res = await fetch(CONTACT_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ name, email, message }),
        });
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      } catch {
        setStatus({ msg: "Something went wrong. Please try again later.", type: "error" });
        return;
      } finally {
        setSending(false);
      }
    }

    setStatus({
      msg: `Thanks, ${name}! We'll get back to you soon.`,
      type: "success",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="section alt" id="contact">
      <div className="container contact-inner">
        <div>
          <p className="section-tag">Contact</p>
          <h2>Have questions? Let's talk.</h2>
          <p>Send us a message and we'll get back to you within 24 hours.</p>
        </div>
        <form onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            name="name"
            aria-label="Your name"
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            name="email"
            aria-label="Your email"
            placeholder="Your email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <textarea
            rows="4"
            name="message"
            aria-label="Your message"
            placeholder="Your message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          {status.msg && (
            <p className={`form-msg ${status.type}`} role="status">
              {status.msg}
            </p>
          )}
          <button type="submit" className="btn" disabled={sending}>
            {sending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
