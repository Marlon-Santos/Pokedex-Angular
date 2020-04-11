import { PokesService } from "./photos/services/pokes.service";
import { PhotoServiceService } from "./photos/services/photo-service.service";
import { Component } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
interface repoI {
  total_count: number;
  incomplete_results: boolean;
  items: any[];
}
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
      const params: HttpParams = new HttpParams().set("q", this.saerchText);
      const headers: HttpHeaders = new HttpHeaders().set(
        "content-type",
        "JSON"
      );
      return this.http
        .get<repoI>(`https://api.github.com/search/repositories`, {
          params,
          headers,
        })
        .subscribe((response) => (this.result = response.items));
    }
  }
}
