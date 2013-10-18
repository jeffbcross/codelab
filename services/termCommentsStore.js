angular.module('todoApp')
  .factory('Comments', ['$resource', 'COMMENTS_PATH', function ($resource, COMMENTS_PATH) {
    return $resource(COMMENTS_PATH);
  }])
  .service('tdTermCommentsStore', ['Comments', function (Comments) {
    this.mapTodoComments = {};

    this.getCommentsForTerm = function (id) {
      this.mapTodoComments[id] = this.mapTodoComments[id] || Comments.query({todoid: id});

      return this.mapTodoComments[id];
    };

    this.addCommentToTerm = function (id, comment) {
      if (!comment.date) comment.date = new Date().getTime();
      if (!comment.todoid) comment.todoid = id;

      Comments.save(comment, function (value) {
        comment.id = value.id
      });

      this.mapTodoComments[id] = this.mapTodoComments[id] || [];
      this.mapTodoComments[id].push(comment);
    };
  }]);
