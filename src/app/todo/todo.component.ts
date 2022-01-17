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

  inputText:string = ""
  addItem(){
    if(this.inputText!=""){ 
      this.model.items.push( {description:this.inputText,action: false});
      this.inputText = ""
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

 getBtnClasses(){
  return {
    'disabled' : this.inputText.length==0,
  'btn-secondary' : this.inputText.length==0,
  'btn-primary' : this.inputText.length > 0
  }
 }
}
