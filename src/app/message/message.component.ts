import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  back(){
    this._router.navigate(['products'])
  }
}
