import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ComponentFactoryResolver, ComponentRef,
  Inject,
  Injectable,
  Injector,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {ComponentPortal, PortalInjector} from '@angular/cdk/portal';
import {ComponentType, Overlay} from '@angular/cdk/overlay';
import {Methods} from '../extends';
import {NoticeRef} from './notice.ref';
import {MessageComponent} from './message/message.component';
import {ASC_NOTICE_DATA, ASC_NOTIFICATION_DEFAULT_OPTIONS, NoticeConfig, SimpleNoticeConfig} from './notice.config';

@Injectable({
  providedIn: 'root'
})
export class NoticeService extends Methods {

  private readonly _containerRef: ViewContainerRef;
  container: ComponentRef<NoticeContainerComponent>;

  constructor(
    _overlay: Overlay,
    private _injector: Injector,
    private _resolver: ComponentFactoryResolver,
    @Inject(ASC_NOTIFICATION_DEFAULT_OPTIONS) private _defaultConfig: NoticeConfig
  ) {
    super(_overlay);
    const position      = super.getPositionConfig().right('16px').bottom('16px');
    const component     = new ComponentPortal(NoticeContainerComponent);
    const overlayRef    = super.createOverlay({positionStrategy: position});
    this.container      = overlayRef.attach(component);
    this._containerRef  = this.container.instance.containerRef;
  }
  // 创建依赖注入
  private _createInjector<T>(noticeRef: NoticeRef<T>, data: NoticeConfig | any) {
    return new PortalInjector(this._injector, new WeakMap<any, any>([
      [NoticeRef, noticeRef],
      [ASC_NOTICE_DATA, data],
    ]));
  }

  // 打开一个消息
  open(message: string, action?: string | IconDefinition, config?: SimpleNoticeConfig) {
    if (!message) {
      throw new Error('不能传递一个空消息');
    }
    const _config: NoticeConfig = this._defaultConfig;
    _config.data = {message, action};
    return this.openFromComponent(MessageComponent, {..._config, ...config});
  }

  // 从组件打开一个消息推送
  openFromComponent<T>(
    component: ComponentType<T>,
    config: NoticeConfig
  ): NoticeRef<T> {
    const noticeRef = new NoticeRef(this._containerRef);
    const injector  = this._createInjector(noticeRef, config);
    const factory   = this._resolver.resolveComponentFactory(component);

    noticeRef.noticeElement =
      this._containerRef.createComponent(factory, null, injector);

    this.container.instance.cdr.detectChanges();
    return noticeRef as NoticeRef<T>;
  }

  succ(message: string) {
    return this.open(message, null, {
      displayType: 'successfully'
    });
  }

  info(message: string) {
    return this.open(message, null, {
      displayType: 'information'
    });
  }

  warn(message: string) {
    return this.open(message, null, {
      displayType: 'warning'
    });
  }

  error(message: string) {
    return this.open(message, null, {
      displayType: 'error'
    });
  }
}

/**
 * OnPush策略使其跳过变更检测，全局组件不应参与其他组件触发的变更
 * warn! 否则在程序初始化时无法调用通知服务，报错变更检测中更改
 */
@Component({
  selector: 'pc-notice-container',
  template: `<ng-template #containerRef></ng-template>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoticeContainerComponent {
  @ViewChild('containerRef', {read: ViewContainerRef, static: true})
  public containerRef: ViewContainerRef;
  constructor(public cdr: ChangeDetectorRef) {}
}
