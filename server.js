if (Meteor.isServer) {
    Meteor.startup(function () {
      Messages.remove({});
    });
}