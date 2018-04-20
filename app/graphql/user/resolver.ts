export default {
  Query: {
    user(_, { id }, ctx) {
      return ctx.connector.user.fetchById(id)
    },
    tags(_, __, ctx) {
      return ctx.connector.tag.fetchRecommandation()
    }
  }
}
