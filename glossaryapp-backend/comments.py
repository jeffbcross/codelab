# -*- coding: utf-8 -*-

import logging
logger = logging.getLogger(__name__)

import models
import terms
import utils


class Error(Exception):
  pass


def _get_all_for_term(termId):
  return [item.msg for item in models.CommentModel.QueryByTermId(termId)]


class CommentHandler(object):
  def get(self, termId):
    return _get_all_for_term(termId)

  def create(self, msg, termId):
    termId = int(termId)
    msg.createdTimestamp = utils.timestamp_utcnow()
    msg.termId = termId
    # verify termId
    if terms._get_by_id(msg.termId) is None:
      # What's our error API supposed to be?
      return None
    comment_model = models.CommentModel(msg=msg)
    comment_model.put()
    return msg


comment_handler = CommentHandler()
