import * as blogService from '@/services/blog.service.js';
import { BASE_DATA } from '@/constants/base';

const BASE = BASE_DATA.URL;

export default async function sitemap() {
  const nowIso = new Date().toISOString();

  const url = {
    home: `${BASE}`,
    about: `${BASE}/about`,
    services: `${BASE}/services`,
    services_business_lockout: `${BASE}/services/business-lockout`,
    services_security_cameras: `${BASE}/services/security-cameras`,
    services_sliding_door: `${BASE}/services/sliding-door`,
    services_change_lock: `${BASE}/services/change-locks`,
    services_door_repair: `${BASE}/services/door-repair`,
    services_door_supplier: `${BASE}/services/door-supplier`,
    services_emergency_home_lockout: `${BASE}/services/emergency-home-lockout`,
    services_locksmith_near_me: `${BASE}/services/locksmith-near-me`,
    services_car_lockout: `${BASE}/services/car-lockout`,
    services_emergency_locksmith: `${BASE}/services/emergency-locksmith`,
    services_garage_door_service: `${BASE}/services/garage-door-service`,
    services_lock_service: `${BASE}/services/lock-service`,
    contact: `${BASE}/contact`,
    blogs: `${BASE}/blogs`,
  };

  // פונקציה שמביאה את כל הפוסטים
  async function getBlog() {
    try {
      const blogs = await blogService.getAllBlogs();
      const data = blogs?.data;
      // אם זה לא מערך, מחזיר מערך ריק
      return Array.isArray(data) ? data : [];
    } catch (err) {
      console.error("Error fetching blogs:", err);
      return [];
    }
  }

  const blogs = await getBlog();

  // טיפול חכם בתאריך לא תקין
  function parseDateSafe(dateStr) {
    if (!dateStr) return new Date();
    let d;
    // תמיכה בפורמט "MM/DD/YY"
    if (dateStr.includes('/')) {
      const [m, d2, y] = dateStr.split('/');
      const year = y.length === 2 ? `20${y}` : y;
      d = new Date(`${year}-${m}-${d2}`);
    } else {
      d = new Date(dateStr);
    }
    return isNaN(d) ? new Date() : d;
  }

  const blogsUrls = blogs.map((blog) => ({
    url: `${BASE}/blogs/${blog._id}`,
    lastModified: parseDateSafe(blog.date).toISOString(),
    changeFrequency: "weekly",
    priority: 0.4,
  }));

  // החזרת מערך הסופי של הכתובות
  return [
    { url: url.home, lastModified: nowIso, changeFrequency: "yearly", priority: 1 },
    { url: url.about, lastModified: nowIso, changeFrequency: "monthly", priority: 0.8 },
    { url: url.contact, lastModified: nowIso, changeFrequency: "monthly", priority: 0.6 },
    { url: url.services, lastModified: nowIso, changeFrequency: "weekly", priority: 0.5 },
    { url: url.services_business_lockout, lastModified: nowIso, changeFrequency: "monthly", priority: 0.6 },
    { url: url.services_security_cameras, lastModified: nowIso, changeFrequency: "monthly", priority: 0.6 },
    { url: url.services_sliding_door, lastModified: nowIso, changeFrequency: "monthly", priority: 0.6 },
    { url: url.services_change_lock, lastModified: nowIso, changeFrequency: "monthly", priority: 0.6 },
    { url: url.services_door_repair, lastModified: nowIso, changeFrequency: "monthly", priority: 0.6 },
    { url: url.services_door_supplier, lastModified: nowIso, changeFrequency: "monthly", priority: 0.6 },
    { url: url.services_emergency_home_lockout, lastModified: nowIso, changeFrequency: "monthly", priority: 0.6 },
    { url: url.services_car_lockout, lastModified: nowIso, changeFrequency: "monthly", priority: 0.6 },
    { url: url.services_emergency_locksmith, lastModified: nowIso, changeFrequency: "monthly", priority: 0.6 },
    { url: url.services_garage_door_service, lastModified: nowIso, changeFrequency: "monthly", priority: 0.6 },
    { url: url.services_lock_service, lastModified: nowIso, changeFrequency: "monthly", priority: 0.6 },
    { url: url.blogs, lastModified: nowIso, changeFrequency: "weekly", priority: 0.7 },
    ...blogsUrls,
  ];
}
