angular.module('termCommentsStoreService', ['commentResource']).
  service('termCommentsStore', ['Comment', function (Comment) {
    'use strict';

    this.mapTermComments = {};

    this.getCommentsForTerm = function (id) {
      this.mapTermComments[id] = this.mapTermComments[id] || Comment.query({termId: id});

      return this.mapTermComments[id];
    };

    this.addCommentToTerm = function (id, comment) {
      if (!comment.createdTimestamp) comment.createdTimestamp = Date.now();
      if (!comment.termId) comment.termId = id;

      Comment.save({termId: id}, comment, function (value) {
        comment.id = value.id
      });

      this.mapTermComments[id] = this.mapTermComments[id] || [];
      this.mapTermComments[id].push(comment);
    };
  }]);
