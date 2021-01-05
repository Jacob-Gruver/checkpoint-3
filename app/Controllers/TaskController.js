import { ProxyState } from "../AppState.js"
import   TaskService   from "../Services/TaskService.js";




export class taskController {
    constructor() {
          
    }

    addTask() {
        window.event.preventDefault();
        let form = window.event.target;
        let addedTask = {
          todo: form['task'].value
        } 
        TaskService.addTask(addedTask);
        // @ts-ignore
        form.reset();
        // @ts-ignore
        $("new-task-modal").modal('hide');
    }
}