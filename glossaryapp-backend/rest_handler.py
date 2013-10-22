# -*- coding: utf-8 -*-

import webapp2
import json
from protorpc import protojson


class Error(Exception): pass


# TODO(chirayu): Make request_type/response_type annotations on the handlers?
# response_type is unused but might be in the future.
def RestProtoJsonRoute(template, handler, request_type, response_type, methods=None, **kwargs):
  if methods is None: methods = []
  if hasattr(handler, "create"): methods.append("POST")
  if hasattr(handler, "delete"):
    raise NotImplementedError("rest_handler.RestProtoJsonRoute: DELETE not implemented.")
  if hasattr(handler, "get"):    methods.append("GET")
  if hasattr(handler, "set"):    methods.append("PUT")
  if not methods:
    raise Error("You must have at least one method on the handler.")

  def decode_proto(data):
    return protojson.decode_message(request_type, data)

  def encode_proto(msg):
    if msg is None:
      return ''
    elif isinstance(msg, list):
      msg_list = msg
      csv = ", ".join(protojson.encode_message(msg) for msg in msg_list)
      return "[" + csv + "]"
    else:
      return protojson.encode_message(msg)

  class RestJsonHandlerAdapter(webapp2.RequestHandler):
    def get(self, **params):
      result = handler.get(**params)
      self.response.write(encode_proto(result))

    def put(self, **params):
      data = decode_proto(self.request.body) if self.request.body else None
      result = handler.set(data, **params)
      self.response.write(encode_proto(result))

    def post(self, **params):
      data = decode_proto(self.request.body) if self.request.body else None
      result = handler.create(data, **params)
      self.response.write(encode_proto(result))

  return webapp2.Route(template,
                       handler=RestJsonHandlerAdapter,
                       methods=methods,
                       **kwargs)
