import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './core/layouts/default/default.component'


const routes: Routes = [
  {
    path: '',
    redirectTo: '/work',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: 'about',
        loadChildren: () => import('./features/about/about.module').then((m) => m.AboutModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./features/contact/contact.module').then((m) => m.ContactModule)
      },
      {
        path: 'newsletter',
        loadChildren: () => import('./features/newsletter/newsletter.module').then((m) => m.NewsletterModule)
      },
      {
        path: 'work',
        loadChildren: () => import('./features/work/work.module').then((m) => m.WorkModule)
      }
    ]
  },

  { path: '**', redirectTo: 'work' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
