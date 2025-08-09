declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL?: string;
    NEXTAUTH_SECRET?: string;
    STRIPE_SECRET_KEY?: string;
    STRIPE_PUBLISHABLE_KEY?: string;
    STRIPE_WEBHOOK_SECRET?: string;
    RESEND_API_KEY?: string;
    NEXT_PUBLIC_SITE_URL?: string;
  }
}
