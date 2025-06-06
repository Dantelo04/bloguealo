import mongoose from "mongoose";

const user = mongoose.model("user", new mongoose.Schema({}, { strict: false }));