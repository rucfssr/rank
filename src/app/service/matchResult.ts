import { MatchResults } from "../models/matchResults";

export const determineScore = (result: MatchResults): MatchResults => {
  let teamAPoints = 0;
  let teamBPoints = 0;
  if (result.teamA.score > result.teamB.score) {
    teamAPoints = 3;
  } else if (result.teamA.score < result.teamB.score) {
    teamBPoints = 3;
  } else {
    teamAPoints = 1;
    teamBPoints = 1;
  }
  return {
    teamA: {
      ...result.teamA,
      points: teamAPoints,
    },
    teamB: {
      ...result.teamB,
      points: teamBPoints,
    },
  };
};
