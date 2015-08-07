TrelloClone.Routers.Router = Backbone.Router.extend({
  initialize: function (boards, $rootEl) {
      this.boards = boards;
      this.$rootEl = $rootEl;
    },

    routes: {
      '': 'index',
      'boards/:id': 'show',
    },

    index: function () {
      this.$rootEl.empty();
    },

    show: function (id) {
      var board = this.boards.getOrFetch(id);
      var boardShowView = new TrelloClone.Views.boardShow({ model: board });

      this._swapView(boardShowView);
    },

    list: function (boardId, listId) {
      var list = this.boards.getOrFetchlist(boardId, listId);
      var entryShowView = new TrelloClone.Views.EntryShow({ model: entry });

      this._swapView(entryShowView);
    },

    _swapView: function (view) {
      this._currentView && this._currentView.remove();
      this._currentView = view;
      this.$rootEl.html(view.$el);
      view.render();
    }
});

