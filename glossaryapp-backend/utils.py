# -*- coding: utf-8 -*-

import datetime
import time

def datetime_to_timestamp(date_obj):
  return int(time.mktime(date_obj.timetuple()))

def timestamp_now():
  return datetime_to_timestamp(datetime.datetime.now())

def timestamp_utcnow():
  return datetime_to_timestamp(datetime.datetime.utcnow())
