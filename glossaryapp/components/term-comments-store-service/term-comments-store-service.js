angular.module('glossaryApp')
  .factory('Comments',
    ['$resource', 'COMMENTS_PATH',
    function ($resource, COMMENTS_PATH) {
      'use strict';
      return $resource(COMMENTS_PATH);
    }])
  .service('glTermCommentsStore',
    ['Comments',
    function (Comments) {
      'use strict';
      this.mapTermComments = {};

      this.getCommentsForTerm = function (id) {
        this.mapTermComments[id] = this.mapTermComments[id] || Comments.query({termid: id});

        return this.mapTermComments[id];
      };

      this.addCommentToTerm = function (id, comment) {
        if (!comment.createdTimestamp) comment.createdTimestamp = Date.now();
        if (!comment.termid) comment.termid = id;

        Comments.save(comment, function (value) {
          comment.id = value.id
        });

        this.mapTermComments[id] = this.mapTermComments[id] || [];
        this.mapTermComments[id].push(comment);
      };
    }]);
