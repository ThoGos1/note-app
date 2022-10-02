import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NoteComponent } from './components/note/note.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TempnoteComponent } from './components/tempnote/tempnote.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'note', component: NoteComponent, title: 'Note' },
  { path: 'note/:id', component: TempnoteComponent, title: 'Temp' },




  
  // These HAVE to be the last things as they would overide other pages.
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent, title: '404 '}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
