const { Schema, model } = require("mongoose");


const usuarioSchema = new Schema(
  {
    nombre: {
      type: String,
      require: true,
      trim: true, 
    },
    rol: {
      type: String,
      require: true,
      trim: true,
    },
    correo: {
      type: String,
      require: true,
      trim: true,
    },
    contraseña: {
      type: String,
      require: true,
      trim: true,
    },
    area_encargada: {
      type: String,
      require: true,
      trim: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = model("Usuario", usuarioSchema);
