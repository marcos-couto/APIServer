module.exports = app => {
  const controller = app.methods.order;

  app.route('/api/v1/orders')
    .get(controller.listOrders)
    .post(controller.saveOrders);

  app.route('/api/v1/orders/:orderId')
     .delete(controller.removeOrders)
     .put(controller.updateOrders);
}
