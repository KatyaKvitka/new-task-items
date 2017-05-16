import { Component} from '@angular/core';
import { ItemsService } from '../services/items.service'

import { trigger, style, transition, animate, group } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'items',
	templateUrl: './items.component.html',
	styleUrls: ['../app.component.css'],
	providers: [ItemsService],
	animations: [
	  trigger('itemAnim', [
	    transition(':enter', [
	      style({transform: 'translateX(-100%)'}),
	      animate(350)
	    ]),
	    transition(':leave', [
	      group([
	        animate('0.2s ease', style({
	          transform: 'translate(-300px,0px)'
	        })),
	        animate('0.5s 0.2s ease', style({
	          opacity: 0
	        }))
	      ])
	    ])
	  ])
	]
})

export class ItemsComponent{

	items: Item[];
	newItem: string;
	newItemAdd: Item;

	selectedItem: Item;
    selectIndex: number;

	constructor(private itemsService: ItemsService){
		this.itemsService.getItems().subscribe(items => {
			this.items = items;
			this.selectedItem = items[1];
			this.selectIndex = 1;
		});
	}
  
	addItem(): void  {
		this.newItemAdd = {
	        "title": this.newItem, 
	        "messages": []
	    }
	    this.items.push(this.newItemAdd); 
	    this.newItem = "";
	}
	
	deleteItem(index, item): void  {
       	this.items.splice(index, 1);
    	if (item === this.selectedItem){
    		this.selectedItem = null;
    	}
    }

	onSelect(item: Item, indexMass:number): void {
		this.selectedItem = item;
		this.selectIndex = indexMass;
	}
}

interface Item{
	title: string;
    messages: any;
}
