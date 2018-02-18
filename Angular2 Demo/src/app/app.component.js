"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.header = 'Employee Details';
        this.imagePath = 'Images/Logo.JPG';
        this.isDisabled = true;
        this.badHtml = 'Hello<script>alert("Hacked")</script>';
        this.firstName = 'John';
        this.lastName = 'Wick';
    }
    AppComponent.prototype.getfullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h3>{{header ? header : 'No Header'}}</h3><br/>\n               <img src = 'http://www.pragimtech.com/{{imagePath}}'/><br/>\n               Name = {{getfullName()}} <br/>\n               <app-employee></app-employee>\n               <button [disabled] = 'isDisabled'>Click Me</button>\n               <div innerHtml = '{{badHtml}}' ></div>\n               <div [innerHtml] = 'badHtml' ></div>",
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map