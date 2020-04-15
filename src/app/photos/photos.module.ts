import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PhotoComponent } from "./photo/photo.component";
import { ColorRandomDirective } from "./directives/color-random.directive";
import { NgUnlessDirective } from './directives/ng-unless.directive';

@NgModule({
  declarations: [PhotoComponent, ColorRandomDirective, NgUnlessDirective],
  imports: [CommonModule],
  exports: [ColorRandomDirective, PhotoComponent],
})
export class PhotosModule {}
