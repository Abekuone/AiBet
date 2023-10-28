export class BetModel {
    id: string | undefined;
    userId: string | undefined;
    matchId: string | undefined;
    betType: string | undefined;
    betAmount: number | undefined;
    status: 'pending' | 'won' | 'lost' | undefined;
    potentialWinnings: number | undefined;
  }
  