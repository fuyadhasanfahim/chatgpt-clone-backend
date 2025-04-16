import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
    path: path.join(process.cwd(), '.env'),
});

export default {
    node_env: process.env.NODE_ENV,
    mongo_uri: process.env.MONGO_URI,
    port: process.env.PORT,
    origin: process.env.ORIGIN,
};
