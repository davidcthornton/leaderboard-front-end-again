import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { Student } from './student';
import { HEROES } from './mock-heroes';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LMSService {

	constructor(private http: HttpClient) {}
  
	getHeroes(): Observable<Hero[]> {
		return of(HEROES);
	}
	queryServer(): Observable<string> {
		return this.http.get<string>("http://localhost:3000/queryEnrollment");
	}
	
	getStudentGrades(): Observable<Student[]> {
		let studentToReturn : Student[] = [{name: "David", grade: 87}, {name: "Susan", grade: 94}];
		return of(studentToReturn);
	}
	getStudentGradesFromLocalhost(): Observable<Student[]> {		
		return this.http.get<Student[]>("http://localhost:3000/queryEnrollment");
	}
	
	getStudentGradesFromHeroku(): Observable<Student[]> {		
		return this.http.get<Student[]>("https://dry-dusk-95511.herokuapp.com/queryEnrollment");
		//let studentToReturn : Student[] = [{name: "David", grade: 87}, {name: "Susan", grade: 94}];
		//return of(studentToReturn);
	}
	
	
}

