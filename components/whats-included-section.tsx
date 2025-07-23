import { Package, BookOpen } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

export function WhatsIncludedSection() {
  return (
    <section className="py-16" dir="rtl">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-8">ماذا يوجد في العلبة؟</h3>
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <Card>
            <CardContent className="p-6 flex flex-col items-center">
              <Package className="w-12 h-12 text-orange-500 mb-4" />
              <h4 className="font-semibold text-xl mb-2">فتاحة العلب الكهربائية كويك أوبن برو</h4>
              <p className="text-muted-foreground">الجهاز الرئيسي لفتح العلب بسهولة وأمان.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex flex-col items-center">
              <BookOpen className="w-12 h-12 text-orange-500 mb-4" />
              <h4 className="font-semibold text-xl mb-2">دليل المستخدم</h4>
              <p className="text-muted-foreground">تعليمات مفصلة حول كيفية الاستخدام والعناية بالجهاز.</p>
            </CardContent>
          </Card>
        </div>
        <p className="text-sm text-muted-foreground mt-8">*ملاحظة: البطاريات (4x AA) غير مشمولة.</p>
      </div>
    </section>
  )
}
