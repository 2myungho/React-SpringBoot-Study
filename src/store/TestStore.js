import { observable, computed, action } from "mobx";
import Books from '../Books';

class TestStore{

    @observable books = Books;
}

export default new TestStore();