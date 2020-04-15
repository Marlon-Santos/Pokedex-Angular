import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PhotoComponent } from "./photo/photo.component";
import { ColorRandomDirective } from "./directives/color-random.directive";
import { NgUnlessDirective } from "./directives/ng-unless.directive";
import { ReversePipe } from "./pipes/reverse.pipe";

@NgModule({
  declarations: [
    PhotoComponent,
    ColorRandomDirective,
    NgUnlessDirective,
    ReversePipe,
  ],
  imports: [CommonModule],
  exports: [ColorRandomDirective, PhotoComponent, ReversePipe],
})
export class PhotosModule {}
