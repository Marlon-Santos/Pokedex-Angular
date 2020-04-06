import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PhotoServiceService {
  constructor() {}

  photoList(): Array<Object> {
    return new Array({ photo: "url" }, { photo1: "url" }, { photo2: "url" });
  }
}
