const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Databass Schema

const EventSchema = new Schema(
  {
    Gid: { type: Number, required: true },
    Name: { type: String, required: true },
    Age: { type: String, required: true },
    Address: { type: String, required: true },
    Pno: { type: String, required: true },
    Children: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;
