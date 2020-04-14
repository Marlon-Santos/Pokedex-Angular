import {
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
  HostListener,
  HostBinding,
} from "@angular/core";

@Directive({
  selector: "[appColorRandom]",
})
export class ColorRandomDirective implements OnInit {
  constructor(private ref: ElementRef, private render: Renderer2) {}
  @HostBinding("style.font-size") font;
  ngOnInit(): void {
    this.render.setStyle(this.ref.nativeElement, "background-color", "orange");
  }
  @HostListener("click") Onclick() {
    this.font = "20px";
  }
}
