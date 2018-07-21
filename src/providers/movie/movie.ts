import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
  private baseApiPath = "https://api.themoviedb.org/3";
  
  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }
  getLatestMovies(){
    return this.http.get(this.baseApiPath + "/movie/popular?api_key=79d96159dc845fe10e1be9f0f90610f4")
  }

  getMoviesDetails(filmeid){
    return this.http.get(this.baseApiPath + `/movie/${filmeid}?api_key=79d96159dc845fe10e1be9f0f90610f4`)
  }

}
