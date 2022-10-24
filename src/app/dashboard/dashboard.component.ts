import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {EditProfileComponent} from '../edit-profile/edit-profile.component';
import {UserDetailsService} from '../service/user-details.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

userDetails: any;

  constructor(public dialog: MatDialog, private userService: UserDetailsService) { }

  ngOnInit(): void {
    this.getUserDetails();
  }

  onEdit(){
    const dialogRef = this.dialog.open(EditProfileComponent, {
      width: '500px',
      height: '560px',
      data: this.userDetails
    });
  }

  getUserDetails(){
     this.userDetails = this.userService.getUserDetails();
  }

}
