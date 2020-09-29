import { observable, computed, action } from "mobx";
import Books from '../Books';

class TestStore{

    @observable books = Books;
    @observable setBook = {}

    @computed
    get getbooks(){
        return this.books ? this.books.slice() : [];
    }
    //e.target.value 이벤트
    @action
    setBookProps(name,value){
        this.setBook ={
            ...this.setBook,
            [name] : value
        }
        console.log(this.setBook)
    }
    @action
    writeAdd(book){
        this.books.push(book);
    }

    //게시물 제거
    @action
    writeRemove(id){
        this.books = this.books.filter((book) => book.id !== id)
    }
}

export default new TestStore();