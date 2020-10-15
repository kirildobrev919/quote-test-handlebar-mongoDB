// models/quote.js
const {mongosee} = require('mongose');

const quoteSchema = new mongoose.Schema({
  quote: String,
})

const QuoteItem = mongoose.model('Quote', quoteSchema);

module.exports = Quote;