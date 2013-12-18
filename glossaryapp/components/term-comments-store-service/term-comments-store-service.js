goog.provide('glossaryApp.termCommentsStoreService.module');
goog.provide('glossaryApp.termCommentsStoreService.termCommentsStoreService');

goog.require('glossaryApp.commentResource.module');

goog.scope(function() {

var TermCommentsStoreService =
    /**
     * @constructor
     * @param {glossaryApp.commentResource.Comment} Comment
     */
    glossaryApp.termCommentsStoreService.termCommentsStoreService =
    function(Comment) {
      /**
       * Comment resource type used to fetch comments
       * @type {angular.Resource}
       * @private
       */
      this.Comment_ = Comment;

      /**
       * @type {Object.<string, Array.<glossaryApp.commentResource.Comment>>}
       **/
      this.mapTermComments = {};
    };

TermCommentsStoreService.prototype.getCommentsForTerm = function(id) {
  this.mapTermComments[id] = this.mapTermComments[id] ||
      this.Comment_.query({termId: id});

  return this.mapTermComments[id];
};

TermCommentsStoreService.prototype.addCommentToTerm = function(id, comment) {
  if (!comment.createdTimestamp) comment.createdTimestamp = goog.now();
  if (!comment.termId) comment.termId = id;

  this.Comment_.save({termId: id}, comment, function(value) {
    comment.id = value.id;
  });

  this.mapTermComments[id] = this.mapTermComments[id] || [];
  this.mapTermComments[id].push(comment);
};

glossaryApp.termCommentsStoreService.module = angular.module(
      'termCommentsStoreService',
      [glossaryApp.commentResource.module.name]).
service(
    'termCommentsStore',
    glossaryApp.termCommentsStoreService.termCommentsStoreService);

}); // goog.scope
