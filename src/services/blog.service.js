// const process.env.API = "https://crm-backend-4uvx.onrender.com/blog";

export const getAllBlogs = async () => {
  const response = await fetch(`${process.env.API}/all`);
  return response.json();
};

export const getBlogById = async (id) => {
  const response = await fetch(`${process.env.API}/my-blogs/${id}`);
 
  return response.json();
};

export const createBlog = async (blog) => {
  const response = await fetch(process.env.API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blog),
  });
  return response.json();
};

export const updateBlog = async (blog) => {
  const response = await fetch(`${process.env.API}/${blog.id_article}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blog),
  });
  return response.json();
};

export const deleteBlog = async (id) => {
  const response = await fetch(`${process.env.API}/${id}`, {
    method: "DELETE",
  });
  return response.json();
};