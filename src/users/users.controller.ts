import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { NotFoundException} from '@nestjs/common'

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}   

    @Get()
    getUsers(): user[] {
        return this.usersService.getUsersAlphabetically();
    }

    @Get(':id')
    getUserById(@Param('id') id): user {

        let user = this.usersService.getUserById(id);

        if (!user) {
            throw new NotFoundException()
        }

        return user;
    }
    
}
