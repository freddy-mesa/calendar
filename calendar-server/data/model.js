module.exports = mongoose => {
  const schema = mongoose.Schema(
    {
      title: String,
      date: String
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Event = mongoose.model("Event", schema, "event");
  return Event;
};