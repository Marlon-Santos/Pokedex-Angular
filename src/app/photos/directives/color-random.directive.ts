import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appColorRandom]",
})
export class ColorRandomDirective implements OnInit {
  constructor(private ref: ElementRef, private render: Renderer2) {}
  ngOnInit(): void {
    this.render.setStyle(this.ref.nativeElement, "background-color", "orange");
  }
}
