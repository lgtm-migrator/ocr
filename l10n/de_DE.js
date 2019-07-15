OC.L10N.register(
    "ocr",
    {
    "Afrikaans" : "Afrikaans",
    "Arabic" : "Arabisch",
    "Azerbaijani" : "Aserbaidschanisch",
    "Belarusian" : "Weissrussisch",
    "Bengali" : "Bengalisch",
    "Bulgarian" : "Bulgarisch",
    "Catalan" : "Katalanisch",
    "Czech" : "Tschechisch",
    "Chinese" : "Chinesisch",
    "Traditional Chinese" : "Traditionelles Chinesisch",
    "Cherokee" : "Cherokee",
    "Danish" : "Dänisch",
    "German" : "Deutsch",
    "Greek" : "Griechisch",
    "English" : "Englisch",
    "English (Old)" : "Mittelenglisch (Alt)",
    "Esperanto" : "Esperanto",
    "Esperanto alternative" : "Esperanto alternativ",
    "Math" : "Mathematisch (Gleichungserkennung)",
    "Estonian" : "Estnisch",
    "Basque" : "Baskisch",
    "Persian (Farsi)" : "Persisch (Farsi / Iran)",
    "Finnish" : "Finnisch",
    "French" : "Französisch",
    "Frankish" : "Altfränkisch",
    "French (Old)" : "Altfranzösisch",
    "Galician" : "Galicisch",
    "Ancient Greek" : "Altgriechisch",
    "Hebrew" : "Hebräisch",
    "Hindi" : "Hindi",
    "Croatian" : "Kroatisch",
    "Hungarian" : "Ungarisch",
    "Indonesian" : "Indonesisch",
    "Icelandic" : "Isländisch",
    "Italian" : "Italienisch",
    "Italian (Old)" : "Altitalienisch",
    "Japanese" : "Japanisch",
    "Kannada" : "Kanaresisch",
    "Korean" : "Koreanisch",
    "Latvian" : "Lettisch",
    "Lithuanian" : "Litauisch",
    "Malayalam" : "Malayalam",
    "Macedonian" : "Mazedonisch",
    "Maltese" : "Maltesisch",
    "Malay" : "Malaiisch",
    "Dutch" : "Niederländisch",
    "Norwegian" : "Norwegisch",
    "Polish" : "Polnisch",
    "Portuguese" : "Portugiesisch",
    "Romanian" : "Rumänisch",
    "Russian" : "Russisch",
    "Slovakian" : "Slovakisch",
    "Slovenian" : "Slowenisch",
    "Spanish" : "Spanisch",
    "Old Spanish" : "Altspanisch",
    "Albanian" : "Albanisch",
    "Serbian (Latin)" : "Serbisch (Latein)",
    "Swahili" : "Swahili (Suaheli)",
    "Swedish" : "Schwedisch",
    "Tamil" : "Tamilisch",
    "Telugu" : "Telugu",
    "Tagalog" : "Tagalog",
    "Thai" : "Thailändisch",
    "Turkish" : "Türkisch",
    "Ukrainian" : "Ukrainisch",
    "Vietnamese" : "Vietnamesisch",
    "OCR" : "Texterkennung",
    "Target file already exists:" : "Zieldatei bereits vorhanden:",
    "An unexpected error occured during the upload of the processed file." : "Ein unerwarteter Fehler trat während des Hochladens der verarbeiteten Datei auf.",
    "An unexpected error occured during the deletion of the original file." : "Ein unerwarteter Fehler trat beim Löschen der Ursprungsdatei auf.",
    "An unexpected error occured during Tesseract processing." : "Ein unerwarteter Fehler trat bei der Verarbeitung durch Tesseract auf.",
    "PDF does not contain any Pages to process." : "PDF enthält keine Seiten zum Verarbeiten.",
    "An unexpected error occured during pdf processing." : "Ein unerwarteter Fehler trat beim Verarbeiten der PDF auf.",
    "OCR processing failed:" : "Texterkennung fehlgeschlagen:",
    "No file selected." : "Keine Datei ausgewählt",
    "MIME type not supported." : "MIME-Typ nicht unterstützt.",
    "Press to select" : "Zum Auswählen drücken",
    "No matches found" : "Keine Übereinstimmungen gefunden",
    "Select language" : "Sprache wählen",
    "Process" : "Verarbeiten",
    "PDF files and a large number of files may take a very long time." : "PDF-Dateien und eine große Anzahl an Dateien können sehr viel Zeit in Anspruch nehmen.",
    "{file}/{files} Files successfully processed" : "{file}/{files} Dateien erfolgreich verarbeitet",
    "_%n file is being processed:_::_%n files are being processed:_" : ["%n Datei wird verarbeitet:","%n Dateien werden verarbeitet:"],
    "_%n file_::_%n files_" : ["%n Datei","%n Dateien"],
    "Optical character recognition" : "Texterkennung",
    "Text recognition for your images and pdf files" : "Texterkennung für Ihre Bilder und PDF-Dateien",
    "# Description\n\nNextcloud OCR (optical character recognition) processing for images and PDF with tesseract-js brings OCR capability to your Nextcloud.\nThe app uses tesseract-js in the browser in order to process images (png, jpeg, tiff) and PDFs and saves the output file to the source folder in nextcloud. That for example enables you to search in it.\n\n## Prerequisites, Requirements and Dependencies\nThe OCR app has some prerequisites:\n\n - [Nextcloud 15 or 16](https://nextcloud.com/)\n\n - Only supported on latest modern web browsers (Chrome, Edge, Firefox, Opera, Safari*)\n\n\n_* On Safari there is currently a problem with the [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP), that requires an Administrator to set the 'script-src' to 'unsafe-eval' such that the app works properly. Because this is quite insecure the app itself does not set it and recommends to decide that on your own risk (please make sure, that you know what CSP is and what e.g. unsafe-eval causes)._\n\n## Installation\nInstall the app from the [Nextcloud AppStore](http://apps.nextcloud.com) or download the release package from github (**NOT** the sources) and place the content in **nextcloud/apps/ocr/**.\n\n## Disclaimer\nThe software is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR\nCONDITIONS OF ANY KIND, either express or implied.\n\n## Consideration\nThe version 3 and earlier versions are not supported/maintained anymore by the author. So for asynchronous background processing please fork the repository and use the \"not-maintained\" branch to work on improvements. The author wasn't able to support it because of too much effort." : "# Beschreibung\n\nNextcloud OCR (Optical Character Recognition - Texterkennung) verarbeitet Bilder und PDF mit tesseract.js und bringt OCR-Fähigkeiten in Ihre Nextcloud.\nDie browserbasierte App nutzt tesseract.js, um Bilder (png, jpeg, tiff) und PDF zu verarbeiten. Das Ergebnis wird im Quellordner in Nextcloud gespeichert. Dadurch entsteht beispielsweise die Möglichkeit den Inhalt zu durchsuchen.\n\n## Voraussetzungen und Abhängigkeiten\nDie OCR-App hat ein paar Voraussetzungen:\n\n- [Nextcloud 15 oder 16](https://nextcloud.com/)\n\n- Ausschließlich auf den neuesten Browsern unterstützt (Chrome, Edge, Firefox, Opera, Safari*)\n\n\n_* Auf Safari existiert ein Problem mit der [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP). Daher wird ein Administrator benötigt, um die 'script-src' auf 'unsafe-eval' zu setzen, damit die App normal funktioniert. Da dies ziemlich unsicher sein kann, setzt die App dies nicht selbstständig, sondern empfiehlt die Risiken selbst einzuschätzen (bitte stellen Sie sicher, dass sie wissen was die CSP ist und was bspw. unsafe-eval bewirkt)._\n\n## Installation\nInstallieren Sie die App aus dem [Nextcloud AppStore](http://apps.nextcloud.com) oder laden Sie ein Release-Package von GitHub (**NICHT** die Sources) und kopieren Sie den Inhalt nach **nextcloud/apps/ocr/**.\n\n## Haftungsausschluss\nDie Software wird OHNE GEWÄHRLEISTUNGEN ODER BEDINGUNGEN JEGLICHER ART verteilt. \n\n## Zu beachten\nDie Version 3 und frühere Versionen werden nicht mehr vom Autor unterstützt oder gewartet. Für asynchrone Verarbeitung im Hintergrund sollte das Repository geforked und der \"not-maintained\" Branch für das weitere Arbeiten an Verbesserungen genutzt werden. Der Autor war selbst nicht ind er Lage, aufgrund eines zu hohen Aufwandes, Unterstützung zu bieten."
},
"nplurals=2; plural=(n != 1);");
