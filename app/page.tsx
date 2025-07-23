"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Star, Zap, Shield, CheckCircle, Users, Award, MapPin, Home, Building, X, Phone, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { MobileNav } from "@/components/mobile-nav"
import { FAQSection } from "@/components/faq-section"
import { WhatsIncludedSection } from "@/components/whats-included-section"
import { ComparisonSection } from "@/components/comparison-section"
import { FreeTextMessageForm } from "@/components/free-text-message-form" // Import the new form component

const wilayas = [
  "01 - أدرار",
  "02 - الشلف",
  "03 - الأغواط",
  "04 - أم البواقي",
  "05 - باتنة",
  "06 - بجاية",
  "07 - بسكرة",
  "08 - بشار",
  "09 - البليدة",
  "10 - البويرة",
  "11 - تمنراست",
  "12 - تبسة",
  "13 - تلمسان",
  "14 - تيارت",
  "15 - تيزي وزو",
  "16 - الجزائر",
  "17 - الجلفة",
  "18 - جيجل",
  "19 - سطيف",
  "20 - سعيدة",
  "21 - سكيكدة",
  "22 - سيدي بلعباس",
  "23 - عنابة",
  "24 - قالمة",
  "25 - قسنطينة",
  "26 - المدية",
  "27 - مستغانم",
  "28 - المسيلة",
  "29 - معسكر",
  "30 - ورقلة",
  "31 - وهران",
  "32 - البيض",
  "33 - إليزي",
  "34 - برج بوعريريج",
  "35 - بومرداس",
  "36 - الطارف",
  "37 - تندوف",
  "38 - تيسمسيلت",
  "39 - الوادي",
  "40 - خنشلة",
  "41 - سوق أهراس",
  "42 - تيبازة",
  "43 - ميلة",
  "44 - عين الدفلى",
  "45 - النعامة",
  "46 - عين تموشنت",
  "47 - غرداية",
  "48 - غليزان",
  "49 - تيميمون",
  "50 - برج باجي مختار",
  "51 - أولاد جلال",
  "52 - بني عباس",
  "53 - عين صالح",
  "54 - عين قزام",
  "55 - تقرت",
  "56 - جانت",
  "57 - المغير",
  "58 - المنيعة",
]

