import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Event, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';
import { ButtonConfig } from './button.model';
declare const gtag: Function; // <------------Important: the declartion for gtag is required!

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  public raised: string = 'raised';
  //#region Variables Declaration
  public attributeEnum: typeof ButtonConfig.AttributeEnum = ButtonConfig.AttributeEnum;
  public typeEnum: typeof ButtonConfig.TypeEnum = ButtonConfig.TypeEnum;
  public iconTypeEnum: typeof ButtonConfig.IconTypeEnum = ButtonConfig.IconTypeEnum;
  //#endregion

  //#region Constructor
  constructor(private router: Router) {
    /** START : Code to Track Page View using gtag.js */
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
       gtag('event', 'page_view', {
          page_path: event.urlAfterRedirects
       })
      });
      /** END : Code to Track Page View  using gtag.js */
  }
  //#endregion

  //#region Input & Output
  private _attribute: ButtonConfig.AttributeEnum = ButtonConfig.AttributeEnum.Default;
  @Input() set attribute(value: any) {
    if (value) {
      this._attribute = value;
    }
  }
  get attribute(): any {
    return this._attribute;
  }
  private _type: ButtonConfig.TypeEnum = ButtonConfig.TypeEnum.Default;
  @Input() set type(value: any) {
    if (value) {
      this._type = value;
      this.text = value;
      this.color = value.toLowerCase();
    }
  }
  get type(): any {
    return this._type;
  }
  private _iconType: ButtonConfig.IconTypeEnum = ButtonConfig.IconTypeEnum.Default;
  @Input() set iconType(value: any) {
    if (value) {
      this._iconType = value;
      this.text = value;
      if (this.attribute === this.attributeEnum.Icon) {
        switch (value) {
          case ButtonConfig.IconTypeEnum.Home:
            this.color = 'primary'
            break;
          case ButtonConfig.IconTypeEnum.Menu:
            this.color = 'accent'
            break;
          case ButtonConfig.IconTypeEnum.Favorite:
            this.color = 'warn'
            break;
          default:
            break;
        }
      }
      else if (this.attribute === this.attributeEnum.FAB) {
        switch (value) {
          case ButtonConfig.IconTypeEnum.Delete:
            this.color = 'primary'
            break;
          case ButtonConfig.IconTypeEnum.Bookmark:
            this.color = 'accent'
            break;
          case ButtonConfig.IconTypeEnum.Home:
            this.color = 'warn'
            break;
          default:
            break;
        }
      }
      else if (this.attribute === this.attributeEnum.MiniFAB) {
        switch (value) {
          case ButtonConfig.IconTypeEnum.Menu:
            this.color = 'primary'
            break;
          case ButtonConfig.IconTypeEnum.Plus_one:
            this.color = 'accent'
            break;
          case ButtonConfig.IconTypeEnum.Filter_list:
            this.color = 'warn'
            break;
          default:
            break;
        }
      }
    }
  }
  get iconType(): any {
    return this._iconType;
  }
  private _text: string = 'Save';
  @Input() set text(value: any) {
    if (value) {
      this._text = value;
    }
  }
  get text(): any {
    return this._text;
  }
  private _color: string = 'Primary';
  @Input() set color(value: any) {
    if (value) {
      this._color = value;
    }
  }
  get color(): any {
    return this._color;
  }

  @Output() notifyChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() dataSourceChange: EventEmitter<any> = new EventEmitter<any>();
  //#endregion

  //#region lifecycle hook Methods
  ngOnInit(): void {
    //NGRX
  }
  // ngAfterViewInit() {

  // }
  ngOnDestroy() {
    // this.ngUnsubscribe$.next();
    // this.ngUnsubscribe$.complete();
  }
  //#endregion

  //#region HTML Events
  public onClicked($event: any): void {
    if ($event) {
      $event.stopPropagation();
    }
    gtag('event', 'TRACK_ME_BUTTON_CLICKED', 
      {
        'event_category': 'BUTTON_CLICK',
        'event_label': 'Track Me Click',
        'value': 'Put a value here that is meaningful with respect to the click event'   
      }
    )
      
    // let dataLayer = window.dataLayer || [];
    // dataLayer.push({'event': 'login'});
    // this.inputFormControl.setValue('');
  }
  //#endregion

  //#region Api Methods

  //#endregion

  //#region Private Methods

  //#endregion
}
