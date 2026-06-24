import { b as defineEventHandler, u as readBody } from '../../../nitro/nitro.mjs';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { d as dbConnect } from '../../../_/connect.mjs';
import { U as User } from '../../../_/User.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'mongoose';

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key-change-in-production";
const login_post = defineEventHandler(async (event) => {
  try {
    await dbConnect();
    const body = await readBody(event);
    const { username, password } = body;
    if (!username || !password) {
      return { success: false, error: "Username and password are required" };
    }
    const user = await User.findOne({ username }).lean();
    if (!user) return { success: false, error: "Invalid credentials" };
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return { success: false, error: "Invalid credentials" };
    const token = jwt.sign({ userId: user._id, username: user.username }, JWT_SECRET, { expiresIn: "7d" });
    return { success: true, token, user: { id: user._id, username: user.username } };
  } catch (error) {
    console.error("Login error:", error);
    return { success: false, error: error.message || "Login failed" };
  }
});

export { login_post as default };
//# sourceMappingURL=login.post.mjs.map
