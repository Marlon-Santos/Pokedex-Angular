import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
@Component({
  selector: "app-photo",
  templateUrl: "./photo.component.html",
  styleUrls: ["./photo.component.scss"],
})
export class PhotoComponent implements OnInit {
  @Output() testEvent: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {
    this.testEvent.emit("marlon");
  }
}
