import { ProxyState } from "../AppState.js";
import Task from "../models/Task.js";

class TaskService {

  
    addTask(newTask) {
      let task = new Task(newTask);
      ProxyState.tasks = [...ProxyState.tasks, task];
      
    }
  }
  
  const SERVICE = new TaskService();
  export default SERVICE;