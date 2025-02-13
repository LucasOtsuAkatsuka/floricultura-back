const { z } = require("zod");
const { validateRequest } = require("zod-express-middleware");

const login = validateRequest({
    body: z.object({
        email: z.string({required_error: "Email required"}).email("Email is invalid"),
        password: z.string({required_error: "Password required"}),
    })
});

module.exports = {
    login,
};