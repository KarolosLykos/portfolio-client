import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContactComponent } from "./pages/contact.component"

const routes = [
  {
    path: '',
    component: ContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ContactRoutes {
}
