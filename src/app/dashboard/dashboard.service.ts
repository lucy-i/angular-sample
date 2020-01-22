import { Injectable } from '@angular/core';
import { ApiService } from '@enterprise/utils/api';

@Injectable()
export class DashboardService {
    constructor(private api: ApiService) { }


    getSummary() {
        return this.api.request('post', 'api/dashboard/summary', null, true);
    }
}
