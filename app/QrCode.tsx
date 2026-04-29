"use client";
import { QRCodeSVG } from "qrcode.react";

export default function QrCode({ value }: { value: string }) {
  return (
    <QRCodeSVG value={value} size={120} bgColor="#fff" fgColor="#000" includeMargin={true} />
  );
}
