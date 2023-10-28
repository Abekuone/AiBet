import { Component, OnInit, ViewChild } from '@angular/core';
import { FootballDataService } from '../football-data.service';
import { ModalController } from '@ionic/angular';
import { AlertController, ToastController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { BetService } from '../services/bet.service';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.page.html',
  styleUrls: ['./match-list.page.scss'],
})

export class MatchListPage implements OnInit {

  @ViewChild('customModal') customModal!: HTMLIonModalElement;

  matches: any[] = [];
  selectedMatch: any;

  betAmount!: number; 
  homeTeamName!: string;
  awayTeamName!: string;
  betType!: string;
  betOdds: number | undefined;

  homeTeamCrest!: string;
  awayTeamCrest!: string;
  score!: number;


  constructor(
    private footballDataService: FootballDataService,
    private modalController: ModalController,
    private authService: AuthService,
    private userService: UserService,
    private betService: BetService,
    private router: Router,
    private alertController: AlertController,
    private toastController: ToastController
  ) {}
    

  ngOnInit() {
    this.footballDataService.getChampionsLeagueMatches().subscribe(data => {
      this.matches = data.matches;
      console.log(this.matches);
    });
  }

  openCustomDialog(
    odds: number,
    homeTeam: string,
    awayTeam: string,
    type: string,
    homeTeamCrest: string,
    awayTeamCrest: string,

    ) {
    this.betAmount = 0;
    this.homeTeamName = homeTeam;
    this.awayTeamName = awayTeam;
    this.betType = type;
    this.betOdds = odds;

    this.homeTeamCrest = homeTeamCrest;
    this.awayTeamCrest = awayTeamCrest;
  
    this.customModal.present();
  }
  
  placeBet() {
    this.modalController.dismiss();
  }
  
  closeCustomDialog() {
    this.modalController.dismiss();
  }

  
}

