import { createTask  } from '../tasksGateway.js';
import { updateTask } from "../tasksGateway.js";

it('should return text of new task', () => {
  const getNewTask = createTask('task_test');

  expect(getNewTask).toEqual({
    text: 'task_test',
    done: false,
    createDate: new Date().toISOString(),
  });
});

it('should update tasks', ()=>{
   const getUpdatedTask = updateTask('3', 'Updated task');
   expect(getUpdatedTask).toEqual({
    text: 'Updated task',
    createDate,
    done,
    finishDate: done ? new Date().toISOString() : null
   
});
})
