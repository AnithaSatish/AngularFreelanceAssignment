import { Component, OnInit,Input } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

userData:any=[]
deleteUserProfile:any[]
userId:number
  constructor(private userservice:UserService ,private activatedrouter:ActivatedRoute) { }

  ngOnInit() {
    this.userservice.getUsers().subscribe((data:any)=>{
      this.userData=data.data
      console.log(this.userData)
    })

    this.activatedrouter.paramMap.subscribe((params:ParamMap)=>{
      console.log(params)
       })

       
 }

 deleteUser(id:number){
   console.log(id)
 const index:number=this.userData.find(user=>user.id===this.userId)
 if(index!=-1){
   this.userData.splice(index,1)
 }
 
 }



}







