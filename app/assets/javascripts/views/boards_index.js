TrelloClone.Views.BoardsIndex = Backbone.View.extend({
  template: JST['boards/index'],

    initialize: function () {
      this.listenTo(
        this.collection,
        'add remove change:title',
        this.render
      );
    },

    render: function () {
      var renderedContent = this.template();
      this.$el.html(renderedContent);

      this.collection.each(function (board) {
        var indexItem = new TrelloClone.Views.BoardsIndexItem({
          model: board
        });
        debugger;
        this.$('ul').append(indexItem.render().$el);
      }.bind(this));

      return this;
    }
});
