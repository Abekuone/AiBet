import { Injectable } from '@angular/core';
import { BetModel } from '../models/bet-model';

@Injectable({
  providedIn: 'root'
})
export class BetService {
  private bets: BetModel[] = [];

  constructor() {}

  placeBet(userId: string, matchId: string, betType: string,betAmount: number): void {
    const newBet: BetModel = {
      id: this.generateUniqueId(),
      userId,
      matchId,
      betType,
      betAmount,
      status: undefined,
      potentialWinnings: undefined
    };

    this.bets.push(newBet);
  }

  private generateUniqueId(): string {
    return 'bet-' + Date.now().toString();
  }


  getBetsForUser(userId: string): BetModel[] {
    return this.bets.filter((bet) => bet.userId === userId);
  }
  
}
