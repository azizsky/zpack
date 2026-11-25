"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/common/navbar";

export interface CatalogProduct {
  id: string;
  category: string;
  catLabel: string;
  title: string;
  badge: string;
  img: string;
  priceEst: string;
  material: string;
  finishing: string;
  moq: string;
  desc: string;
  isActive?: boolean;
}

const CATEGORY_TABS = [
  { value: "all", label: "Semua Produk" },
  { value: "packaging-makanan", label: "Packaging Makanan" },
  { value: "skincare", label: "Skincare & Kosmetik" },
  { value: "label-branding", label: "Label & Branding" },
  { value: "promotional-print", label: "Promotional Print" },
  { value: "general-print", label: "General Print" },
  { value: "undangan-digital", label: "Undangan Digital" },
];

function normalizeCategory(rawCat?: string): string {
  const c = String(rawCat || "").trim().toLowerCase();
  if (!c) return "general-print";
  if (c === "food" || c === "makanan" || c === "packaging-makanan") {
    return "packaging-makanan";
  }
  if (c === "skincare" || c === "kosmetik" || c === "skincare-kosmetik") {
    return "skincare";
  }
  if (c === "label-branding" || c === "stiker" || c === "label") {
    return "label-branding";
  }
  if (c === "promotional-print" || c === "promo") {
    return "promotional-print";
  }
  if (c === "undangan-digital" || c === "undangan") {
    return "undangan-digital";
  }
  return c;
}

async function readJsonSafe<T = Record<string, any>>(res: Response): Promise<T> {
  const text = await res.text();
  if (!text) return {} as T;
  try {
    return JSON.parse(text) as T;
  } catch {
    throw new Error(`Respon bukan JSON (HTTP ${res.status}): ${text.slice(0, 140)}`);
  }
}

