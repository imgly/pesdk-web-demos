import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as SDK from 'photoeditorsdk/no-polyfills';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'angular-ie11';

  @ViewChild('psdkContainer', { static: false })
  private container: ElementRef<HTMLDivElement> | null = null;

  async ngAfterViewInit(): Promise<void> {
    await SDK.PhotoEditorSDKUI.init({
      license: '',
      image: `./example.jpg`,
      assetBaseUrl: 'https://cdn.jsdelivr.net/npm/photoeditorsdk@latest/assets',
      container: this.container ? this.container.nativeElement : '',
    });
  }

}
