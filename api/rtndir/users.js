module.exports = app => {
  const controller = app.methods.users;

  app.route('/api/v1/users')
    .get(controller.listUsers)
    .post(controller.saveUsers);

  app.route('/api/v1/users/:userId')
     .delete(controller.removeUsers)
     .put(controller.updateUsers);
}
