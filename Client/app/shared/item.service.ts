import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Http, URLSearchParams, Response, RequestOptions, Headers } from '@angular/http';
import { APP_BASE_HREF, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { ORIGIN_URL } from './constants/baseurl.constants';
import { IUser } from '../models/User';
import { Item } from '../models/Model';
import { TransferHttp } from '../../modules/transfer-http/transfer-http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ItemService {
    constructor(
        private transferHttp: TransferHttp, // Use only for GETS that you want re-used between Server render -> Client render
        private http: Http, // Use for everything else
        @Inject(ORIGIN_URL) private baseUrl: string,
        @Inject(PLATFORM_ID) private platformId: Object) {

    }

    getItems(): Observable<Item[]> {
        // ** TransferHttp example / concept **
        //    - Here we make an Http call on the server, save the result on the window object and pass it down with the SSR,
        //      The Client then re-uses this Http result instead of hitting the server again!

        //  NOTE : transferHttp also automatically does .map(res => res.json()) for you, so no need for these calls
        //       var options: any = { headers: new Headers({ 'trustme': true, 'continuationToken': { "token": "-RID:sfdqAKtDTAEDAAAAAAAAAA==#RT:1#TRC:2", "range": { "min": "", "max": "FF" } } }) };

        let headers = new Headers({ 'continuationToken': "" });
        let options = new RequestOptions({ headers: headers });
        return this.transferHttp.get(`${this.baseUrl}/api/items/getpage`, options);


        // if (isPlatformBrowser(this.platformId)) {
        //     return this.http.get(`${this.baseUrl}/api/items/getpage`, options)
        //         .map(this.extractData)
        //         .catch(this.handleError);
        // } else {
         
        // }



    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleError(error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    getItem(item: Item): Observable<Item> {
        return this.transferHttp.get(`${this.baseUrl}/api/users/` + item.id);
    }

}
