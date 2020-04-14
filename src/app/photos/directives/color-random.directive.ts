import {
  Directive,
  ElementRef,
  OnInit,
  OnChanges,
  SimpleChanges,
  Input,
} from "@angular/core";

@Directive({
  selector: "[appColorRandom]",
})
export class ColorRandomDirective implements OnInit, OnChanges {
  constructor(private ref: ElementRef) {}
  @Input() changeTest = "";
  ngOnInit() {
    console.log(this.ref.nativeElement.value);
    this.changeTest = this.ref.nativeElement.value;
    this.ref.nativeElement.value = this.changeTest + "->";
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes, "test");
  }
}
