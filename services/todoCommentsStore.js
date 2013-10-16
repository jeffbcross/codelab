angular.module('todos')
  .service('tdTodoCommentsStore', ['Comments', function (Comments) {
    var mapTodoComments = {};

    this.getCommentsForTodo = function (id) {
      mapTodoComments[id] = mapTodoComments[id] || Comments.get({todoid: id});
      return mapTodoComments[id];
    }
  }]);
