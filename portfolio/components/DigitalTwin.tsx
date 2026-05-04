"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Sparkles, X, Bot } from "lucide-react";

type Role = "user" | "assistant";
type Msg = { role: Role; content: string };

const SUGGESTIONS = [
  "Tell me about your experience at EBN Banco",
  "What's your strongest tech stack?",
  "Are you available for new opportunities?",
  "What got you into cybersecurity?",
];

const GREETING: Msg = {
  role: "assistant",
  content:
    "Hey, I'm Fran's Digital Twin — ask me anything about my career, stack, or what I'm looking for next.",
};

export default function DigitalTwin() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [open]);

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const next: Msg[] = [
      ...messages,
      { role: "user", content: trimmed },
      { role: "assistant", content: "" },
    ];
    setMessages(next);
    setInput("");
    setLoading(true);

    const payload = next
      .filter((_, i) => i !== next.length - 1)
      .filter((m) => m.content.trim().length > 0);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: payload }),
      });

      if (!res.ok || !res.body) {
        const errBody = await res.text().catch(() => "");
        setMessages((m) => {
          const copy = [...m];
          copy[copy.length - 1] = {
            role: "assistant",
            content: `Sorry, the chat backend hit an error.${
              errBody ? ` (${errBody.slice(0, 200)})` : ""
            }`,
          };
          return copy;
        });
        setLoading(false);
        return;
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setMessages((m) => {
          const copy = [...m];
          copy[copy.length - 1] = { role: "assistant", content: acc };
          return copy;
        });
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Network error";
      setMessages((m) => {
        const copy = [...m];
        copy[copy.length - 1] = {
          role: "assistant",
          content: `Couldn't reach the chat backend: ${msg}`,
        };
        return copy;
      });
    } finally {
      setLoading(false);
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  }

  return (
    <>
      {/* Launcher */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Chat with Fran's Digital Twin"}
        className="fixed bottom-5 right-5 z-[60] group"
      >
        <span className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400 blur-md opacity-70 group-hover:opacity-100 transition-opacity" />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400 text-white shadow-[0_8px_30px_-6px_rgba(99,102,241,0.6)] transition-transform group-hover:scale-105">
          {open ? (
            <X size={20} strokeWidth={2} />
          ) : (
            <Bot size={22} strokeWidth={1.8} />
          )}
        </span>
        {!open && (
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/70" />
            <span className="relative h-3 w-3 rounded-full bg-emerald-400 border border-background" />
          </span>
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="fixed z-[55] inset-x-3 bottom-24 sm:inset-x-auto sm:right-5 sm:bottom-24 sm:w-[380px] max-h-[min(620px,calc(100svh-7rem))] flex flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-surface/95 to-surface-2/95 backdrop-blur-xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] overflow-hidden"
            role="dialog"
            aria-label="Digital Twin chat"
          >
            {/* Header */}
            <div className="relative px-4 py-3 border-b border-white/5 flex items-center gap-3">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/15 via-fuchsia-500/10 to-transparent pointer-events-none" />
              <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400 text-black flex-none">
                <Sparkles size={16} strokeWidth={2} />
              </div>
              <div className="relative min-w-0 flex-1">
                <div className="text-sm font-[var(--font-display)] font-semibold tracking-tight truncate">
                  Digital Twin · Fran Luengo
                </div>
                <div className="flex items-center gap-1.5 mt-0.5 text-[10px] uppercase tracking-[0.18em] text-foreground/55">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/70" />
                    <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
                  Online · Ask me anything
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="relative rounded-md p-1.5 text-foreground/55 hover:text-foreground hover:bg-white/5 transition"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-4 py-4 space-y-3"
            >
              {messages.map((m, i) => (
                <Bubble key={i} role={m.role} content={m.content} />
              ))}
              {loading &&
                messages[messages.length - 1]?.content.length === 0 && (
                  <Bubble role="assistant" content="" typing />
                )}
              {messages.length === 1 && (
                <div className="pt-1">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-foreground/40 mb-2 px-1">
                    Try asking
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        onClick={() => sendMessage(s)}
                        disabled={loading}
                        className="text-[12px] rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-foreground/75 hover:bg-white/[0.07] hover:border-white/20 transition disabled:opacity-50"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
              className="relative border-t border-white/5 p-3 flex items-end gap-2 bg-background/40"
            >
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                rows={1}
                placeholder="Ask about my career, stack, projects…"
                className="flex-1 resize-none rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm text-foreground placeholder:text-foreground/35 focus:outline-none focus:border-white/25 focus:bg-white/[0.05] transition max-h-32"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                aria-label="Send"
                className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400 text-black disabled:opacity-40 disabled:cursor-not-allowed hover:brightness-110 transition"
              >
                <Send size={15} strokeWidth={2} />
              </button>
            </form>
            <div className="px-3 pb-2 text-[9px] uppercase tracking-[0.18em] text-foreground/35 text-center">
              Powered by Claude · Responses generated by AI
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Bubble({
  role,
  content,
  typing = false,
}: {
  role: Role;
  content: string;
  typing?: boolean;
}) {
  const isUser = role === "user";
  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"} gap-2 items-end`}
    >
      {!isUser && (
        <div className="flex h-7 w-7 flex-none items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400 text-black text-[10px] font-bold">
          FL
        </div>
      )}
      <div
        className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed whitespace-pre-wrap ${
          isUser
            ? "bg-white text-black rounded-br-sm"
            : "bg-white/[0.05] border border-white/10 text-foreground/90 rounded-bl-sm"
        }`}
      >
        {typing ? <TypingDots /> : content || <TypingDots />}
      </div>
    </div>
  );
}

function TypingDots() {
  return (
    <span className="inline-flex items-center gap-1 py-1">
      <span className="h-1.5 w-1.5 rounded-full bg-foreground/40 animate-bounce [animation-delay:-0.3s]" />
      <span className="h-1.5 w-1.5 rounded-full bg-foreground/40 animate-bounce [animation-delay:-0.15s]" />
      <span className="h-1.5 w-1.5 rounded-full bg-foreground/40 animate-bounce" />
    </span>
  );
}
