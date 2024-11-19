import Redis from 'ioredis';
import dotenv from 'dotenv';

dotenv.config();

const redis = new Redis(`rediss://default:${process.env.REDIS_TOKEN}@${process.env.REDIS_URL}:${process.env.REDIS_PORT}`);

async function incrementCounter() {
    try {
        const newCount = await redis.incr('counter');
        console.log(`Counter incremented. New count: ${newCount}`);
    } catch (error) {
        console.error('Error incrementing the counter:', error);
    } finally {
        redis.quit();
    }
}

incrementCounter();
