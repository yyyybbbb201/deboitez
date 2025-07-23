import { CheckCircle, XCircle } from "lucide-react"

export function ComparisonSection() {
  return (
    <section className="py-16 bg-muted/50" dir="rtl">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-8">وداعاً لفتاحات العلب اليدوية!</h3>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
          قارن بين فتاحة العلب الكهربائية كويك أوبن برو والفتاحات اليدوية التقليدية:
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Quick Open Pro Column */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-orange-200">
            <h4 className="text-2xl font-bold text-orange-600 mb-6">كويك أوبن برو (كهربائية)</h4>
            <ul className="space-y-4 text-right">
              <li className="flex items-center justify-end gap-3">
                <span className="text-lg font-medium">فتح العلب بلمسة زر واحدة</span>
                <CheckCircle className="w-6 h-6 text-green-500" />
              </li>
              <li className="flex items-center justify-end gap-3">
                <span className="text-lg font-medium">حواف ناعمة وآمنة تماماً</span>
                <CheckCircle className="w-6 h-6 text-green-500" />
              </li>
              <li className="flex items-center justify-end gap-3">
                <span className="text-lg font-medium">مناسبة لجميع الأعمار</span>
                <CheckCircle className="w-6 h-6 text-green-500" />
              </li>
              <li className="flex items-center justify-end gap-3">
                <span className="text-lg font-medium">سرعة فائقة (أقل من 3 ثوانٍ)</span>
                <CheckCircle className="w-6 h-6 text-green-500" />
              </li>
              <li className="flex items-center justify-end gap-3">
                <span className="text-lg font-medium">تصميم أنيق وعصري</span>
                <CheckCircle className="w-6 h-6 text-green-500" />
              </li>
            </ul>
          </div>

          {/* Manual Opener Column */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h4 className="text-2xl font-bold text-gray-700 mb-6">الفتاحات اليدوية (التقليدية)</h4>
            <ul className="space-y-4 text-right">
              <li className="flex items-center justify-end gap-3">
                <span className="text-lg font-medium">تتطلب جهداً بدنياً كبيراً</span>
                <XCircle className="w-6 h-6 text-red-500" />
              </li>
              <li className="flex items-center justify-end gap-3">
                <span className="text-lg font-medium">تترك حواف حادة وخطيرة</span>
                <XCircle className="w-6 h-6 text-red-500" />
              </li>
              <li className="flex items-center justify-end gap-3">
                <span className="text-lg font-medium">صعبة الاستخدام لكبار السن والأطفال</span>
                <XCircle className="w-6 h-6 text-red-500" />
              </li>
              <li className="flex items-center justify-end gap-3">
                <span className="text-lg font-medium">بطيئة وتستغرق وقتاً طويلاً</span>
                <XCircle className="w-6 h-6 text-red-500" />
              </li>
              <li className="flex items-center justify-end gap-3">
                <span className="text-lg font-medium">تصميم قديم وغير عملي</span>
                <XCircle className="w-6 h-6 text-red-500" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
