import { Component, OnInit, ViewChild } from '@angular/core';
import { FootballDataService } from '../football-data.service';
import { ModalController } from '@ionic/angular';

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


  constructor(
    private footballDataService: FootballDataService,
    private modalController: ModalController
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
    awayTeamCrest: string
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

