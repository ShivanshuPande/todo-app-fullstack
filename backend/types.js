const z = require("zod") 

const signupBody = z.object({
    username:z.string().min(8).max(20),
    password:z.string().min(8).max(20)
})

const todoBody = z.object({
    title:z.string().max(100),
    description:z.string().max(200)
})