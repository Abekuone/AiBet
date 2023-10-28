import { BetModel } from "./bet-model";

export class UserModel {
    id: string | undefined;
    name: string | undefined;
    email: string | undefined;
    walletBalance: number | undefined;
    bets: BetModel[] | undefined;
    balance: number | undefined;
  }
  