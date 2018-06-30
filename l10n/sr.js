OC.L10N.register(
    "ocr",
    {
    "Saved." : "Сачувано.",
    "Saving languages failed:" : "Снимање језика није успело:",
    "The languages are not specified in the correct format." : "Језици нису наведени у исправном формату.",
    "Saving Redis settings failed:" : "Снимање Redis поставке није успело:",
    "The Redis settings are not specified in the right format." : "Redis поставке нису наведене у исправном формату.",
    "OCR" : "OCR",
    "OCR processing failed:" : "OCR процесирање није успело:",
    "No file selected." : "Фајл није одабран.",
    "MIME type not supported." : "MIME тип није подржан.",
    "_OCR processing for %n file failed. For details please go to your personal settings._::_OCR processing for %n files failed. For details please go to your personal settings._" : ["OCR процесирање %n фајла није успело. Идите у личне поставке за детаље.","OCR процесирање %n фајла није успело. Идите у личне поставке за детаље.","OCR процесирање %n фајлова није успело. Идите у личне поставке за детаље."],
    "OCR status could not be retrieved:" : "OCR статус не може да се дохвати:",
    "No languages available for OCR processing. Please make sure to configure the languages in the administration section." : "Ниједан језик није доступан за OCR процесирање. Молимо подесите језике у административној секцији.",
    "Available languages could not be retrieved:" : "Не могу да дохватим доступне језике:",
    "Process" : "Обради",
    "Replace" : "Замени",
    "_OCR started: %n new file in queue._::_OCR started: %n new files in queue._" : ["OCR почео: %n нови фајл на чекању.","OCR почео: %n новa фајлa на чекању.","OCR почео:  %n нових фајлова на чекању."],
    "_OCR: %n currently pending file in queue._::_OCR: %n currently pending files in queue._" : ["OCR: тренутно чека %n фајл","OCR: тренутно чека %n фајла","OCR: тренутно чека %n фајлова"],
    "No matches found." : "Нема поклапања.",
    "Select language" : "Одаберите језик",
    "OCR jobs could not be retrieved:" : "OCR послови не могу да се дохвате:",
    "The job for the following file object has been successfully deleted:" : "Посао за следеће фајл објекте је успешно избрисан:",
    "Error during deletion:" : "Грешка приликом брисања:",
    "Delete" : "Обриши",
    "No pending or failed OCR items found." : "Нема неуспелих ни OCR ставки на чекању.",
    "Refresh" : "Освежи",
    "Delete from queue" : "Избриши са чекања",
    "File" : "Фајл",
    "Status" : "Статус",
    "Log" : "Записник",
    "Replace by result" : "Замени резултатом",
    "Saved" : "Сачувано",
    "Please setup Redis in the administration settings first." : "Молимо прво подесите Redis у административним поставкама.",
    "The given settings key is empty." : "Дати кључ поставки је празан.",
    "The Redis host is not specified in the correct format." : "Redis домаћин није наведен у исправном формату.",
    "The Redis port number is not specified in the correct format." : "Redis број порта није наведен у исправном формату.",
    "The Redis DB is not specified in the correct format." : "Redis база није наведен у исправном формату.",
    "Wrong parameter." : "Погрешан параметар.",
    "Wrong MIME type." : "Погрешан MIME тип.",
    "Cannot replace shared files." : "Не могу да заменим дељене фајлове.",
    "Empty parameters passed." : "Прослеђени празни параметри.",
    "Cannot delete because of wrong owner." : "Не могу да обришем због погрешног власника.",
    "Cannot delete because of wrong ID." : "Не могу да обришем због погрешног ID-а.",
    "Reading the finished jobs from Redis went wrong." : "Читање завршених послова са Redis-а је пошло по злу.",
    "Temp file does not exist." : "Привремени фајл не постоји.",
    "OCR could not put processed file to the right target folder. If you selected the replace option, you can restore the file by using the trash bin." : "OCR не може да стави процесирани фајл у исправну одредишну фасциклу. Ако сте означили опцију за замену фајла, можете повратити фајл из канте за смеће.",
    "Could not add files to the Redis OCR processing queue." : "Не могу да додам фајлове у Redis OCR ред за процесирање.",
    "Temp file cannot be created." : "Привремени фајл не може бити направљен.",
    "Cannot delete temporary file during creation of temp file for Tesseract." : "Не могу да обришем привремени фајл за време прављења привременог фајла за Tesseract.",
    "Cannot create temporary file for Tesseract." : "Не могу да направим привремени фајл за Tesseract.",
    "Cannot set permissions for temporary Tesseract file." : "Не могу да поставим привилегије за привремени Tesseract фајл.",
    "Message queueing capabilities are missing on the server (package php-redis)." : "Могућности за слање порука недостају на серверу (пакет php-redis).",
    "Cannot connect to Redis." : "Не могу да се повежем са Redis базом.",
    "Redis authentication error." : "Redis грешка при провери идентитета.",
    "Cannot connect to the right Redis database." : "Не могу да се повежем на исправну Redis базу.",
    "Optical character recognition" : "Оптичко препознавање знакова",
    "Text recognition for your images and pdf files" : "Препознавање текста за Ваше слике и pdf фајлове",
    "# Description\n\nNextcloud OCR (optical character recognition) processing for images and PDF with tesseract-ocr and OCRmyPDF brings OCR capability to your Nextcloud.\nThe app uses a docker container with tesseract-ocr, OCRmyPDF and communicates over redis in order to process images (png, jpeg, tiff) and PDF asynchronously and save the output file to the source folder in nextcloud. That for example enables you to search in it. (Hint: currently not all PDF-types are supported, for more information see [here](https://github.com/jbarlow83/OCRmyPDF))\n\n## Prerequisites, Requirements and Dependencies\nThe OCR app has some prerequisites:\n - **[Nextcloud 12 or 13](https://nextcloud.com/)**. For older versions take an older major version of this app.\n - **Linux** server as environment. (tested with Debian 8, Raspbian and Ubuntu 14.04 (Trusty))\n - **Docker** is used for processing files. tesseract-ocr and OCRmyPDF reside in a docker container.\n - **php-redis** is used for the communication and has to be a part of your php.\n\n## Limitations\nCurrently the app is not working with any activated encryption, nor is it working with files shared via external storage or federated sharing. This has to be considered. If one wants to process such a file, it must be copied to the local environment.\n\nFor further information see the [homepage](https://github.com/janis91/ocr/wiki/Usage) or the appropriate documentation in the wiki.\n\n## Installation\nInstall the app from the [Nextcloud AppStore](http://apps.nextcloud.com) or download the release package from github (**NOT** the sources) and place the content in **nextcloud/apps/ocr/**.\n\n**Please consider: The app will not work as long as the Docker container isn't running. (more information in the [wiki](https://github.com/janis91/ocr/wiki))**\n\n## Administration and Usage\nPlease read the related topics in the [wiki](https://github.com/janis91/ocr/wiki).\n\n## Disclaimer\nThe software is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR\nCONDITIONS OF ANY KIND, either express or implied." : "# Опис\n\nНекстклауд OCR (оптичко препознавање карактера) процесирање слика и PDF-ова са tesseract-ocr-ом и OCRmyPDF-ом доноси OCR могућност у Ваш Некстклауд.\nАпликација користи docker контејнер са tesseract-ocr-ом, OCRmyPDF-ом и комуницира преко redis-а да би обрађивала слике (png, jpeg, tiff) и PDF-ове асинхроно и чувала излазни фајл у изворној фасцикли у Некстклауду. Тиме је обезбеђена и претрага. (савет: тренутно нису подржани сви типови PDF-а, за више информација погледајте [овде](https://github.com/jbarlow83/OCRmyPDF))\n\n## Предуслови, захтеви и зависности\nOCR апликација има пар предуслова:\n - **[Некстклауд 12 или 13](https://nextcloud.com/)**. За старије верзије користите старију главну верзију ове апликације.\n - **Линукс** сервер окружење. (тестирано са Debian 8, Raspbian и Ubuntu 14.04 (Trusty) системима)\n - **Docker** се користи за обраду фајлова. tesseract-ocr и OCRmyPDF се налазе у docker контејнеру.\n - **php-redis** се користи за комуникацију и мора бити део Ваше php инсталације.\n\n## Ограничења\nАпликација тренутно не ради са активираним шифровањем, нити ради са фајловима из спољашњих складишта или здружених дељења. Узмите ово у обзир. Ако желите да обрадите овакав фајл, морате га копирати у локално окружење.\n\nЗа више информација, посетите [почетну страну](https://github.com/janis91/ocr/wiki/Usage) или одговарајући документацију на викију.\n\n## Инсталација\nАпликацију инсталирајте са [Некстклауд продавнице](http://apps.nextcloud.com) или скините издање са github-а (**НЕ** изворни код) и сместите садржај у **nextcloud/apps/ocr/**.\n\n**Запамтите: Апликација неће радити ако Docker контејнер не ради. (више информација на [викију](https://github.com/janis91/ocr/wiki))**\n\n## Администрација и коришћење\nПрочитајте повезане области на [викију](https://github.com/janis91/ocr/wiki).\n\n## Одрицање одговорности\nThe software is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR\nCONDITIONS OF ANY KIND, either express or implied.",
    "Installed languages" : "Инсталирани језици",
    "Here goes a semicolon separated list of languages that are supported by the Docker worker instance (more details in the wiki on GitHub)." : "Овде иде листа језика одвојена са тачка-зарезом које подржава Докер радном инстанцом (више детаља на вики страни на GitHub-у).",
    "Apply" : "Примени",
    "Redis host" : "Redis домаћин",
    "The host of the Redis instance for communication with the OCR worker." : "Домаћин Redis инстанце за комуникацију са OCR радним процесом.",
    "Redis port" : "Redis порт",
    "The corresponding port (normally 6379)." : "Порт за причање (обично 6379).",
    "Redis database" : "Redis база",
    "The Redis database (normally 0)." : "Redis база (обично 0).",
    "Redis password" : "Redis лозинка",
    "The password to authenticate (normally OCR)." : "Лозинка за пријављивање (обично OCR)."
},
"nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);");
