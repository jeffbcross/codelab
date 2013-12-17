#!/bin/bash
java -jar compiler.jar \
  --compilation_level ADVANCED_OPTIMIZATIONS \
  --language_in=ECMASCRIPT5_STRICT \
  --js_output_file glossaryapp/app_compiled.js \
  --js glossaryapp/app.js \
  --js glossaryapp/terms/terms-controller.js \
  --js glossaryapp/terms/detail/term-detail-controller.js \
  --js glossaryapp/components/comment-resource/comment-resource.js \
  --js glossaryapp/components/contenteditable/contenteditable.js \


