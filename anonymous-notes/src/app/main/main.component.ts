import { Component, OnInit } from '@angular/core';
import { NoteService } from './../note.service';
import { Http } from '@angular/http';
import "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  note = {
    text: ''
  }
  notes = [];

  constructor(private _noteService: NoteService, private _http: Http) {
    this.show();
  }

  ngOnInit() {
  }

  create(){
    this._http.post(`/notes`, this.note)
    .subscribe( 
      (response) => {
        console.log('Successful response from the server');
        /* code */
        console.log(response.json())
        this.show();
      },
      (err) => {
        console.log(err);
      }
    )
    this.note.text = '';
  }

  show(){
    this._http.get(`/notes`)
    .subscribe( 
      (notes) => {
        console.log('Successful response from the server');
        this.notes = notes.json();
        console.log(this.notes);
      },
      (err) => {
        console.log(err);
      }
    )
  }
}
