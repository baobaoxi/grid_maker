import { d as defineEventHandler, r as readBody } from '../../../nitro/nitro.mjs';
import { d as dbConnect } from '../../../_/connect.mjs';
import { B as Blog } from '../../../_/Blog.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'mongoose';

const _id__put = defineEventHandler(async (event) => {
  try {
    await dbConnect();
    const body = await readBody(event);
    const { id } = event.context.params || {};
    if (!id) {
      return { success: false, error: "Blog ID is required" };
    }
    const updates = {};
    if (body.title) updates.title = body.title;
    if (body.slug) updates.slug = body.slug;
    if (body.excerpt) updates.excerpt = body.excerpt;
    if (body.content) updates.content = body.content;
    if (body.date) updates.date = body.date;
    if (body.image) updates.image = body.image;
    if (body.published != null) updates.published = body.published;
    updates.updatedAt = Date.now();
    const blog = await Blog.findByIdAndUpdate(id, updates, { new: true }).lean();
    if (!blog) return { success: false, error: "Blog not found" };
    return { success: true, data: blog };
  } catch (error) {
    console.error("Error updating blog:", error);
    return { success: false, error: error.message || "Failed to update blog" };
  }
});

export { _id__put as default };
//# sourceMappingURL=_id_.put.mjs.map
