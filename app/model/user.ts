export function getUserAttrs(sequelize) {
  const { STRING } = sequelize;
  return {
    name: STRING(30),
    password: STRING(32)
  }
}

export default (app) => {
  return app.model.define('user', getUserAttrs(app.Sequelize))
}
