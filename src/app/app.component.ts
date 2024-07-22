import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from 'src/environments/environment';
import { DataService } from './modules/core/services/data.service';
import { HeaderObj, PageService } from './modules/core/services/page.service';
import { StorageService } from './modules/core/services/storage.service';
import { Helper } from './modules/core/utils/helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showMsj = false;
  showContent = false;
  message = 'No cuenta con privilegios';
  environmentName: string;
  versionNumber: string;
  maxTimeToShowMessage = 2000;

  isInternet = false;
  hasJson = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    public storageService: StorageService,
    private spinner: NgxSpinnerService,
    public pageService: PageService,
    private router: Router,
    private dataService: DataService
  ) {
    this.pageService.setHeaderPage(new HeaderObj('<PAGE_NAME>'));
    this.environmentName = environment.environmentName;
    this.versionNumber = environment.version;
  }

  ngOnInit(): void {
    
    
  }


  handlerBack(newRoute: string): void {
    const navigationExtras: NavigationExtras = { queryParams: { token: this.storageService.userLogged } };
    this.router.navigate([newRoute], navigationExtras);
  }
}

