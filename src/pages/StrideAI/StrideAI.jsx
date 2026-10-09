import React, { useState, useRef, useEffect } from 'react';

const INITIAL_MSG = {
  role: 'ai',
  text: "Hi! I'm StrideAI — your industrial solutions assistant. How can I help you today?",
};

/* 🧠 COMPANY CONTEXT */
const COMPANY_CONTEXT = {
  about:
    "Strideind is an industrial solutions company specializing in automation, engineering, and manufacturing systems. We help businesses improve efficiency and performance.",
  services:
    "We offer industrial automation, robotics integration, process optimization, cleanroom setup, and engineering solutions tailored to different industries.",
  industries:
    "We serve industries such as automotive, aerospace, and medical manufacturing.",
  contact:
    "You can contact us at hello@strideind.com or through the contact form on our website.",
};

export default function StrideAI() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MSG]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  // ✅ Prevent background scrolling when chat is open
  useEffect(() => {
    if (open) {
      document.body.classList.add('stride-chat-open');
    } else {
      document.body.classList.remove('stride-chat-open');
    }
    return () => document.body.classList.remove('stride-chat-open');
  }, [open]);

  const send = (message = input) => {
    const text = message.trim();
    if (!text || loading) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', text }]);

    const lower = text.toLowerCase();

    let reply = "I'm not sure about that. You can contact us at support@strideind.com.";

    // 👋 Greeting
    if (['hi', 'hello', 'hey', 'hlo', 'hy'].includes(lower)) {
      reply = "Hi 👋 I'm StrideAI. How can I assist you today?";
    }

    // 🏢 About
    else if (lower.includes('about') || lower.includes('company') || lower.includes('stride')) {
      reply = COMPANY_CONTEXT.about;
    }

    // 🛠 Services
    else if (lower.includes('service') || lower.includes('what do you do')) {
      reply = COMPANY_CONTEXT.services;
    }

    // 🏭 Industries
    else if (lower.includes('industry')) {
      reply = COMPANY_CONTEXT.industries;
    }

    // 💰 Quote
    else if (lower.includes('quote') || lower.includes('price') || lower.includes('cost')) {
      reply = "For a quote, please contact us and our team will provide a customized solution based on your requirements.";
    }

    // 📞 Contact
    else if (lower.includes('contact') || lower.includes('email')) {
      reply = COMPANY_CONTEXT.contact;
    }

    // 📂 Projects
    else if (lower.includes('project')) {
      reply = "We have completed projects in automation, quality inspection systems, and industrial engineering across multiple industries.";
    }

    // ⏳ Fake typing delay
    setLoading(true);

    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'ai', text: reply }]);
      setLoading(false);
    }, 700);
  };

  const handleKey = e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  const quickReplies = [
    'Tell me about your services',
    'Request a quote',
    'Industries you serve',
  ];

  return (
    <>
      {/* FAB Button */}
      <button
        className={`stride-fab fixed bottom-8 right-8 z-[900] flex cursor-pointer items-center gap-2.5 rounded-[50px] border-0 px-5 py-3.5 font-['Manrope'] transition-all duration-200 max-[480px]:bottom-4 max-[480px]:right-4 min-[1921px]:right-[calc((100vw-1920px)/2+32px)] ${open ? 'active bg-[#1e1e1e] text-white shadow-[0_4px_20px_rgba(0,0,0,0.4)]' : 'bg-[#1a9fa0] text-black shadow-[0_8px_32px_rgba(26,159,160,0.4)] hover:-translate-y-0.5 hover:bg-[#22b8b9] hover:shadow-[0_12px_40px_rgba(26,159,160,0.5)]'}`}
        onClick={() => setOpen(o => !o)}
        aria-label="StrideAI Chat"
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
        <span className="fab-label text-[13px] font-bold tracking-[0.06em]">StrideAI</span>
      </button>

      {/* Chat Window */}
      <div className={`stride-chat fixed bottom-24 right-8 z-[900] flex max-h-[560px] w-[360px] flex-col overflow-hidden rounded-lg border border-[#1a9fa0]/25 bg-[#161616] shadow-[0_24px_64px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.04)] transition-all duration-300 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] max-[480px]:bottom-[86px] max-[480px]:left-3 max-[480px]:right-3 max-[480px]:w-auto min-[1921px]:right-[calc((100vw-1920px)/2+32px)] ${open ? 'open pointer-events-auto translate-y-0 scale-100 opacity-100' : 'pointer-events-none translate-y-5 scale-[0.96] opacity-0'}`}>
        <div className="chat-header flex items-center justify-between border-b border-white/[0.06] bg-[#1e1e1e] px-[18px] py-4">
          <div className="chat-header-left flex items-center gap-3">
            <div className="chat-avatar flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-[#1a9fa0]/40 bg-[#1a9fa0]/[0.12]">
              <img className="h-6 w-6 rounded-full object-contain" src={process.env.PUBLIC_URL + "/dimg.jpeg"} alt="StrideAI" />
            </div>
            <div>
              <div className="chat-name text-sm font-bold text-white">StrideAI</div>
              <div className="chat-status mt-0.5 flex items-center gap-[5px] text-[11px] font-light text-white/50">
                <span className="status-dot h-1.5 w-1.5 animate-[pulse_2s_infinite] rounded-full bg-[#4ade80]" />
                Online · Industrial Assistant
              </div>
            </div>
          </div>
          <button className="chat-close cursor-pointer border-0 bg-transparent p-1 text-sm text-white/50 transition-colors hover:text-white" onClick={() => setOpen(false)}>✕</button>
        </div>

        <div className="chat-messages flex flex-1 flex-col gap-3 overflow-y-auto p-4 [scrollbar-color:rgba(255,255,255,0.1)_transparent] [scrollbar-width:thin]">
          {messages.map((m, i) => (
            <div key={i} className={`chat-msg flex items-end gap-2 ${m.role} ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
              {m.role === 'ai' && <div className="msg-avatar flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1a9fa0] text-xs font-extrabold text-black">S</div>}
              <div className={`msg-bubble max-w-[80%] px-3.5 py-2.5 font-['Manrope'] text-[13px] leading-[1.6] ${m.role === 'ai' ? 'rounded-[2px_12px_12px_12px] border border-white/[0.06] bg-[#1e1e1e] font-light text-white/80' : 'rounded-[12px_12px_2px_12px] bg-[#1a9fa0] font-normal text-black'}`}>{m.text}</div>
            </div>
          ))}

          {loading && (
            <div className="chat-msg ai flex items-end gap-2">
              <div className="msg-avatar flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1a9fa0] text-xs font-extrabold text-black">S</div>
              <div className="msg-bubble typing flex max-w-[80%] items-center gap-1 rounded-[2px_12px_12px_12px] border border-white/[0.06] bg-[#1e1e1e] p-3.5 [&>span]:h-1.5 [&>span]:w-1.5 [&>span]:animate-[bounce_1.2s_infinite] [&>span]:rounded-full [&>span]:bg-[#1a9fa0] [&>span:nth-child(2)]:[animation-delay:0.15s] [&>span:nth-child(3)]:[animation-delay:0.3s]">
                <span /><span /><span />
              </div>
            </div>
          )}

          {messages.length === 1 && !loading && (
            <div className="quick-replies flex flex-col gap-1.5 pl-9">
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  className="quick-btn cursor-pointer rounded-[20px] border border-[#1a9fa0]/35 bg-transparent px-3 py-2 text-left font-['Manrope'] text-xs font-light text-[#22b8b9] transition-colors hover:bg-[#1a9fa0]/[0.12] hover:text-white"
                  onClick={() => send(reply)}
                >
                  {reply}
                </button>
              ))}
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        <div className="chat-input-row flex items-end gap-2 border-t border-white/[0.06] bg-[#1e1e1e] p-3">
          <textarea
            className="chat-input max-h-[100px] flex-1 resize-none rounded-lg border border-white/[0.08] bg-[#161616] px-3.5 py-2.5 font-['Manrope'] text-[13px] font-light leading-[1.5] text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#1a9fa0]/50"
            placeholder="Ask StrideAI anything..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
            rows={1}
          />
          <button className="chat-send flex h-[38px] w-[38px] shrink-0 cursor-pointer items-center justify-center rounded-lg border-0 bg-[#1a9fa0] text-black transition-all hover:bg-[#22b8b9] disabled:cursor-default disabled:opacity-40 disabled:hover:bg-[#1a9fa0]" onClick={() => send()} disabled={!input.trim() || loading}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
