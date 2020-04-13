import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from "./pages/contact.component"
import { ContactRoutes } from "./contact.routes"
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    ContactComponent,
  ],
  imports: [
    CommonModule,
    ContactRoutes,
    FontAwesomeModule
  ],
})
export class ContactModule {}
