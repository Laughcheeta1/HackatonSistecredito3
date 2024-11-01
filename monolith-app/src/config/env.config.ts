import * as dotenv from 'dotenv';
import * as path from 'path';

// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

// Export environment variables as simple variables
export const PORT = process.env.PORT;
export const DB_NAME = process.env.DB_NAME;
export const DB_USER = process.env.DB_USER;
export const CLUSTER_NAME = process.env.CLUSTER_NAME;
export const CLUSTER_URL = process.env.CLUSTER_URL;
export const DB_PASS = process.env.DB_PASS;
export const DB_RETRY_WRITES = process.env.DB_RETRY_WRITES;
export const DB_W = process.env.DB_W;
export const JWT_SECRET = process.env.JWT_SECRET;