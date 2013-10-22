# -*- coding: utf-8 -*-

from protorpc import messages

import google.appengine.ext.ndb.msgprop
ndb = google.appengine.ext.ndb


package = "com.appspot.ng-codelab"


class Term(messages.Message):
  id  = messages.IntegerField(1, required=False)
  name  = messages.StringField(2, required=True)
  definition  = messages.StringField(3, required=False)
  creatorEmail  = messages.StringField(4, required=False)
  createdTimestamp  = messages.IntegerField(5, required=False)


class TermModel(ndb.Model):
  msg = ndb.msgprop.MessageProperty(
      Term,
      indexed_fields=[
          "name",
          "creatorEmail",
          ]
      )

  @classmethod
  def Get(cls, id):
    result = ndb.Key(cls, int(id)).get()
    result.msg.id = result.key.id()
    return result

  @classmethod
  def QueryAll(cls, limit=20):
    results = cls.query().fetch(limit)
    for result in results:
      result.msg.id = result.key.id()
    return results


class Comment(messages.Message):
  termId  = messages.IntegerField(1, required=False)
  text  = messages.StringField(2, required=True)
  definition  = messages.StringField(3, required=False)
  creatorEmail  = messages.StringField(4, required=False)
  createdTimestamp  = messages.IntegerField(5, required=False)


class CommentModel(ndb.Model):
  msg = ndb.msgprop.MessageProperty(
      Comment,
      indexed_fields=[
          "termId",
          ]
      )
  @classmethod
  def QueryByTermId(cls, termId, limit=100):
    termId = int(termId)
    results = cls.query(cls.msg.termId == termId).order(cls.msg.termId).fetch(limit)
    return results

