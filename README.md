## Brouwerij Klein Zwitserland Webshop (Monorepo)

Tech stack: Next.js 14 (App Router, RSC), TypeScript, Tailwind CSS, Prisma (Postgres), tRPC + Zod, NextAuth (credentials), Stripe, Resend/Postmark, Jest/Playwright, GitHub Actions, Railway.

### Getting Started

1. Install dependencies

```
npm install
```

2. Environment variables (create `.env` at repo root)

```
DATABASE_URL=postgresql://...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXTAUTH_SECRET=...
RESEND_API_KEY=...
SITE_URL=http://localhost:3000
```

3. Prisma

```
npx prisma generate
npx prisma migrate dev
```

4. Dev

```
npm run web:dev
```

### Apps

- `apps/web`: Next.js app (public + admin)

### Scripts

- `web:dev`, `web:build`, `web:lint`
- `prisma:generate`, `prisma:migrate`, `prisma:deploy`, `prisma:studio`

### License

MIT
