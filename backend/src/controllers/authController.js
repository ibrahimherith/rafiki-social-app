import asyncHandler from "express-async-handler";

//@desc Login user/set token
//@route POST /api/users/auth/signin
//@access Public
const signin = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Signed in" });
});

//@desc Login user/set token
//@route POST /api/users/auth/signin
//@access Public
const signout = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Signed out" });
});

export { signin, signout };
