const redis = require('redis');

let client = null;

try {
    client = redis.createClient({
        url: process.env.REDIS_URL
    });

} catch (err) {
    console.warn("Redis non configuré");
    client = null;
}

module.exports = client;