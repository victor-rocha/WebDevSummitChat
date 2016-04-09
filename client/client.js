if (Meteor.isClient) {
  
  var nome = "WebDevUser" + Math.floor((Math.random() * 100) + 1)

  Template.registerHelper('formatDate', function(date) {
    return moment(date).format('hh:mm');
  });

  Template.mensagens.helpers({
      mensagensUsuarios: function() {
          return Messages.find({}, { sort: { time: -1}});
      },
      counter: function(){
        return Messages.find().count();
      }
  });

  Template.bemvindo.helpers({
    nome: function(){
      return nome;
    }
  });

  Template.input.events = {
    'keydown input#message' : function (event) {
      if (event.which == 13) {
        gravaMensagem();
      }
    },
    'click #btnEnviar': function(event){
      event.preventDefault();
      gravaMensagem();
    }
  };

  gravaMensagem = function(){
    var message = $('#message');
      if (message.value != '') {
        Messages.insert({ nome: nome, mensagem: $(message).val(), data: Date.now() });
        document.getElementById('message').value = '';
        message.value = '';
      }
  }
}