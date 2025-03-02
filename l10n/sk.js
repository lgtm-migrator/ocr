OC.L10N.register(
    "ocr",
    {
    "OCR" : "OCR",
    "Optical character recognition" : "Optické rozpoznávanie znakov",
    "Text recognition for your images" : "Rozpoznanie textu pre vaše obrázky",
    "# Description\n\nNextcloud OCR (optical character recognition) processing for images with tesseract-js brings OCR capability to your Nextcloud.\nThe app uses tesseract-js in the browser in order to process images (png, jpeg, tiff, bmp) and saves the output PDF file to the source folder in nextcloud. That for example enables you to search in it.\n\n## Prerequisites, Requirements and Dependencies\nThe OCR app has some prerequisites:\n\n - [Nextcloud 16 and up](https://nextcloud.com/)\n\n - Only supported on latest modern web browsers (Chrome, Edge, Firefox, Opera, Safari*)\n\n - Tesseract traineddata needs about 200 MB space on your server (will be installed automatically).\n\n\n_* On Safari there is currently a problem with the [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP), that requires an Administrator to set the 'script-src' to 'unsafe-eval' such that the app works properly. Because this is quite insecure the app itself does not set it and recommends to decide that on your own risk (please make sure, that you know what CSP is and what e.g. unsafe-eval causes)._\n\n## Installation\nInstall the app from the [Nextcloud App Store](https://apps.nextcloud.com/apps/ocr) or download the release package from github (**NOT** the sources) and place the content in **nextcloud/apps/ocr/**.\n\n## Disclaimer\nThe software is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR\nCONDITIONS OF ANY KIND, either express or implied.\n\n## Note\nThe version 3 and earlier versions are not supported/maintained anymore by the author. So for asynchronous background processing please fork the repository and use the \"not-maintained\" branch to work on improvements. The author wasn't able to support it because of too much effort.\nMoreover this project is based on a webassembly port of tesseract. The maintainer stopped working on PDF processing in this app and will start working on separate app for pdf handling." : "# Popis\n\nNextcloud OCR (optické rozpoznávanie znakov) spracovanie obrázkov pomocou tesseract-js, pridáva do Nextcloud funkciu OCR.\nAplikácia používa na spracovanie obrázkov (png, jpeg, tiff, bmp) v prehliadači tesseract-js a výstupný súbor PDF uloží do zdrojového priečinka Nextcloudu. To napríklad umožňuje vyhľadávanie podľa textu v obrázku.\n\n## Predpoklady, požiadavky a závislosti\nAplikácia OCR má niekoľko požiadaviek:\n\n - [Nextcloud 16 a novší](https://nextcloud.com/)\n\n - Podpora iba v najnovších moderných webových prehľadávačoch (Chrome, Edge, Firefox, Opera, Safari*)\n\n - Tesseract pre svoju databázu rozoznávaných znakov vyžaduje približne 200 MB na serveri (bude nainštalovaná automaticky).\n\n\n_* V prehliadači Safari je v súčasnosti problém s [Pravidlami zabezpečenia obsahu] (https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP). Aby aplikácia fungovala správne, správca by mal nastaviť „skript-src“ na „unsafe-eval“. Pretože to nie je bezpečné, sama aplikácia to nenastavuje a odporúča vám to rozhodnúť na vlastné riziko (uistite sa, že viete, čo je CSP a čo napríklad spôsobuje „unsafe-eval“)._\n\n## Inštalácia\nNainštalujte aplikáciu z [Nextcloud AppStore] (https://apps.nextcloud.com/apps/ocr) alebo si stiahnite balíček vydania z githubu (**NIE** zdrojové kódy) a obsah umiestnite do **nextcloud/apps/OCR/**.\n\n## Zrieknutie sa zodpovednosti\nSoftvér je distribuovaný \"TAK, AKO JE\", BEZ AKÝCHKOĽVEK ZÁRUK ALEBO PODMIENOK AKÉHOKOĽVEK DRUHU, či už vyjadrených alebo predpokladaných.\n\n## Poznámka\nVerzia 3 a staršie verzie už nie sú autorom podporované/udržiavané. Takže pre asynchrónne spracovanie na pozadí si prípadne vytvorte fork a pre vylepšovanie použite vetvu „neudržiavané“. Autor nemal kapacitu túto variantu podporovať, pretože bola časovo príliš náročná..\nOkrem toho je tento projekt založený na bráne tesseract od webassembly. Správca projektu prestal pracovať na funkcii pre spracovane PDF a začne pracovať na samostatnej aplikácii na manipuláciu s PDF.",
    "Target file already exists:" : "Cieľový súbor už existuje:",
    "An unexpected error occurred during the load of your favorite languages. No language will be set instead." : "Počas načítania obľúbených jazykov sa vyskytla neočakávaná chyba. Namiesto toho nebude nastavený žiadny jazyk.",
    "An unexpected error occurred during the upload of the processed file." : "Počas nahrávania spracovaného súboru sa vyskytla neočakávaná chyba.",
    "An unexpected error occurred during the deletion of the original file." : "Počas odstraňovania pôvodného súboru sa vyskytla neočakávaná chyba.",
    "An unexpected error occurred during Tesseract processing." : "Počas spracovania v Tesseract sa vyskytla neočakávaná chyba.",
    "OCR processing failed:" : "Rospoznávanie textu z obrázku zlyhalo:",
    "MIME type not supported." : "Nepodporovaný MIME typ.",
    "Process" : "Spracovať",
    "A large number of files may take a very long time." : "Veľký počet súborov môže trvať veľmi dlho.",
    "{file}/{files} Files successfully processed" : "{file}/{files} Súbor(y)(ov) úspešne spracovaný(é)(ých)",
    "_%n file is being processed:_::_%n files are being processed:_" : ["Spracováva sa %n súbor.","Spracovávajú sa %n súbory.","Spracovávajú sa %n súbory.","Spracováva sa %n súborov."],
    "_Delete original file (image)_::_Delete original files (images)_" : ["Odstrániť pôvodný súbor (obrázok)","Odstrániť pôvodne súbory (obrázky)","Odstrániť pôvodne súbory (obrázky)","Odstrániť pôvodne súbory (obrázky)"],
    "_%n file_::_%n files_" : ["%n súbor","%n súbory","%n súbory","%n súborov"],
    "Afrikaans" : "afrikánčina",
    "Arabic" : "arabčina",
    "Azerbaijani" : "azerbajdžančina",
    "Belarusian" : "bieloruština",
    "Bengali" : "bengálčina",
    "Bulgarian" : "bulharčina",
    "Catalan" : "katalánčina",
    "Czech" : "čeština",
    "Chinese" : "čínština",
    "Traditional Chinese" : "tradičná čínština",
    "Cherokee" : "čerokézčina",
    "Danish" : "dánčina",
    "German" : "nemčina",
    "Greek" : "gréčtina",
    "English" : "angličtina",
    "English (Old)" : "stará angličtina",
    "Esperanto" : "esperanto",
    "Esperanto alternative" : "alternatívne esperanto",
    "Math" : "matematika",
    "Estonian" : "estónčina",
    "Basque" : "baskičtina",
    "Persian (Farsi)" : "perzština",
    "Finnish" : "fínčina",
    "French" : "francúzština",
    "Frankish" : "frankish",
    "French (Old)" : "stará francúzština",
    "Galician" : "galicijčina",
    "Ancient Greek" : "starogréčtina",
    "Hebrew" : "hebrejčina",
    "Hindi" : "hindčina",
    "Croatian" : "chorvátčina",
    "Hungarian" : "maďarčina",
    "Indonesian" : "indonézština",
    "Icelandic" : "isandčina",
    "Italian" : "taliančina",
    "Italian (Old)" : "stará taliančina",
    "Japanese" : "japončina",
    "Kannada" : "kanadčina",
    "Korean" : "korejčina",
    "Latvian" : "lotyščina",
    "Lithuanian" : "litovčina",
    "Malayalam" : "malajálamčina",
    "Macedonian" : "macedónčina",
    "Maltese" : "maltčina",
    "Malay" : "malajčina",
    "Dutch" : "holandčina",
    "Norwegian" : "nórština",
    "Polish" : "poľština",
    "Portuguese" : "portugalčina",
    "Romanian" : "rumunčina",
    "Russian" : "ruština",
    "Slovakian" : "slovenčina",
    "Slovenian" : "slovinčina",
    "Spanish" : "španielčina",
    "Spanish (Old)" : "Španielčina (Stará)",
    "Albanian" : "albánčina",
    "Serbian (Latin)" : "srbština (latin)",
    "Swahili" : "svahilčina",
    "Swedish" : "švédština",
    "Tamil" : "tamilčina",
    "Telugu" : "telugčina",
    "Tagalog" : "tagalčina",
    "Thai" : "thajčina",
    "Turkish" : "turečtina",
    "Ukrainian" : "ukrajinčina",
    "Vietnamese" : "vietnamčina",
    "Press enter to select" : "Vyberte stlačením klávesy Enter",
    "Press enter to remove" : "Odstráňte stlačením klávesu Enter",
    "Selected" : "Vybrané",
    "No matches found" : "Žiadne zhody nenájdené",
    "Select language" : "Vybrať jazyk",
    "Save" : "Uložiť",
    "An unexpected error occured during save of your favorite languages. Please try again." : "Pri ukladaní obľúbených jazykov sa vyskytla neočakávaná chyba. Prosím skúste znova.",
    "An unexpected error occured during load of your favorite languages. Please try again." : "Počas načítania obľúbených jazykov sa vyskytla neočakávaná chyba. Prosím skúste znova.",
    "An error occured during save of your favorite languages. Please check your input." : "Pri ukladaní obľúbených jazykov sa vyskytla chyba. Skontrolujte svoje zadanie.",
    "Selected languages will be preselected by default in the OCR dialog." : "Vyberte jazyky, ktoré budú predvybrané v OCR dialógu.",
    "Favorite languages" : "Často používané jazyky"
},
"nplurals=4; plural=(n % 1 == 0 && n == 1 ? 0 : n % 1 == 0 && n >= 2 && n <= 4 ? 1 : n % 1 != 0 ? 2: 3);");
