import { Component, OnInit } from '@angular/core';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public faMapPin = faMapMarkerAlt
  public faPhone = faPhone
  public faEmail = faEnvelope

  constructor() { }

  public ngOnInit(): void {
  }

}
