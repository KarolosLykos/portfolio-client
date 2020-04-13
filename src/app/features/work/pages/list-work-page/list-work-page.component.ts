import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-work',
  templateUrl: './list-work-page.component.html',
  styleUrls: ['./list-work-page.component.scss']
})
export class ListWorkPageComponent implements OnInit {
  public image = "https://via.placeholder.com/"
    // "https://images.squarespace-cdn.com/content/v1/5720a42207eaa01c59a704da/1560868472233-OYUHPL5I1Y2FUESQX6SA/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/SALON_94_DESIGN19_0088.jpg?format=500w"
  public title = 'hardie for pwtbs'
  public test = []
  constructor(
    private router: Router
  ) { }

  public ngOnInit(): void {
    for (let i=0; i<5; i++) {
      let size = 150
      if (i % 2) {
        size = 100
      }

      this.test.push({
        image: this.image + size ,
        title: this.title,
        id: i
      })
    }
  }

  public showWork(id: string) {
    this.router.navigate([`/work/${id}`])
  }

}
