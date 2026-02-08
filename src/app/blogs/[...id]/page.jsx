import React from "react";
import styles from "./blog.module.css";
import { MOKE_DATA } from "@/constants/BLOG.js";
import { BASE_DATA } from "@/constants/base";
import * as blogService from "@/services/blog.service.js";

export async function generateMetadata({ params }) {
  // const blogs = await blogService.getAllBlogs();
  // const blog = blogs.find(b => b._id === params.id);
  const blog = await blogService.getBlogById(params.id).data;

  if (!blog) {
    return {
      title: `Blog Post Not Found | ${BASE_DATA.siteName}`,
      description: "This blog post could not be found.",
      robots: "index, nofollow",
    };
  }

  return {
    title: `${blog.title}`,
    description:
      blog.subtitle ||
      "Read professional locksmith and security insights from ${BASE_DATA.siteName}.",
    keywords: blog.keywords,
      url: `${BASE_DATA.URL}/blogs/${blog._id}`,
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
    viewport: "width=device-width, initial-scale=1.0",
    icons: {
      icon: "/favicon.ico",
    },
    alternates: {
      canonical: `${BASE_DATA.URL}/blog/${blog._id}`,
    },
    category: blog.category,
    publisher: BASE_DATA.siteName,
    themeColor: "#000000",
    manifest: "/site.webmanifest",
    bookmarks: [`${BASE_DATA.URL}/blog/${blog._id}`],
    openGraph: {
      title: `${blog.title} | ${BASE_DATA.siteName}`,
      description:
        blog.subtitle ||
        "Explore our locksmith and security solutions blog for helpful insights and tips.",
      images: [
        {
          url: blog.imageUrl || "/images/default-blog.jpg",
          alt: `${blog.title} | ${BASE_DATA.siteName}`,
        },
      ],
      type: "article",
      locale: "en_US",
      siteName: BASE_DATA.siteName,
    },
    twitter: {
      card: "summary_large_image",
      title: `${blog.title} | ${BASE_DATA.siteName}`,
      description:
        blog.subtitle ||
        `Expert locksmith and security services insights by ${BASE_DATA.siteName}.`,
      images: [blog.imageUrl || "/images/twitter-image.jpg"],
      creator: "@ServiceOfAmerica",
      site: "@ServiceOfAmerica",
    },
    other: {
      audience: "Everyone",
      rating: "General",
      distribution: "Global",
      revisitAfter: "7 days",
      coverage: "Worldwide",
      verification: { google: BASE_DATA.verification_google },
    },
  };
}

const page = async ({ params }) => {
  const { id } = await params;
  const blog = await blogService.getBlogById(id);

  return (
    <div className={styles.blogContainer}>
      <h1 className={styles.blogTitle}>{blog.data.title}</h1>
      {blog.data.subtitle && (
        <h2 className={styles.blogSubtitle}>{blog.data.subtitle}</h2>
      )}

      {blog.data.imageUrl && (
        <img
          src={blog.data.imageUrl}
          alt={blog.data.title}
          className={styles.blogImage}
        />
      )}

      <div className={styles.blogMeta}>
        <p>
          <strong>Author:</strong> {blog.data.author}
        </p>
        <p>
          <strong>Category:</strong> {blog.data.category}
        </p>
        {blog.data.date && (
          <p>
            <strong>Date:</strong>{" "}
            {new Date(blog.data.date).toLocaleDateString("he-IL")}
          </p>
        )}
      </div>

      <div>
        {blog.data.article &&
          blog.data.article.map((paragraph, i) => (
            <p key={i} className={styles.blogContent}>
              {paragraph}
            </p>
          ))}
      </div>

      <div className={styles.blogTags}>
        <p>
          <strong>Tags:</strong> {blog.data.tags}
        </p>
      </div>

      <div className={styles.blogStatus}>
        <p>
          <strong>Status:</strong>{" "}
          {blog.data.isPublished ? "Published" : "Draft"}
        </p>
      </div>
    </div>
  );
};

export default page;
