import mongoose from "mongoose";

const userSchema = new mongosose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: false,
    default: function() {
      return `https://avatar.iran.liara.run/public/${this.name}`;
    },
  },
});

const User = mongoose.model("User", userSchema);

export default User;
