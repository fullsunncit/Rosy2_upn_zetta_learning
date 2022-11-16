import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserService } from '../user-manager.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public list : Observable<User[]>

  constructor(private service : UserService) { 
    this.list = this.service.users$
    console.log(this.list);
  }

  ngOnInit(): void {
  }

}