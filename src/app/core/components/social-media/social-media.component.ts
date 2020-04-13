import { Component, OnInit } from '@angular/core';
import { faTwitterSquare, faInstagramSquare, faFacebookSquare, faLinkedinIn, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss'],
})

export class SocialMediaComponent implements OnInit {
  faTwitterSquare = faTwitterSquare
  faInstagramSquare = faInstagramSquare
  faFacebookSquare = faFacebookSquare
  faLinkedinIn = faLinkedinIn
  faLinkedin = faLinkedin
  constructor(
  ) {
  }

  public ngOnInit(): void {
  }
}
