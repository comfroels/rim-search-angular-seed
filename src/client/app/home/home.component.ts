import { Component, OnInit } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';

import { RimSearchService } from '../shared/index';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent {

  term$ = new Subject<string>();
  results: any;

  constructor(public rimSearch: RimSearchService) {
    this.term$
      .debounceTime(400)
      .subscribe((term: string) => this.search(term));
  }

  search(term: string) {
    this.rimSearch.search(term)
      .subscribe((results: any) => this.results = results);
  }

}
