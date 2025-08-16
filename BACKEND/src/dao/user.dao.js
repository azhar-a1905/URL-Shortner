import User from "../models/user.model.js";

export const getUserByEmail = async (email) => {
  return await User.findOne({ email });
};

export const getUserById = async (id) => {
  return await User.findOne({ id });
};

export const createUser = async (name, email, password, avatar) => {
  const newUser = new User({
    name,
    email,
    password,
    avatar,
  });
  await newUser.save();
  return newUser;
};
