"use client"

import type React from "react"

import { useState } from "react"
import { Phone, MessageSquareText, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function FreeTextMessageForm() {
  const [message, setMessage] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [messageError, setMessageError] = useState("")
  const [phoneError, setPhoneError] = useState("")
  const [successMessage, setSuccessMessage] = useState("")

  const validateForm = () => {
    let isValid = true
    setMessageError("")
    setPhoneError("")

    if (!message.trim()) {
      setMessageError("الرسالة مطلوبة")
      isValid = false
    }
    if (!phoneNumber.trim()) {
      setPhoneError("رقم الهاتف مطلوب")
      isValid = false
    } else if (!/^\d{10}$/.test(phoneNumber.trim())) {
      setPhoneError("رقم هاتف غير صالح (يجب أن يكون 10 أرقام)")
      isValid = false
    }
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSuccessMessage("")
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setSuccessMessage("تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.")
    setMessage("")
    setPhoneNumber("")
    setIsSubmitting(false)
  }

  return (
    <section className="py-16 bg-white" dir="rtl">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-4">هل لديك سؤال آخر؟</h3>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          اكتب رسالتك وسيقوم فريقنا بالرد عليك مباشرة على رقم هاتفك.
        </p>

        <Card className="w-full max-w-md mx-auto border-orange-200 bg-orange-50">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="message" className="text-sm font-semibold flex items-center gap-2">
                  <MessageSquareText className="w-4 h-4" />
                  رسالتك
                </Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value)
                    setMessageError("")
                  }}
                  placeholder="اكتب سؤالك أو استفسارك هنا..."
                  rows={5}
                  className="mt-1"
                />
                {messageError && <p className="text-red-500 text-xs mt-1">{messageError}</p>}
              </div>

              <div>
                <Label htmlFor="phone-number" className="text-sm font-semibold flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  رقم هاتفك
                </Label>
                <Input
                  id="phone-number"
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value)
                    setPhoneError("")
                  }}
                  placeholder="مثال: 0555123456"
                  className="mt-1"
                />
                {phoneError && <p className="text-red-500 text-xs mt-1">{phoneError}</p>}
              </div>

              {successMessage && (
                <div className="bg-green-100 border border-green-200 text-green-700 px-4 py-3 rounded-md text-sm">
                  {successMessage}
                </div>
              )}

              <Button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "جاري الإرسال..."
                ) : (
                  <>
                    <Send className="w-4 h-4 ml-2" /> إرسال الرسالة
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
