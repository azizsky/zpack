"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export interface ProductItem {
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

const CATEGORY_OPTIONS = [
  { value: "food", label: "Packaging Makanan" },
  { value: "skincare", label: "Skincare & Kosmetik" },
  { value: "label-branding", label: "Label & Branding" },
  { value: "promotional-print", label: "Promotional Print" },
  { value: "general-print", label: "General Print" },
  { value: "undangan-digital", label: "Undangan Digital" },
];

const EMPTY_FORM: ProductItem = {
  id: "",
  category: "skincare",
  catLabel: "Skincare & Kosmetik",
  title: "",
  badge: "Best Seller",
  img: "",
  priceEst: "",
  material: "",
  finishing: "",
  moq: "500 pcs",
  desc: "",
  isActive: true,
};

async function readJsonSafe<T = Record<string, any>>(res: Response): Promise<T> {
  const text = await res.text();
  if (!text) return {} as T;
  try {
    return JSON.parse(text) as T;
  } catch {
    throw new Error(`Respon bukan JSON (HTTP ${res.status}): ${text.slice(0, 140)}`);
  }
}

export default function AdminProductsPage() {
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  const [form, setForm] = useState<ProductItem>(EMPTY_FORM);
  const [isEditing, setIsEditing] = useState(false);

  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState("");

  const [saving, setSaving] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCat, setFilterCat] = useState("all");

  const revokeIfBlob = (url: string) => {
    if (url && url.startsWith("blob:")) {
      URL.revokeObjectURL(url);
    }
  };

  const fetchProducts = async () => {
    setLoading(true);
    setLoadError("");
    try {
      const res = await fetch("/api/admin/produk", { cache: "no-store" });
      const data = await readJsonSafe<{
        products?: ProductItem[];
        data?: ProductItem[];
        message?: string;
      }>(res);

      if (!res.ok) {
        throw new Error(data.message || `Gagal memuat (HTTP ${res.status})`);
      }

      const list = data.products || data.data || [];
      setProducts(Array.isArray(list) ? list : []);
    } catch (err: any) {
      setLoadError(err?.message || "Gagal memuat produk.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const slugify = (text: string) =>
    text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

  const handleTitleChange = (value: string) => {
    setForm((prev) => ({
      ...prev,
      title: value,
      id: !isEditing ? slugify(value) : prev.id,
    }));
  };

  const handleCategoryChange = (value: string) => {
    const found = CATEGORY_OPTIONS.find((c) => c.value === value);
    setForm((prev) => ({
      ...prev,
      category: value,
      catLabel: found ? found.label : value,
    }));
  };

  const handlePhotoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    revokeIfBlob(photoPreview);
    setPhotoFile(file);
    setPhotoPreview(URL.createObjectURL(file));
    e.target.value = "";
  };

  const handleRemovePhoto = () => {
    revokeIfBlob(photoPreview);
    setPhotoFile(null);
    setPhotoPreview("");
    setForm((prev) => ({ ...prev, img: "" }));
  };

  const resetForm = () => {
    revokeIfBlob(photoPreview);
    setForm(EMPTY_FORM);
    setPhotoFile(null);
    setPhotoPreview("");
    setIsEditing(false);
    setStatusMsg("");
  };

  const handleEdit = (item: ProductItem) => {
    revokeIfBlob(photoPreview);
    setForm({
      id: item.id,
      category: item.category || "skincare",
      catLabel: item.catLabel || "Skincare & Kosmetik",
      title: item.title || "",
      badge: item.badge || "",
      img: item.img || "",
      priceEst: item.priceEst || "",
      material: item.material || "",
      finishing: item.finishing || "",
      moq: item.moq || "500 pcs",
      desc: item.desc || "",
      isActive: item.isActive ?? true,
    });
    setPhotoFile(null);
    setPhotoPreview(item.img || "");
    setIsEditing(true);
    setStatusMsg(`Mode edit aktif untuk "${item.title}" (#${item.id}).`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Hapus permanen produk "${title}"?`)) return;
    try {
      const res = await fetch(`/api/admin/produk?id=${encodeURIComponent(id)}`, {
        method: "DELETE",
      });
      const data = await readJsonSafe<{ message?: string }>(res);
      if (!res.ok) {
        throw new Error(data.message || "Gagal menghapus produk.");
      }
      if (isEditing && form.id === id) {
        resetForm();
      }
      await fetchProducts();
    } catch (err: any) {
      alert(err?.message || "Gagal menghapus produk.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMsg("");

    let finalImgUrl = form.img.trim();
    if (!photoFile && !finalImgUrl) {
      setStatusMsg("Pilih foto produk atau isi URL gambar terlebih dahulu.");
      return;
    }

    setSaving(true);
    try {
      if (photoFile) {
        setStatusMsg("Mengupload foto ke R2...");
        const fd = new FormData();
        fd.append("file", photoFile);

        const upRes = await fetch("/api/admin/produk", {
          method: "POST",
          body: fd,
        });
        const upData = await readJsonSafe<{ url?: string; message?: string }>(upRes);
        if (!upRes.ok || !upData.url) {
          throw new Error(upData.message || "Gagal upload foto ke R2.");
        }
        finalImgUrl = upData.url;
      }

      setStatusMsg(isEditing ? "Menyimpan perubahan ke D1..." : "Menyimpan produk ke D1...");
      const payload = {
        ...form,
        id: form.id.trim() || slugify(form.title),
        img: finalImgUrl,
      };

      const saveRes = await fetch("/api/admin/produk", {
        method: isEditing ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const saveData = await readJsonSafe<{ message?: string }>(saveRes);
      if (!saveRes.ok) {
        throw new Error(saveData.message || "Gagal menyimpan produk.");
      }

      resetForm();
      await fetchProducts();
    } catch (err: any) {
      setStatusMsg(`Error: ${err?.message || "Gagal menyimpan."}`);
    } finally {
      setSaving(false);
    }
  };

  const filteredProducts = products.filter((p) => {
    const matchCat = filterCat === "all" || (p.category ?? "") === filterCat;
    const q = searchQuery.toLowerCase();
    const matchSearch =
      String(p.title ?? "").toLowerCase().includes(q) ||
      String(p.id ?? "").toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  const activePreview = photoPreview || form.img;
  const inputClass =
    "w-full bg-[#161f30] border border-slate-700/80 rounded-xl px-4 py-2.5 text-base sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#d4af37] transition-colors";
  const labelClass = "block text-xs font-bold text-slate-300 mb-1.5";

  return (
    <div className="min-h-screen bg-[#070d19] text-white p-5 sm:p-8">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <Link
              href="/admin/dashboard"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 mb-2"
            >
              ← Kembali ke Dashboard Admin
            </Link>
            <h1 className="text-2xl sm:text-3xl font-extrabold">
              Input &amp; Kelola Produk ZPack
            </h1>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Kelola katalog produk dan foto kemasan
            </p>
          </div>

          <span className="inline-block px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold">
            Total Produk: {products.length}
          </span>
        </div>

        {/* Form Input / Edit */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#0e172a] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-5"
        >
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <h2 className="text-lg sm:text-xl font-bold text-white">
              {isEditing ? `✏️ Edit Produk: ${form.title}` : "➕ Input Produk Baru"}
            </h2>
            {isEditing && (
              <button
                type="button"
                onClick={resetForm}
                className="text-xs px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer"
              >
                Batal Edit
              </button>
            )}
          </div>

          {statusMsg && (
            <div className="p-3 rounded-xl bg-slate-900 border border-amber-500/40 text-xs text-amber-300">
              {statusMsg}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div>
              <label className={labelClass}>Judul Produk *</label>
              <input
                type="text"
                required
                placeholder="Box Serum & Dropper 20ml"
                value={form.title}
                onChange={(e) => handleTitleChange(e.target.value)}
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>
                ID / Slug Unik {isEditing && "(Terkunci)"} *
              </label>
              <input
                type="text"
                required
                disabled={isEditing}
                placeholder="box-serum"
                value={form.id}
                onChange={(e) => setForm({ ...form, id: slugify(e.target.value) })}
                className={`${inputClass} font-mono disabled:opacity-60`}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            <div>
              <label className={labelClass}>Kategori *</label>
              <select
                value={form.category}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className={inputClass}
              >
                {CATEGORY_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className={labelClass}>Label Kategori (catLabel)</label>
              <input
                type="text"
                value={form.catLabel}
                onChange={(e) => setForm({ ...form, catLabel: e.target.value })}
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Badge Label</label>
              <input
                type="text"
                placeholder="Best Seller / Food Grade / Populer"
                value={form.badge}
                onChange={(e) => setForm({ ...form, badge: e.target.value })}
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div>
              <label className={labelClass}>Estimasi Harga (priceEst) *</label>
              <input
                type="text"
                required
                placeholder="Rp 1.150 - Rp 1.600 / pcs"
                value={form.priceEst}
                onChange={(e) => setForm({ ...form, priceEst: e.target.value })}
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Minimum Order (moq) *</label>
              <input
                type="text"
                required
                placeholder="500 pcs"
                value={form.moq}
                onChange={(e) => setForm({ ...form, moq: e.target.value })}
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div>
              <label className={labelClass}>Bahan (material) *</label>
              <input
                type="text"
                required
                placeholder="Ivory 300g / Art Paper Premium"
                value={form.material}
                onChange={(e) => setForm({ ...form, material: e.target.value })}
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Finishing *</label>
              <input
                type="text"
                required
                placeholder="Laminasi Doff + Custom Spot UV"
                value={form.finishing}
                onChange={(e) => setForm({ ...form, finishing: e.target.value })}
                className={inputClass}
              />
            </div>
          </div>

          {/* Foto Produk */}
          <div className="p-4 sm:p-5 rounded-xl bg-[#161f30]/70 border border-slate-700/80 space-y-3">
            <label className={labelClass}>Foto Produk *</label>

            <div className="flex flex-wrap items-center gap-3">
              <label className="px-4 py-2 rounded-xl text-xs font-bold cursor-pointer bg-amber-500 text-slate-950 hover:bg-amber-400 transition-colors">
                {activePreview ? "Ganti Foto Produk" : "Pilih Foto Produk"}
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/avif"
                  onChange={handlePhotoSelect}
                  className="hidden"
                />
              </label>

              <span className="text-xs text-slate-400">
                {photoFile
                  ? `File siap diunggah: ${photoFile.name}`
                  : form.img
                  ? "Foto sudah terpasang"
                  : "Belum ada file dipilih"}
              </span>
            </div>

            <input
              type="text"
              placeholder="Atau tempel URL gambar secara manual..."
              value={form.img}
              onChange={(e) => {
                setPhotoFile(null);
                setPhotoPreview("");
                setForm({ ...form, img: e.target.value });
              }}
              className={inputClass}
            />

            {activePreview && (
              <div className="relative inline-block pt-2">
                <img
                  src={activePreview}
                  alt="Preview Produk"
                  className="w-28 h-28 object-cover rounded-xl border border-slate-700 bg-slate-950"
                />
                <button
                  type="button"
                  onClick={handleRemovePhoto}
                  className="absolute top-0.5 -right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shadow hover:bg-red-500 cursor-pointer"
                  title="Hapus Foto"
                >
                  ✕
                </button>
              </div>
            )}
          </div>

          <div>
            <label className={labelClass}>Deskripsi Produk (desc) *</label>
            <textarea
              rows={3}
              required
              placeholder="Kemasan botol serum kosmetik presisi tinggi. Menggunakan bahan Ivory yang bersih..."
              value={form.desc}
              onChange={(e) => setForm({ ...form, desc: e.target.value })}
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            disabled={saving}
            className="px-7 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all disabled:opacity-50 cursor-pointer"
          >
            {saving
              ? "Menyimpan..."
              : isEditing
              ? "Simpan Perubahan"
              : "Simpan Produk ke Database"}
          </button>
        </form>

        {/* Daftar Produk Tersimpan */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h2 className="text-xl font-bold">Daftar Produk Tersimpan</h2>

            <div className="flex flex-wrap items-center gap-3">
              <select
                value={filterCat}
                onChange={(e) => setFilterCat(e.target.value)}
                className="bg-[#0e172a] border border-slate-800 rounded-xl px-3.5 py-2 text-base sm:text-xs text-white focus:outline-none focus:border-[#d4af37]"
              >
                <option value="all">Semua Kategori</option>
                {CATEGORY_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>

              <input
                type="text"
                placeholder="Cari judul / ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-[#0e172a] border border-slate-800 rounded-xl px-3.5 py-2 text-base sm:text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#d4af37]"
              />
            </div>
          </div>

          {loading ? (
            <div className="py-12 text-center text-slate-400 text-sm">
              Memuat daftar produk...
            </div>
          ) : loadError ? (
            <div className="py-8 px-4 text-center bg-red-500/10 border border-red-500/30 rounded-2xl text-red-400 text-xs sm:text-sm">
              {loadError}
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="py-12 text-center bg-[#0e172a] border border-slate-800 rounded-2xl text-slate-400 text-sm">
              Belum ada produk yang tersimpan. Silakan tambahkan lewat form di atas.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredProducts.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#0e172a] border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-44 bg-slate-900">
                      {item.img ? (
                        <img
                          src={item.img}
                          alt={item.title || "Produk"}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-xs text-slate-500">
                          Tidak ada gambar
                        </div>
                      )}
                      {item.badge && (
                        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-amber-500 text-slate-950 font-bold text-[11px]">
                          {item.badge}
                        </span>
                      )}
                      {item.catLabel && (
                        <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-slate-950/80 text-slate-300 text-[11px] font-medium">
                          {item.catLabel}
                        </span>
                      )}
                    </div>

                    <div className="p-5 space-y-2">
                      <span className="text-[11px] font-mono text-slate-500">
                        #{item.id}
                      </span>
                      <h3 className="text-base font-bold text-white leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-sm font-extrabold text-amber-400">
                        {item.priceEst}
                      </p>
                      <div className="text-xs text-slate-400 space-y-1 pt-1">
                        <p>
                          <strong className="text-slate-300">Bahan:</strong> {item.material}
                        </p>
                        <p>
                          <strong className="text-slate-300">Finishing:</strong>{" "}
                          {item.finishing}
                        </p>
                        <p>
                          <strong className="text-slate-300">MOQ:</strong> {item.moq}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="px-5 py-3.5 border-t border-slate-800 flex items-center justify-between gap-2 bg-[#0b1222]">
                    <button
                      type="button"
                      onClick={() => handleEdit(item)}
                      className="flex-1 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition-colors cursor-pointer"
                    >
                      ✏️ Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(item.id, item.title)}
                      className="flex-1 py-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-xs font-semibold text-red-400 transition-colors cursor-pointer"
                    >
                      🗑️ Hapus
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}