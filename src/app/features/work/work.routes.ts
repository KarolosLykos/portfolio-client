import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListWorkPageComponent } from "./pages/list-work-page/list-work-page.component"
import { SingleWorkPageComponent } from "./pages/single-work-page/single-work-page.component"

const routes = [
  {
    path: '',
    component: ListWorkPageComponent
  },
  {
    path: ':id',
    component: SingleWorkPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class WorkRoutes {
}
