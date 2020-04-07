import { PokesService } from "./photos/services/pokes.service";
import { PhotoServiceService } from "./photos/services/photo-service.service";
import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(
    private photoService: PhotoServiceService,
    private pokesService: PokesService,
    private http: HttpClient
  ) {
    this.photoList = photoService.photoList();
    console.log(this.photoList);
  }
  photoList;
  pkm = null;
  test = true;
  mod = "testNhgModel";
  title = ["pokedex1", "pokedex2", "pokdex3"];
  back = { dados: { nome: { user: "marlon" } } };

  get pkmFn() {
    const link = ("000" + this.pkm.number).slice(-3);
    console.log(`//serebii.net/sunmoon/pokemon/${link}.png`);
    return `//serebii.net/sunmoon/pokemon/${link}.png`;
  }
  get pokedex() {
    return this.pokesService.list().filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(this.filter.toLowerCase());
    });
  }
  filter = "";

  binding = "test.png";
  alertHandle(): void {
    window.alert("event binding");
  }
  saerchText = "";
  result = [];
  getRepo() {
    if (this.saerchText) {
      return this.http
        .get(`https://api.github.com/search/repositories?q=${this.saerchText}`)
        .subscribe((response) => (this.result = response["items"]));
    }
  }
}
