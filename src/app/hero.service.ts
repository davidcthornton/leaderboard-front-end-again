import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

	constructor(private http: HttpClient) {}
  
	getHeroes(): Observable<Hero[]> {
		return of(HEROES);
	}
	queryServer(): Observable<string> {
		return this.http.get<string>("http://localhost:3000/query");
	}
	
}
