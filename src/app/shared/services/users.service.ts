import { Injectable } from "@angular/core";
import { AddUserQuery, CountryCodeType, User } from "../models/user.model";
import { v4 as idGenerator } from 'uuid';

@Injectable({
    providedIn: "root"
})

export class UsersService {
    users: User[] = [
        {
            id: "8sadjasd",
            name: "Alex",
            surname: "Smith",
            country: CountryCodeType.LV
        },
        {
            id: "8sadj343w",
            name: "John",
            surname: "Travolta",
            country: CountryCodeType.LT
        }
    ]

    getUsers(): User[] {
        return this.users
    }

    addUser(query: AddUserQuery): User[] {
        const newUser = {
            id: idGenerator(),
            ...query
        }

        this.users.push(newUser);
        return this.users

    }

}