# Ocr

Ocr (Optical Character Recognition) is used in Receipt Wrangler to read the text from receipts. Receipt Wrangler
currently supports two different OCR engines: Tesseract and EasyOCR.

## Tesseract

Tesseract is the default engine for Receipt Wrangler. In general, it is faster, but less accurate than EasyOCR.  
On a Ryzen 7 7840U (8 core/16 thread 5.1ghz boost) laptop, it takes about 2 seconds to process the image, and run OCR
from a scan from the mobile app.

Tesseract performs best with app screenshots, or photos with very little noise, and alignment(skew) issues.

## EasyOCR

EasyOCR is much slower than tesseract, but also much more accurate on photos of receipts, or receipts with more noise,
or alignment(skew) issues. On the same Ryzen laptop from above, it takes about 10 seconds to process the image, and run
OCR with much better results.

EasyOCR is an all around performer, with the sacrifice of speed. It is recommended to use this engine if the instance
has a faster CPU, or prefers higher accuracy.
