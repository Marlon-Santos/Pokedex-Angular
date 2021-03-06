import { PhotosModule } from "./photos/photos.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { FormComponent } from "./form/form.component";

@NgModule({
  declarations: [AppComponent, FormComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, PhotosModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
