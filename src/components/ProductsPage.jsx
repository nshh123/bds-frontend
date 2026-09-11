import React, { useState } from 'react';
import { 
  MessageSquare, 
  Clock, 
  Brain, 
  CheckCircle2, 
  Mic, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  ArrowLeft,
  ChevronRight, 
  Layers,
  Database,
  Cpu,
  Bot,
  Send,
  CheckCheck
} from 'lucide-react';
import './ProductsPage.css';

export default function ProductsPage({ onBackToHome, onOpenEnroll }) {
  const [activeScenario, setActiveScenario] = useState('memory');

  const scenarios = {
    memory: {
      title: 'Proactive Memory',
      desc: 'Baza AI automatically extracts preferences, goals, and facts without being asked to "save" them.',
      messages: [
        {
          sender: 'user',
          time: '10:14 AM',
          text: 'Hey! Just a heads up, I usually code in TypeScript and Python, and I prefer clean hexagonal architecture for our client projects.',
        },
        {
          sender: 'system-tool',
          tool: 'save_memory',
          category: 'preference',
          detail: 'User prefers TypeScript & Python with hexagonal architecture for client projects.',
        },
        {
          sender: 'bot',
          time: '10:14 AM',
          text: 'Got it! I\'ve saved that you prefer TypeScript and Python with hexagonal architecture. I\'ll keep this in mind whenever we discuss system designs or code implementations.',
        },
        {
          sender: 'user',
          time: 'Yesterday at 4:30 PM',
          text: 'Can you recommend a starter layout for our new backend service?',
        },
        {
          sender: 'bot',
          time: 'Yesterday at 4:30 PM',
          text: 'Given your preference for TypeScript and hexagonal architecture, I recommend structuring `src/` with `domain/`, `application/`, `adapters/` (HTTP, DB), and `infrastructure/`. Would you like me to outline the port contracts first?',
        }
      ]
    },
    reminders: {
      title: 'Intelligent Reminders',
      desc: 'Natural language scheduling converted to ISO UTC timestamps and dispatched with atomic cron reliability.',
      messages: [
        {
          sender: 'user',
          time: '8:45 AM',
          text: 'Remind me tomorrow at 9:00 AM to review the quarterly roadmap and ping the engineering leads.',
        },
        {
          sender: 'system-tool',
          tool: 'create_reminder',
          remind_at: 'Tomorrow at 09:00 AM UTC+2',
          detail: 'Review the quarterly roadmap and ping the engineering leads.',
        },
        {
          sender: 'bot',
          time: '8:45 AM',
          text: '⏰ Reminder set! I\'ll message you right here on WhatsApp tomorrow at 9:00 AM to review the quarterly roadmap and ping the engineering leads.',
        },
        {
          sender: 'bot',
          time: 'Tomorrow, 9:00 AM',
          isReminderAlert: true,
          text: '🔔 *Reminder:* Time to review the quarterly roadmap and ping the engineering leads! Let me know if you need to pull up any roadmap notes.',
        }
      ]
    },
    tasks: {
      title: 'Daily Task Planning',
      desc: 'Manage your daily priorities conversationally with instant task tracking and morning planning.',
      messages: [
        {
          sender: 'user',
          time: '7:30 AM',
          text: 'Morning! Add "Prepare client demo for Baza AI" and "Finalize Supabase schema" to my daily tasks.',
        },
        {
          sender: 'system-tool',
          tool: 'create_task (x2)',
          detail: 'Added 2 tasks to Supabase daily task ledger.',
        },
        {
          sender: 'bot',
          time: '7:30 AM',
          text: 'Good morning! 🌅 I\'ve added both to your daily plan:\n\n1. ◻️ Prepare client demo for Baza AI\n2. ◻️ Finalize Supabase schema\n\nReady to crush today\'s milestones!',
        },
        {
          sender: 'user',
          time: '11:15 AM',
          text: 'I just finished preparing the client demo.',
        },
        {
          sender: 'system-tool',
          tool: 'complete_task_by_title',
          detail: 'Marked "Prepare client demo for Baza AI" as completed.',
        },
        {
          sender: 'bot',
          time: '11:15 AM',
          text: 'Nice work! Marked as completed: ✅ *Prepare client demo for Baza AI*.\n\nRemaining for today:\n1. ◻️ Finalize Supabase schema',
        }
      ]
    },
    voice: {
      title: 'Voice Notes & Multimodal',
      desc: 'Send voice messages while driving or on the move; Gemini 2.0 Flash processes them seamlessly.',
      messages: [
        {
          sender: 'user',
          time: '5:20 PM',
          isAudio: true,
          audioDuration: '0:14',
          text: 'Voice note (0:14): "Hey Baza, we decided to launch the closed beta on Friday the 18th. Please record that in our milestone notes."',
        },
        {
          sender: 'system-tool',
          tool: 'save_memory',
          category: 'project_milestone',
          detail: 'Closed beta launch set for Friday the 18th.',
        },
        {
          sender: 'bot',
          time: '5:20 PM',
          text: 'Heard you loud and clear! 🎙️ I\'ve recorded that the closed beta is scheduled for Friday the 18th in your project milestones. Would you like me to schedule a reminder for the day before?',
        }
      ]
    }
  };

  const handleWhatsAppAction = () => {
    // Open WhatsApp with friendly introductory message
    const message = encodeURIComponent("Hello Baza AI! I'm interested in trying out the Baza AI WhatsApp assistant.");
    window.open(`https://wa.me/250788123456?text=${message}`, '_blank');
  };

  return (
    <div className="products-page">
      {/* Top Breadcrumb / Nav */}
      <div className="products-top-bar">
        <div className="container products-top-bar-inner">
          <button className="back-btn" onClick={onBackToHome}>
            <ArrowLeft size={16} />
            <span>Back to Academy & Services</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="products-hero">
        <div className="container">
          <div className="products-hero-content">
            <h1 className="products-hero-title font-heading">
              Autonomous AI Products <br />
              <span className="text-gradient">Engineered for Daily Action.</span>
            </h1>
            <p className="products-hero-lead">
              We build production-grade AI agents and autonomous workflows that live inside the tools you already use every day. Discover our flagship WhatsApp companion and upcoming AI agent platform.
            </p>
            <div className="products-hero-actions">
              <a href="#baza-ai" className="btn-primary">
                <Bot size={18} />
                <span>Explore Baza AI</span>
              </a>
              <a href="#pipeline" className="btn-secondary">
                <span>View Labs Pipeline</span>
                <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Flagship: Baza AI */}
      <section id="baza-ai" className="baza-ai-section">
        <div className="container">
          <div className="baza-ai-header">
            <h2 className="baza-title font-heading">
              Baza AI: The Autonomous WhatsApp Assistant
            </h2>
            <p className="baza-subtitle">
              A 24/7 personal assistant powered by Google Gemini 2.0 Flash function calling, proactive long-term memory, atomic reminder scheduling, and conversational task management.
            </p>
          </div>

          {/* Main Showcase Grid: Feature Details & Interactive Simulator */}
          <div className="baza-showcase-grid">
            {/* Left: Product Deep Dive */}
            <div className="baza-info-column">
              <div className="baza-highlight-card corp-card">
                <div className="highlight-tag">Zero Installation Required</div>
                <h3 className="highlight-heading font-heading">Lives Directly in WhatsApp</h3>
                <p className="highlight-text">
                  No new apps to download, no storage wasted, and no clunky logins. Simply open WhatsApp, send a text or voice note, and let Baza AI manage your memories, schedule, and daily tasks.
                </p>

                <div className="baza-specs-list">
                  <div className="spec-item">
                    <div className="spec-icon spec-brain">
                      <Brain size={20} />
                    </div>
                    <div>
                      <h4 className="spec-title">Proactive Long-Term Memory</h4>
                      <p className="spec-desc">
                        Understands when a preference, goal, or fact is important and automatically commits it to memory with Gemini function calling.
                      </p>
                    </div>
                  </div>

                  <div className="spec-item">
                    <div className="spec-icon spec-clock">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h4 className="spec-title">Atomic Cron Reminders</h4>
                      <p className="spec-desc">
                        Conversational reminder requests are parsed into UTC timestamps and dispatched on WhatsApp via atomic database locks to eliminate duplicate messages.
                      </p>
                    </div>
                  </div>

                  <div className="spec-item">
                    <div className="spec-icon spec-check">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <h4 className="spec-title">Conversational Task Management</h4>
                      <p className="spec-desc">
                        Add, review, and complete daily tasks through natural chat. Baza AI acts as your personal executive planner.
                      </p>
                    </div>
                  </div>

                  <div className="spec-item">
                    <div className="spec-icon spec-mic">
                      <Mic size={20} />
                    </div>
                    <div>
                      <h4 className="spec-title">Voice Note Native</h4>
                      <p className="spec-desc">
                        Multimodal Gemini integration transcribes and extracts intent from WhatsApp voice notes in seconds.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="baza-cta-group">
                  <button className="btn-whatsapp" onClick={handleWhatsAppAction}>
                    <MessageSquare size={18} />
                    <span>Try Baza AI on WhatsApp</span>
                  </button>
                  <button className="btn-secondary" onClick={onOpenEnroll}>
                    <span>Deploy for Your Team</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Interactive WhatsApp Simulator */}
            <div className="baza-simulator-column">
              <div className="phone-mockup">
                {/* Phone Top Notch / Speaker */}
                <div className="phone-notch">
                  <div className="phone-camera"></div>
                  <div className="phone-speaker"></div>
                </div>

                {/* WhatsApp Chat Window */}
                <div className="chat-window">
                  {/* Chat Header */}
                  <div className="chat-header">
                    <div className="chat-contact">
                      <div className="chat-avatar">
                        <img src="/baza_logo_badge.webp" alt="Baza AI Avatar" />
                        <span className="online-indicator"></span>
                      </div>
                      <div className="chat-meta">
                        <div className="contact-name">Baza AI Assistant</div>
                        <div className="contact-status">online • Gemini 2.0 Flash</div>
                      </div>
                    </div>
                    <div className="chat-badge-verified">
                      <CheckCircle2 size={16} />
                      <span>Verified Bot</span>
                    </div>
                  </div>

                  {/* Scenario Switcher Tabs */}
                  <div className="scenario-tabs">
                    <button 
                      className={`tab-btn ${activeScenario === 'memory' ? 'active' : ''}`}
                      onClick={() => setActiveScenario('memory')}
                    >
                      <Brain size={13} />
                      <span>Memory</span>
                    </button>
                    <button 
                      className={`tab-btn ${activeScenario === 'reminders' ? 'active' : ''}`}
                      onClick={() => setActiveScenario('reminders')}
                    >
                      <Clock size={13} />
                      <span>Reminders</span>
                    </button>
                    <button 
                      className={`tab-btn ${activeScenario === 'tasks' ? 'active' : ''}`}
                      onClick={() => setActiveScenario('tasks')}
                    >
                      <CheckCircle2 size={13} />
                      <span>Tasks</span>
                    </button>
                    <button 
                      className={`tab-btn ${activeScenario === 'voice' ? 'active' : ''}`}
                      onClick={() => setActiveScenario('voice')}
                    >
                      <Mic size={13} />
                      <span>Voice</span>
                    </button>
                  </div>

                  {/* Chat Messages Body */}
                  <div className="chat-body">
                    <div className="chat-date-divider">
                      <span>TODAY</span>
                    </div>

                    {scenarios[activeScenario].messages.map((msg, idx) => {
                      if (msg.sender === 'system-tool') {
                        return (
                          <div key={idx} className="system-tool-bubble">
                            <div className="tool-badge">
                              <Zap size={12} />
                              <span>Autonomous Tool Call: <code>{msg.tool}</code></span>
                            </div>
                            <div className="tool-detail">{msg.detail}</div>
                          </div>
                        );
                      }

                      const isUser = msg.sender === 'user';
                      return (
                        <div 
                          key={idx} 
                          className={`chat-bubble ${isUser ? 'bubble-user' : 'bubble-bot'} ${msg.isReminderAlert ? 'bubble-reminder-alert' : ''}`}
                        >
                          {msg.isAudio && (
                            <div className="audio-message-preview">
                              <div className="play-icon">▶</div>
                              <div className="audio-wave">
                                <span></span><span></span><span></span><span></span><span></span><span></span>
                              </div>
                              <span className="audio-time">{msg.audioDuration}</span>
                            </div>
                          )}
                          <div className="bubble-text">{msg.text}</div>
                          <div className="bubble-footer">
                            <span className="bubble-time">{msg.time}</span>
                            {isUser && <CheckCheck size={14} className="msg-check" />}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Chat Input Placeholder */}
                  <div className="chat-input-bar">
                    <div className="input-mock">Type a message to Baza AI...</div>
                    <div className="send-btn-mock">
                      <Send size={16} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="simulator-caption">
                <Zap size={14} className="text-cyan" />
                <span><strong>Live Interaction Scenario:</strong> {scenarios[activeScenario].desc}</span>
              </div>
            </div>
          </div>

          {/* Architecture Spotlight */}
          <div className="baza-architecture-box corp-card">
            <div className="arch-header">
              <div className="arch-tag">
                <Layers size={14} />
                <span>Production Architecture</span>
              </div>
              <h3 className="arch-title font-heading">Under the Hood of Baza AI</h3>
              <p className="arch-desc">
                Engineered for maximum uptime and zero latency on top of battle-tested free-tier services.
              </p>
            </div>

            <div className="arch-grid">
              <div className="arch-card">
                <div className="arch-num">01</div>
                <div className="arch-icon-wrap icon-meta">
                  <MessageSquare size={22} />
                </div>
                <h4>Meta Cloud API</h4>
                <p>
                  Official WhatsApp Business Cloud API with HMAC-SHA256 signature verification and atomic message deduplication.
                </p>
              </div>

              <div className="arch-card">
                <div className="arch-num">02</div>
                <div className="arch-icon-wrap icon-gemini">
                  <Cpu size={22} />
                </div>
                <h4>Gemini 2.0 Flash</h4>
                <p>
                  Ultra-low latency reasoning with native function calling: automatically chooses when to trigger memory, reminders, or tasks.
                </p>
              </div>

              <div className="arch-card">
                <div className="arch-num">03</div>
                <div className="arch-icon-wrap icon-supabase">
                  <Database size={22} />
                </div>
                <h4>Supabase Postgres</h4>
                <p>
                  Stores user profiles, persistent semantic memory notes, pending reminders, and conversational task lists securely.
                </p>
              </div>

              <div className="arch-card">
                <div className="arch-num">04</div>
                <div className="arch-icon-wrap icon-cron">
                  <Clock size={22} />
                </div>
                <h4>Atomic Cron Scheduler</h4>
                <p>
                  Distributed cron heartbeat with conditional updates (`pending → sent`) ensuring zero missed or duplicate reminders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Pipeline / Baza Labs */}
      <section id="pipeline" className="pipeline-section">
        <div className="container">
          <div className="section-header">
            <h2 className="font-heading">More Products in Development</h2>
            <p>
              Explore the upcoming AI agent platforms and developer tools currently being developed by the BazaDevSpace engineering team.
            </p>
          </div>

          <div className="pipeline-grid">
            <div className="pipeline-card corp-card">
              <div className="pipeline-card-top">
                <div className="pipeline-icon">
                  <Zap size={28} className="text-cyan" />
                </div>
                <div className="pipeline-status status-soon">Coming Q3 2026</div>
              </div>
              <h3 className="pipeline-title font-heading">Baza Loop Studio</h3>
              <p className="pipeline-desc">
                A visual IDE and testing sandbox for engineering autonomous LLM feedback loops, tool-calling pipelines, and multi-agent coordination.
              </p>
              <ul className="pipeline-features">
                <li><CheckCircle2 size={15} /> Real-time tool execution inspector</li>
                <li><CheckCircle2 size={15} /> Evaluator and synthetic prompt tester</li>
                <li><CheckCircle2 size={15} /> One-click deployment to cloud webhooks</li>
              </ul>
            </div>

            <div className="pipeline-card corp-card">
              <div className="pipeline-card-top">
                <div className="pipeline-icon">
                  <ShieldCheck size={28} className="text-indigo" />
                </div>
                <div className="pipeline-status status-alpha">In Private Alpha</div>
              </div>
              <h3 className="pipeline-title font-heading">Baza Enterprise Knowledge Agent</h3>
              <p className="pipeline-desc">
                Connect your organization's Notion, Google Drive, and internal documents into a private, RAG-powered AI assistant on Slack and WhatsApp.
              </p>
              <ul className="pipeline-features">
                <li><CheckCircle2 size={15} /> Hybrid vector and keyword search</li>
                <li><CheckCircle2 size={15} /> Enterprise RBAC access control</li>
                <li><CheckCircle2 size={15} /> Zero training on proprietary data</li>
              </ul>
            </div>

            <div className="pipeline-card corp-card">
              <div className="pipeline-card-top">
                <div className="pipeline-icon">
                  <Cpu size={28} className="text-emerald" />
                </div>
                <div className="pipeline-status status-concept">Research & Concept</div>
              </div>
              <h3 className="pipeline-title font-heading">Baza Agentic Code Reviewer</h3>
              <p className="pipeline-desc">
                An autonomous GitHub action agent that reviews pull requests, analyzes architecture violations, and generates test suites automatically.
              </p>
              <ul className="pipeline-features">
                <li><CheckCircle2 size={15} /> AST-aware codebase analysis</li>
                <li><CheckCircle2 size={15} /> Lint and architectural drift checks</li>
                <li><CheckCircle2 size={15} /> Interactive suggestions directly in PRs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="products-cta-section">
        <div className="container">
          <div className="products-cta-box">
            <div className="cta-content">
              <h2 className="font-heading">Ready to Experience Autonomous AI?</h2>
              <p>
                Get started with Baza AI on WhatsApp today, or contact our team to build a tailored AI agent solution for your business.
              </p>
            </div>
            <div className="cta-buttons">
              <button className="btn-whatsapp" onClick={handleWhatsAppAction}>
                <MessageSquare size={18} />
                <span>Start Chat on WhatsApp</span>
              </button>
              <button className="btn-primary" onClick={onOpenEnroll}>
                <span>Request Custom Agent</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
