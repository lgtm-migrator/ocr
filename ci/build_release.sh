#!/bin/bash

# Create release folder
mkdir release

# Copy everything to release folder
cp -R appinfo release/appinfo
cp -R css release/css
cp -R js release/js
cp -R img release/img
cp -R l10n release/l10n
cp -R lib release/lib
cp -R templates release/templates
cp AUTHORS.md release/AUTHORS.md
cp COPYING release/COPYING
cp README.md release/README.md

# JS
mkdir release/vendor
mkdir release/vendor/tesseract.js
mkdir release/vendor/pdf.js
mkdir release/vendor/pdf-lib
mkdir release/vendor/tessdata

# Copy js artifacts
cp -R js/node_modules/tesseract.js/dist/. release/vendor/tesseract.js/
cp node_modules/tesseract.js-core/tesseract-core.wasm.js release/vendor/tesseract.js/tesseract-core.wasm.js
cp node_modules/tesseract.js-core/tesseract-core.js release/vendor/tesseract.js/tesseract-core.js
cp node_modules/tesseract.js-core/tesseract-core.wasm release/vendor/tesseract.js/tesseract-core.wasm
cp node_modules/tesseract.js-core/tesseract-core.asm.js release/vendor/tesseract.js/tesseract-core.asm.js
cp node_modules/pdfjs-dist/build/pdf.min.js release/vendor/pdf.js/pdf.min.js
cp node_modules/pdfjs-dist/build/pdf.worker.min.js release/vendor/pdf.js/pdf.worker.min.js
cp node_modules/pdf-lib/dist/pdf-lib.min.js release/vendor/pdf-lib/pdf-lib.min.js
