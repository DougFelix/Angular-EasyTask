import { Component, input, inject, signal } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { Task } from '../../models/task.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { newTaskData } from '../../models/newTaskData.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, NewTaskComponent],
  providers: [TasksService],
})
export class TasksComponent {
  private tasksService = inject(TasksService);
  userId = input.required<string>();
  name = input.required<string>();
  isAddingTask = signal(false);

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId());
  }

  onStartAddTask($event: MouseEvent) {
    this.isAddingTask.set(true);
  }

  onCloseAddTask() {
    this.isAddingTask.set(false);
  }
}
