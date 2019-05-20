import { Component, OnInit } from '@angular/core';

import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {

  constructor(private movieService: MovieService, private router : Router) { }
  list:any = [];
  movie:any =[];
  ngOnInit() {
    this.movieService.getRemoteMovies().subscribe((result) => {this.list = result;});
  }
  onDelete(m){
    this.movieService.deleteRemoteMovie(m).subscribe((e) => {
      this.movieService.getRemoteMovies().subscribe((result) => {this.list = result;});
    });
  }
  addMovie(movie){
    this.movieService.addRemoteMovie(this.movie).subscribe(()=>{this.router.navigate(['/list-movies']);});
  }
}   
