import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import {ProgressStatusFn} from '../../@public/directive/event-methods';
import {timer} from 'rxjs';
import {MatAutocompleteTrigger} from '@angular/material/autocomplete';
import {SearchResultComponent} from '../search-result/search-result.component';
import {PopupService} from '../../@public/services/popup/popup.service';

@Component({
  selector: 'core-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  _openSearch: boolean;

  searchValue = new FormControl();
  states = [];
  searchStatus = '';

  @ViewChild('search')
  searchInput: ElementRef;
  @ViewChild('searchButton')
  searchButton: ElementRef;
  @ViewChild(MatAutocompleteTrigger)
  autocomplete: MatAutocompleteTrigger;

  @Input()
  set openSearch(value) {
    console.log(value);
    this._openSearch = value;
    if (value) {
      setTimeout(() =>
        this.searchInput.nativeElement.focus(), 300);
    } else if (typeof value !== 'undefined') {
      this.autocomplete.closePanel();
    }
  }

  get openSearch() {
    return this._openSearch;
  }

  constructor(private popup: PopupService) {
    this.searchValue.valueChanges.pipe(
      debounceTime(300)
    ).subscribe(next => {
      // TODO: 根据用户输入，返回相近词
      this.getHotKeywords(next);
      console.log(next);
    });
  }

  ngOnInit(): void {
  }

  // 表单的提交事件转化为按钮点击
  searchFormSubmit(event: Event) {
    this.searchButton.nativeElement.click();
    event.preventDefault();
  }

  // 开始搜索
  startSearch(props: ProgressStatusFn) {
    this.searchStatus = 'start';
    timer(2000)
      .toPromise()
      .then(_ => {
        props ? props.succ() : void 0;
        this.openSearch = false;
        this.popup.open(SearchResultComponent, null, {
          clickBackdropClose: true
        })
        // searchResult.next([{
        //   id: 1
        // }])
      });
    return false;
  }

  // 获取热门搜索关键词
  getHotKeywords(keyword: string) {
    this.states = autoValues;
    this.autocomplete.openPanel();
  }
}

const autoValues = [
  {
    name: 'Arkansas',
    population: '2.978M',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
  },
  {
    name: 'California',
    population: '39.14M',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
  },
  {
    name: 'Florida',
    population: '20.27M',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
  },
  {
    name: 'Texas',
    population: '27.47M',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
  }
];
