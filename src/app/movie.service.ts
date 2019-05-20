import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movieUrl = 'http://localhost:3000/api/movies';
  constructor(private http: HttpClient) { }
  movie:any = {
    id:0,
    name:'',
    year:0,
    image_url:'',
    production_house:'',
    rating:0,
    type:'',
    language:'',
    date:''
  }; 
  getRemoteMovies(): Observable<[]>{
  	return this.http.get<[]>(this.movieUrl); 		
  }
  deleteRemoteMovie(movie){
  	return this.http.delete(this.movieUrl+"/"+movie.id); 		
  } 
  addRemoteMovie(movie):Observable<any>{
  	return this.http.post(this.movieUrl,movie);
 }
}
