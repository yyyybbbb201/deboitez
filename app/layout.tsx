import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Déboîtez - فتاحة العلب الكهربائية كويك أوبن برو",
  description:
    "الرفيق المثالي للمطبخ الذي يفتح أي علبة في ثوانٍ بدقة وسهولة. قل وداعاً للكفاح مع فتاحات العلب اليدوية إلى الأبد.",
  icons: {
    icon: "/images/deboitez-logo.png",
    shortcut: "/images/deboitez-logo.png",
    apple: "/images/deboitez-logo.png",
  },
  openGraph: {
    title: "Déboîtez - فتاحة العلب الكهربائية كويك أوبن برو",
    description: "الرفيق المثالي للمطبخ الذي يفتح أي علبة في ثوانٍ بدقة وسهولة",
    images: ["/images/deboitez-logo.png"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className={inter.className + " scroll-smooth"}>
      <head>
        <link rel="icon" href="/images/deboitez-logo.png" />
      </head>
      <body className={inter.className + " scroll-smooth"}>{children}</body>
    </html>
  )
}
