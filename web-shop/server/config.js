module.exports = {
  PORT: process.env.PORT || 8000,
  MONGO_URL: 'mongodb://localhost:27017/webshop'
  // MONGO_URL: `mongodb+srv://${process.env.dbUser}:${process.env.dbPass}@cluster0-h1hep.mongodb.net/test?retryWrites=true&w=majority`
};
