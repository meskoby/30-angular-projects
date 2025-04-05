import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  template: `
    <div class="profile-card">
      <h2>Profile Card</h2>
      <p><strong>Name: </strong>{{name}}</p>
      <p><strong>Age: </strong>{{age}}</p>
      <p><strong>Description: </strong>{{description}}</p>

      <h3>Update Profile</h3>
      <input type="text" [(ngModel)]="name" placeholder="Enter your Name" />
      <input type="number" [(ngModel)]="age" placeholder="Enter your Age" />
      <input type="text" [(ngModel)]="description" placeholder="A short Description about yourself" />
    </div>`,
  styles: `
    .profile-card {
      border: 1px solid #ccc;
      padding: 16px;
      border-radius: 8px;
      width: 300px;
      margin: auto;
      background-color: #f9f9f9;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    h2 {
      text-align: center;
      font-size: 24px;
      margin-bottom: 16px;
    }

    p {
      font-size: 17px;
      margin: 8px 0;
    }

    input {
      width: 95%;
      padding: 8px;
      margin: 8px 0;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 12px;
    }
  `,
})
export class AppComponent {
  name: string = 'Messack KOBE';
  age: number = 30;
  description: string = 'Expert IT Pro & Trainer.';
}
