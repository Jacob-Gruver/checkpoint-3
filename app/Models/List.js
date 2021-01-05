import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";

export default class List {
    constructor({items, price, id}) {
        this.items = items;
        this.price = price;
        this.id = id || generateId();
    }

    get Template() {
        return `
        <div class="col-md-4 col-6 mt-3">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">${this.items}</h4>
                <p class="card-text">${this.price}</p>
                <p class="card-text">${this.tasks}</p>
                
                <div class="text-right">
                    <button type="button" class="btn btn-danger" onclick="app.listController.removeList('${this.id}')">Delete</button>
                </div>
            </div>
        </div>
        </div>
            `
      }

      get tasks() {
          let template = '';
          let tasks = ProxyState.tasks.filter(t => t.listId == this.id);
          tasks.forEach(t => template += t.Template);
          return template;
      }
}