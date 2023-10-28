import { Component, OnInit } from '@angular/core';
import { FootballDataService } from '../../football-data.service';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss']
})
export class MatchListComponent implements OnInit {
  matches: any[] = [];

  constructor(private footballDataService: FootballDataService) {}

  ngOnInit() {
    this.footballDataService.getChampionsLeagueMatches().subscribe(data => {
      this.matches = data.matches;
    });
  }
}
