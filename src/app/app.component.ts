import { Component, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './components/tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, UserComponent, TasksComponent],
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId = signal('');

  get selectedUser() {
    return this.users.find((x) => x.id === this.selectedUserId());
  }

  onSelectUser(id: string) {
    this.selectedUserId.set(id);
  }
}
