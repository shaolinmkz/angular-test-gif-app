import { Component, OnInit } from '@angular/core';
import { AppService } from './../Services/app-service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-single-giphy',
  templateUrl: './single-giphy.component.html',
  styleUrls: ['./single-giphy.component.css']
})
export class SinglGiphyComponent implements OnInit {

    id='';
    singleGiphy = '';

    constructor(private appService: AppService, private route: ActivatedRoute,) {
     }

  ngOnInit() {
      this.route.paramMap.subscribe((params) => {
          this.id = params['params'].id
      });

      this.appService.getAppState().subscribe(state => {
          this.singleGiphy = state.searchedGiphy.find(giphy => giphy.id === this.id);
          if(!this.singleGiphy) {
              this.appService.fetchSingleGiphy(this.id).subscribe(({ data }) => {
                  this.appService.modifyAppState({
                      type: 'SINGLE_GIPHY', payload: data, id: this.id
                  });
              });
          }
      });

      this.appService.modifyAppState({ type: 'SINGLE_GIPHY', payload: this.singleGiphy, id: this.id });

      this.appService.getAppState().subscribe(state => {
          this.singleGiphy = state.singleGiphy;
      });
  }

}
