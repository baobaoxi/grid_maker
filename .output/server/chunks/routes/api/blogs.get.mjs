import { d as defineEventHandler } from '../../nitro/nitro.mjs';
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

const blogs_get = defineEventHandler(async () => {
  try {
    await dbConnect();
    const blogs = await Blog.find({ published: true }).sort({ createdAt: -1 }).lean();
    return { success: true, data: blogs };
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return { success: false, error: error.message, data: [] };
  }
});

export { blogs_get as default };
//# sourceMappingURL=blogs.get.mjs.map
