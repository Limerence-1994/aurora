/**
 * Notification 服务配置文件
 * @data        2020/2/24
 * @author      Lee<aurora-club@outlook.com>
 */
import { InjectionToken, ViewContainerRef } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export const ASC_NOTICE_DATA = new InjectionToken<NoticeConfig>('notice-data');

export const ASC_NOTIFICATION_DEFAULT_OPTIONS =
  new InjectionToken<NoticeConfig>('notice-default-options', {
    providedIn: 'root',
    factory: NOTIFICATION_DEFAULT_OPTIONS_FACTORY
  });

/** @docs-private */
export function NOTIFICATION_DEFAULT_OPTIONS_FACTORY(): NoticeConfig {
  return new NoticeConfig();
}
/**
 * 通知服务出现在屏幕上的水平位置
 */
export type NoticePositionX =
  'left'
  | 'center'
  | 'right';

/**
 *  通知服务出现在屏幕上的垂直位置
 */
export type NoticePositionY =
  'top'
  | 'center'
  | 'bottom';

/**
 *  通知服务可能的类型
 */
export type NotificationType =
  'base'
  | 'successfully'
  | 'information'
  | 'warning'
  | 'error';

/**
 *  通知服务配置
 */
export class NoticeConfig {
  /* * 通知栏显示的消息类型 */
  displayType: NotificationType = 'base';
  /* * 通知栏显示的持续时间 */
  duration = 3000;
  /* * 传入组件的数据 */
  data: MessageData | any;
  /* * 要求用户操作, 否则不会关闭 */
  needResponse?: boolean;
  /* * 用于将叠加层放入的视图容器 */
  // viewContainerRef?: ViewContainerRef;
  /* * 通知栏的水平位置 */
  // horizontalPosition: NoticePositionX = 'right';
  /* * 通知栏的垂直位置 */
  // verticalPosition: NoticePositionY = 'bottom';
}

/**
 *  传入组件的数据
 */
export interface MessageData {
  message: string;
  action: string | IconDefinition;
}
/**
 *  简单通知服务配置
 */
export interface SimpleNoticeConfig {
  /* * 通知栏显示的消息类型 */
  displayType?: NotificationType;
  /* * 通知栏显示的持续时间 */
  duration?: number;
  /* * 传入组件的数据 */
}
