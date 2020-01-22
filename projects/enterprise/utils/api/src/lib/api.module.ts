import { NgModule, ModuleWithProviders } from '@angular/core';
import { ApiComponent } from './api.component';
import { ApiService, IDomainURLService } from './api.service';



@NgModule({
  declarations: [ApiComponent],
  imports: [
  ],
  exports: [ApiComponent]
})
export class ApiModule {
  static forRoot(domainurl: string): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [ApiService,
        {
          provide: IDomainURLService,
          useValue: domainurl
        }]
    };
  }
}
