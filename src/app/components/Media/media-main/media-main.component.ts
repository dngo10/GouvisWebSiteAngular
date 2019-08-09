import { Component, OnInit, ViewChild, ChangeDetectorRef, QueryList, ViewChildren } from '@angular/core';
import { CommonBannerComponent } from '../../Common/common-banner/common-banner.component';
import { CommonTextSloganComponent } from '../../Common/common-text-slogan/common-text-slogan.component';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-media-main',
  templateUrl: './media-main.component.html',
  styleUrls: ['./media-main.component.css']
})

export class MediaMainComponent implements OnInit {

  @ViewChild(CommonBannerComponent, {static: false}) commonBanner: CommonBannerComponent;
  @ViewChildren(CommonTextSloganComponent) commonTextSloganS: QueryList<CommonTextSloganComponent>;

  arr : sloganClass[] = [
    {
      title:"RECOGNITION OF EXCELLENCE",
      content:"Gouvis Engineering Consulting Group has had the privilege to design projects that have received notoriety and have been featured in many publications such as Builder and Developer Magazine and The Green Home Magazine. We are honored to have built long lasting relationships with talented builders and architects whose work has impacted our communities and have won a multitude of awards in celebration of their design excellence."
    },
    {
      title: "HARLAND CASE STUDY",
      content: "The Harland of West Hollywood is a 37 unit town home development which provided its own design challenges to our team. Floor to ceiling glass walls open onto private outdoor terraces. Custom staircases composed of glass, exposed wood and steel create a timeless modern aesthetic. Our CEO Saeed Bekam met with the Simpson Strong Tie team to discuss his approach to this design and how the implementation of Simpson products helped us adhere to our client's design requests and reduce construction costs." 
    } 
  ];

  constructor(private cdRef:ChangeDetectorRef) {}
  
  ngOnInit() {
  }

  ngAfterViewInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    this.commonBanner.title = "MEDIA";
    this.commonBanner.imagePath = "/assets/Medias/Images/BannerImages/MediaBanner.jpg";
    
    let i : number = 0;

    this.commonTextSloganS.forEach(element => {
      console.log(this.arr[i].title);
      element.title = this.arr[i].title;
      element.content =  this.arr[i].content;
      i = i + 1;
    });

    this.cdRef.detectChanges();
  }
}

class sloganClass {
  public title: string;
  public content: string;

  constructor(title: string, content: string){
    this.title = title;
    this.content = content;
  }
}
