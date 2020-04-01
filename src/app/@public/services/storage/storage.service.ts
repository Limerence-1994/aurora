import { Injectable } from '@angular/core';
import {Settings} from '../../../@models/settings.module';
import {NoticeService} from '../../integrated/notice';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private db: IDBDatabase | Storage;
  private useIndexedBD: boolean;
  private objectStore: IDBObjectStore;

  constructor(private message: NoticeService) {
    if (window.indexedDB) {
      this.init();
    } else {
      this.db = localStorage;
      this.error();
    }
  }

  private init() {
    const request = window.indexedDB.open('[ALDC] Aurora Low-level data center', 1);
    request.onerror = this.error.bind(this);
    request.onsuccess = () => {
      console.log('数据库打开成功');
      this.success(request.result);
    };
    request.onupgradeneeded = (event) => {
      console.log('数据库版本更新');
      this.success(request.result);
    };
  }
  private success(db) {
    this.db = db;
    this.useIndexedBD = true;
  }
  private error() {
    this.useIndexedBD = false;
    console.log('检测不到浏览器存储，回退到低版本');
  }

  createTable(tableName: string, keyPath?: string) {
    const opt = keyPath ? { keyPath, autoIncrement: true } : {};
    if (!this.db.objectStoreNames.contains(tableName)) {
      return this.db.createObjectStore(tableName, opt);
    }
  }

  getItem(): unknown {
    // this.createTable('settings', 'id');
    return {};
  }
}
