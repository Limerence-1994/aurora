
// 程序基础设定
import {MetaData} from '../@public/services';

export class Settings {
  version: string;
  // 选择或者默认的主题
  currentTheme          ?= 'future';
  // 是否允许桌面通知
  desktopNotifications  ?= true;
  // 通知与提示的音量
  notificationsVolume   ?= 50;
  // 当前运行的平台
  platform ?: string;
  // 程序名
  enName: string;
  zhName: string;
  // 简介
  enIntroduction: string;
  zhIntroduction: string;
  // logo
  logo : string;
}

export interface RouterMate {
  metadata: MetaData;
  locking?: boolean;
  scrollTop?: number;
}

export interface Forum {
  id: string;
  name: string;
}
