export default {
  User: {
    items(root, _, ctx) {
      return ctx.connector.item.fetchByUserId(root.id)
    }
  },
  Mutation: {
    createItem(_, { userID, content, expire }, ctx) {
      return ctx.connector.item.create(userID, content, expire)
    },
    updateItem(_, { id, content, expire, done }, ctx) {
      return ctx.connector.item.update(id, content, expire, done)
    },
    deleteItem(_, { id }, ctx) {
      return ctx.connector.item.delete(id)
    }
  }
}
