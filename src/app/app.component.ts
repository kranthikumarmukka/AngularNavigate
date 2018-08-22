import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  clicked: boolean;
  constructor(private router: Router,
  private cdf: ChangeDetectorRef) { }
  
  btnClick() { 
       this.router.navigate(['/page']);  
       this.clicked = true;
       this.cdf.detectChanges;
}
}
