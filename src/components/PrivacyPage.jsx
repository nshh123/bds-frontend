import React from 'react';
import { ArrowLeft, ShieldCheck, Lock, Trash2, Mail, Database, Bot, CheckCircle2 } from 'lucide-react';
import './PrivacyPage.css';

export default function PrivacyPage({ onBackToHome }) {
  return (
    <div className="privacy-page">
      {/* Top Bar */}
      <div className="privacy-top-bar">
        <div className="container privacy-top-bar-inner">
          <button className="back-btn" onClick={onBackToHome}>
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </button>
          <div className="privacy-badge">
            <ShieldCheck size={14} className="text-emerald" />
            <span>Meta Developer Compliant Policy</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container privacy-container">
        <div className="privacy-card">
          <header className="privacy-header">
            <div className="privacy-tag">Legal & Privacy Documentation</div>
            <h1 className="privacy-title font-heading">Privacy Policy for Baza AI</h1>
            <p className="privacy-effective-date">
              <strong>Application Name:</strong> Baza AI &bull; <strong>Developer:</strong> BazaDevSpace &bull; <strong>Effective Date:</strong> September 11, 2026
            </p>
          </header>

          <div className="privacy-body">
            <section className="privacy-section">
              <h2>1. Introduction</h2>
              <p>
                This Privacy Policy describes how <strong>BazaDevSpace</strong> ("we", "us", or "our") collects, uses, processes, and protects your information when you interact with <strong>Baza AI</strong> (the "Service" or "Assistant"), an autonomous personal AI assistant application operating on the <strong>Meta WhatsApp Cloud platform</strong>.
              </p>
              <p>
                We are committed to maintaining the confidentiality, integrity, and security of your personal data. By sending a message to or interacting with Baza AI on WhatsApp, you consent to the practices described in this policy.
              </p>
            </section>

            <section className="privacy-section">
              <h2>2. Information We Collect</h2>
              <p>To provide personal assistant capabilities, Baza AI collects and processes the following categories of information:</p>
              
              <div className="info-grid">
                <div className="info-box">
                  <div className="info-box-header">
                    <Lock size={18} className="text-blue" />
                    <h4>WhatsApp Account Identifiers</h4>
                  </div>
                  <p>Your WhatsApp phone number (sender ID) and profile display name provided by the Meta WhatsApp Cloud API.</p>
                </div>

                <div className="info-box">
                  <div className="info-box-header">
                    <Bot size={18} className="text-indigo" />
                    <h4>Message Content & Media</h4>
                  </div>
                  <p>Text messages, conversational prompts, and voice notes/audio recordings you send to Baza AI to interact with the assistant.</p>
                </div>

                <div className="info-box">
                  <div className="info-box-header">
                    <Database size={18} className="text-emerald" />
                    <h4>Memories & Preferences</h4>
                  </div>
                  <p>Personal facts, user preferences, habits, and goals you share during conversation that you allow Baza AI to store in its long-term memory.</p>
                </div>

                <div className="info-box">
                  <div className="info-box-header">
                    <CheckCircle2 size={18} className="text-cyan" />
                    <h4>Tasks & Reminders</h4>
                  </div>
                  <p>Task descriptions, completion statuses, reminder messages, recurrence schedules, and user timezone information.</p>
                </div>
              </div>
            </section>

            <section className="privacy-section">
              <h2>3. How We Use Your Information</h2>
              <p>We process your data strictly to operate and enhance the personal assistant functionality:</p>
              <ul>
                <li><strong>Generating Intelligent Responses:</strong> Processing your messages and voice notes with generative AI to return accurate, contextual answers.</li>
                <li><strong>Proactive Long-Term Memory:</strong> Retaining preferences and facts you communicate so Baza AI remembers context across future conversations.</li>
                <li><strong>Dispatching Automated Reminders:</strong> Executing scheduled background notifications sent to your WhatsApp account at the exact times you requested.</li>
                <li><strong>Managing Daily Tasks:</strong> Tracking your daily to-do items and organizing daily agendas.</li>
                <li><strong>Security & Reliability:</strong> Verifying Meta HMAC-SHA256 webhook signatures and deduplicating message delivery IDs to protect system integrity.</li>
              </ul>
            </section>

            <section className="privacy-section">
              <h2>4. Third-Party Service Providers & Subprocessors</h2>
              <p>
                To provide this Service, we utilize reputable, industry-leading infrastructure partners under strict confidentiality and security terms:
              </p>
              <ul>
                <li>
                  <strong>Meta Platforms, Inc. (WhatsApp Cloud API):</strong> Used for secure transmission, routing, and delivery of WhatsApp messages and audio notes. Subject to Meta's Data Policy.
                </li>
                <li>
                  <strong>Google Cloud / Google AI (Gemini API):</strong> Used for real-time natural language reasoning, audio transcription, and tool execution. <em>We do not permit your personal conversations or audio to be used for training Google's public models.</em>
                </li>
                <li>
                  <strong>Supabase, Inc. (PostgreSQL Cloud Database):</strong> Encrypted database hosting used to securely store user profiles, memories, tasks, and reminder records.
                </li>
              </ul>
            </section>

            <section className="privacy-section">
              <h2>5. Data Sharing, Selling, & Monetization</h2>
              <div className="callout-box">
                <ShieldCheck size={22} className="text-emerald" />
                <div>
                  <strong>Zero Data Sale Guarantee:</strong>
                  <p>
                    We <strong>never</strong> sell, rent, trade, lease, or monetize your personal information, messages, memories, or contact details to third parties, data brokers, or advertisers under any circumstances.
                  </p>
                </div>
              </div>
            </section>

            <section className="privacy-section">
              <h2>6. Data Retention & Security</h2>
              <p>
                We employ industry-standard security protocols to safeguard your personal data:
              </p>
              <ul>
                <li>All network communications between Meta, our servers, Google AI, and Supabase are encrypted in transit using Transport Layer Security (TLS 1.3).</li>
                <li>Incoming webhooks from Meta are cryptographically verified using SHA-256 HMAC signatures to prevent spoofing or unauthorized access.</li>
                <li>Database tables are protected by role-based access controls and encrypted storage at rest.</li>
                <li>Data is retained only as long as you maintain an active dialogue with Baza AI or until you request its deletion.</li>
              </ul>
            </section>

            <section className="privacy-section highlight-deletion">
              <h2>7. User Data Deletion & Your Rights (Meta User Data Deletion)</h2>
              <p>
                In compliance with Meta Platform Policies and international privacy regulations (including GDPR and CCPA), you have the right to request full deletion of all personal data, memories, tasks, and message history associated with your WhatsApp number.
              </p>
              <div className="deletion-card">
                <div className="deletion-icon">
                  <Trash2 size={24} />
                </div>
                <div className="deletion-details">
                  <h4>How to Request Data Deletion:</h4>
                  <ol>
                    <li>
                      <strong>Instant Chat Command:</strong> Send the message <code>Delete my data</code> or <code>Reset all my memories</code> directly to Baza AI inside WhatsApp. Our system will immediately purge your stored memories and conversation records.
                    </li>
                    <li>
                      <strong>Email Request:</strong> Send an email to <a href="mailto:privacy@bazadevspace.com">privacy@bazadevspace.com</a> or <a href="mailto:info@bazadevspace.com">info@bazadevspace.com</a> with the subject line <em>"Data Deletion Request"</em> and your WhatsApp phone number (including country code). We will permanently delete your records within 48 business hours and confirm by return email.
                    </li>
                  </ol>
                </div>
              </div>
            </section>

            <section className="privacy-section">
              <h2>8. Children's Privacy</h2>
              <p>
                Baza AI is not directed to individuals under the age of 13 (or under 16 in certain jurisdictions). We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us and we will promptly delete it.
              </p>
            </section>

            <section className="privacy-section">
              <h2>9. Changes to this Privacy Policy</h2>
              <p>
                We may periodically update this Privacy Policy to reflect changes in our legal requirements or features. Any modifications will be posted to this URL with an updated effective date.
              </p>
            </section>

            <section className="privacy-section">
              <h2>10. Contact Us</h2>
              <p>
                If you have questions, feedback, or concerns regarding this Privacy Policy or your data, please contact our Data Protection Officer:
              </p>
              <div className="contact-card">
                <p><strong>Organization:</strong> BazaDevSpace / Baza AI Tech</p>
                <p><strong>Email:</strong> <a href="mailto:privacy@bazadevspace.com">privacy@bazadevspace.com</a> / <a href="mailto:info@bazadevspace.com">info@bazadevspace.com</a></p>
                <p><strong>Website:</strong> <a href="https://www.bazadevspace.com" target="_blank" rel="noreferrer">https://www.bazadevspace.com</a></p>
                <p><strong>Location:</strong> Kigali, Rwanda</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
