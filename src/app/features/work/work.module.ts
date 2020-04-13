import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListWorkPageComponent } from './pages/list-work-page/list-work-page.component'
import { SingleWorkPageComponent } from './pages/single-work-page/single-work-page.component'
import { WorkRoutes } from "./work.routes"


@NgModule({
  declarations: [
    ListWorkPageComponent,
    SingleWorkPageComponent
  ],
  imports: [
    CommonModule,
    WorkRoutes,
  ],
})
export class WorkModule {}
