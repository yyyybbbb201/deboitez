"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

interface MobileNavProps {
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void
}

export function MobileNav({ onLinkClick }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavigationClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    onLinkClick(e, id)
    setIsOpen(false) // Close the sheet after clicking a link
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">فتح قائمة التنقل</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[250px] sm:w-[300px] flex flex-col" dir="rtl">
        <SheetHeader className="flex flex-row items-center justify-between pb-4 border-b">
          <SheetTitle className="flex items-center gap-2">
            <Image src="/images/deboitez-logo.png" alt="Déboîtez" width={100} height={30} />
          </SheetTitle>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
            <X className="h-5 w-5" />
            <span className="sr-only">إغلاق القائمة</span>
          </Button>
        </SheetHeader>
        <nav className="flex flex-col gap-4 py-6 text-lg font-medium">
          <a
            href="#home"
            onClick={(e) => handleNavigationClick(e, "home")}
            className="text-gray-700 hover:text-orange-500 transition-colors py-2"
          >
            الرئيسية
          </a>
          <a
            href="#about-us"
            onClick={(e) => handleNavigationClick(e, "about-us")}
            className="text-gray-700 hover:text-orange-500 transition-colors py-2"
          >
            من نحن
          </a>
          <a
            href="#contact-us"
            onClick={(e) => handleNavigationClick(e, "contact-us")}
            className="text-gray-700 hover:text-orange-500 transition-colors py-2"
          >
            اتصل بنا
          </a>
          <a
            href="#faq"
            onClick={(e) => handleNavigationClick(e, "faq")}
            className="text-gray-700 hover:text-orange-500 transition-colors py-2"
          >
            الأسئلة الشائعة
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
