import { Component, OnInit } from '@angular/core';
import { AppService } from '../Services/app-service.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
    title = 'gif-app';
    reponseData = [];
    loading = true;

    constructor(public appService: AppService) { }

    ngOnInit() {
        this.appService.searchForGiphy().subscribe(({ data }) => {
            this.appService.modifyAppState({ type: 'SEARCH_RESULT', payload: data, searchTerm: 'laugh' })
            this.loading = false;
        });

        this.appService.getAppState().subscribe(state => {
            this.reponseData = state.searchedGiphy || [];
        });

    }

}
