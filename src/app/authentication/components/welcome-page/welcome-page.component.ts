import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent {

  constructor(private router:Router){}

  ngOnInit(): void {
    this.navigateToNextPage();
  }
  

  navigateToNextPage(): void {
    setTimeout(() => {
      this.router.navigate(['/login-Page']); 
    }, 3000); // 3000 milliseconds = 3 seconds
  }


}
