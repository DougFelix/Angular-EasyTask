import { Component, inject, input, output } from '@angular/core';
import { Task } from '../../../models/task.model';
import { CardComponent } from '../../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  imports: [CardComponent, DatePipe],
})
export class TaskComponent {
  private tasksService = inject(TasksService);
  task = input.required<Task>();

  onCompleteTask() {
    this.tasksService.removeTask(this.task().id);
  }
}
