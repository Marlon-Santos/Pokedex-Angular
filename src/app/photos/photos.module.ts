import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PhotoComponent } from "./photo/photo.component";
import { ColorRandomDirective } from "./directives/color-random.directive";

@NgModule({
  declarations: [PhotoComponent, ColorRandomDirective],
  imports: [CommonModule],
  exports: [ColorRandomDirective, PhotoComponent],
})
export class PhotosModule {}
