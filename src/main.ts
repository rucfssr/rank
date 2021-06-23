import { readFileSync } from "fs";
import { determineScore } from "./app/service/matchResult";
import { parseScoreLine } from "./app/parser/parser";
import { calculateRank, calculateTotalPoints } from "./app/service/rankCalculator";

const args = process.argv.slice(2);

if (args.length !== 1) {
  throw new Error("usage: node main.js <path>");
}
const fileName = args[0];

const input = readFileSync(fileName, "utf-8").split("\n");

// Parse input
const matchResults = input.map((score) => parseScoreLine(score)).map((score) => determineScore(score));

// Calculate point
const totals = calculateTotalPoints(matchResults);

// Calculate rank
const ranked = calculateRank(totals);

// Output
ranked
  .map((rank) => `${rank.position}. ${rank.name}, ${rank.points} ${rank.points === 1 ? "pt" : "pts"}`)
  .forEach((rank) => console.info(rank));
