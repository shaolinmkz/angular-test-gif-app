import { Component, OnInit } from '@angular/core';
import { AppService } from './../Services/app-service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-single-giphy',
  templateUrl: './single-giphy.component.html',
  styleUrls: ['./single-giphy.component.css']
})
export class SinglGiphyComponent implements OnInit {

    id: string='';
    singleGiphy: any = '';

    constructor(private appService: AppService, private route: ActivatedRoute) {
     }

  ngOnInit() {
      this.route.paramMap.subscribe((params) => {
          this.id = params['params'].id
      });


    this.appService.fetchSingleGiphy(this.id).subscribe(({ data }) => {
        this.singleGiphy = data;
        this.appService.modifyAppState({
            type: 'SINGLE_GIPHY', payload: data, id: this.id
        });
    });
  }

}
