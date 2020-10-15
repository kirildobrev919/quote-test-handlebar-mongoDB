// test/models/quote-test.js
const Quote = require('../../models/quote');
const {assert} = require('chai');
const {mongoose, databaseUrl, options} = require('../../database');

describe('Quote', ()=>{
  //hooks
  beforeEach(()=>{
    await mongoose.connect(databaseUrl, options);
    await mongoose.connection.db.dropDatabase();
  });
  afterEach(()=>{
await mongoose.disconnect();
  });
//tests
it('#quote is a string', ()=>{
  const theQuote = 'test quote':
const citation = new Quote({quote: theQuote});
 assert.strictEqual(citation.quote, theQuote);

});

});