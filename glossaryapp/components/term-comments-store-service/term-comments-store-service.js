angular.module('glossaryApp')
  .factory('glComment',
    ['$resource', 'COMMENTS_PATH',
    function ($resource, COMMENTS_PATH) {
      'use strict';
      return $resource(COMMENTS_PATH);
    }])
  .service('glTermCommentsStore',
    ['glComment',
    function (glComment) {
      'use strict';
      this.mapTermComments = {};

      this.getCommentsForTerm = function (id) {
        this.mapTermComments[id] = this.mapTermComments[id] || glComment.query({termid: id});

        return this.mapTermComments[id];
      };

      this.addCommentToTerm = function (id, comment) {
        if (!comment.createdTimestamp) comment.createdTimestamp = Date.now();
        if (!comment.termid) comment.termid = id;

        glComment.save(comment, function (value) {
          comment.id = value.id
        });

        this.mapTermComments[id] = this.mapTermComments[id] || [];
        this.mapTermComments[id].push(comment);
      };
    }]);
