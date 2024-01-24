const { Schema, model } = require("mongoose");


const loginSchema = new Schema(
  {
    usuario: {
      type: String,
      require: true,
      trim: true, 
    },
    contraseña: {
      type: String,
      require: true,
      trim: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = model("Login", loginSchema);
