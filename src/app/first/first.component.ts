import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  title: string = 'First Component Render';
  goToPage2 = function () {
    // Navigate to the /second-component route
    alert('"I am the first component"');
  };
}
