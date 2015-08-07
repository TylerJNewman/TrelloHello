window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $rootEl = $('#content');
    // var $sidebar = $('#sidebar');
    var boards = new TrelloClone.Collections.Boards();
    boards.fetch();
    // debugger

    // install the sidebar external to the router as it is
    // independent of any routing
    var boardsIndexView = new TrelloClone.Views.BoardsIndex({
      collection: boards
    });
    // $sidebar.html(boardsIndexView.render().$el);

    new TrelloClone.Routers.Router(boards, $rootEl);
    Backbone.history.start();
  }
};

$(document).ready(function(){
  TrelloClone.initialize();
});
