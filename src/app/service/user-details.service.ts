import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor() { }
  //User details 
userDetails = [
  {
    id: 1,
    name: 'Marry, Jason & Hodge of Attorney',
    domain: 'www.mjhatorneys.com',
    gender: 'Male',
    dob: 'Jun 08 1979',
    phone: '+918654321234',
    location: '12 sreet,Silicon valley, Avenue NE, Huntsville'
  }
];

getUserDetails(){
  sessionStorage.setItem('User_Details', JSON.stringify(this.userDetails));
  return this.userDetails;
}

}
