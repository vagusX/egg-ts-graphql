export default app => {
  app.beforeStart(async () => {
    await app.model.sync()
  })
}
