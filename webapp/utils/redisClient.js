const redis = require('redis');

let client = null;

try {
    client = redis.createClient({
        url: process.env.REDIS_URL
    });

    client.connect()
        .then(() => console.log("Redis connected"))
        .catch(() => {
            console.warn("Connexion Redis échouée");
            client = null;
        });

} catch (err) {
    console.warn("Redis non configuré");
    client = null;
}

module.exports = client;
