import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './config/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url:'postgresql://neondb_owner:npg_ptkC2XvAFYD0@ep-cold-darkness-a1bmymps-pooler.ap-southeast-1.aws.neon.tech/ai-room-redesign?sslmode=require&channel_binding=require',
  },
});
