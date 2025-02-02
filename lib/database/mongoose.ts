import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URL: string | undefined = process.env.MONGODB_URL;

interface MongooseConnection {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

// Use globalThis to avoid TypeScript warnings
let cached: MongooseConnection = (globalThis as any).mongoose;

if (!cached) {
    cached = (globalThis as any).mongoose = { conn: null, promise: null };
}

export const connectToDatabase = async (): Promise<Mongoose> => {
    if (cached.conn) return cached.conn;

    if (!MONGODB_URL) {
        throw new Error('Missing MONGODB_URL');
    }

    cached.promise = cached.promise || mongoose.connect(MONGODB_URL, {
        dbName: 'imagify',
        bufferCommands: false,
    });

    cached.conn = await cached.promise;
    
    return cached.conn;
};
