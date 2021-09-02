import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { LMSService } from '../lms.service';
import { Student } from '../student';

@Component({
  selector: 'app-leaderboard-component',
  templateUrl: './leaderboard-component.component.html',
  styleUrls: ['./leaderboard-component.component.css']
})

export class LeaderboardComponentComponent implements OnInit {
	
	students: Array<Student>;
	studentNames: Array<string> = [];
	studentGrades: Array<number> = [];

	daveChart: typeof Highcharts = Highcharts;
	updateFlag = false;
	chartOptions: Highcharts.Options = {
		chart: {
				renderTo: 'leaderboardBlockChartContainer',
				type: 'bar'
			},
			series: [{
				name: 'XP',
				data: [1,2,3],
				type: 'bar',
				/*color: "#aaaaaa"*/
			}],
			
			xAxis: {										
				categories: ["dave", "is", "great"]
			}
			
			
	};
	
	constructor(private lmsService: LMSService) {}
	
	getStudentGrades(): void {
		this.lmsService.getStudentGradesFromLocalhost()
		//this.lmsService.getStudentGradesFromHeroku()
		//this.lmsService.getStudentGrades()
		
			.subscribe(thestudents => 
			{				
				this.students = thestudents;
				this.students.sort((a, b) => (a.grade < b.grade) ? 1 : -1)
				this.studentNames = [];
				this.studentGrades = [];
				for (let student of this.students) {
					this.studentNames.push(student.name);
					this.studentGrades.push(student.grade);
				}
				this.updateChart(this.studentNames, this.studentGrades);				
			});			
	}
	updateChart(labels, values): void {		
		this.daveChart.charts[0].xAxis[0].setCategories(labels);					
		this.daveChart.charts[0].series[0].setData(values, true, true);
	}
	
	ngOnInit() {	
		this.getStudentGrades();
	}			

}