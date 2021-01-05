import { ProxyState } from "../AppState.js";
import List from "../models/List.js";

class ListService {

    removeList(id) {
        ProxyState.lists = ProxyState.lists.filter(list => list.id != id);
      }
  
    addList(newList) {
      let list = new List(newList);
      ProxyState.lists = [...ProxyState.lists, list];
      
    }
  }
  
  const SERVICE = new ListService();
  export default SERVICE;