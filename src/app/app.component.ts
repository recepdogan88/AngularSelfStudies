import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = 'Recep';

  items = [
    {description: "kahvalti",action:"no"},
    {description: "spor",action:"no"},
    {description: "kitap",action:"no"}
  ]
}
