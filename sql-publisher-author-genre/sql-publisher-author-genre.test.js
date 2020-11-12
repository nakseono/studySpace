var should = require("chai").should();
var Schemas = {
  FIX_ME: "wrong answer",
  OPTION_0: "option 0",
  OPTION_1: "option 1",
  OPTION_2: "option 2",
  OPTION_3: "option 3",
  OPTION_4: "option 4",
  OPTION_5: "option 5",
  OPTION_6: "option 6"
};
var {
  sqlPublisherAuthorSchema,
  sqlPublisherGenreSchema,
  sqlAuthorGenreSchema
} = require("./sql-publisher-author-genre");

describe("schema for publisher author genre", function() {
  it("Publisher Author schema should be Option 6", function() {
    sqlPublisherAuthorSchema.should.equal(Schemas.OPTION_6);
  });

  it("Publisher Genre schema should be Option 4", function() {
    sqlPublisherGenreSchema.should.equal(Schemas.OPTION_4);
  });

  it("Author Genre schema should be Option 6", function() {
    sqlAuthorGenreSchema.should.equal(Schemas.OPTION_6);
  });
});
