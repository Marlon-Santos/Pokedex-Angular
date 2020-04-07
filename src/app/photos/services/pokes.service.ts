import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PokesService {
  constructor() {}
  list() {
    return [
      { name: "Charizard", number: 1 },
      { name: "Charjabug", number: 2 },
      { name: "Charmander", number: 4 },
      { name: "Charmeleon", number: 5 },
      { name: "Altaria", number: 6 },
      { name: "Amoonguss", number: 142 },
    ];
  }
}
