import {Component, OnInit} from '@angular/core';
import {ComponentAnimation} from '../../@extends/components';
import {slideIntoLeft} from '../../@design/animations';

export interface SearchResult {
  id: string | number;
}

@Component({
  selector: 'core-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
  animations: [slideIntoLeft]
})
export class SearchResultComponent extends ComponentAnimation implements OnInit {

  isResult: boolean;

  constructor() {
    super();
    super.setEnter('translate3d(100%, 0, 0)', 'translate3d(0%, 0, 0)')
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    super.setLeave('translate3d(0, 0, 0)', 'translate3d(100%, 0, 0)')
  }
}
