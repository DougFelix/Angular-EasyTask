import { Component, inject, input, output, signal } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Task } from '../../../models/task.model';
import { newTaskData } from '../../../models/newTaskData.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private tasksService = inject(TasksService);
  userId = input.required<string>();
  close = output();
  add = output<newTaskData>();
  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');

  onCancelAddTask() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle(),
        summary: this.enteredSummary(),
        dueDate: this.enteredDate(),
      },
      this.userId()
    );
    this.close.emit();
  }
}