export default function ProdukCatalogPage() {
  const [products, setProducts] = useState<CatalogProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [activeCat, setActiveCat] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<CatalogProduct | null>(null);

  useEffect(() => {
    let active = true;
    async function loadCatalog() {
      setLoading(true);
      setErrorMsg("");
      try {
        const res = await fetch("/api/admin/produk", { cache: "no-store" });
        const data = await readJsonSafe<{
          products?: CatalogProduct[];
          data?: CatalogProduct[];
          message?: string;
        }>(res);

        if (!res.ok) {
          throw new Error(data.message || `Gagal memuat katalog (HTTP ${res.status})`);
        }

        const rawList = data.products || data.data || [];
        const list = (Array.isArray(rawList) ? rawList : [])
          .filter((item) => item && String(item.title || "").trim() !== "")
          .filter((item) => item.isActive !== false)
          .map((item) => ({
            ...item,
            category: normalizeCategory(item.category),
          }));

        if (active) {
          setProducts(list);
        }
      } catch (err: any) {
        if (active) {
          setErrorMsg(err?.message || "Gagal memuat produk.");
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadCatalog();
    return () => {
      active = false;
    };
  }, []);

  const currentTab =
    CATEGORY_TABS.find((t) => t.value === activeCat) || CATEGORY_TABS[0];

  const filteredProducts =
    activeCat === "all"
      ? products
      : products.filter((p) => normalizeCategory(p.category) === activeCat);

  const buildWaLink = (item: CatalogProduct) => {
    const text = encodeURIComponent(
      `Halo ZPack, saya ingin konsultasi & pesan produk *${item.title}* (${item.priceEst}, MOQ: ${item.moq}).`
    );
    return `https://wa.me/6281224698998?text=${text}`;
  };

  return (
    <div className="min-h-screen text-white py-14 px-4 sm:px-8">
       <Navbar />
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Katalog */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Katalog Packaging &amp; Cetak Custom
          </h1>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Pilih kategori kemasan sesuai kebutuhan brand kamu untuk melihat spesifikasi bahan dan perkiraan harga.
          </p>
        </div>

        {/* Tab Kategori */}
        <div className="flex flex-wrap items-center justify-center gap-2 pb-3 border-b border-slate-800/80">
          {CATEGORY_TABS.map((tab) => {
            const isActive = activeCat === tab.value;
            return (
              <button
                key={tab.value}
                type="button"
                onClick={() => setActiveCat(tab.value)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold text-center transition-all cursor-pointer ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/25"
                    : "bg-[#0e172a] text-slate-300 hover:bg-slate-800 border border-slate-800"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Judul Kategori Aktif + Catatan Estimasi Harga */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-extrabold text-amber-400">
            {currentTab.label}
          </h2>

          <div className="rounded-xl bg-[#0b1528] border border-slate-800/90 border-l-4 border-l-amber-500 px-4 py-3.5 flex items-start gap-3">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded bg-sky-500/20 text-sky-400 text-xs font-bold shrink-0 mt-0.5">
              i
            </span>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              <strong className="text-white">Catatan Harga:</strong> Perkiraan harga di bawah bersifat{" "}
              <strong className="text-amber-400">estimasi awal</strong>. Harga pasti akan disesuaikan dengan ukuran presisi, variasi finishing, serta total jumlah (QTY) pesanan kamu.
            </p>
          </div>
        </div>

        {/* Daftar Produk: 2 card di mobile, 3-4 card di desktop, gambar 1:1 */}
        {loading ? (
          <div className="py-16 text-center text-slate-400 text-sm">
            Memuat katalog produk...
          </div>
        ) : errorMsg ? (
          <div className="py-8 px-4 text-center rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
            {errorMsg}
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="py-14 px-4 text-center rounded-2xl bg-[#0e172a] border border-slate-800 text-slate-400 text-sm">
            Belum ada produk pada kategori <strong className="text-white">{currentTab.label}</strong>.
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
            {filteredProducts.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedProduct(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedProduct(item);
                  }
                }}
                className="group bg-[#0e172a] hover:bg-[#121e36] border border-slate-800 hover:border-amber-500/50 rounded-2xl overflow-hidden flex flex-col justify-between transition-all cursor-pointer shadow-md"
              >
                <div>
                  {/* Foto Rasio 1:1 */}
                  <div className="relative aspect-square w-full bg-slate-100 overflow-hidden">
                    {item.img ? (
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-xs text-slate-500">
                        Tidak ada foto
                      </div>
                    )}
                    {item.badge && (
                      <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-amber-400 text-slate-950 font-extrabold text-[10px] sm:text-[11px] shadow-xs">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <div className="p-3 sm:p-4 space-y-1">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 truncate">
                      {item.catLabel || currentTab.label}
                    </span>
                    <h3 className="text-xs sm:text-sm font-extrabold text-white leading-snug line-clamp-2 group-hover:text-amber-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-extrabold text-amber-400 pt-0.5">
                      {item.priceEst}
                    </p>
                  </div>
                </div>

                <div className="p-3 sm:p-4 pt-0">
                  <div className="w-full py-2 rounded-lg bg-[#161f30] group-hover:bg-amber-500 text-slate-200 group-hover:text-slate-950 text-[11px] sm:text-xs font-bold text-center border border-slate-700/70 group-hover:border-amber-500 transition-colors">
                    Lihat Spec &amp; Harga
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* POPUP / MODAL DETAIL PRODUK */}
        {selectedProduct && (
          <div
            onClick={() => setSelectedProduct(null)}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xl bg-[#0e172a] border border-slate-700 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
            >
              {/* Header Modal + Tombol Tutup */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800 shrink-0">
                <div className="flex items-center gap-2">
                  {selectedProduct.badge && (
                    <span className="px-2.5 py-0.5 rounded-md bg-amber-400 text-slate-950 font-extrabold text-xs">
                      {selectedProduct.badge}
                    </span>
                  )}
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    {selectedProduct.catLabel || selectedProduct.category}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="w-8 h-8 rounded-full bg-slate-800 hover:bg-red-600 text-white text-sm font-bold flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Tutup detail"
                >
                  ✕
                </button>
              </div>

              <div className="p-5 sm:p-6 space-y-4 overflow-y-auto">
                {/* Foto Rasio 1:1 di Modal */}
                <div className="relative aspect-square w-56 sm:w-64 mx-auto rounded-xl bg-slate-100 border border-slate-700/80 overflow-hidden">
                  {selectedProduct.img ? (
                    <img
                      src={selectedProduct.img}
                      alt={selectedProduct.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-xs text-slate-500">
                      Tidak ada foto
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
                    {selectedProduct.title}
                  </h3>
                  <p className="text-base sm:text-lg font-extrabold text-amber-400 mt-1">
                    {selectedProduct.priceEst}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-[#161f30] border border-slate-800 rounded-xl p-3.5 text-xs">
                  <div>
                    <span className="text-slate-400 block">Bahan</span>
                    <strong className="text-white">{selectedProduct.material || "-"}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Finishing</span>
                    <strong className="text-white">{selectedProduct.finishing || "-"}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Minimum Order</span>
                    <strong className="text-white">{selectedProduct.moq || "-"}</strong>
                  </div>
                </div>

                {selectedProduct.desc && (
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Deskripsi Produk
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-line">
                      {selectedProduct.desc}
                    </p>
                  </div>
                )}

                <div className="pt-2 flex flex-wrap items-center justify-end gap-3 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(null)}
                    className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs sm:text-sm font-semibold text-slate-200 cursor-pointer"
                  >
                    Tutup
                  </button>
                  <Link
                    href={buildWaLink(selectedProduct)}
                    target="_blank"
                    className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs sm:text-sm font-extrabold transition-colors"
                  >
                    Pesan / Konsultasi Produk
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}