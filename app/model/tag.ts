export function getTagAttrs(sequelize) {
  const { STRING, INTEGER } = sequelize;
  return {
    item_id: INTEGER,
    content: STRING(64)
  }
}

export default (app) => {
  return app.model.define('tag', getTagAttrs(app.Sequelize))
}