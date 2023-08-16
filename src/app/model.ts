export class Model {
  user;
  items;

 constructor() {
  this.user= "Recep";
  this.items = [
    new TodoItem("Spor",true),
    new TodoItem("Kahvalti",false),
    new TodoItem("Sinema",false),
  ]
 }
}

export class TodoItem {
  description;
  action;

  constructor(description: string, action: boolean){
    this.description=description;
    this.action=action;
  }
}
