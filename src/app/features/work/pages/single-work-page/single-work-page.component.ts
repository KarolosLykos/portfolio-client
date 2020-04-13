import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-single-work-page',
  templateUrl: './single-work-page.component.html',
  styleUrls: ['./single-work-page.component.scss']
})
export class SingleWorkPageComponent implements OnInit, OnDestroy {
  public image = 'https://via.placeholder.com/150'
  // "https://images.squarespace-cdn.com/content/v1/5720a42207eaa01c59a704da/1560868472233-OYUHPL5I1Y2FUESQX6SA/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/SALON_94_DESIGN19_0088.jpg?format=500w"
  public title = 'hardie for pwtbs'
  public description = 'The Hardie stool is made of three identical bent metal tube columns and a seat. The tubes pair up where they join, adding rigidity and stability to the design. It is a vertatile addition to any space and are offered in low stool, counter, and bar height. The seat is offered upholstered in leather and is also available with a natural ash wood seat, natural or stained.'
  public images = []
  private sub: any
  private workId: any

  constructor(
    private route: ActivatedRoute
  ) {
  }

  public ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      if (params.id) {
        this.workId = params.id
      }
    })

    for (let i = 0; i < 6; i++) {
      this.images.push({
        url: this.image
      })
    }
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
