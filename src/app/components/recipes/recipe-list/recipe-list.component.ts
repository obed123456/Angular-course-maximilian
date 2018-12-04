import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipe: Recipe[]; 

  constructor() {
    this.recipe = [
      {
        name: 'Grilled Chicken',
        description: "This is just a tender chicken",
        imagePath: "https://images.pexels.com/photos/265393/pexels-photo-265393.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      }
  ]
   }

  ngOnInit() {
  }

}
