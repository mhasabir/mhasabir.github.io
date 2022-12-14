import { Directive, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {
  constructor(private _elementRef: ElementRef) { }
  @Output('clickOutside') clickOutside: EventEmitter<any> = new EventEmitter();
  @HostListener('document:click', ['$event.target']) onMouseEnter(targetElement: any) {
    const clickedInside = this._elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.clickOutside.emit(targetElement);
    }
  }
}
