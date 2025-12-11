<div align="center">

# 🌐 Nexus

### A Modern Social Media Platform

*Connect, Share, and Engage with the World*

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)](https://www.prisma.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

[Live Demo](https://nexus-eight-pink.vercel.app) · [Report Bug](https://github.com/dndmein-rgb/Nexus/issues) · [Request Feature](https://github.com/dndmein-rgb/Nexus/issues)

</div>

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🔐 Authentication
- Secure sign-up & login
- Session management
- Protected routes

### 📝 Posts & Feed
- Create text & image posts
- Real-time feed updates
- Chronological timeline

</td>
<td width="50%">

### 💬 Social Interactions
- Like posts
- Comment system
- User mentions

### 👤 User Profiles
- Personalized profiles (@username)
- Activity history
- Profile customization

</td>
</tr>
<tr>
<td width="50%">

### 🎨 Modern UI/UX
- Dark/Light theme toggle
- Responsive design
- Smooth animations

</td>
<td width="50%">

### 📱 Media Support
- Image uploads
- Optimized media delivery
- Gallery view

</td>
</tr>
</table>

---

## 🚀 Tech Stack
```mermaid
graph LR
    A[Frontend] --> B[Next.js 16]
    A --> C[TypeScript]
    A --> D[Tailwind CSS]
    A --> E[shadcn/ui]
    
    F[Backend] --> G[Next.js API]
    F --> H[Prisma ORM]
    F --> I[PostgreSQL]
    
    J[Services] --> K[Vercel]
    J --> L[UploadThing]
```

<table>
<tr>
<td align="center" width="25%">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width="48" height="48" alt="Next.js" />
<br><strong>Next.js 16</strong>
</td>
<td align="center" width="25%">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="48" height="48" alt="TypeScript" />
<br><strong>TypeScript</strong>
</td>
<td align="center" width="25%">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" width="48" height="48" alt="PostgreSQL" />
<br><strong>PostgreSQL</strong>
</td>
<td align="center" width="25%">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" width="48" height="48" alt="Tailwind" />
<br><strong>Tailwind CSS</strong>
</td>
</tr>
</table>

---

## 🛠️ Quick Start

### Prerequisites
```bash
Node.js 18.x or higher
PostgreSQL database
npm/yarn/pnpm/bun
```

### Installation
```bash
# 1. Clone the repository
git clone https://github.com/dndmein-rgb/Nexus.git
cd Nexus

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# 4. Set up database
npx prisma generate
npx prisma migrate dev

# 5. Run development server
npm run dev
```

🎉 Open [http://localhost:3000](http://localhost:3000) in your browser!

---

## 📁 Project Structure
```
nexus/
├── 📂 prisma/
│   └── schema.prisma          # Database schema
├── 📂 public/
│   └── uploads/               # Static files
├── 📂 src/
│   ├── 📂 app/               # Next.js App Router
│   │   ├── (auth)/          # Auth routes
│   │   ├── api/             # API endpoints
│   │   ├── profile/         # Profile pages
│   │   └── layout.tsx       # Root layout
│   ├── 📂 components/       # React components
│   │   └── ui/             # UI components
│   ├── 📂 lib/             # Utilities
│   └── 📂 styles/          # Global styles
├── ⚙️ next.config.mjs       # Next.js config
├── ⚙️ tailwind.config.ts    # Tailwind config
└── 📦 package.json          # Dependencies
```

---

## 🔧 Environment Variables

Create a `.env` file in the root directory:
```bash
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/nexus"

# Authentication
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# File Uploads
UPLOADTHING_SECRET="your-uploadthing-secret"
UPLOADTHING_APP_ID="your-uploadthing-app-id"
```

> 💡 **Tip:** Never commit your `.env` file to version control!

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npx prisma studio` | Open Prisma Studio |
| `npx prisma migrate dev` | Create & apply migrations |

---

## 🚀 Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/dndmein-rgb/Nexus)

1. Click the button above or push to GitHub
2. Import your repository to Vercel
3. Add environment variables
4. Deploy! 🎉

---





---

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma](https://www.prisma.io/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/)

---

<div align="center">

### 🌟 Star this repo if you find it helpful!

**Built with ❤️ by [dndmein-rgb](https://github.com/dndmein-rgb)**

[⬆ Back to Top](#-nexus)

</div>
