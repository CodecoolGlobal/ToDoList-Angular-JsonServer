# ToDoList-Angular-JsonServer
To do list using Angular and Json Server
Create a basic Angular to do list app which gets it's data via http calls to a server on your
local machine with json-server package use
Style the application as beautiful as you can (you can search on the internet possible
designs, here is a starting example https://www.pinterest.com/pin/83809243044360170/).
The tasks are stored in an array and the array is populated by calling calling the server api at
http://localhost:3000/tasks
You have an input box of type text where you filter tasks. Each time you type a letter in the
input box you need to call the following http get
http://localhost:3000/tasks?name=[what_you_typed]
You have an input box of type text where you write a taks description and when you press
enter a new task is added by calling http post http://localhost:3000/tasks with the body {title:
[what_you_typed]}. After adding a task you need to refresh the list of tasks.
Each task has a delete button next to it and when you press it that task it deleted. After
deleting a task you need to refresh the list of tasks. To delete a task make a http delete
command at http://localhost:3000/tasks/[id_of_the_task_to_delete]
Each task has a checkbox. When the user clicks the checkbox a http patch is made to the
api http://localhost:3000/tasks/[id_of_task] with the body { isCompleted:
[status_of_checkbox]}. Depending on the status of isCompleted from each task (done or not
done) style the task differently
