import {Component, OnInit} from '@angular/core';


@Component({
    selector: 'my-form',
    templateUrl: 'searchForm.component.html'

})
export class SearchFormComponent implements OnInit {

    results: string[];
    inputLocation: string;
    inputTag: string;

    // Inject HttpClient into your component or service.
    constructor() {}

    ngOnInit(): void {
        // Make the HTTP request:
            console.log("Api test : ");
    }

}