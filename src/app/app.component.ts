import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  test = true;
  title = ["pokedex1", "pokedex2", "pokdex3"];
  back = { dados: { nome: { user: "marlon" } } };
}
