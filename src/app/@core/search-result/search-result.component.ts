import {Component, HostBinding, OnInit} from '@angular/core';
import {convert} from '../../@design/animations';

export interface SearchResult {
  id: string | number;
}

@Component({
  selector: 'core-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
  animations: [convert(
    {
      start: 'translate3d(100%, 0, 0)',
      end: 'translate3d(0, 0, 0)',
      time: '150ms'
    },
    {time: '100ms'}
  )]
})
export class SearchResultComponent implements OnInit {
  @HostBinding('@component') animate;
  isResult: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {

  }
}
