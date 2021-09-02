import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
	selector: 'app-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

	heroes: Hero[];
	stringToShow = "";
	
	selectedHero: Hero;
	onSelect(hero: Hero): void {
		this.selectedHero = hero;
		console.log(this.selectedHero);
	}
	
	hero: Hero = {
		id: 1,
		name: "Captain America"
	};

	constructor(private heroService: HeroService) {}

	queryMyNodeServer(): void {
		this.heroService.queryServer()
			.subscribe(answerString => this.stringToShow = answerString);
	}
	
	getHeroes(): void {
		this.heroService.getHeroes()
			.subscribe(heroes => this.heroes = heroes);
	}
	
	ngOnInit() {
		this.getHeroes();
		this.queryMyNodeServer();
	}

}
