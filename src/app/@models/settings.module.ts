
// 程序基础设定
export class Settings {
  // 选择或者默认的主题
  currentTheme          ?= 'future';
  // 是否允许桌面通知
  desktopNotifications  ?= true;
  // 通知与提示的音量
  notificationsVolume   ?= 50;
  // 当前运行的平台
  platform ?: string;
  // 程序名
  application ?: string;
  // logo
  logo ?: string;
}

