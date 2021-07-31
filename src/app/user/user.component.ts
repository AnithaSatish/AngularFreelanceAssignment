import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

 userProfile:any
 userId:any
 deleteUserProfile:any[]

  constructor(private userservice:UserService,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
  this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
  console.log(params)
  this.userId=Number(params.get('id'))
})  

this.userservice.getUsers().subscribe((data:any)=>{
  this.userProfile=data.data.find(user =>user.id===this.userId) 
    console.log(this.userProfile)
    })
}





}