angular.module('todos')
  .service('tdTodoCommentsStore', ['Comments', function (Comments) {
    this.mapTodoComments = {};

    this.getCommentsForTodo = function (id) {
      this.mapTodoComments[id] = this.mapTodoComments[id] || Comments.query({todoid: id});

      return this.mapTodoComments[id];
    };

    this.addCommentToTodo = function (id, comment) {
      if (!comment.date) comment.date = new Date().getTime();

      Comments.save({todoid: id}, comment, function (value) {
        comment.id = value.id
      });

      this.mapTodoComments[id] = this.mapTodoComments[id] || [];
      this.mapTodoComments[id].push(comment);
    };
  }]);
