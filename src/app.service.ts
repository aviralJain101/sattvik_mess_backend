import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class AppService {
  googleLogin(req){

    if(!req.user){
      throw new NotFoundException('User not found');
    }

    let email = req.user.email;
    let domain = email.substring(email.lastIndexOf("@")+1);


    if(domain==="itbhu.ac.in" || domain==="iitbhu.ac.in"){
      return {
        message: 'User Info from Google',
        user: req.user
      }
    }
    else{
      throw new ForbiddenException('User is not authorised');
    }

  }

  getHello(): string {
    return 'Hello World!';
  }
}
