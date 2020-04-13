import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})

export class NavbarComponent implements OnInit {
  public isExpanded = false;

  constructor(
    public router: Router
  ) {
    this.router.events.subscribe( () => {
      if (this.isExpanded) {
        this.isExpanded = !this.isExpanded
      }

    })
  }

  public ngOnInit(): void {
  }

  public onToggle() {
    this.isExpanded = !this.isExpanded;
  }
}
