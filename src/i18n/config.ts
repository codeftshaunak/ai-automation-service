export const locales = ['en', 'fr', 'bn', 'it', 'hi', 'es', 'de', 'ar', 'zh', 'ja'] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = 'en';