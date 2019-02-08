import { last } from '@angular/router/src/utils/collection';

export class User {
    id: number;
    lastName: string;
    firstName: string;
    email: string;
    phone: string;
    relatives?: string;
    active: boolean;

    public constructor(id: number,
      lastName: string, firstName: string, email: string, phone: string, relatives: string = 'none', active: boolean= false) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.relatives = relatives;
        this.active = active;
    }
   }
