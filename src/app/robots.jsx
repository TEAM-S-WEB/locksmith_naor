import { BASE_DATA } from "@/constants/base"

export default function robots() {
     return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      sitemap: `${BASE_DATA.URL}/sitemap.xml`,
    }
}