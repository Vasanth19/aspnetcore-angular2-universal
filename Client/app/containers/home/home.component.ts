import { Component, OnInit, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SERVER_DATA } from '../../shared/constants/server.data';
import { Item } from '../../models/Model';
import { IUser } from '../../models/User';
import { UserService } from '../../shared/user.service';
import { ItemService } from '../../shared/item.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    title: string = 'Angular 4.0 Universal & ASP.NET Core advanced starter-kit';
    data:{};
    users: IUser[];

    items: Item[];
    // Use "constructor"s only for dependency injection
    constructor(
        public translate: TranslateService,
        private userService: UserService,
           private itemService: ItemService,
        @Inject(SERVER_DATA) private serverData ) {
           
             }

    // Here you want to handle anything with @Input()'s @Output()'s
    // Data retrieval / etc - this is when the Component is "ready" and wired up
    ngOnInit() { 
        this.data = this.serverData;
           console.log('Data in Home Init: ',  this.data);
          this.itemService.getItems().subscribe(result => {
            this.items = result as Item[];
        });

         this.userService.getUsers().subscribe(result => {
            this.users = result as IUser[];
        });
    }

    public setLanguage(lang) {
        this.translate.use(lang);
    }
}
