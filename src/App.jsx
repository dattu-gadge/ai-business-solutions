import { useState } from "react";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Check,
  ChevronDown,
  Headphones,
  MessageCircle,
  Menu,
  Network,
  PhoneCall,
  Play,
  Send,
  Sparkles,
  Target,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import "./App.css";

const whatsappNumber = "918767726496";

const services = [
  {
    icon: Bot,
    number: "01",
    title: "AI Chatbot",
    text: "Turn your website into an always-on digital assistant that answers questions and captures enquiries.",
  },
  {
    icon: MessageCircle,
    number: "02",
    title: "WhatsApp AI Assistant",
    text: "Automate customer conversations, FAQs, lead collection and follow-ups through WhatsApp.",
  },
  {
    icon: Headphones,
    number: "03",
    title: "AI Customer Support",
    text: "Reduce repetitive support work with intelligent answers, routing and automated assistance.",
  },
  {
    icon: Target,
    number: "04",
    title: "AI Lead Qualification",
    text: "Identify serious prospects automatically and collect the information your sales team needs.",
  },
  {
    icon: PhoneCall,
    number: "05",
    title: "AI Appointment Assistant",
    text: "Let customers enquire, choose services and request appointments without waiting for a team member.",
  },
  {
    icon: Workflow,
    number: "06",
    title: "Workflow Automation",
    text: "Connect repetitive business processes and automate tasks from enquiry to follow-up.",
  },
];

const solutions = [
  "AI sales message generation",
  "AI FAQ generation",
  "Automated customer follow-ups",
  "AI content generation",
  "Lead capture automation",
  "Customer enquiry routing",
  "Appointment workflow automation",
  "Business process automation",
];

const industries = [
  "Restaurants & Cafes",
  "Clinics & Hospitals",
  "Gyms & Fitness",
  "Hotels & Resorts",
  "Furniture & Hardware",
  "Fertilizer & Agriculture",
  "Salons & Beauty",
  "E-commerce",
];

