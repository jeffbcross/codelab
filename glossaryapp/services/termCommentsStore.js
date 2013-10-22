angular.module('glossaryApp')
  .factory('Comments', ['$resource', 'COMMENTS_PATH', function ($resource, COMMENTS_PATH) {
    return $resource(COMMENTS_PATH, {termId:'@termId'});
  }])
  .service('glTermCommentsStore', ['Comments', function (Comments) {
    this.mapTermComments = {};

    this.getCommentsForTerm = function (id) {
      this.mapTermComments[id] = this.mapTermComments[id] || Comments.query({termId: id});

      return this.mapTermComments[id];
    };

    this.addCommentToTerm = function (id, comment) {
      if (!comment.createdTimestamp) comment.createdTimestamp = new Date().getTime();
      if (!comment.termId) comment.termId = id;

      Comments.save(comment, function (value) {
        comment.id = value.id
      });

      this.mapTermComments[id] = this.mapTermComments[id] || [];
      this.mapTermComments[id].push(comment);
    };
  }]);
