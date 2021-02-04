import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {
  @Input() dataList: User[] = [];
  
  @Input() phraseString: string = '';
  @Output() selectClick: EventEmitter<User> = new EventEmitter();
  @Output() updateClick: EventEmitter<User> = new EventEmitter();
  @Output() deleteClick: EventEmitter<User> = new EventEmitter();
  currentUser: User = new User();
  constructor() { }

  ngOnInit(): void {
  }

  onSelectUser(user: User):void {
    this.currentUser = user;
  }

  onDeleteUser(user:User):void{
    this.deleteClick.emit(user);
    this.currentUser = new User();
  }

  onSelectClicked(dataRow:User): void {
    this.selectClick.emit(dataRow);
  }
  onUpdateClicked(dataRow:User): void {
    this.updateClick.emit(dataRow);
  }
  onDeleteClicked(dataRow:User): void {
    this.deleteClick.emit(dataRow);
  }
}



/* ## 6. DataListComponent
![DataListComponent](src/assets/diagrams/data-list-component.JPG)
- Feladata: teljes adatlistát jelenít meg, az app-data-row elemeket annyiszor
ismétli meg, ahány eleme van a kapott tömbnek. Lekezeli az akciógombok
kattintásait. Megjeleníti a kiválasztott adatsorhoz tartozó user-detail kártyát.
- Létrehozás: data-list
- Bejövő adat: `@var dataList {User[]}, @default []`
- Kimenő esemény: `@var selectClick {EventEmitter<boolean>}`
- Kimenő esemény: `@var updateClick {EventEmitter<boolean>}`
- Kimenő esemény: `@var deleteClick {EventEmitter<boolean>}`
- Metódus: `@method onSelectClicked {void}, selectClick eseményt hívja a dataRow -val`
- Metódus: `@method onUpdateClicked {void}, updateClick eseményt hívja a dataRow -val`
- Metódus: `@method onDeleteClicked {void}, deleteClick eseményt hívja a dataRow -val`
- Nézet: az alábbi kódban a pontok helyére először megjeleníti a hiányzó
fejléceket. A második pontozott helyre megjeleníti az app-data-row -t és
annyiszor ismétli meg, ahány eleme van a kapott adatlistának:
`*ngFor="let row of dataList"`. Átadja az app-data-row elemeknek az aktuális
adatsort és feliratkozik az eseményeikre, azaz értelemszerűen hozzájuk rendeli
a megfelelő nevű metódusokat.
```html
<div class="row">
  <div class="col-12 mt-3 pt-1 pb-1 d-flex justify-content-around">
    <span class="text-bold">id</span>
    ...
  </div>
</div>
<div class="row">
  <div class="col-12 mt-1 data-list-row">
    ...
  </div>
</div>
```

 */