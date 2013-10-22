# -*- coding: utf-8 -*-

"""WSGI middleware to configure appstats.

Refer: https://developers.google.com/appengine/docs/python/tools/appengineconfig
"""

__author__ = "chirayu@google.com (Chirayu Krishnappa)"


def _add_appengine_stats(wsgi_app):
  """Adds middleware to capture stats via AppStats.

  You should enable AppStats by setting "appstats: on" under builtins in
  app.yaml.
  """
  try:
    from google.appengine.ext.appstats import recording
  except ImportError:
    pass
  else:
    wsgi_app = recording.appstats_wsgi_middleware(wsgi_app)
  return wsgi_app


def webapp_add_wsgi_middleware(wsgi_app):
  return _add_appengine_stats(wsgi_app)
