import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { TodoItem } from '../todoItem';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent  {

  constructor() {
    this.model.items = this.getItemsFromLS()
   }
  
  model = new Model()

  displayAll:boolean = false

  inputText:string = ""
  addItem(){
    let data = {description:this.inputText,action: false}
    let items = this.getItemsFromLS()
    items.push(data)
    if(this.inputText!=""){ 
      this.model.items.push(data);
      localStorage.setItem("items",JSON.stringify(items))
      this.inputText = ""
    }else{
      alert("Bilgi giriniz!!!")
    }
  }

  getItemsFromLS(){
    let items:TodoItem[] = []
    let value = localStorage.getItem("items")
    if(value !=null){
      items = JSON.parse(value)
    }
    return items
  }

  onActionChanged(item:TodoItem){
    // console.log(item)
    let items = this.getItemsFromLS()

    localStorage.clear()

    items.forEach(i=>{
      if(i.description == item.description){
        i.action = item.action
      }
    })
    localStorage.setItem("items",JSON.stringify(items))
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
