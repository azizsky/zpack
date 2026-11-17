"use client";

import { forwardRef } from "react";

const InvoiceReceipt = forwardRef<HTMLDivElement, any>(({ data }, ref) => {
  const today = new Date();
  const dueDate = new Date();
  dueDate.setDate(today.getDate() + 3);

  const formatDateShort = (dateObj: Date) => {
    return dateObj.toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" });
  };

  // Kalkulasi Harga, PPN 11%, dan Total Tagihan
  const subtotal = Number(data.harga || 0);
  const ppn = subtotal * 0.11;
  const totalTagihan = subtotal + ppn;

  return (
    <div
      ref={ref}
      className="w-[580px] bg-white text-slate-800 p-6 font-sans text-xs leading-relaxed border border-slate-200 shadow-2xl block"
      style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif", backgroundColor: "#ffffff" }}
    >
      {/* HEADER: Digital Invoice & Status */}
      <div className="flex justify-between items-start mb-5">
        <div>
          <h1 className="text-2xl font-black text-blue-600 tracking-tight">ZPack Digital Invoice</h1>
          <p className="text-[10px] text-slate-600 font-bold tracking-widest uppercase mt-0.5">ZPack Digital Invivation</p>
        </div>
        <div className="text-right">
          <span className="inline-block bg-amber-100 text-amber-800 font-bold text-[10px] px-2.5 py-0.5 rounded tracking-wide uppercase">
            UNPAID (MENUNGGU PEMBAYARAN)
          </span>
          <p className="text-[11px] font-mono text-slate-600 font-bold mt-1">
            #ZPCK-{data.id?.substring(data.id.length - 6) || "2192"}
          </p>
        </div>
      </div>

      {/* INFORMASI PENGIRIM & KLIEN */}
      <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-slate-200">
        <div>
          <p className="text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-1">FROM (PENGIRIM)</p>
          <p className="font-bold text-slate-900 text-xs">ZPack Digital Invitation   n</p>
          <p className="text-slate-500 text-[10px] leading-tight">jl.pagarsih . Bandung, Jawa Barat</p>
          <p className="text-slate-600 text-[10px] mt-0.5">Website: www.zpack.my.id</p>
        </div>
        <div>
          <p className="text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-1">TO (KLIEN)</p>
          <p className="font-bold text-slate-900 text-xs capitalize">{data.namaClient || "Klien lestariproject"}</p>
          <p className="text-blue-600 font-mono text-[10px] truncate">zpack.my.id/wedding/{data.slug}</p>
          <p className="text-slate-600 text-[10px] mt-0.5">ID: <span className="font-mono">{data.id}</span></p>
        </div>
      </div>

      {/* TANGGAL ISSUED */}
      <div className="mb-5 pb-4 border-b border-slate-200">
        <p className="text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-0.5">ISSUED ON (TANGGAL TERBIT)</p>
        <p className="font-semibold text-slate-800 text-[11px]">{formatDateShort(today)}</p>
      </div>

      {/* TABEL ITEM / RINCIAN PAKET (BLOK HITAM) */}
      <div className="mb-4">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-black text-white text-[10px] uppercase tracking-wider">
              <th className="py-2 px-3 w-[45%]">ITEM NAME & DETAILS</th>
              <th className="py-2 px-3 text-center w-[10%]">QTY</th>
              <th className="py-2 px-3 text-right w-[20%]">RATE</th>
              <th className="py-2 px-3 text-right w-[25%]">TOTAL</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            <tr>
              <td className="py-2.5 px-3 align-top">
                <span className="font-bold block text-slate-900 text-xs">
                  Undangan Digital ({data.package?.toUpperCase()})
                </span>
                <div className="text-[10px] text-slate-800 space-y-0.5 mt-0.5">
                  <p>Hari-H Acara: <span className="font-medium text-slate-700">{data.tanggalAcara || "-"}</span></p>
                  <p>Masa Aktif s/d: <span className="font-medium text-emerald-600">{data.expiredDate || "-"}</span></p>
                  <p>Template: <span className="font-mono font-semibold text-purple-600">{data.templateId || "Default"}</span></p>
                </div>
              </td>
              <td className="py-2.5 px-3 text-center font-medium align-top">1</td>
              <td className="py-2.5 px-3 text-right font-medium align-top whitespace-nowrap">
                Rp {subtotal.toLocaleString("id-ID")}
              </td>
              <td className="py-2.5 px-3 text-right font-bold text-slate-900 align-top whitespace-nowrap">
                Rp {subtotal.toLocaleString("id-ID")}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* SUB-TOTAL, PPN 11%, & TOTAL AMOUNT */}
      <div className="border-t border-slate-200 pt-3 mb-4 space-y-1">
        <div className="flex justify-between text-slate-700 text-[11px]">
          <span>Subtotal</span>
          <span className="font-medium text-slate-800">Rp {subtotal.toLocaleString("id-ID")}</span>
        </div>
        <div className="flex justify-between text-slate-700 text-[11px]">
          <span>Pajak PPN (11%)</span>
          <span className="font-medium text-slate-800">Rp {ppn.toLocaleString("id-ID")}</span>
        </div>
        <div className="flex justify-between text-xs font-black text-slate-900 border-t border-slate-100 pt-1.5">
          <span>Total Tagihan</span>
          <span className="text-blue-600 text-sm">Rp {totalTagihan.toLocaleString("id-ID")}</span>
        </div>
      </div>

      {/* INSTRUKSI PEMBAYARAN */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-lg p-2.5 text-[10px] text-slate-600 space-y-0.5 mb-4">
        <p className="font-bold text-slate-900 uppercase tracking-wider text-[9px]">PAYMENT INSTRUCTIONS</p>
        <p>Silakan transfer tagihan ke <span className="font-bold text-slate-800">Bank BCA: 3761632319</span> (A/N asep saepul aziz).</p>
        <p className="text-slate-700">Kirimkan bukti konfirmasi transfer melalui WhatsApp Admin.</p>
      </div>

      {/* FOOTER & COPYRIGHT */}
      <div className="text-center text-[9px] text-slate-700 border-t border-slate-100 pt-2 tracking-wider space-y-0.5">
        <p className="font-medium uppercase">Thank you for choosing ZPack Digital Invitation — wwww.zpack.my.id</p>
        <p className="text-[8px] text-slate-700">Copyright © 2026 zpack digital Platform. All rights reserved.</p>
      </div>
    </div>
  );
});

InvoiceReceipt.displayName = "InvoiceReceipt";

export default InvoiceReceipt;