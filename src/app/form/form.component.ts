import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { getAttrsForDirectiveMatching } from "@angular/compiler/src/render3/view/util";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent implements OnInit {
  constructor() {}
  form = { name: "marlon", idade: 20, email: "mnet@gft.com", confEmail: "" };
  ngOnInit() {}
  onSubmit() {
    console.dir(this.form);
  }
}
