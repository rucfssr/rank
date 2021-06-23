import { expect } from "chai";
import { calculateRank, calculateTotalPoints } from "../../app/service/rankCalculator";

describe("rankCalculator function tests", () => {
  it(`should calculate total points`, () => {
    const sampleTestData = [
      {
        teamA: { name: "Lions", score: 3, points: 1 },
        teamB: { name: "Snakes", score: 3, points: 1 },
      },
      {
        teamA: { name: "Tarantulas", score: 1, points: 3 },
        teamB: { name: "FC Awesome", score: 0, points: 0 },
      },
      {
        teamA: { name: "Lions", score: 1, points: 1 },
        teamB: { name: "FC Awesome", score: 1, points: 1 },
      },
      {
        teamA: { name: "Tarantulas", score: 3, points: 3 },
        teamB: { name: "Snakes", score: 1, points: 0 },
      },
      {
        teamA: { name: "Lions", score: 4, points: 3 },
        teamB: { name: "Grouches", score: 0, points: 0 },
      },
    ];

    const expectedPoints = {
      Tarantulas: 6,
      Lions: 5,
      "FC Awesome": 1,
      Snakes: 1,
      Grouches: 0,
    };

    const results = calculateTotalPoints(sampleTestData);
    expect(results).to.be.an("array");
    expect(results).to.have.length(5);
    results.forEach((result) => {
      expect(result).to.have.property("name");
      expect(result).to.have.property("points");
      expect(result.points).to.equal(
        expectedPoints[result.name],
        `${result.name} should have ${expectedPoints[result.name]} points`,
      );
    });
  });

  it(`should calculate rankings with no ties`, () => {
    const sampleTestData = [
      { name: "Tarantulas", points: 6 },
      { name: "Lions", points: 5 },
      { name: "FC Awesome", points: 3 },
      { name: "Snakes", points: 1 },
      { name: "Grouches", points: 0 },
    ];

    const expectedRankings = [
      { name: "Tarantulas", points: 6, position: 1 },
      { name: "Lions", points: 5, position: 2 },
      { name: "FC Awesome", points: 3, position: 3 },
      { name: "Snakes", points: 1, position: 4 },
      { name: "Grouches", points: 0, position: 5 },
    ];

    const results = calculateRank(sampleTestData);
    expect(results).to.be.an("array");
    expect(results).to.have.length(5);

    results.forEach((result, index) => {
      expect(result).to.have.property("name");
      expect(result.name).to.equal(
        expectedRankings[index].name,
        `${result.name} should have name ${expectedRankings[index].name}`,
      );

      expect(result).to.have.property("points");
      expect(result.points).to.equal(
        expectedRankings[index].points,
        `${result.name} should have ${expectedRankings[index].points} points`,
      );

      expect(result).to.have.property("position");
      expect(result.position).to.equal(
        expectedRankings[index].position,
        `${result.name} should be at position ${expectedRankings[index].position}`,
      );
    });
  });

  it(`should calculate rankings with some ties`, () => {
    const sampleTestData = [
      { name: "Tarantulas", points: 6 },
      { name: "Lions", points: 5 },
      { name: "FC Awesome", points: 1 },
      { name: "Snakes", points: 1 },
      { name: "Grouches", points: 0 },
    ];

    const expectedRankings = [
      { name: "Tarantulas", points: 6, position: 1 },
      { name: "Lions", points: 5, position: 2 },
      { name: "FC Awesome", points: 1, position: 3 },
      { name: "Snakes", points: 1, position: 3 },
      { name: "Grouches", points: 0, position: 5 },
    ];

    const results = calculateRank(sampleTestData);
    expect(results).to.be.an("array");
    expect(results).to.have.length(5);

    results.forEach((result, index) => {
      expect(result).to.have.property("name");
      expect(result.name).to.equal(
        expectedRankings[index].name,
        `${result.name} should have name ${expectedRankings[index].name}`,
      );

      expect(result).to.have.property("points");
      expect(result.points).to.equal(
        expectedRankings[index].points,
        `${result.name} should have ${expectedRankings[index].points} points`,
      );

      expect(result).to.have.property("position");
      expect(result.position).to.equal(
        expectedRankings[index].position,
        `${result.name} should be at position ${expectedRankings[index].position}`,
      );
    });
  });

  it(`should calculate rankings with all ties`, () => {
    const sampleTestData = [
      { name: "Tarantulas", points: 6 },
      { name: "Lions", points: 6 },
      { name: "FC Awesome", points: 6 },
      { name: "Snakes", points: 6 },
      { name: "Grouches", points: 6 },
    ];

    const expectedRankings = [
      { name: "FC Awesome", points: 6, position: 1 },
      { name: "Grouches", points: 6, position: 1 },
      { name: "Lions", points: 6, position: 1 },
      { name: "Snakes", points: 6, position: 1 },
      { name: "Tarantulas", points: 6, position: 1 },
    ];

    const results = calculateRank(sampleTestData);
    expect(results).to.be.an("array");
    expect(results).to.have.length(5);

    results.forEach((result, index) => {
      expect(result).to.have.property("name");
      expect(result.name).to.equal(
        expectedRankings[index].name,
        `${result.name} should have name ${expectedRankings[index].name}`,
      );

      expect(result).to.have.property("points");
      expect(result.points).to.equal(
        expectedRankings[index].points,
        `${result.name} should have ${expectedRankings[index].points} points`,
      );

      expect(result).to.have.property("position");
      expect(result.position).to.equal(
        expectedRankings[index].position,
        `${result.name} should be at position ${expectedRankings[index].position}`,
      );
    });
  });
});
