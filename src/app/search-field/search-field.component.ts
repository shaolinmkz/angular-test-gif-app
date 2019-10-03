import { Component, OnInit } from '@angular/core';
import { AppService } from '../Services/app-service.service';


@Component({
    selector: 'app-search-field',
    templateUrl: './search-field.component.html',
    styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {
    name = 'Search Field';
    constructor(private appService: AppService) { }

    handleSearchField(event) {
        this.name = event.target.value;
    }

    handleSearch(event) {
        event.preventDefault();
        this.appService.searchForGiphy(this.name).subscribe(({ data }) => {
            this.appService.modifyAppState({
                type: 'SEARCH_RESULT', payload: data, searchTerm: this.name });
        });
    }

    updateSearchName() {
        this.appService.getAppState().subscribe(state => {
            this.name = state.searchTerm;
        });
    }

    ngOnInit() {
       this.updateSearchName();
     }
}
