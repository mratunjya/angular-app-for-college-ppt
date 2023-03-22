import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PageContentComponent } from './page-content/page-content.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TempComponentComponent } from './temp-component/temp-component.component';

const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  { path: 'page-content', component: PageContentComponent },
  { path: 'temp-component-2', component: TempComponentComponent },
  { path: '', redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
