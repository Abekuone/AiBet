import { Component, OnInit } from '@angular/core';
import { BetService } from '../services/bet.service';
import { UserService } from '../services/user.service';
import { MatchModel } from '../models/match-model';
import { UserModel } from '../models/user-model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-bet-list',
  templateUrl: 'bet-list.page.html',
  styleUrls: ['bet-list.page.scss']
})
export class BetListPage {
  constructor(
    private betService: BetService,
    private userService: UserService,
    private authService: AuthService
    ) {}

  placeBet() {

  }
}
