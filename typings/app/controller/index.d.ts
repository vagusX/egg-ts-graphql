// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import Auth from '../../../app/controller/auth';
import Home from '../../../app/controller/home';
import User from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    auth: Auth;
    home: Home;
    user: User;
  }
}
