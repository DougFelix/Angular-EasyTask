import {
  Component,
  EventEmitter,
  Input,
  Output,
  computed,
  input,
  output,
  signal,
} from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';
import { User } from '../../models/user.model';
import { CardComponent } from "../../shared/card/card.component";

@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
    imports: [CardComponent]
})
// export class UserComponent {
//   @Input({ required: true }) avatar!: string;
//   @Input({ required: true }) name!: string;
//   @Input({ required: true }) id!: string;

//   @Output() select = new EventEmitter();

//   get imagePath(): string {
//     return 'assets/users/' + this.avatar;
//   }

//   onSelectUser() {
//     this.select.emit(this.id);
//   }
// }

/// SIGNALS
export class UserComponent {
  user = input.required<User>();
  selected = input.required<boolean>();
  select = output<string>();

  imagePath = computed(() => {
    return 'assets/users/' + this.user().avatar;
  });

  onSelectUser() {
    this.select.emit(this.user().id);
  }
}
