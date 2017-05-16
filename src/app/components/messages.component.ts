import { Component, Input } from '@angular/core';
import { Item } from './item';

import { ItemsService } from '../services/items.service';

@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
  styleUrls: ['../app.component.css']
})
export class MessagesComponent {
	@Input() item: Item;
 	@Input() indexMass: number;
 
 	newMass: string;
	addMass(event):void{ 	
	 	if(event.keyCode == 13 && this.newMass) {
	    this.item.messages.push(this.newMass);
	    this.newMass = "";
	  }
 	}
}