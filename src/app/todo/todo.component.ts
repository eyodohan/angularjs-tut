import { Component, OnInit } from '@angular/core';
import { Model } from '../model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent  {

  constructor() { }
  
  model = new Model()

  displayAll:boolean = false

  toggleAction(x:boolean){
    return !x
  }

  addItem(value:string){
    if(value){ 
      this.model.items.push( {description:value,action: false})
    }else{
      alert("Bilgi giriniz!!!")
    }
  }


 getName(){
   return this.model.name
 }

 getItems(){
   if(this.displayAll){
     return this.model.items
   }
   return this.model.items.filter(item=>!item.action)
 }

 displayCount(){
   return this.model.items.filter(item=>item.action).length
 }

}
