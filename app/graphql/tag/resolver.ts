export default {
  Item: {
    tags(root, _, ctx) {
      return ctx.connector.tag.fetchByItemId(root.id)
    }
  },
  Mutation: {
    attachTag(_, { itemID, tag }, ctx) {
      return ctx.connector.tag.attach(itemID, tag)
    },
    removeTag(_, { id }, ctx) {
      return ctx.connector.tag.remove(id)
    }
  }
}
