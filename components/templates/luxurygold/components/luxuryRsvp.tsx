'use client';

import { useState, useEffect } from 'react';

interface CommentItem {
  id: number;
  name: string;
  attendance: string;
  guests: number;
  message: string;
  created_at: string;
}

export default function LuxuryRSVP({ invitationId }: { invitationId: string }) {
  const [name, setName] = useState('');
  const [attendance, setAttendance] = useState('Hadir');
  const [guests, setGuests] = useState(1);
  const [message, setMessage] = useState('');
  
  const [comments, setComments] = useState<CommentItem[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  useEffect(() => {
    fetchComments();
  }, [invitationId]);

  const fetchComments = async () => {
    try {
      const res = await fetch(`/api/invitations/${invitationId}/rsvp`);
      const json = await res.json();
      if (json.success) {
        setComments(json.data || []);
      }
    } catch (err) {
      console.error("Gagal memuat ucapan", err);
    }
  };

  // Validasi Karakter Ketat: Hanya Huruf, Angka, Spasi, Titik, Koma, Tanya, Seru (Tanpa Emoji/Simbol Aneh)
  const validateInputText = (text: string) => {
    const regex = /^[a-zA-Z0-9\s.,?!]+$/;
    return regex.test(text);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    // 1. Validasi Input Kosong
    if (!name.trim() || !message.trim()) {
      setErrorMsg('Nama dan ucapan wajib diisi!');
      return;
    }

    // 2. Validasi Anti-Emoji & Simbol Alay
    if (!validateInputText(name) || !validateInputText(message)) {
      setErrorMsg('Mohon maaf, Nama dan Ucapan hanya boleh berisi huruf, angka, titik, dan koma (Tanpa Emoji atau Simbol khusus).');
      return;
    }

    // 3. Validasi Cooldown Waktu di Perangkat (Minimal 3 Menit Sejak Kirim Terakhir)
    const lastSubmitTime = localStorage.getItem(`last_submit_${invitationId}`);
    const now = Date.now();
    const cooldownDuration = 3 * 60 * 1000; // 3 Menit

    if (lastSubmitTime && now - Number(lastSubmitTime) < cooldownDuration) {
      const remainingMinutes = Math.ceil((cooldownDuration - (now - Number(lastSubmitTime))) / 60000);
      setErrorMsg(`Terlalu cepat! Harap tunggu sekitar ${remainingMinutes} menit lagi sebelum mengirim ucapan baru.`);
      return;
    }

    setSubmitting(true);

    try {
      // Kirim data ke API (Di backend nanti, API bisa mencatat IP dan membatasi max 7-10 request per IP)
      const res = await fetch(`/api/invitations/${invitationId}/rsvp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, attendance, guests, message }),
      });

      const json = await res.json();

      if (json.success) {
        setSuccessMsg('Terima kasih! Konfirmasi dan ucapan Anda berhasil dikirim.');
        
        // Simpan waktu sukses kirim ke localStorage untuk cooldown perangkat
        localStorage.setItem(`last_submit_${invitationId}`, now.toString());

        setName('');
        setMessage('');
        fetchComments(); // Refresh daftar komentar
      } else {
        // Menangkap pesan error dari backend (misal jika batas IP sudah tercapai: "Batas pengiriman dari jaringan ini telah tercapai")
        setErrorMsg(json.message || 'Gagal mengirim data.');
      }
    } catch (err) {
      setErrorMsg('Terjadi kesalahan jaringan.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="w-full py-16 px-4 bg-slate-950 text-slate-100 flex flex-col items-center">
      <div className="max-w-md w-full bg-slate-900 border border-amber-500/30 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
        
        {/* Aksen Garis Emas Mewah */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>

        <div className="text-center mb-6">
          <span className="text-[10px] uppercase tracking-widest text-amber-400 font-semibold">
            RSVP & Wedding Wish
          </span>
          <h2 className="text-2xl font-serif text-amber-100 mt-1">Konfirmasi Kehadiran</h2>
          <p className="text-xs text-slate-400 mt-1">
            Tuliskan konfirmasi kehadiran serta doa terbaik untuk kedua mempelai.
          </p>
        </div>

        {/* Notifikasi Error / Sukses */}
        {errorMsg && (
          <div className="mb-4 p-3 bg-red-950/80 border border-red-500 text-red-200 text-xs rounded-xl text-center">
            {errorMsg}
          </div>
        )}
        {successMsg && (
          <div className="mb-4 p-3 bg-emerald-950/80 border border-emerald-500 text-emerald-200 text-xs rounded-xl text-center">
            {successMsg}
          </div>
        )}

        {/* Form Input Terpadu */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-amber-200/80 mb-1">Nama Lengkap</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Masukkan nama Anda..."
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-base sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-amber-200/80 mb-1">Kehadiran</label>
              <select
                value={attendance}
                onChange={(e) => setAttendance(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-base sm:text-sm text-white focus:outline-none focus:border-amber-400 transition"
              >
                <option value="Hadir">Hadir</option>
                <option value="Tidak Hadir">Tidak Hadir</option>
                <option value="Ragu-ragu">Masih Ragu</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-amber-200/80 mb-1">Jumlah Tamu</label>
              <input
                type="number"
                min="1"
                max="5"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-base sm:text-sm text-white focus:outline-none focus:border-amber-400 transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-amber-200/80 mb-1">Ucapan & Doa</label>
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tuliskan doa atau ucapan terbaik..."
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-base sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition resize-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3 rounded-xl text-xs font-bold tracking-wide uppercase transition-all shadow-md bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-extrabold cursor-pointer"
          >
            {submitting ? 'Mengirim...' : 'Kirim Konfirmasi & Ucapan'}
          </button>
        </form>

        {/* Daftar Komentar / Ucapan Masuk */}
        <div className="mt-8">
          <h3 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3 text-center">
            {comments.length} Ucapan & Doa Masuk
          </h3>

          <div className="max-h-60 overflow-y-auto space-y-3 pr-1 custom-scrollbar">
            {comments.length === 0 ? (
              <p className="text-center text-slate-500 text-xs py-4">Belum ada ucapan. Jadilah yang pertama!</p>
            ) : (
              comments.map((item) => (
                <div key={item.id} className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-xs text-amber-200">{item.name}</span>
                    <span className={`text-[9px] px-2 py-0.5 rounded-full font-semibold ${
                      item.attendance === 'Hadir' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-rose-950 text-rose-400 border border-rose-800'
                    }`}>
                      {item.attendance} ({item.guests} Orang)
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.message}</p>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </section>
  );
}