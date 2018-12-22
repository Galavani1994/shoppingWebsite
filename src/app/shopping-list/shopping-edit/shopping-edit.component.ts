import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ShoppingListService} from '../../shared/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('inName') inName: ElementRef
  @ViewChild('inAmount') inAmount: ElementRef

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  addIngredient(){
    const name = this.inName.nativeElement.value
    const amount = this.inAmount.nativeElement.value
    this.shoppingListService.addIngredient(name, amount)
  }
}
