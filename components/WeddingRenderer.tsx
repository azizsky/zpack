"use client";

import React from "react";
import { WeddingProps, XtraDataProps } from "./types";

// Import Template Luxury Gold
import LuxuryTemplate from "./templates/luxurygold/luxuryTemplate";

// Helper safe-parse untuk menangani string JSON tunggal maupun ganda
function parseJsonSafe(data: any): any {
  if (typeof data !== "string") return data || {};
  try {
    const parsed = JSON.parse(data);
    if (typeof parsed === "string") return parseJsonSafe(parsed);
    return parsed || {};
  } catch {
    return {};
  }
}

export default function WeddingRenderer({ invitation, xtraData }: WeddingProps) {
  // 1. Safe parse xtraData dari props atau kolom xtra_data di D1
  const rawExtra = xtraData || (invitation as any)?.xtra_data;
  const parsedXtra: XtraDataProps = parseJsonSafe(rawExtra);

  // 2. Format data undangan dengan tipe any agar lolos pengecekan TypeScript
  const formattedInvitationData: any = {
    ...(invitation || {}),
    xtra_data: parsedXtra,
  };

  // 3. Render LuxuryTemplate tanpa error tipe data
  return <LuxuryTemplate data={formattedInvitationData} />;
}