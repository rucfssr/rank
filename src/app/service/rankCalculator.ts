import { Team } from "../models/team";
import { MatchResults } from "../models/matchResults";

export const calculateTotalPoints = (results: MatchResults[]): Team[] => {
  const points: Team[] = [];

  results.forEach((result) => {
    let teamA = points.find((team) => team.name === result.teamA.name);
    let teamB = points.find((team) => team.name === result.teamB.name);
    if (!teamA) {
      teamA = {
        name: result.teamA.name,
        points: 0,
      };
      points.push(teamA);
    }
    if (!teamB) {
      teamB = {
        name: result.teamB.name,
        points: 0,
      };
      points.push(teamB);
    }
    teamA.points += result.teamA.points;
    teamB.points += result.teamB.points;
  });

  return points;
};

export const calculateRank = (teams: Team[]): Team[] => {
  const sorted = teams.sort((teamA, teamB) => teamB.points - teamA.points || teamA.name.localeCompare(teamB.name));
  sorted.forEach((team, index) => {
    if (index > 0 && sorted[index - 1].points === team.points) {
      team.position = sorted[index - 1].position;
    } else {
      team.position = index + 1;
    }
  });
  return sorted;
};
