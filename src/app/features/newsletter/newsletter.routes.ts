import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NewsletterComponent } from "./pages/newsletter.component"

const routes = [
  {
    path: '',
    component: NewsletterComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class NewsletterRoutes {
}
