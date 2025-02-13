const {default: mongoose} = require("mongoose");
const {z} = require("zod");
const {validateRequest} = require("zod-express-middleware");

const create = validateRequest({
    body: z.object({
        name: z.string({required_error: "Name is required"}),
        description: z.string({required_error: "Description is required"}),
        price: z.number({required_error: "Price is required"}),
    })
})

const update = validateRequest({
    body: z.object({
        name: z.string().optional(),
        description: z.string().optional(),
        price: z.number().optional(),
    }),

    params: z.object({
        id: z.custom(mongoose.isValidObjectId, "Invalid ID")
    })
});

const destroy = validateRequest({
    params: z.object({
        id: z.custom(mongoose.isValidObjectId, "Invalid ID")
    })
});

module.exports = {
    create,
    update,
    destroy,
}