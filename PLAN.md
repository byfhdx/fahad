# خطة تنفيذ الموقع — Fahad Algharaballi Portfolio

---

## المرحلة الأولى: الإعداد والبنية التحتية

**1. إعداد المشروع**
- اختيار الـ framework (Next.js موصى به لـ SEO والأداء)
- إعداد Git repository
- إعداد Vercel للنشر
- تثبيت التبعيات: Tailwind CSS، Framer Motion، Sanity.io (للـ CMS)

**2. إعداد نظام التصميم**
- استيراد خطوط Clash Display + IBM Plex Sans
- تعريف ألوان النظام: `#081428`، `#307FE2`، الرماديات
- بناء مكونات أساسية: Button، Typography، Card

---

## المرحلة الثانية: بناء الصفحات

**3. الصفحة الرئيسية (Home)**
- Hero Section مع headline + CTA buttons
- Selected Work grid (3-4 مشاريع مميزة)
- Services Overview (3 خدمات)
- Process Section (4 خطوات)
- Testimonials
- Final CTA

**4. صفحة الأعمال (Work)**
- Grid لعرض المشاريع
- Filters: Brand Identity / Packaging / Websites
- Project cards مع thumbnail + metadata

**5. صفحة Case Study**
- Template ثابت: Overview → Challenge → Strategy → Process → Outcome → Results
- Related Projects في الأسفل

**6. صفحة الخدمات (Services)**
- 3 sections منفصلة لكل خدمة
- Deliverables + Timeline + Ideal Clients + FAQs
- CTA: Book a Discovery Call

**7. صفحة About**
- Personal intro + صورة
- Experience + Skills + Design Principles

**8. صفحة Contact**
- Form: Name / Company / Email / Service / Budget / Details
- ربط الـ form بـ Resend أو Formspree

---

## المرحلة الثالثة: التفاصيل التقنية

**9. الحركات والتفاعل**
- Hover states على الـ cards والـ buttons
- Scroll-triggered animations (Framer Motion)
- Page transitions سلسة

**10. إعداد الـ CMS (Sanity.io)**
- Schema للمشاريع: title / industry / service / images / case study content
- Dashboard سهل لإضافة مشاريع جديدة مستقبلاً

**11. SEO والأداء**
- Meta titles + descriptions لكل صفحة
- Open Graph images
- Structured Data
- تحسين الصور (Next/Image)
- استهداف PageSpeed 90+

---

## المرحلة الرابعة: الإطلاق

**12. الاختبار والمراجعة**
- Responsive testing: Desktop / Tablet / Mobile
- Cross-browser testing
- فحص جميع الـ forms

**13. النشر**
- ربط الـ domain
- نشر على Vercel
- إعداد Analytics (Vercel Analytics أو Google Analytics)

---

## المرحلة الثانية (مستقبلاً)

- Blog
- Newsletter
- Client Portal
- Digital Product Store
- Design Resources
