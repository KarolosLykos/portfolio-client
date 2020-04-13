import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AboutComponent } from "./pages/about.component"

const routes = [
  {
    path: '',
    component: AboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class AboutRoutes {
}
