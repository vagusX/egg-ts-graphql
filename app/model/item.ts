export function getItemAttrs(sequelize) {
  const { STRING, DATE, INTEGER, BOOLEAN } = sequelize;
  return {
    user_id: INTEGER,
    content: STRING(64),
    expire: DATE,
    priority: {
      type: INTEGER,
      defaultValue: 0
    },
    done: {
      type: BOOLEAN,
      defaultValue: false
    }
  }
}

export default (app) => {
  return app.model.define('item', getItemAttrs(app.Sequelize))
}
