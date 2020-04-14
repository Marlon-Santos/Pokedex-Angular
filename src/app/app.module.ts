import { PhotosModule } from "./photos/photos.module";
import { PhotoComponent } from "./photos/photo/photo.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, PhotosModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
