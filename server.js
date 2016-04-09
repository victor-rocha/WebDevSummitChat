if (Meteor.isServer) {
    Meteor.startup(function () {
      Messages.remove({});
    });
      var nome = "WebDevUser" + Math.floor((Math.random() * 100) + 1)
}