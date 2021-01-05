import { ProxyState } from "../AppState.js"
import   ListService   from "../Services/ListService.js";


function _drawLists() {
    let lists = ProxyState.lists;
    let template = '';
    lists.forEach(list => {
      template += list.Template;
    })
    
    document.getElementById('lists').innerHTML = template;
  }


export class listController {
    constructor() {
        ProxyState.on("lists", _drawLists)
        _drawLists()
          
    }

    addList() {
        window.event.preventDefault();
        let form = window.event.target;
        let addedList = {
          items: form['items'].value,
          price: form['price'].value
        } 
        ListService.addList(addedList);
        // @ts-ignore
        form.reset();
        // @ts-ignore
        $("new-list-modal").modal('hide');
    }

    removeList(id) {
        console.log("removing list", id);
        ListService.removeList(id);
      }
}