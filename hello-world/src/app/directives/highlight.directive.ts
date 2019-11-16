import {Directive, ElementRef, OnInit} from "@angular/core";

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
