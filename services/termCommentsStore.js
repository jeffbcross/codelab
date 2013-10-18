angular.module('todoApp')
  .factory('Comments', ['$resource', 'COMMENTS_PATH', function ($resource, COMMENTS_PATH) {
    return $resource(COMMENTS_PATH);
  }])
  .service('tdTermCommentsStore', ['Comments', function (Comments) {
    this.mapTermComments = {};

    this.getCommentsForTerm = function (id) {
      this.mapTermComments[id] = this.mapTermComments[id] || Comments.query({termid: id});

      return this.mapTermComments[id];
    };

    this.addCommentToTerm = function (id, comment) {
      if (!comment.date) comment.date = new Date().getTime();
      if (!comment.termid) comment.termid = id;

      Comments.save(comment, function (value) {
        comment.id = value.id
      });

      this.mapTermComments[id] = this.mapTermComments[id] || [];
      this.mapTermComments[id].push(comment);
    };
  }]);
