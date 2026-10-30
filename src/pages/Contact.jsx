
import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import "./Contact.css";

const inquiryTypes = [
  { value: "", label: "Select an inquiry type" },
  { value: "general", label: "General Inquiry" },
  { value: "booking", label: "Booking & Performances" },
  { value: "press", label: "Press & Media" },
  { value: "business", label: "Business Inquiry" },
  { value: "collaboration", label: "Artist Collaboration" },
];

const initialForm = {
  name: "",
  email: "",
  inquiryType: "",
  subject: "",
  message: "",
  website: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (status === "submitting") return;

    setStatus("submitting");
    setFeedback("");

    try {
      const response = await fetch("/api/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Your message could not be sent."
        );
      }

      setStatus("success");
      setFeedback(
        "Your message has been sent. Thanks for reaching out!"
      );
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setFeedback(
        error.message ||
          "Something went wrong. Please try again."
      );
    }
  }

  return (
    <main className="contact-page">
      {/* ==========================================
          HERO
          ========================================== */}

      <section className="contact-hero">
        <div className="container">
          <Reveal delay={0}>
            <span className="contact-eyebrow">
              REV RUST / CONTACT
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1>
              LET'S MAKE
              <br />
              <span className="contact-gradient">
                SOME NOISE.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p>
              Booking inquiries, collaborations, press, or just
              something you want to say. Whatever brings you
              here, this is where the conversation starts.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ==========================================
          CONTACT CONTENT
          ========================================== */}

      <section className="contact-main section">
        <div className="container contact-layout">
          {/* CONTACT INFORMATION */}

          <div className="contact-info">
            <Reveal delay={0}>
              <span className="contact-eyebrow">
                GET IN TOUCH
              </span>
            </Reveal>

            <Reveal delay={100}>
              <h2>
                OPEN THE
                <br />
                CONVERSATION.
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <p className="contact-info__intro">
                Have an idea, an opportunity, or a question?
                Send a message using the form and it'll go
                directly to Rev. Rust.
              </p>
            </Reveal>

            <div className="contact-info__items">
              <Reveal delay={0}>
                <div className="contact-info__item">
                  <span className="contact-info__number">
                    /01
                  </span>

                  <div>
                    <h3>GENERAL & BUSINESS</h3>
                    <p>
                      Questions, booking opportunities,
                      interviews, media requests, and
                      professional inquiries.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="contact-info__item">
                  <span className="contact-info__number">
                    /02
                  </span>

                  <div>
                    <h3>ARTIST COLLABORATIONS</h3>
                    <p>
                      Musicians, producers, vocalists, and
                      other artists interested in creating
                      something together.
                    </p>

                    <Link
                      to="/lab"
                      className="contact-info__link"
                    >
                      Explore The Lab{" "}
                      <span aria-hidden="true">↗</span>
                    </Link>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="contact-info__item">
                  <span className="contact-info__number">
                    /03
                  </span>

                  <div>
                    <h3>DIRECT EMAIL</h3>
                    <a
                      href="mailto:rev.rust@revrust.com"
                      className="contact-info__email"
                    >
                      rev.rust@revrust.com
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={300}>
                <div className="contact-info__item">
                  <span className="contact-info__number">
                    /04
                  </span>

                  <div>
                    <h3>PHONE</h3>
                    <a
                      href="tel:+13143373887"
                      className="contact-info__email"
                    >
                      (314) 337-3887
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* CONTACT FORM */}

          <Reveal className="contact-form-panel" delay={150}>
            <div className="contact-form-panel__heading">
              <span className="contact-eyebrow">
                SEND A MESSAGE
              </span>

              <h2>DROP A LINE.</h2>

              <p>
                Fill out the form below and your message
                will be delivered directly to my inbox.
              </p>
            </div>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="contact-form__row">
                <div className="contact-form__field">
                  <label htmlFor="contact-name">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    maxLength={120}
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-form__field">
                  <label htmlFor="contact-email">
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    maxLength={254}
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact-form__field">
                <label htmlFor="contact-inquiry">
                  Inquiry Type *
                </label>
                <select
                  id="contact-inquiry"
                  name="inquiryType"
                  value={form.inquiryType}
                  onChange={handleChange}
                  required
                >
                  {inquiryTypes.map((type) => (
                    <option
                      key={type.value}
                      value={type.value}
                    >
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="contact-form__field">
                <label htmlFor="contact-subject">
                  Subject *
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  maxLength={180}
                  placeholder="What's this about?"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-form__field">
                <label htmlFor="contact-message">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={7}
                  maxLength={10000}
                  placeholder="Tell me what's on your mind..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <div
                className="contact-form__honeypot"
                aria-hidden="true"
              >
                <label htmlFor="contact-website">
                  Leave this field empty
                </label>
                <input
                  id="contact-website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.website}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="button button-primary contact-form__submit"
                disabled={status === "submitting"}
              >
                {status === "submitting"
                  ? "SENDING..."
                  : "SEND MESSAGE"}
                <span aria-hidden="true">↗</span>
              </button>

              {feedback && (
                <p
                  className={`contact-form__feedback contact-form__feedback--${status}`}
                  role={
                    status === "error"
                      ? "alert"
                      : "status"
                  }
                  aria-live="polite"
                >
                  {feedback}
                </p>
              )}

              <p className="contact-form__note">
                Your information will only be used to respond
                to your inquiry.
              </p>
            </form>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
