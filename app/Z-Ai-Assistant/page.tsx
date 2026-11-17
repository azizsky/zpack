'use client';

import Navbar from "@/components/common/navbar";
import { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const STORAGE_KEY = 'zpack_ai_chat_history';
const TIME_LIMIT_HOURS = 2; // Batas waktu kedaluwarsa riwayat chat (2 jam)

export default function AiAssistantPage() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  // Ref untuk auto-scroll ke pesan terbaru
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // 1. Ambil data dari localStorage saat halaman pertama kali dimuat dengan batasan 2 jam
  useEffect(() => {
    try {
      const savedData = localStorage.getItem(STORAGE_KEY);
      if (savedData) {
        const parsed = JSON.parse(savedData);
        const now = new Date().getTime();
        const elapsedHours = (now - parsed.timestamp) / (1000 * 60 * 60);

        if (elapsedHours < TIME_LIMIT_HOURS && parsed.messages?.length > 0) {
          setMessages(parsed.messages);
          return;
        }
      }
    } catch (e) {
      console.error('Gagal memuat riwayat chat:', e);
    }

    // Default jika belum ada atau sudah lebih dari 2 jam
    setMessages([
      {
        role: 'assistant',
        content: 'Halo! Saya Z-Ai dari ZPack Printing & Packaging. Ada yang bisa saya bantu seputar kemasan custom, estimasi harga cetak, atau rekomendasi bahan?',
      },
    ]);
  }, []);

  // 2. Simpan pesan ke localStorage setiap kali ada perubahan riwayat chat
  useEffect(() => {
    if (messages.length > 1) {
      try {
        const dataToSave = {
          timestamp: new Date().getTime(),
          messages: messages,
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
      } catch (e) {
        console.error('Gagal menyimpan riwayat chat:', e);
      }
    }
  }, [messages]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  // Pembersih markdown
  const cleanMarkdownText = (text: string) => {
    return text
      .replace(/###/g, '')
      .replace(/\*\*/g, '')
      .replace(/\*/g, '')
      .replace(/#{1,6}\s?/g, '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
    const updatedMessages = [...messages, { role: 'user' as const, content: userMessage }];
    setMessages(updatedMessages);
    setLoading(true);

    try {
      const response = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userMessage }),
      });

      const data = await response.json();

      if (data.reply) {
        const cleanedReply = cleanMarkdownText(data.reply);
        setMessages([...updatedMessages, { role: 'assistant', content: cleanedReply }]);
      } else {
        setMessages([
          ...updatedMessages,
          { role: 'assistant', content: 'Gagal mendapatkan balasan dari server API.' },
        ]);
      }
    } catch (error: any) {
      setMessages([
        ...updatedMessages,
        { role: 'assistant', content: `Error koneksi: ${error.message || 'Gagal terhubung'}` },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-[100dvh] flex flex-col overflow-hidden bg-slate-100/60 dark:bg-[#0b101b] transition-colors duration-200">
      <Navbar />

      {/* Area Chat Utama: Tanpa kotak card luar, menyatu penuh dengan layar */}
      <main className="w-full flex-1 flex flex-col pt-20 overflow-hidden">
        
        {/* Area Scroll Pesan (Scrollbar di tepi layar kanan seperti WA Web) */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 sm:py-6 scroll-smooth">
          {/* Pembatas lebar tengah (max-w-4xl) agar di laptop nyaman dibaca dan tidak melebar ke pinggir */}
          <div className="max-w-4xl mx-auto flex flex-col gap-3 sm:gap-4">
            
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-end gap-2.5 ${
                  msg.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {/* Avatar kecil khusus AI di sebelah kiri */}
                {msg.role === 'assistant' && (
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-600 dark:text-[#d4af37] flex items-center justify-center text-[10px] sm:text-xs font-extrabold shrink-0 mb-0.5">
                    AI
                  </div>
                )}

                {/* Gelembung Chat ala WhatsApp */}
                <div
                  className={`max-w-[84%] sm:max-w-[74%] px-4 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-line shadow-xs ${
                    msg.role === 'user'
                      ? 'bg-blue-700 text-slate200 font-medium rounded-br-xs'
                      : 'bg-white dark:bg-[#182234] text-slate-800 dark:text-slate-100 rounded-bl-xs border border-slate-200/80 dark:border-white/[0.08]'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Indicator Loading */}
            {loading && (
              <div className="flex items-end gap-2.5 justify-start">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-600 dark:text-[#d4af37] flex items-center justify-center text-[10px] sm:text-xs font-extrabold shrink-0 mb-0.5">
                  AI
                </div>
                <div className="bg-white dark:bg-[#182234] text-slate-600 dark:text-slate-400 border border-slate-200/80 dark:border-white/[0.08] px-4 py-2.5 rounded-2xl rounded-bl-xs text-xs sm:text-sm flex items-center gap-2 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-bounce [animation-delay:0.15s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-bounce [animation-delay:0.3s]" />
                  <span className="ml-1">Z-Ai sedang mengetik...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Bar Input Bawah: Terbuka & menempel rapi di bawah layar */}
        <div className="w-full px-4 sm:px-6 pt-2 pb-4 sm:pb-5 bg-gradient-to-t from-slate-100 via-slate-100/95 to-transparent dark:from-[#0b101b] dark:via-[#0b101b]/95 dark:to-transparent shrink-0">
          <form
            onSubmit={handleSubmit}
            className="max-w-4xl mx-auto flex items-center gap-2 sm:gap-3"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tanya jenis bahan kemasan, ukuran box, atau estimasi harga..."
              className="flex-1 bg-white dark:bg-[#161f30] border border-slate-300 dark:border-white/10 rounded-full px-4 sm:px-5 py-3 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:border-amber-500 dark:focus:border-[#d4af37] shadow-sm transition-colors"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-slate-950 px-5 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-bold transition-all disabled:opacity-40 cursor-pointer shrink-0 shadow-sm"
            >
              Kirim
            </button>
          </form>
        </div>

      </main>
    </div>
  );
}