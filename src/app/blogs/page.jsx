import React from 'react'
import styles from './blogspage.module.css'
import * as blogService from '@/services/blog.service.js';
// import {MOKE_DATA} from '@/constants/BLOG.js';
import { BASE_DATA } from "@/constants/base.js";



async function getAllBlogs() {
  try {
    const blogs = await blogService.getAllBlogs();
    return blogs.data || MOKE_DATA.BLOGS;
  } catch (error) {
    console.error('Failed to fetch blogs:', error);
    return [];
  }
}

function absUrl(path = "/") {
  const base = BASE_DATA.URL?.replace(/\/$/, "") || "";
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

// הפונקציה הדינמית
export async function generateMetadata() {
  const title = `Blogs`;
  const description = BASE_DATA.page_blogs.description
  const canonical = absUrl("/blogs");

  return {
    title,
    description,
    alternates: { canonical },
    keywords: BASE_DATA.page_blogs.keywords,
    authors: [{ name: BASE_DATA.siteName }],
    creator: BASE_DATA.siteName,
    publisher: BASE_DATA.siteName,
    category: "Blog",
    themeColor: "#000000",
    manifest: "/site.webmanifest",
    bookmarks: ["/blogs"],
    verification: { google: BASE_DATA.verification_google },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: BASE_DATA.siteName,
      type: "website",
      images: [
        {
          url: absUrl(BASE_DATA.page_blogs.img),
          alt: BASE_DATA.page_blogs.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absUrl("/images/blog-twitter.jpg")],
      creator: "@YourTwitterHandle",
      site: "@YourTwitterHandle",
    },
    metadataBase: new URL(BASE_DATA.URL),
  };
}

const page = async () => {
  const blogs = await getAllBlogs();

  
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Blogs</h1>
      <ul className={styles.blogList}>
        {blogs?.map(blog => (
          <li key={blog._id} className={styles.blogCard}>
            <h2 className={styles.title}>{blog.title}</h2>
            <div className={styles.meta}>
              {blog.author && <span> {blog.author}</span>}
              {blog.date && <span> | {"10/16/2025"}</span>}
            </div>
            <div className={styles.summary}>{ blog.article?.[0] || "No content available"}</div>
            <a href={`/blogs/${blog._id}`} className={styles.readMore}>read more</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default page