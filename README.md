## 📘 Project Overview

**NEXTJS-POSTS-DASHBOARD** is a modern and mobile-friendly admin panel built using **Next.js 15**. It allows you to create, update, delete, and view blog posts.

It uses a fake REST API from **[mockapi.io](https://mockapi.io/)** to get and manage posts. You can test the dashboard without any real backend.

The project uses the latest tools like **React 19**, **TailwindCSS**, **React Query**, and **TinyMCE** editor. It supports dark/light mode, shows toast alerts, and works on all screen sizes.

---

# NEXTJS-POSTS-DASHBOARD 🚀

[![Next.js](https://img.shields.io/badge/Next.js-15.3.4-000000?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.17-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-0.0.0-000000?logo=radix)](https://ui.shadcn.com/)

A modern dashboard for managing blog posts with Next.js App Router, React Query, and shadcn/ui components.

## 🌟 Features

- **Admin Dashboard** with full CRUD operations
- **Rich Text Editor** (TinyMCE) for post content
- **Dark/Light Mode** toggle
- **Optimistic UI Updates** with React Query
- **Form Validation** with custom logic (no external validation library)
- **Toast Notifications** system
- **Responsive Design** for all devices

## 🛠 Tech Stack

| Technology | Usage | Version |
|------------|-------|---------|
| [![Next.js](https://img.shields.io/badge/-Next.js-000000?logo=next.js)](https://nextjs.org/) | Framework | 15.3.4 |
| [![React](https://img.shields.io/badge/-React-61DAFB?logo=react)](https://react.dev/) | UI Library | 19.0.0 |
| [![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript)](https://www.typescriptlang.org/) | Type Checking | 5.0.0 |
| [![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-06B6D4?logo=tailwindcss)](https://tailwindcss.com/) | Styling | 3.4.17 |
| [![shadcn/ui](https://img.shields.io/badge/-shadcn/ui-000000?logo=radix)](https://ui.shadcn.com/) | UI Components | Latest |
| [![React Query](https://img.shields.io/badge/-React_Query-FF4154?logo=reactquery)](https://tanstack.com/query) | Data Fetching | 5.81.5 |
| [![TinyMCE](https://img.shields.io/badge/-TinyMCE-2299DD?logo=tinymce)](https://www.tiny.cloud/) | Rich Text Editor | 6.2.1 |

## 🌿 Branch Strategy

| Branch | Environment | URL | Purpose |
|--------|-------------|-----|---------|
| `production` | Production | [prod.example.com](https://prod.example.com) | Stable releases |
| `staging` | Staging | [staging.example.com](https://staging.example.com) | Pre-production testing |
| `qa` | QA | [qa.example.com](https://qa.example.com) | Quality assurance |
| `develop` | Development | [dev.example.com](https://dev.example.com) | Active development |

## 📂 Project Structure

| Folder/File | Type | Description |
|-------------|------|-------------|
| `app/` | Folder | Main app folder using Next.js App Router |
| ├── `admin/` | Folder | Admin dashboard pages |
| ├──── `posts/` | Folder | Manage posts |
| ├────── `[id]/page.tsx` | File | Edit post |
| ├────── `new/page.tsx` | File | Create new post |
| ├──── `page.tsx` | File | Admin dashboard home |
| ├── `posts/[id]/page.tsx` | File | Public view of a post |
| ├── `layout.tsx` | File | Main layout |
| ├── `page.tsx` | File | Homepage |
| └── `globals.css` | File | Global styles |
| `components/` | Folder | Reusable UI components |
| ├── `delete-post-dialog/` | Folder | Confirm delete post |
| ├── `layouts/AdminLayout.tsx` | File | Layout for admin pages |
| ├── `post-detail/` | Folder | Post detail view |
| ├── `post-form/` | Folder | Create/edit form |
| ├── `posts-list/` | Folder | Posts list |
| ├── `theme-provider/` | Folder | Theme switch logic |
| ├── `tiny-editor/` | Folder | TinyMCE integration |
| └── `ui/` | Folder | UI elements (button, input, etc.) |
| `hooks/` | Folder | Custom hooks |
| ├── `use-mobile.tsx` | File | Detect mobile |
| └── `use-toast.ts` | File | Show toast messages |
| `lib/` | Folder | Helpers and utilities |
| ├── `api.ts` | File | API functions |
| ├── `hooks.ts` | File | React Query hooks |
| └── `utils.ts` | File | Utility functions |
| `providers/` | Folder | App-level context providers |
| `public/` | Folder | Static files (e.g. favicon) |
| `types/` | Folder | TypeScript types |
| `.env` | File | Environment settings |
| `.gitignore` | File | Files to ignore in Git |
| `components.json` | File | shadcn/ui settings |
| `eslint.config.mjs` | File | ESLint settings |
| `next.config.ts` | File | Next.js config |
| `package.json` | File | Project dependencies |
| `postcss.config.js` | File | PostCSS config |
| `tailwind.config.ts` | File | Tailwind settings |
| `tsconfig.json` | File | TypeScript config |

---

## 🚀 Getting Started

### ✅ Requirements

- Node.js version 18 or higher
- npm or yarn

### 🔧 Install and Run

```bash
git clone https://github.com/farukh110/nextjs-posts-dashboard.git
cd nextjs-posts-dashboard
npm install
npm run dev

Create .env file:

NEXT_PUBLIC_API_URL=https://your-mockapi-url.mockapi.io/api/v1

🏗 Build & Deployment

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

🤝 Contributing
Fork the repository

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request