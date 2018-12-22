import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() recipeLoaded: EventEmitter<string> = new EventEmitter<string>()
  constructor() { }

  ngOnInit() {
  }
  onSelect(value){
    if(value == 'recipe'){
      this.recipeLoaded.emit('recipe')
    }else{
      this.recipeLoaded.emit('shopping-list')
    }
  }
}
