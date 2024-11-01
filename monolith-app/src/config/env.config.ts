import * as dotenv from 'dotenv';
import * as path from 'path';

// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

// Export environment variables as simple variables
export const PORT = 8080;
export const DB_NAME = "TerceraHackatonSisteCredito";
export const DB_USER = "santiagoyepesmesa0224";
export const DB_PASS = "MWnAJfgc87smUvIe";
export const CLUSTER_URL = "Cluster0.hxewa.mongodb.net";
export const DB_RETRY_WRITES = "true";
export const DB_W = "majority";
export const APP_NAME = "NSM_FOR_THE_WIN";