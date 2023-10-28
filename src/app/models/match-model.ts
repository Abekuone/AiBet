export class MatchModel {
    id: string | undefined;
    homeTeam: string | undefined;
    awayTeam: string | undefined;
    date: Date | undefined; // Date et heure du match
    odds: {
        homeWin: number; // Cote de la victoire à domicile
        draw: number; // Cote du match nul
        awayWin: number;
    } | undefined;
  }
  