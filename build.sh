#!/bin/bash
java -jar compiler.jar --compilation_level ADVANCED_OPTIMIZATIONS --js glossaryapp/app.js --js glossaryapp/terms/terms-controller.js --js glossaryapp/terms/detail/term-detail-controller.js --js_output_file glossaryapp/app_compiled.js
