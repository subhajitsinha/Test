import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h3>{{header ? header : 'No Header'}}</h3><br/>
               <img src = 'http://www.pragimtech.com/{{imagePath}}'/><br/>
               Name = {{getfullName()}} <br/>
               <app-employee></app-employee>
               <button [disabled] = 'isDisabled'>Click Me</button>
               <div innerHtml = '{{badHtml}}' ></div>
               <div [innerHtml] = 'badHtml' ></div>`,
})

export class AppComponent {
    header: string = 'Employee Details';
    imagePath: string = 'Images/Logo.JPG';
    isDisabled: boolean = true;

    badHtml: string = 'Hello<script>alert("Hacked")</script>';

    firstName: string = 'John';
    lastName: string = 'Wick';

    getfullName(): string {
        return this.firstName + ' ' + this.lastName;
    }
}
