const {default: mongoose} = require("mongoose");
const {z} = require("zod");
const {validateRequest} = require("zod-express-middleware");

const create = validateRequest({
    body: z.object({
        email: z.string({required_error: "Email is required"}).email("Invalid email"),
        password: z.string({required_error: "Password is required"}),
        name: z.string({required_error: "Name is required"}),
        cel: z.string({required_error: "Cel is required"}),
        isAdmin: z.boolean({required_error: "isAdmin is required"}),
    })
});

const destroy = validateRequest({
    params: z.object({
        id: z.custom(mongoose.isValidObjectId, "Invalid ID"),
    })
});

const update = validateRequest({
    body: z.object({
        email: z.string().email("Invalid email").optional(),
        passowrd: z.string().optional(),
        name: z.string().optional(),
        cel: z.string().optional(),
        isAdmin: z.boolean().optional(),
    }),

    params: z.object({
        id: z.custom(mongoose.isValidObjectId, "Invalid ID"),
    })
});

module.exports = {
    create,
    destroy,
    update,
};



