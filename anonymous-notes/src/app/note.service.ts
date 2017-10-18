import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs";

@Injectable()
export class NoteService {
  notes = [];

  constructor(private _http: Http) { }

  retrieveAll() {
    return this._http.get(`/notes`)
    .subscribe( 
      (notes) => {
        console.log('Successful response from the server');
        this.notes = notes.json();
      },
      (err) => {
        console.log(err);
      }
    )
  }

  create(note) {
    return this._http.post(`/products`, note)
    .subscribe( 
      (response) => {
        console.log('Successful response from the server');
        /* code */
        console.log(response.json())
      },
      (err) => {
        console.log(err);
      }
    )
  }
}
