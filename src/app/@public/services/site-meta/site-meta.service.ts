import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

export interface MetaData {
  identifier: string;
  description?: string;
  keywords?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SiteMetaService {

  siteSettings = JSON.parse(sessionStorage.getItem('settings'));

  constructor(private title: Title, private meta: Meta) { }

  update(metadata: MetaData) {
    this.title.setTitle(`${metadata.identifier} | Aurora`);
  }
}
