import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // ngModel syncronises the value of the email input with email
  email: string;

  onSubmit() {
    console.log(this.email);
  }
}
