"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "كم يستغرق التوصيل؟",
      answer:
        "نوفر خدمة التوصيل لجميع الولايات في الجزائر. التوصيل للدار أو لمكتب التوصيل حسب اختيارك. مدة التوصيل من 24 إلى 48 ساعة في معظم الولايات.",
    },
    {
      question: "كيف يعمل المنتج؟",
      answer:
        "الاستخدام سهل جداً: 1) ضع الفتاحة على حافة العلبة 2) اضغط على الزر 3) ستفتح العلبة تلقائياً في ثوانٍ. لا حاجة لجهد أو قوة إضافية.",
    },
    {
      question: "هل يعمل مع جميع أحجام العلب؟",
      answer:
        "الفتاحة تعمل مع جميع أحجام العلب - من الصغيرة جداً إلى الكبيرة جداً. مناسبة لعلب التونة، الطماطم، الحليب المكثف، وجميع أنواع العلب المعدنية.",
    },
    {
      question: "كيف أنظف الفتاحة؟",
      answer:
        "التنظيف سهل جداً! الأجزاء القابلة للإزالة يمكن غسلها في غسالة الأطباق. الجسم الرئيسي ينظف بقطعة قماش مبللة. مقاوم للماء والصدأ.",
    },
    {
      question: "ما نوع البطاريات المطلوبة؟",
      answer:
        "الفتاحة تعمل بـ 4 بطاريات AA (غير مشمولة). البطاريات تدوم لفترة طويلة - تكفي لفتح مئات العلب. يمكن استخدام بطاريات قابلة للشحن أيضاً.",
    },
  ]

  return (
    <section id="faq" className="py-16 bg-gray-50" dir="rtl">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-8">الأسئلة الشائعة</h3>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-right text-lg font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
