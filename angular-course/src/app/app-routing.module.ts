import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { HomeComponent } from './components/home/home.component';
import { AllFoodComponentsComponent } from './food/all-food-components/all-food-components.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dataBinding', component: DataBindingComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'food', component: AllFoodComponentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
