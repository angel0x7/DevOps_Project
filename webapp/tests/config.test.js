require('dotenv').config();

test("existance du PORT", () => {
    expect(process.env.PORT).toBeDefined();
});
