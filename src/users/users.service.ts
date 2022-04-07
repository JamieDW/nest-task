import { Injectable } from '@nestjs/common';

export class UsersService {
  getUsers(): user[] {
    return [
      {
        id: 1,
        firstName: 'Oliver',
        lastName: 'Gartland',
      },
      {
        id: 2,
        firstName: 'Anna',
        lastName: 'Watts',
      },
      {
        id: 3,
        firstName: 'Andy',
        lastName: 'Brown',
      },
      {
        id: 4,
        firstName: 'Maisie',
        lastName: 'Curtis',
      },
      {
        id: 5,
        firstName: 'Jonathan',
        lastName: 'Curtis',
      },
      {
        id: 6,
        firstName: 'Jonathan',
        lastName: 'Wright',
      },
      {
        id: 7,
        firstName: 'Jennifer',
        lastName: 'Tomkinson',
      },
      {
        id: 8,
        firstName: 'Rich',
        lastName: 'Richman',
      },
    ];
  }

  getUsersAlphabetically(): user[] {

      let sortedUsers = this.getUsers().sort((a, b) => {
        const result = a.firstName.localeCompare(b.firstName);

        // If same firstname order by lastname;
        return result !== 0 ?
            result : 
            a.lastName.localeCompare(b.lastName);
      })

      return sortedUsers;
  }

  getUserById(id): user {
      return this.getUsers().find(user => user.id == id);
  }

  
}
