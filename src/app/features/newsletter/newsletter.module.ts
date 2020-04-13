import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsletterComponent } from "./pages/newsletter.component"
import { NewsletterRoutes } from "./newsletter.routes"


@NgModule({
  declarations: [
    NewsletterComponent,
  ],
  imports: [
    CommonModule,
    NewsletterRoutes,
  ],
})
export class NewsletterModule {}
