import { generateId } from "../Utils/generateId.js";

export default class Task {
    constructor({task, listId, id}) {
        this.task = task,
        this.listId = listId,
        this.id = id || generateId();
    }

    get Template() {
        return `
        <div class="col-md-4 col-6 mt-3">
        <div class="card">
            <div class="card-body">
                <p class="card-text">${this.task}</p>
                <div class="text-right">
                    <button type="button" class="btn btn-danger" onclick="app.listController.removeList('${this.id}')">Delete</button>
                </div>
            </div>
        </div>
        </div>
            `
      }
}