const faqs = [
  {
    q: "Can AI be added to an existing website?",
    a: "Yes. AI assistants can be designed around an existing website, landing page or business workflow.",
  },
  {
    q: "Can the AI assistant work with WhatsApp?",
    a: "A WhatsApp-based assistant can be designed for enquiries, lead capture, FAQs and customer follow-up workflows.",
  },
  {
    q: "Can you build custom AI solutions?",
    a: "Yes. Gadge Creations can create a solution around the business process, customer journey and automation requirements.",
  },
  {
    q: "Is this suitable for small businesses?",
    a: "AI automation can be designed around the size and needs of the business, starting with a focused workflow and expanding over time.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    business: "",
    requirement: "",
  });

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setMenuOpen(false);
  };

  const sendWhatsApp = (e) => {
    e.preventDefault();

    const message =
      `Hello Gadge Creations,%0A%0A` +
      `I am interested in AI Business Solutions.%0A%0A` +
      `Name: ${form.name}%0A` +
      `Phone: ${form.phone}%0A` +
      `Business: ${form.business}%0A` +
      `Requirement: ${form.requirement || "I would like to discuss AI automation."}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="app">
      <div className="demo-bar">
        <span>GADGE CREATIONS</span>
        <span>&middot;</span>
        <span>FICTIONAL AI BUSINESS SOLUTIONS DEMO</span>
        <span>&middot;</span>
        <span>INDIA</span>
      </div>

      <header className="header">
        <button className="logo" onClick={() => scrollTo("home")}>
          GADGE<span>AI</span>
        </button>

        <nav className={menuOpen ? "nav open" : "nav"}>
          <button onClick={() => scrollTo("solutions")}>Solutions</button>
          <button onClick={() => scrollTo("services")}>Services</button>
          <button onClick={() => scrollTo("industries")}>Industries</button>
          <button onClick={() => scrollTo("process")}>Process</button>
          <button onClick={() => scrollTo("contact")}>Contact</button>
        </nav>

        <button className="header-cta" onClick={() => scrollTo("contact")}>
          Start with AI <ArrowRight size={15} />
        </button>

        <button
          className="menu-button"
          aria-label="Open navigation"
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <Sparkles size={14} />
              AI BUSINESS AUTOMATION
            </div>

            <h1>
              Make your
              <br />
              business <em>smarter.</em>
            </h1>

            <p>
              Build intelligent customer experiences, automate repetitive
              work and turn more enquiries into business with practical AI
              solutions.
            </p>

            <div className="hero-actions">
              <button className="primary-button" onClick={() => scrollTo("contact")}>
                Explore AI Solutions <ArrowRight size={17} />
              </button>

              <button className="outline-button" onClick={() => scrollTo("services")}>
                View Services
              </button>
            </div>

            <div className="hero-proof">
              <span>
                <Check size={13} /> Custom AI workflows
              </span>
              <span>
                <Check size={13} /> WhatsApp automation
              </span>
              <span>
                <Check size={13} /> Business-focused solutions
              </span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="ai-orbit orbit-one" />
            <div className="ai-orbit orbit-two" />
            <div className="ai-orbit orbit-three" />

            <div className="ai-core">
              <div className="core-ring">
                <BrainCircuit size={62} strokeWidth={1.4} />
              </div>
              <strong>AI</strong>
              <span>BUSINESS ENGINE</span>
            </div>

            <div className="floating-card card-top">
              <Bot size={17} />
              <div>
                <strong>AI Assistant</strong>
                <span>Online 24/7</span>
              </div>
            </div>

            <div className="floating-card card-bottom">
              <Zap size={17} />
              <div>
                <strong>Automation</strong>
                <span>Workflows active</span>
              </div>
            </div>

            <div className="signal signal-one" />
            <div className="signal signal-two" />
            <div className="signal signal-three" />
          </div>
        </section>

        <section className="intro section">
          <div className="section-label">01 / THE OPPORTUNITY</div>

          <div className="intro-grid">
            <h2>
              AI should
              <br />
              <em>work for your business.</em>
            </h2>

            <div className="intro-copy">
              <p>
                Your customers ask questions. Your team answers them. Leads
                arrive after business hours. Follow-ups get missed. Repetitive
                work consumes valuable time.
              </p>
              <p>
                We design AI-powered systems that connect these moments into
                practical business workflows.
              </p>
            </div>
          </div>
        </section>

        <section className="services section" id="services">
          <div className="section-heading">
            <div>
              <div className="section-label">02 / AI SERVICES</div>
              <h2>Built around your workflow.</h2>
            </div>
            <p>
              From customer conversations to internal automation, choose the
              AI capability your business needs.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article className="service-card" key={service.number}>
                  <div className="service-top">
                    <span>{service.number}</span>
                    <Icon size={25} strokeWidth={1.4} />
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.text}</p>

                  <button onClick={() => scrollTo("contact")}>
                    Discuss solution <ArrowRight size={15} />
                  </button>
                </article>
              );
            })}
          </div>
        </section>

        <section className="solutions section" id="solutions">
          <div className="solution-panel">
            <div className="solution-copy">
              <div className="section-label">03 / AUTOMATION STACK</div>
              <h2>
                One system.
                <br />
                <em>Many possibilities.</em>
              </h2>
              <p>
                Combine AI capabilities to create a connected customer and
                business automation system.
              </p>

              <button
                className="primary-button"
                onClick={() => scrollTo("contact")}
              >
                Build your AI system <ArrowRight size={17} />
              </button>
            </div>

            <div className="solution-list">
              {solutions.map((item, index) => (
                <div className="solution-item" key={item}>
                  <span>0{index + 1}</span>
                  <Check size={15} />
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="industries section" id="industries">
          <div className="section-heading compact">
            <div>
              <div className="section-label">04 / INDUSTRIES</div>
              <h2>AI for real businesses.</h2>
            </div>
            <p>
              Solutions can be adapted to the customer journey and workflow
              of different industries.
            </p>
          </div>

          <div className="industry-grid">
            {industries.map((industry, index) => (
              <button
                className="industry-card"
                key={industry}
                onClick={() => scrollTo("contact")}
              >
                <span>0{index + 1}</span>
                <strong>{industry}</strong>
                <ArrowRight size={17} />
              </button>
            ))}
          </div>
        </section>

        <section className="process section" id="process">
          <div className="section-heading compact">
            <div>
              <div className="section-label">05 / PROCESS</div>
              <h2>From idea to automation.</h2>
            </div>
          </div>

          <div className="process-grid">
            <article>
              <span>01</span>
              <Network size={25} />
              <h3>Understand</h3>
              <p>
                Map your customers, business processes and repetitive tasks.
              </p>
            </article>

            <article>
              <span>02</span>
              <BrainCircuit size={25} />
              <h3>Design</h3>
              <p>
                Select the right AI capabilities and create the workflow.
              </p>
            </article>

            <article>
              <span>03</span>
              <Workflow size={25} />
              <h3>Build</h3>
              <p>
                Connect the website, WhatsApp, forms and automation layers.
              </p>
            </article>

            <article>
              <span>04</span>
              <Zap size={25} />
              <h3>Improve</h3>
              <p>
                Review the workflow and continuously improve the experience.
              </p>
            </article>
          </div>
        </section>

        <section className="demo-preview section">
          <div className="preview-shell">
            <div className="preview-header">
              <div>
                <span className="live-dot" />
                AI CUSTOMER ASSISTANT
              </div>
              <span>LIVE DEMO CONCEPT</span>
            </div>

            <div className="chat-window">
              <div className="chat-message bot">
                <div className="avatar">
                  <Bot size={16} />
                </div>
                <p>
                  Hello! How can I help your business today?
                </p>
              </div>

              <div className="chat-message user">
                <p>I want to know about your services.</p>
              </div>

              <div className="chat-message bot">
                <div className="avatar">
                  <Bot size={16} />
                </div>
                <p>
                  I can help with websites, AI automation, WhatsApp solutions
                  and digital business systems.
                </p>
              </div>

              <div className="chat-input">
                <span>Type your message...</span>
                <button aria-label="Send message">
                  <Send size={16} />
                </button>
              </div>
            </div>

            <div className="preview-stats">
              <div>
                <strong>24/7</strong>
                <span>Availability</span>
              </div>
              <div>
                <strong>AI</strong>
                <span>Assistance</span>
              </div>
              <div>
                <strong>∞</strong>
                <span>Scalable workflows</span>
              </div>
            </div>
          </div>
        </section>

        <section className="faq section">
          <div className="section-heading compact">
            <div>
              <div className="section-label">06 / FAQ</div>
              <h2>Questions, answered.</h2>
            </div>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div className="faq-item" key={faq.q}>
                <button
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  aria-expanded={openFaq === index}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={openFaq === index ? "rotated" : ""}
                  />
                </button>

                {openFaq === index && <p>{faq.a}</p>}
              </div>
            ))}
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="contact-panel">
            <div className="contact-copy">
              <div className="section-label">07 / START A PROJECT</div>
              <h2>
                Ready to put
                <br />
                <em>AI to work?</em>
              </h2>
              <p>
                Tell us about your business and the repetitive work you want
                to automate.
              </p>

              <div className="contact-points">
                <span>
                  <Check size={14} /> Custom solutions
                </span>
                <span>
                  <Check size={14} /> Business-first approach
                </span>
                <span>
                  <Check size={14} /> WhatsApp consultation
                </span>
              </div>
            </div>

            <form className="contact-form" onSubmit={sendWhatsApp}>
              <label>
                YOUR NAME
                <input
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  placeholder="Your name"
                />
              </label>

              <label>
                PHONE
                <input
                  required
                  value={form.phone}
                  onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                  }
                  placeholder="Your phone number"
                />
              </label>

              <label>
                BUSINESS
                <input
                  required
                  value={form.business}
                  onChange={(e) =>
                    setForm({ ...form, business: e.target.value })
                  }
                  placeholder="Business / company"
                />
              </label>

              <label>
                REQUIREMENT
                <textarea
                  value={form.requirement}
                  onChange={(e) =>
                    setForm({ ...form, requirement: e.target.value })
                  }
                  placeholder="What would you like to automate?"
                  rows="4"
                />
              </label>

              <button className="primary-button submit-button" type="submit">
                Discuss on WhatsApp <ArrowRight size={17} />
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-top">
          <button className="footer-logo" onClick={() => scrollTo("home")}>
            GADGE<span>AI</span>
          </button>

          <p>
            AI solutions, automation and digital business systems by Gadge
            Creations.
          </p>

          <button className="back-top" onClick={() => scrollTo("home")}>
            Back to top <ArrowRight size={15} />
          </button>
        </div>

        <div className="footer-bottom">
          <span>&copy; 2026 Gadge Creations</span>
          <span>Fictional website demo</span>
          <span>Bengaluru &middot; India</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
