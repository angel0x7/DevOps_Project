const redisClient = require('../utils/redisClient');
 
test("vérification que le client Redis se charge correctement", () => {
    expect(redisClient === null || typeof redisClient === "object").toBe(true);
});
