# -*- coding: utf-8 -*-

"""TODO(chirayu): Add docs.
"""

import webapp2

import config
import rest_handler

import models
import comments
import terms


def get_wsgi_app():
  RestProtoJsonRoute = rest_handler.RestProtoJsonRoute
  routes = [
      RestProtoJsonRoute('/api/terms/<id:\d+>',
                         name='termsById',
                         request_type=models.Term,
                         response_type=models.Term,
                         handler=terms.term_handler,
                         defaults=dict(id=None)),
      RestProtoJsonRoute('/api/terms',
                         name='terms',
                         request_type=models.Term,
                         response_type=models.Term,
                         handler=terms.term_handler),
      RestProtoJsonRoute('/api/terms/<termId:\d+>/comments',
                         name='commentsByTermId',
                         request_type=models.Comment,
                         response_type=models.Comment,
                         handler=comments.comment_handler,
                         defaults=dict(termId=None)),
      ]
  wsgi_app = webapp2.WSGIApplication(routes, debug=config.debug)
  return wsgi_app


wsgi_app = get_wsgi_app()
