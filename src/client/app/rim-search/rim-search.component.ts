import { Component, OnInit } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';

import { RimSearchService } from '../shared/index';

/**
 * This class represents the lazy loaded RimSearchComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'rim-search',
  templateUrl: 'rim-search.component.html',
  styleUrls: ['rim-search.component.css'],
})
export class RimSearchComponent {

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
