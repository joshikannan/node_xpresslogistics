import mongoose from "mongoose";

export const getNextSequence = async (name) => {
  const result = await mongoose.connection
    .collection("counters")
    .findOneAndUpdate(
      { name },
      { $inc: { value: 1 } },
      { upsert: true, returnDocument: "after" },
    );

  return result.value;
};
