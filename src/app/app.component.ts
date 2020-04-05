import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  test = true;
  mod = "testNhgModel";
  title = ["pokedex1", "pokedex2", "pokdex3"];
  back = { dados: { nome: { user: "marlon" } } };
  pokedex = [
    { name: "pokemon", number: 1 },
    { name: "pokemon", number: 2 },
    { name: "pokemon", number: 4 },
    { name: "pokemon", number: 5 },
    { name: "pokemon", number: 6 },
    { name: "pokemon", number: 7 },
  ];
  binding = "test.png";
  alertHandle(): void {
    window.alert("event binding");
  }
}
