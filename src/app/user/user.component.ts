import {
  Component,
  computed,
  signal,
  Input,
  input,
  Output,
  EventEmitter,
  output,
} from '@angular/core';

import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

//import { DUMMY_USERS } from '../dummy-users';

//const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent],
})
export class UserComponent {
  //selectedUser = DUMMY_USERS[randomIndex];
  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

  //selectedUser= signal(DUMMY_USERS[randomIndex]);  //useing signals
  //imagePath=computed(() => 'assets/users/' + this.selectedUser().avatar) //useing signals

  // onSelectUser() {
  //const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //this.selectedUser = DUMMY_USERS[randomIndex];
  //this.selectedUser.set(DUMMY_USERS[randomIndex]) //useing signals
  // }

  //@Input({ required: true }) id!: string;
  //@Input({ required: true }) avatar!: string;
  //@Input({ required: true }) name!: string;

  @Output() select = new EventEmitter();
  //select = output<string>(); //useing signals

  @Input({ required: true }) user!: User; //user object type
  // @Input({ required: true }) user!: {       //user object type
  //  id: string;                              //user object type
  //    avatar: string;                        //user object type
  //    name: string;                          //user object type
  //  };

  @Input({ required: true }) selected!: boolean;

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  //avatar = input.required<string>(); //useing signals
  //name = input.required<string>();   //useing signals
  //imagePath = computed(() => 'assets/users/' + this.avatar()); //useing signals
  // imagePath = computed(() => {
  //    return 'assets/users/' + this.avatar(); //useing signals
  //  });

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
