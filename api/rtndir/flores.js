module.exports = app => {
  const controller = app.methods.flores;

  app.route('/api/v1/flores')
    .get(controller.listFlores)
    .post(controller.saveFlores);

  app.route('/api/v1/flores/:produtoId')
    .delete(controller.removeFlores)
    .put(controller.updateFlores);

    

}
