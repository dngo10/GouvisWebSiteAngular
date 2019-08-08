import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CommonBannerComponent } from '../../Common/common-banner/common-banner.component';

@Component({
  selector: 'app-media-main',
  templateUrl: './media-main.component.html',
  styleUrls: ['./media-main.component.css']
})
export class MediaMainComponent implements OnInit {

  @ViewChild(CommonBannerComponent, {static: false}) commonBanner: CommonBannerComponent;
  constructor(private cdRef:ChangeDetectorRef) {}
  
  ngOnInit() {
  }

  ngAfterViewInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log(this.commonBanner);
    this.commonBanner.title = "MEDIA";
    this.commonBanner.imagePath = "/assets/Medias/Images/BannerImages/MediaBanner.jpg";
    this.cdRef.detectChanges();
  }
}
