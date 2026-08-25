# El Mordjene — صفحة الوجهتين

صفحة واحدة (HTML/CSS/JS بدون أي إعداد إضافي) فيها زرّان:
- **المتجر الإلكتروني** → يفتح `https://elmordjene-sa.com`
- **دليل المنتجات** → يفتح/يحمّل ملف `assets/catalog.pdf`

فيها زر تبديل اللغة (عربي/إنجليزي) أعلى الصفحة.

## الملفات
```
index.html
styles.css
script.js
assets/logo.png
assets/catalog.pdf
```

## طريقة الرفع على GitHub (نسخ-لصق)

1. سوّي حساب GitHub إذا ما عندك، وسوّي **مستودع جديد (New repository)** فاضي، بدون README.
   اختر اسم مثلاً: `el-mordjene-landing`

2. افتح الطرفية (Terminal) داخل مجلد المشروع اللي حمّلته من هنا، ونفّذ الأوامر التالية بالترتيب
   (استبدل `YOUR-USERNAME` باسم المستخدم عندك في GitHub):

```bash
git init
git add .
git commit -m "El Mordjene landing page"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/el-mordjene-landing.git
git push -u origin main
```

3. لتفعيل الاستضافة المجانية عبر GitHub Pages:
   - روح لإعدادات المستودع (Settings) → قسم **Pages**
   - تحت **Source** اختر Branch: `main` والمجلد `/ (root)`
   - احفظ، وانتظر دقيقة، بيطلع لك رابط شبيه بـ:
     `https://YOUR-USERNAME.github.io/el-mordjene-landing/`

## ملاحظة عن ملف الـ PDF
حجم ملف الكتالوج حوالي 28 ميجا، وهذا أقل من حد GitHub (100 ميجا) فما راح تواجه مشكلة برفعه.

## تعديل الرابط لاحقًا
رابط المتجر موجود مباشرة داخل `index.html`، دور على:
```html
href="https://elmordjene-sa.com"
```
غيّره متى ما احتجت.
