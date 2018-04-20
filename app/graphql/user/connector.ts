import DataLoader from 'dataloader'

export default class UserConnector {
  private loader: any;
  private ctx: any;

  constructor(ctx) {
    this.ctx = ctx
    this.loader = new DataLoader(this.fetch.bind(this))
  }

  fetch(ids) {
    const users = this.ctx.app.model.User.findAll({
      where: {
        id: {
          $in: ids
        }
      }
    }).then(us => us.map(u => u.toJSON()))
    return users
  }

  fetchByIds(ids) {
    return this.loader.loadMany(ids)
  }

  fetchById(id) {
    return this.loader.load(id)
  }
}
