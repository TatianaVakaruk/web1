const baseUrl = "https://68a42ae6c123272fb9b19b0c.mockapi.io/test";

export const getTasksList = () => {
  return fetch(baseUrl)
    .then((response) => response.json())
    .then((tasks) => {
      return tasks;
    });
};

export const createTask = taskData => {
   return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(taskData)
    })
}
export const updateTask = (taskId,updatedTaskData) => {
    return fetch(`${baseUrl}/${taskId}`, {
         method: 'PUT',
         headers: {
             'Content-Type': 'application/json;charset=utf-8'
         },
         body: JSON.stringify(updatedTaskData)
     })
 }

 export const deleteTask = (taskId) => {
    return fetch(`${baseUrl}/${taskId}`, {
         method: 'DELETE'
     })
 }
