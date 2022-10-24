import { Injectable } from '@angular/core';
import {UserDetails} from '../user-details.model';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor() { }
  //User details 
userDetails:UserDetails[] = [
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

getUserDetails(): UserDetails[]{
  return this.userDetails;
}

}
