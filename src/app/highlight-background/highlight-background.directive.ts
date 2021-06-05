import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlightBackground]'
})
export class HighlightBackgroundDirective implements OnInit {

  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: any;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'red');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseOver(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', this.defaultColor);
    this.backgroundColor = this.defaultColor;
  }

}
