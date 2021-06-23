import { expect } from "chai";
import { determineScore } from "../../app/service/matchResult";

describe("matchResult function tests", () => {
  const sampleTestData = [
    {
      testName: "Team A is winner",
      expectedScores: {
        teamA: 3,
        teamB: 0,
      },
      result: {
        teamA: {
          name: "Team A",
          score: 2,
        },
        teamB: {
          name: "Team B",
          score: 0,
        },
      },
    },
    {
      testName: "Team B is winner",
      expectedScores: {
        teamA: 0,
        teamB: 3,
      },
      result: {
        teamA: {
          name: "Team A",
          score: 0,
        },
        teamB: {
          name: "Team B",
          score: 2,
        },
      },
    },
    {
      testName: "Draw",
      expectedScores: {
        teamA: 1,
        teamB: 1,
      },
      result: {
        teamA: {
          name: "Team A",
          score: 1,
        },
        teamB: {
          name: "Team B",
          score: 1,
        },
      },
    },
  ];

  sampleTestData.forEach((test) => {
    it(test.testName, () => {
      const result = determineScore(test.result);
      expect(result).to.have.property("teamA");
      expect(result.teamA).to.have.property("name");
      expect(result.teamA.name).to.equal(test.result.teamA.name);
      expect(result.teamA).to.have.property("score");
      expect(result.teamA.score).to.equal(test.result.teamA.score);
      expect(result.teamA).to.have.property("points");
      expect(result.teamA.points).to.equal(
        test.expectedScores.teamA,
        `${test.result.teamA.name} should have ${test.expectedScores.teamA} pts`,
      );
      expect(result).to.have.property("teamB");
      expect(result.teamB).to.have.property("name");
      expect(result.teamB.name).to.equal(test.result.teamB.name);
      expect(result.teamB).to.have.property("score");
      expect(result.teamB.score).to.equal(test.result.teamB.score);
      expect(result.teamB).to.have.property("points");
      expect(result.teamB.points).to.equal(
        test.expectedScores.teamB,
        `${test.result.teamB.name} should have ${test.expectedScores.teamB} pts`,
      );
    });
  });
});
