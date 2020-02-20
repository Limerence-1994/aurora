import {Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {ModeState} from '../../@models/mode.model';
import {ScrollService} from '../../@public/services';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {

  @Input() mode: ModeState;
  compassIsOpen: boolean;
  loadContent: boolean;
  footerData = aboutData;
  footerName = Object.keys(aboutData);

  constructor(private cdr: ChangeDetectorRef, private scroll: ScrollService) {
  }

  ngOnInit() {
    this.scroll.alreadyEndNotice().subscribe(r => {
      if (!r) {
        this.hideFooter();
      }
    });
  }

  toggleFooContent() {
    this.compassIsOpen = !this.compassIsOpen;
    if (this.loadContent) {
      this.toggleContentText();
    } else {
      setTimeout(this.toggleContentText.bind(this), 350);
    }
    this.cdr.detectChanges();
  }

  toggleContentText() {
    this.loadContent = !this.loadContent;
    this.cdr.detectChanges();
  }

  hideFooter() {
    ScrollService.scrollToTop();
    this.loadContent = false;
    this.compassIsOpen = false;
  }
}


const aboutData = {
  club: [
    {
      name: 'Administrator',
      src: '/administrator',
      icon: 'id-card-alt'
    },
    {
      name: 'Prestige',
      src: '/prestige',
      icon: 'user-secret'
    },
    {
      name: 'Badge',
      src: '/badge',
      icon: 'trophy'
    },
    {
      name: 'Top Ranking',
      src: '/top_ranking',
      icon: 'fire'
    },
    {
      name: 'User Ranking',
      src: '/user_ranking',
      icon: 'id-card'
    },
    {
      name: 'Inspection',
      src: '/inspection',
      icon: 'dungeon'
    }
  ],
  contact: [
    {
      name: 'Message Board',
      src: '/about/message_board',
      icon: 'comment-alt'
    },
    {
      name: 'Station Letter',
      src: '/station_letter',
      icon: 'envelope'
    }
  ],
  attention: [
    {
      name: 'Development Log',
      src: '/about/development',
      icon: 'book'
    },
    {
      name: 'Toolbox',
      src: '/toolbox',
      icon: 'toolbox'
    },
    {
      name: 'Terms',
      src: '/terms',
      icon: 'book-reader'
    },
    {
      name: 'Links',
      src: '/about/links',
      icon: 'link'
    }
  ]
};
