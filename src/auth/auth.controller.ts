import {
  Controller,
  Post,
  Put,
  Body,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { auth, firestore } from '../firebase/firebase';

@Controller('auth')
export class AuthController {
  @Post('login')
  async login(@Body() user: UserDetails) {
    const firestoreUser = await firestore.doc(`users/${user.teamNumber}`).get();
    if (!firestoreUser.exists) {
      throw new HttpException('User does not exist', HttpStatus.BAD_REQUEST);
    }
    if (firestoreUser.data().password !== user.password) {
      throw new HttpException('Password is incorrect', HttpStatus.BAD_REQUEST);
    }
    return await auth.createCustomToken(user.teamNumber);
  }

  @Put('signup')
  async signUp(@Body() user: UserDetails) {
    if (user.teamNumber.match('^\\d{1,5}[a-zA-Z]{1}$') !== null) {
      throw new HttpException(
        'Team number not correctly formatted',
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    if (user.password.length < 10) {
      throw new HttpException(
        'Password must be at least 10 characters long',
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    if ((await firestore.doc(`users/${user.teamNumber}`).get()).exists) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }
    await auth.createUser({
      disabled: false,
      displayName: user.teamNumber,
      uid: user.teamNumber,
      photoURL:
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
      password: user.password,
      email: `${user.teamNumber}@vex.com`,
    });
    await firestore.doc(`users/${user.teamNumber}`).set({
      photoURL:
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
      displayName: user.teamNumber,
      password: user.password,
    });
    return await auth.createCustomToken(user.teamNumber);
  }
}

interface UserDetails {
  teamNumber: string;
  password: string;
}
