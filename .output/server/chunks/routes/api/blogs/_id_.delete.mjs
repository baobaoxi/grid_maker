import { d as defineEventHandler } from '../../../nitro/nitro.mjs';
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

const _id__delete = defineEventHandler(async (event) => {
  try {
    await dbConnect();
    const { id } = event.context.params || {};
    if (!id) {
      return { success: false, error: "Blog ID is required" };
    }
    const deleted = await Blog.findByIdAndDelete(id).lean();
    if (!deleted) return { success: false, error: "Blog not found" };
    return { success: true, message: "Blog deleted successfully" };
  } catch (error) {
    console.error("Error deleting blog:", error);
    return { success: false, error: error.message || "Failed to delete blog" };
  }
});

export { _id__delete as default };
//# sourceMappingURL=_id_.delete.mjs.map
