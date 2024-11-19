import { Redis } from 'ioredis';

const redis = new Redis({
    url: process.env.REDIS_URL,
    token: process.env.REDIS_TOKEN,
  })
const SECRET_TOKEN = process.env.SECRET_TOKEN;

export default async function handler(req, res) {
    const { action, token = null } = req.query;

    if (action === 'increment') {
        if (token !== SECRET_TOKEN) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        const newCount = await redis.incr('counter');
        return res.status(200).json({ count: newCount });
    }

    if (action === 'get') {
        const count = await redis.get('counter') || 0;
        return res.status(200).json({ count: parseInt(count, 10) });
    }

    return res.status(400).json({ error: 'Invalid action' });
}
