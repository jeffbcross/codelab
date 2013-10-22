# -*- coding: utf-8 -*-

"""TODO(chirayu): add docs."""

__author__ = "chirayu@google.com (Chirayu Krishnappa)"

import logging
import os

is_dev_server = os.environ.get("SERVER_SOFTWARE", "").startswith("Development/")
is_trusted = os.environ.get("TRUSTED_IP_REQUEST", "0") == "1"

debug = is_dev_server
if debug:
  logging.getLogger().setLevel(logging.DEBUG)
