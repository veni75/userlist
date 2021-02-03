import { Component } from '@angular/core';
import { User } from './model/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'The good Angular programmer';
  dataList: User[] = this.UserService.list;
  currentUser: User = new User();
  phrase: string = '';
  constructor(
    private UserService: UserService,
  ) { }
  onUserSelect(user:User):void{
    //this.UserService.list(user);
  }
  onUpdateUser(user:User):void{
    this.UserService.updateUser(user);
  }
  onDeleteUser(user:User):void{
    this.UserService.removeUser(user);
  }
  onChangePhrase(ev:Event):void{
    this.phrase = (ev.target as HTMLInputElement).value;
  }
}

/* 
- Legyen három metódusod, ami lekezeli az akció gombok kattintásait. Az első
az adott user kiválasztását kezeli, a másik kettő pedig meghívja a UserService
update vagy remove metódusát. (Nézd meg a UserService -t!).
 */