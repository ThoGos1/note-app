import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  constructor(private contentfulService: ContentfulService) { }

  notePosts$: Observable<any> | undefined;

  ngOnInit(): void {
    this.notePosts$ = this.contentfulService.getAllEntries(); 
  }

}