import { listController } from "./Controllers/ListController.js"
import { taskController } from "./Controllers/TaskController.js"

class App {
  listController = new listController;
  taskController = new taskController;
}

window["app"] = new App();
