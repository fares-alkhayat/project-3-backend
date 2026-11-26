const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase:true
    },
    hashedPassword: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true,
      default: 'user',
      enum: ['admin' , 'restaurant', 'driver', 'user']
    },
    isDeleted: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  { timestamps: true },
);

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    delete returnedObject.hashedPassword;
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
