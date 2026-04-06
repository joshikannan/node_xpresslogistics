import mongoose from "mongoose";

export const getNextUserId = async () => {
  const result = await mongoose.connection
    .collection("counters")
    .findOneAndUpdate(
      { name: "userId" },
      { $inc: { value: 1 } },
      { upsert: true, returnDocument: "after" },
    );
  // 🔥 FIX: handle both possible return formats
  return result.value?.value || result.value || result?.value;
};
