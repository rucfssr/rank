import { parseScoreLine } from "../../app/parser/parser";
import { expect } from "chai";

describe("parser function tests", () => {
  it(`should parse a score line`, () => {
    const parsed = parseScoreLine(`Lions 1, FC Awesome 1`);

    expect(parsed).to.have.property("teamA");
    expect(parsed.teamA).to.have.property("name");
    expect(parsed.teamA.name).to.equal("Lions");
    expect(parsed.teamA).to.have.property("score");
    expect(parsed.teamA.score).to.equal(1);
    expect(parsed).to.have.property("teamB");
    expect(parsed.teamB).to.have.property("name");
    expect(parsed.teamB.name).to.equal("FC Awesome");
    expect(parsed.teamB).to.have.property("score");
    expect(parsed.teamB.score).to.equal(1);
  });

  it(`should fail to parse a wrong score line`, () => {
    const parsed = parseScoreLine(`This is a wrong score line`);

    expect(parsed).to.have.property("teamA");
    expect(parsed.teamA).to.have.property("name");
    expect(parsed.teamA.name).to.equal(null);
    expect(parsed.teamA).to.have.property("score");
    expect(parsed.teamA.score).to.be.NaN;
    expect(parsed).to.have.property("teamB");
    expect(parsed.teamB).to.have.property("name");
    expect(parsed.teamB.name).to.equal(null);
    expect(parsed.teamB).to.have.property("score");
    expect(parsed.teamB.score).to.be.NaN;
  });
});
