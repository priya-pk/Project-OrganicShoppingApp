import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'; //listening and triggering mechanism is done

@Injectable({
  providedIn: 'root'
})
export class CartService {

  subject = new Subject()

  constructor() { }

  sendMsg(product) {
    console.log(product)
    this.subject.next(product) //Triggering an event
  }

  getMsg() {
    return this.subject.asObservable()
  }
}
