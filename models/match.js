const mongoose = require("mongoose");
const schema = mongoose.Schema;

const matchSchema = new schema({
  nom_de_terrain: {
    type: String,
  },
  localisation: {
    type: String,
  },
  date :{
    type: Date
  },
  organisateur:{
    type: String
  },
  nombre_de_joueur :{
    type:Number
  },
  prix :{
    type:Number
  }
});

module.exports = Match = mongoose.model("Match", matchSchema);
