import { b as defineEventHandler, u as readBody } from '../../nitro/nitro.mjs';
import { d as dbConnect } from '../../_/connect.mjs';
import { B as Blog } from '../../_/Blog.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'mongoose';

function formatDate(date) {
  return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}
const blogs_post = defineEventHandler(async (event) => {
  try {
    await dbConnect();
    const body = await readBody(event);
    if (!body.title || !body.slug || !body.content) {
      return { success: false, error: "Title, slug, and content are required" };
    }
    const blogData = {
      title: body.title,
      slug: body.slug,
      excerpt: body.excerpt || "",
      content: body.content,
      date: body.date || formatDate(/* @__PURE__ */ new Date()),
      image: body.image || "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      published: body.published !== false
    };
    const blog = await Blog.create(blogData);
    return { success: true, data: blog };
  } catch (error) {
    console.error("Error creating blog:", error);
    return { success: false, error: error.message || "Failed to create blog" };
  }
});

export { blogs_post as default };
//# sourceMappingURL=blogs.post.mjs.map
