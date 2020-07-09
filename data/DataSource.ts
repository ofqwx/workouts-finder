const mongoose = require("mongoose");

export default class DataSource {
  connect() {
    // Connect to database
    return mongoose.connect(
      `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ds211592.mlab.com:11592/${process.env.DB_NAME}`,
      { useNewUrlParser: true }
    );
  }

  disconnect() {
    return mongoose.disconnect();
  }
}
