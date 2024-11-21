import { Redis } from 'ioredis';

const redis = new Redis(`rediss://default:${process.env.REDIS_TOKEN}@${process.env.REDIS_URL}:${process.env.REDIS_PORT}`);
const SECRET_TOKEN = process.env.SECRET_TOKEN;

let counter = null;

export default async function handler(req, res) {
    const { action, token = null } = req.query;

    if (action === 'increment') {
        if (token !== SECRET_TOKEN) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        const newCount = await redis.incr('counter');
        counter = newCount;
        return res.status(200).json({ count: newCount });
    }

    if (action === 'get') {
        if (typeof counter === 'number') return res.status(200).json({ count: counter });
        
        const count = await redis.get('counter') || 0;
        counter = count;
        return res.status(200).json({ count: parseInt(count, 10) });
    }

    return res.status(400).json({ error: 'Invalid action' });
}
