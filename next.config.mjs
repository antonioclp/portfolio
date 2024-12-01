/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GITHUB_USER: process.env.GITHUB_USER,
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    GOOGLE_RECAPTCHA_TOKEN: process.env.GOOGLE_RECAPTCHA_TOKEN,
    EMAILJS_SERVICE_KEY: process.env.EMAILJS_SERVICE_KEY,
    EMAILJS_TEMPLATE_KEY: process.env.EMAILJS_TEMPLATE_KEY,
    EMAILJS_USER_KEY: process.env.EMAILJS_USER_KEY,
  },
}

export default nextConfig
