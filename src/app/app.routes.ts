import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PuppiesComponent } from './components/puppies/puppies.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Cavalier | Home' },
  { path: 'puppies', component: PuppiesComponent, title: 'Cavalier | Puppies' },
  { path: 'contact', component: ContactComponent, title: 'Cavalier | Contact' },
];