export default function ProductPage() {
  const [selectedWilaya, setSelectedWilaya] = useState("")
  const [deliveryType, setDeliveryType] = useState("")
  const [customerName, setCustomerName] = useState("")
  const [customerPhone, setCustomerPhone] = useState("")
  const [showConfirmationForm, setShowConfirmationForm] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Validation error states
  const [nameError, setNameError] = useState("")
  const [phoneError, setPhoneError] = useState("")
  const [wilayaError, setWilayaError] = useState("")
  const [deliveryTypeError, setDeliveryTypeError] = useState("")

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const validateForm = () => {
    let isValid = true
    setNameError("")
    setPhoneError("")
    setWilayaError("")
    setDeliveryTypeError("")

    if (!customerName.trim()) {
      setNameError("الاسم الكامل مطلوب")
      isValid = false
    }
    if (!customerPhone.trim()) {
      setPhoneError("رقم الهاتف مطلوب")
      isValid = false
    } else if (!/^\d{10}$/.test(customerPhone.trim())) {
      // Basic 10-digit phone validation
      setPhoneError("رقم هاتف غير صالح (يجب أن يكون 10 أرقام)")
      isValid = false
    }
    if (!selectedWilaya) {
      setWilayaError("الولاية مطلوبة")
      isValid = false
    }
    if (!deliveryType) {
      setDeliveryTypeError("نوع التوصيل مطلوب")
      isValid = false
    }

    return isValid
  }

  const handleBuyNow = () => {
    if (validateForm()) {
      setShowConfirmationForm(true)
    } else {
      // Errors are shown next to fields
    }
  }

  const handleConfirmOrder = async () => {
    setIsSubmitting(true)

    // Simulate a network request delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    alert(
      `تم تسجيل طلبك بنجاح (محاكاة)!\nالاسم: ${customerName}\nالهاتف: ${customerPhone}\nالولاية: ${selectedWilaya}\nنوع التوصيل: ${deliveryType}`,
    )

    // Reset form and errors
    setCustomerName("")
    setCustomerPhone("")
    setSelectedWilaya("")
    setDeliveryType("")
    setShowConfirmationForm(false)
    setIsSubmitting(false)
    setNameError("")
    setPhoneError("")
    setWilayaError("")
    setDeliveryTypeError("")
  }

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image src="/images/deboitez-logo.png" alt="Déboîtez" width={150} height={50} />
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <a
                href="#home"
                onClick={(e) => handleSmoothScroll(e, "home")}
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
              >
                الرئيسية
              </a>
              <a
                href="#about-us"
                onClick={(e) => handleSmoothScroll(e, "about-us")}
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
              >
                من نحن
              </a>
              <a
                href="#contact-us"
                onClick={(e) => handleSmoothScroll(e, "contact-us")}
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
              >
                اتصل بنا
              </a>
              <a
                href="#faq"
                onClick={(e) => handleSmoothScroll(e, "faq")}
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
              >
                الأسئلة الشائعة
              </a>
            </nav>
            {/* Mobile Navigation Trigger */}
            <div className="md:hidden">
              <MobileNav onLinkClick={handleSmoothScroll} />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section (Home) */}
      <section id="home" className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <Badge className="mb-4">الأكثر مبيعاً</Badge>
                <Badge className="mb-4 ml-2 bg-blue-100 text-blue-800">جودة أوروبية ممتازة</Badge>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
                  فتاحة العلب الكهربائية كويك أوبن برو
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground mb-6">
                  الرفيق المثالي للمطبخ الذي يفتح أي علبة في ثوانٍ بدقة وسهولة. قل وداعاً للكفاح مع فتاحات العلب اليدوية
                  إلى الأبد.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">4.8/5 (13 تقييم)</span>
              </div>

              {/* Price Section - Moved to Top */}
              <div className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200 rounded-lg p-4 md:p-6">
                <div className="text-center">
                  <Badge className="mb-2 md:mb-3 bg-red-500 text-white text-sm md:text-lg px-3 md:px-4 py-1 md:py-2">
                    عرض محدود - وفر 1000 دج
                  </Badge>
                  <div className="flex items-baseline justify-center gap-2 md:gap-4 mb-2">
                    <span className="text-3xl md:text-5xl font-bold text-green-600">3,000 دج</span>
                    <span className="text-xl md:text-3xl text-gray-500 line-through">4,000 دج</span>
                  </div>
                  <p className="text-base md:text-lg text-orange-600 font-semibold">توفير فوري 1000 دج!</p>
                </div>
              </div>

              {/* Order Form */}
              <Card className="bg-orange-50 border-orange-200">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="text-sm font-semibold">
                        الاسم الكامل
                      </Label>
                      <Input
                        id="name"
                        value={customerName}
                        onChange={(e) => {
                          setCustomerName(e.target.value)
                          setNameError("") // Clear error on change
                        }}
                        placeholder="أدخل اسمك الكامل"
                        className="mt-1"
                      />
                      {nameError && <p className="text-red-500 text-xs mt-1">{nameError}</p>}
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-sm font-semibold">
                        رقم الهاتف
                      </Label>
                      <Input
                        id="phone"
                        value={customerPhone}
                        onChange={(e) => {
                          setCustomerPhone(e.target.value)
                          setPhoneError("") // Clear error on change
                        }}
                        placeholder="0555 123 456"
                        className="mt-1"
                      />
                      {phoneError && <p className="text-red-500 text-xs mt-1">{phoneError}</p>}
                    </div>

                    <div>
                      <Label className="text-sm font-semibold flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        اختر الولاية
                      </Label>
                      <Select
                        value={selectedWilaya}
                        onValueChange={(value) => {
                          setSelectedWilaya(value)
                          setWilayaError("") // Clear error on change
                        }}
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="اختر ولايتك" />
                        </SelectTrigger>
                        <SelectContent>
                          {wilayas.map((wilaya) => (
                            <SelectItem key={wilaya} value={wilaya}>
                              {wilaya}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {wilayaError && <p className="text-red-500 text-xs mt-1">{wilayaError}</p>}
                    </div>

                    <div>
                      <Label className="text-sm font-semibold">نوع التوصيل</Label>
                      <RadioGroup
                        value={deliveryType}
                        onValueChange={(value) => {
                          setDeliveryType(value)
                          setDeliveryTypeError("") // Clear error on change
                        }}
                        className="mt-2"
                      >
                        <div className="flex items-center space-x-2 space-x-reverse">
                          <RadioGroupItem value="للدار" id="home-delivery" />
                          <Label htmlFor="home-delivery" className="flex items-center gap-2 cursor-pointer text-sm">
                            <Home className="w-4 h-4" />
                            توصيل للدار
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 space-x-reverse">
                          <RadioGroupItem value="لمكتب التوصيل" id="office-delivery" />
                          <Label htmlFor="office-delivery" className="flex items-center gap-2 cursor-pointer text-sm">
                            <Building className="w-4 h-4" />
                            توصيل لمكتب التوصيل
                          </Label>
                        </div>
                      </RadioGroup>
                      {deliveryTypeError && <p className="text-red-500 text-xs mt-1">{deliveryTypeError}</p>}
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="font-semibold text-green-800">ادفع عند الاستلام</span>
                      </div>
                      <p className="text-sm text-green-700 mt-1">لا حاجة للدفع المسبق - ادفع عندما تستلم المنتج</p>
                    </div>

                    <Button
                      size="lg"
                      className="w-full text-lg py-6 bg-orange-500 hover:bg-orange-600 mt-4"
                      onClick={handleBuyNow}
                    >
                      اشتري الآن
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <Image
                src="/images/hero-french-opener.png"
                alt="فتاحة العلب الكهربائية - Ouvre-boîte Électrique"
                width={600}
                height={600}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -top-4 -left-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold">
                لفترة محدودة
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">من نحن</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            في Déboîtez، نؤمن بأن الابتكار يمكن أن يجعل الحياة اليومية أسهل وأكثر متعة. نحن متخصصون في توفير حلول مطبخية
            عالية الجودة، ومنتجنا الرائد، فتاحة العلب الكهربائية كويك أوبن برو، هو شهادة على التزامنا بالتميز. نسعى
            لتقديم منتجات عملية، آمنة، وفعالة تلبي احتياجات عملائنا الكرام في الجزائر.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
            هدفنا هو تبسيط مهام المطبخ، مما يتيح لك قضاء وقت أقل في الكفاح مع الأدوات التقليدية والمزيد من الوقت في
            الاستمتاع بوجباتك. نحن نفخر بتقديم منتجات ذات جودة أوروبية.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">لماذا تختار كويك أوبن برو؟</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              مصممة بأحدث التقنيات لجعل تجربة المطبخ سهلة وممتعة
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Zap className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h4 className="font-semibold mb-2 font-mono">سرعة البرق</h4>
                <p className="text-sm text-muted-foreground">يفتح أي علبة في أقل من 3 ثوانٍ بمحرك قوي</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 mx-auto mb-4 text-green-600" />
                <h4 className="font-semibold mb-2 font-mono">آمن ونظيف</h4>
                <p className="text-sm text-muted-foreground">
                  حواف ناعمة، بدون جروح حادة، أجزاء قابلة للغسل في غسالة الأطباق
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <CheckCircle className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                <h4 className="font-semibold mb-2 font-mono">مناسب لجميع الأحجام</h4>
                <p className="text-sm text-muted-foreground">يعمل مع جميع أحجام العلب من الصغيرة إلى الكبيرة جداً</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h4 className="font-semibold mb-2 font-mono">جودة أوروبية</h4>
                <p className="text-sm text-muted-foreground">مصنوع وفقاً للمعايير الأوروبية الصارمة للجودة والأمان</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <ComparisonSection />

      {/* Product Gallery - Updated to 3 Images */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">شاهده في العمل</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <Image
              src="/images/toucan-demo-oldest.gif"
              alt="فتاحة العلب الكهربائية - Toucan Electric Can Opener Demo"
              width={400}
              height={400}
              className="rounded-lg shadow-lg w-full h-auto"
              unoptimized={true}
            />
            <Image
              src="/images/red-opener-french.png"
              alt="فتاحة العلب الكهربائية - Ouvre-boîte Électrique"
              width={400}
              height={400}
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <Image
              src="/images/step-by-step-guide.webp"
              alt="دليل الاستخدام خطوة بخطوة - Step by Step Guide"
              width={400}
              height={400}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <WhatsIncludedSection />

      {/* Customer Reviews - Reverted to original grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">ماذا يقول عملاؤنا</h3>
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-lg font-semibold">4.8 من 5</span>
              <span className="text-muted-foreground">(13 تقييم)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-4">
                  Franchement cet ouvre-boîte est vraiment génial! Beaucoup plus rapide que mon ancien manuel. Les bords
                  sont lisses - plus de coupures!
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold">عبد الله</p>
                    <p className="text-sm text-muted-foreground">مشتري موثق</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-4">
                  والله هاذي الفتاحة بصح راهي تخدم مليح! أسرع من اللي كانت عندي قبل. والحواف ماشي حادين - ما نتقطعش
                  بيها.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold">سامي</p>
                    <p className="text-sm text-muted-foreground">مشتري موثق</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-4">
                  Design très élégant, fonctionne parfaitement, et le nettoyage est super facile. Ça vaut chaque dinar!
                  Je l'ai recommandé à tous les amis.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold">فيصل</p>
                    <p className="text-sm text-muted-foreground">مشتري موثق</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-4">هاذي الفتاحة راهي تخدم بالساهل. ما عادش نتعب باش نفتح العلب. ننصح بيها كل واحد.</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold">خديجة</p>
                    <p className="text-sm text-muted-foreground">مشترية موثقة</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-4">
                  Vraiment un produit très pratique! Ouvre les grandes et petites boîtes sans problème. Je n'ai aucun
                  souci avec.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="font-semibold">دهبية</p>
                    <p className="text-sm text-muted-foreground">مشترية موثقة</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-4">
                  Je l'utilise depuis un mois complet, ça marche très bien. Le nettoyage est facile et le design est
                  beau.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-pink-600" />
                  </div>
                  <div>
                    <p className="font-semibold">ماريا</p>
                    <p className="text-sm text-muted-foreground">مشترية موثقة</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact-us" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">اتصل بنا</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            هل لديك أسئلة أو تحتاج إلى مساعدة؟ لا تتردد في التواصل معنا. فريق دعم العملاء لدينا متاح لمساعدتك.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <Card className="w-full max-w-sm">
              <CardContent className="p-6 flex flex-col items-center">
                <Phone className="w-12 h-12 text-orange-500 mb-4" />
                <h4 className="font-semibold text-xl mb-2">عبر الهاتف</h4>
                <p className="text-muted-foreground mb-4">تحدث مع أحد ممثلينا مباشرة.</p>
                <a href="tel:+213552209986" className="text-lg font-bold text-orange-600 hover:underline">
                  0552209986
                </a>
                <p className="text-sm text-muted-foreground mt-1">متاح 24/7</p>
              </CardContent>
            </Card>
            <Card className="w-full max-w-sm">
              <CardContent className="p-6 flex flex-col items-center">
                <Mail className="w-12 h-12 text-orange-500 mb-4" />
                <h4 className="font-semibold text-xl mb-2">عبر البريد الإلكتروني</h4>
                <p className="text-muted-foreground mb-4">أرسل لنا استفسارك وسنرد عليك قريباً.</p>
                <a href="mailto:contact@deboitez.com" className="text-lg font-bold text-orange-600 hover:underline">
                  contact@deboitez.com
                </a>
                <p className="text-sm text-muted-foreground mt-1">نرد عادة في غضون 24 ساعة</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Free Text Message Form */}
      <FreeTextMessageForm />

      {/* Final CTA - Orange Theme */}
      <section className="py-16 bg-gradient-to-r from-orange-400 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">مستعد لتحويل مطبخك؟</h3>
          <p className="text-xl mb-8 opacity-90">انضم إلى آلاف العملاء الراضين الذين تحولوا إلى كويك أوبن برو</p>
          <div className="max-w-md mx-auto space-y-4">
            <div className="bg-white/20 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Badge className="bg-red-500 text-white">عرض محدود</Badge>
                <span className="text-white font-bold">وفر 1000 دج</span>
              </div>
              <div className="flex items-baseline justify-center gap-4">
                <span className="text-4xl font-bold">3,000 دج</span>
                <span className="text-2xl opacity-70 line-through">4,000 دج</span>
              </div>
            </div>
            <p className="text-lg opacity-90">املأ النموذج أعلاه لطلب المنتج</p>
            <p className="text-base opacity-80">💳 ادفع عند الاستلام - لا حاجة للدفع المسبق</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h4 className="font-bold text-lg">Déboîtez</h4>
              <p className="text-sm text-muted-foreground">فتاحة العلب الكهربائية المثالية</p>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>© 2024 كويك أوبن برو</span>
              <span>•</span>
              <span>سياسة الخصوصية</span>
              <span>•</span>
              <span>شروط الخدمة</span>
              <span>•</span>
              <span>اتصل بنا</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Confirmation Form Modal */}
      {showConfirmationForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md bg-white border-orange-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-orange-600">تأكيد الطلب</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowConfirmationForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                  disabled={isSubmitting}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">تفاصيل الطلب:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">المنتج:</span>
                      <span className="font-medium">فتاحة العلب الكهربائية</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">السعر:</span>
                      <div className="text-right">
                        <span className="font-bold text-green-600">3,000 دج</span>
                        <span className="text-sm text-gray-500 line-through ml-2">4,000 دج</span>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">التوفير:</span>
                      <span className="font-bold text-red-600">1,000 دج</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">معلومات العميل:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">الاسم:</span>
                      <span className="font-medium">{customerName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">الهاتف:</span>
                      <span className="font-medium">{customerPhone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">الولاية:</span>
                      <span className="font-medium">{selectedWilaya}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">التوصيل:</span>
                      <span className="font-medium">{deliveryType}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3"
                  onClick={handleConfirmOrder}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "جاري التسجيل..." : "تأكيد الطلب النهائي"}
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-orange-200 text-orange-600 hover:bg-orange-50 bg-transparent"
                  onClick={() => setShowConfirmationForm(false)}
                  disabled={isSubmitting}
                >
                  تعديل المعلومات
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
