import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.post('/api/auth/login', controller.auth.login);
  router.post('/api/auth/register', controller.auth.register);

  router.resources('users', '/api/users', app.controller.user);
};
