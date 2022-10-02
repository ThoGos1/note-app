import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxContentfulRichTextModule } from 'ngx-contentful-rich-text';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NoteComponent } from './components/note/note.component';
import { TempnoteComponent } from './components/tempnote/tempnote.component';
import { ToHtmlPipe } from './to-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    NoteComponent,
    TempnoteComponent,
    ToHtmlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxContentfulRichTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
