import { Component, OnInit } from '@angular/core';
import { Film } from '../modele/film';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {

	public films:Film[] = [
		{
		  name: 'Les méchants',
		  poster: '/assets/les_mechants.jpeg',
		  link: 'Film 1'
		},
		{
		  name: 'Creed',
		  poster: '/assets/creed.jpeg',
		  link: 'Film 2'
		},
		{
		  name: 'Last duel',
		  poster: '/assets/last_duel.jpeg',
		  link: 'Film 3'
		},
		{
		  name: 'Blood diamond',
		  poster: '/assets/blood_diamond.jpeg',
		  link: 'Film 4'
		},
		{
		  name: '300',
		  poster: '/assets/300.jpeg',
		  link: 'Film 5'
		}
	  ];

  constructor() { }

  ngOnInit(): void {
  }

}
