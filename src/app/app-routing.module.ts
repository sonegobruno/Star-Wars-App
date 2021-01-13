import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'description/:id',
    loadChildren: () => import('./description/description.module').then( m => m.DescriptionPageModule)
  },
  {
    path: 'people',
    loadChildren: () => import('./people/people.module').then( m => m.PeoplePageModule)
  },
  {
    path: 'planets',
    loadChildren: () => import('./planets/planets.module').then( m => m.PlanetsPageModule)
  },
  {
    path: 'starships',
    loadChildren: () => import('./starships/starships.module').then( m => m.StarshipsPageModule)
  },
  {
    path: 'vehicles',
    loadChildren: () => import('./vehicles/vehicles.module').then( m => m.VehiclesPageModule)
  },
  {
    path: 'species',
    loadChildren: () => import('./species/species.module').then( m => m.SpeciesPageModule)
  },
  {
    path: 'films',
    loadChildren: () => import('./films/films.module').then( m => m.FilmsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
