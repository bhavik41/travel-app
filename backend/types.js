const zod = require('zod');

const createDestination = zod.object({
  // imgSrc: zodod.string().optional(),  // Uncomment if you plan to use images
  destTitle: zod.string(),
  location: zod.string(),
  grade: zod.string(),
  fees: zod.string(),
  description: zod.string()
});

const createUser = zod.object({
  username: zod.string().min(1, "Username is required"),
  email: zod.string().email("Invalid email format"),
  password: zod.string().min(6, "Password must be at least 6 characters long")
});

const signInSchema = zod.object({
  username :zod.string().min(1, "Username is required"),
   password: zod.string().min(6, "Password must be at least 6 characters long")
})
module.exports = {
  createDestination,
  createUser,
  signInSchema
};
