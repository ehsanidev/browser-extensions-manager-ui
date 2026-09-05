# 🧩 مدیریت افزونه‌های مرورگر

> یک رابط کاربری مدرن و واکنش‌گرا برای مدیریت افزونه‌های مرورگر

---

## 🇮🇷 فارسی

### 📋 معرفی پروژه

این پروژه یک **رابط کاربری مدیریت افزونه‌های مرورگر** است که با استفاده از **React**، **TypeScript** و **Tailwind CSS** ساخته شده. امکاناتی مانند فیلتر کردن، تغییر وضعیت، حذف افزونه و تم تاریک/روشن را به صورت تعاملی و زیبا ارائه میده.

> **🙏 توجه:** اصل طرح رابط کاربری از وبسایت **[Frontend Mentor](https://www.frontendmentor.io)** الهام گرفته شده و این پروژه به عنوان یک **چالش و تمرین** برای بهبود مهارت‌های توسعه frontend پیاده‌سازی شده است.

---

### ✨ ویژگی‌ها

- ✅ **مدیریت افزونه‌ها** – نمایش لیست افزونه‌ها با وضعیت فعال/غیرفعال
- 🔍 **فیلتراسیون** – فیلتر بر اساس وضعیت (همه، فعال، غیرفعال)
- 🔄 **تغییر وضعیت** – فعال/غیرفعال کردن هر افزونه با یک کلیک
- 🗑️ **حذف افزونه** – امکان حذف افزونه‌ها از لیست
- 🌙 **حالت تاریک/روشن** – پشتیبانی از تم تاریک و روشن با قابلیت تغییر
- 📱 **طراحی واکنش‌گرا** – سازگار با نمایشگرهای مختلف (دسکتاپ، تبلت، موبایل)
- ✨ **انیمیشن‌های نرم** – تجربه کاربری روان با transitions و hover effects

---

### 🛠️ تکنولوژی‌ها

| ابزار | توضیحات |
|-------|---------|
| <img src="https://skillicons.dev/icons?i=react" width="20" /> **React 19** | کتابخانه اصلی برای ساخت رابط کاربری |
| <img src="https://skillicons.dev/icons?i=ts" width="20" /> **TypeScript** | برای نوع‌دهی قوی و کد امن‌تر |
| <img src="https://skillicons.dev/icons?i=tailwind" width="20" /> **Tailwind CSS 4** | استایل‌دهی مدرن و سریع |
| <img src="https://skillicons.dev/icons?i=vite" width="20" /> **Vite** | ابزار ساخت سریع و مدرن |
| <img src="https://skillicons.dev/icons?i=pnpm" width="20" /> **pnpm** | مدیریت بسته‌های کارآمد |

---

### 📁 ساختار پروژه

```
browser-extensions-manager-ui/
├── src/
│   ├── App.tsx          # 🧩 کامپوننت اصلی برنامه
│   ├── main.tsx         # 🚀 نقطه ورود برنامه
│   ├── index.css        # 🎨 استایل‌های اصلی و Tailwind
│   ├── types.ts         # 📝 تعاریف تایپ‌های TypeScript
│   └── data.json        # 📦 داده‌های نمونه افزونه‌ها
├── index.html           # 🌐 فایل HTML اصلی
├── vite.config.ts       # ⚙️ پیکربندی Vite
├── tsconfig.json        # ⚙️ پیکربندی TypeScript
├── package.json         # 📦 وابستگی‌ها و اسکریپت‌ها
└── README.md            # 📖 این فایل
```

---

### 📦 نصب و راه‌اندازی

#### پیش‌نیازها

- <img src="https://skillicons.dev/icons?i=nodejs" width="18" /> Node.js (نسخه 18 یا بالاتر)
- <img src="https://skillicons.dev/icons?i=pnpm" width="18" /> pnpm (توصیه شده) یا npm

#### مراحل نصب

1. کلون کردن مخزن:
```bash
git clone <repository-url>
cd browser-extensions-manager-ui
```

2. نصب وابستگی‌ها:
```bash
pnpm install
# یا
npm install
```

3. اجرا در حالت توسعه:
```bash
pnpm dev
# یا
npm run dev
```

4. ساخت برای تولید:
```bash
pnpm build
# یا
npm run build
```

5. پیش‌نمایش نسخه ساخته شده:
```bash
pnpm preview
# یا
npm run preview
```

---

### 🎯 نحوه استفاده

#### مدیریت افزونه‌ها

- **🔄 تغییر وضعیت**: کلیک روی دکمه toggle (کلید گرد) برای فعال/غیرفعال کردن هر افزونه
- **🗑️ حذف افزونه**: کلیک روی دکمه ✕ (ضربدر) در گوشه بالای هر کارت
- **🔍 فیلتر کردن**: استفاده از دکمه‌های فیلتر (`All`، `Active`، `Inactive`) برای نمایش افزونه‌های خاص

#### تغییر تم

- 🌙 کلیک روی دکمه آیکون خورشید/ماه در header برای تغییر بین حالت روشن و تاریک

---

### 📊 ساختار داده

داده‌های افزونه‌ها در فایل `src/data.json` با ساختار زیر ذخیره می‌شوند:

```json
{
  "logo": "./assets/images/logo-name.svg",
  "name": "نام افزونه",
  "description": "توضیحات افزونه",
  "isActive": true
}
```

---

### 🎨 طراحی

- **🔤 فونت**: Noto Sans از Google Fonts
- **🎨 رنگ‌بندی**: پالت رنگی مدرن با پشتیبانی از تم تاریک
- **🖼️ آیکون‌ها**: SVGهای سفارشی برای دکمه‌ها و کنترل‌ها
- **💳 کارت‌ها**: طراحی کارتی با سایه و hover effect

---

### 📱 سازگاری

| دستگاه | تعداد ستون |
|--------|-----------|
| 🖥️ دسکتاپ | ۳ ستونه |
| 📟 تبلت | ۲ ستونه |
| 📱 موبایل | ۱ ستونه |

---

### 🤝 مشارکت

برای مشارکت در توسعه این پروژه:

1. 🍴 Fork کنید
2. 🌿 Branch جدید ایجاد کنید (`git checkout -b feature/amazing-feature`)
3. 💾 Commit کنید (`git commit -m 'Add some amazing feature'`)
4. 📤 Push کنید (`git push origin feature/amazing-feature`)
5. 🔃 Pull Request باز کنید

---

### 📄 مجوز

این پروژه تحت مجوز **MIT** منتشر شده است.

---

**❤️ توسعه‌یافته با عشق و React**

---

---

## 🇬🇧 English

# 🧩 Browser Extensions Manager UI

> A modern and responsive user interface for managing browser extensions

---

### 📋 Overview

This project is a **Browser Extensions Manager UI** built with **React**, **TypeScript**, and **Tailwind CSS**. It provides interactive features like filtering, toggling status, deleting extensions, and dark/light theme support in a beautiful and responsive interface.

> **🙏 Note:** The original UI design is inspired by **[Frontend Mentor](https://www.frontendmentor.io)** and this project has been implemented as a **challenge and practice** to improve frontend development skills.

---

### ✨ Features

- ✅ **Extension Management** – Display list of extensions with active/inactive status
- 🔍 **Filtering** – Filter by status (All, Active, Inactive)
- 🔄 **Toggle Status** – Activate/deactivate any extension with a single click
- 🗑️ **Delete Extension** – Remove extensions from the list
- 🌙 **Dark/Light Mode** – Support for dark and light themes with toggle capability
- 📱 **Responsive Design** – Compatible with various screen sizes (desktop, tablet, mobile)
- ✨ **Smooth Animations** – Pleasant user experience with transitions and hover effects

---

### 🛠️ Technologies

| Tool | Description |
|------|-------------|
| <img src="https://skillicons.dev/icons?i=react" width="20" /> **React 19** | Main library for building the UI |
| <img src="https://skillicons.dev/icons?i=ts" width="20" /> **TypeScript** | Strong typing and safer code |
| <img src="https://skillicons.dev/icons?i=tailwind" width="20" /> **Tailwind CSS 4** | Modern and fast styling |
| <img src="https://skillicons.dev/icons?i=vite" width="20" /> **Vite** | Fast and modern build tool |
| <img src="https://skillicons.dev/icons?i=pnpm" width="20" /> **pnpm** | Efficient package management |

---

### 📁 Project Structure

```
browser-extensions-manager-ui/
├── src/
│   ├── App.tsx          # 🧩 Main application component
│   ├── main.tsx         # 🚀 Application entry point
│   ├── index.css        # 🎨 Main styles and Tailwind
│   ├── types.ts         # 📝 TypeScript type definitions
│   └── data.json        # 📦 Sample extension data
├── index.html           # 🌐 Main HTML file
├── vite.config.ts       # ⚙️ Vite configuration
├── tsconfig.json        # ⚙️ TypeScript configuration
├── package.json         # 📦 Dependencies and scripts
└── README.md            # 📖 This file
```

---

### 📦 Installation & Setup

#### Prerequisites

- <img src="https://skillicons.dev/icons?i=nodejs" width="18" /> Node.js (version 18 or higher)
- <img src="https://skillicons.dev/icons?i=pnpm" width="18" /> pnpm (recommended) or npm

#### Installation Steps

1. Clone the repository:
```bash
git clone <repository-url>
cd browser-extensions-manager-ui
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Run in development mode:
```bash
pnpm dev
# or
npm run dev
```

4. Build for production:
```bash
pnpm build
# or
npm run build
```

5. Preview the built version:
```bash
pnpm preview
# or
npm run preview
```

---

### 🎯 How to Use

#### Managing Extensions

- **🔄 Toggle Status**: Click the toggle switch (round button) to activate/deactivate any extension
- **🗑️ Delete Extension**: Click the ✕ (cross) button in the top-right corner of each card
- **🔍 Filter**: Use the filter buttons (`All`, `Active`, `Inactive`) to display specific extensions

#### Changing Theme

- 🌙 Click the sun/moon icon button in the header to switch between light and dark modes

---

### 📊 Data Structure

Extension data is stored in `src/data.json` with the following structure:

```json
{
  "logo": "./assets/images/logo-name.svg",
  "name": "Extension Name",
  "description": "Extension description",
  "isActive": true
}
```

---

### 🎨 Design

- **🔤 Font**: Noto Sans from Google Fonts
- **🎨 Color Palette**: Modern color scheme with dark theme support
- **🖼️ Icons**: Custom SVG icons for buttons and controls
- **💳 Cards**: Card-based design with shadows and hover effects

---

### 📱 Responsiveness

| Device | Columns |
|--------|---------|
| 🖥️ Desktop | 3 columns |
| 📟 Tablet | 2 columns |
| 📱 Mobile | 1 column |

---

### 🤝 Contributing

To contribute to this project:

1. 🍴 Fork the repository
2. 🌿 Create a new branch (`git checkout -b feature/amazing-feature`)
3. 💾 Commit your changes (`git commit -m 'Add some amazing feature'`)
4. 📤 Push to the branch (`git push origin feature/amazing-feature`)
5. 🔃 Open a Pull Request

---

### 📄 License

This project is licensed under the **MIT** License.

---

**❤️ Built with love and React**

---

<div align="center">
  <sub>Made with ❤️ by the developer</sub>
</div>