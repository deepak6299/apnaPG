import { Component,HostListener  } from '@angular/core';

@Component({
  selector: 'app-bottom-navbar',
  templateUrl: './bottom-navbar.component.html',
  styleUrls: ['./bottom-navbar.component.css']
})
export class BottomNavbarComponent {


  hideNavbar = false; // Initially show the navbar
  previousScrollPosition = 0;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const currentScrollPosition = window.scrollY;
    if (currentScrollPosition > this.previousScrollPosition) {
      this.hideNavbar = true; // Hide the navbar
    } else {
      this.hideNavbar = false; // Show the navbar
    }
    this.previousScrollPosition = currentScrollPosition;
  }
}
