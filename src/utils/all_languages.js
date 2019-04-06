const languages_as_array = [
    { value: 'ab', label: 'Abkhaz', nativeName: 'аҧсуа' },
    { value: 'aa', label: 'Afar', nativeName: 'Afaraf' },
    { value: 'af', label: 'Afrikaans', nativeName: 'Afrikaans' },
    { value: 'ak', label: 'Akan', nativeName: 'Akan' },
    { value: 'sq', label: 'Albanian', nativeName: 'Shqip' },
    { value: 'am', label: 'Amharic', nativeName: 'አማርኛ' },
    { value: 'ar', label: 'Arabic', nativeName: 'العربية' },
    { value: 'an', label: 'Aragonese', nativeName: 'Aragonés' },
    { value: 'hy', label: 'Armenian', nativeName: 'Հայերեն' },
    { value: 'as', label: 'Assamese', nativeName: 'অসমীয়া' },
    { value: 'av', label: 'Avaric', nativeName: 'авар мацӀ, магӀарул мацӀ' },
    { value: 'ae', label: 'Avestan', nativeName: 'avesta' },
    { value: 'ay', label: 'Aymara', nativeName: 'aymar aru' },
    { value: 'az', label: 'Azerbaijani', nativeName: 'azərbaycan dili' },
    { value: 'bm', label: 'Bambara', nativeName: 'bamanankan' },
    { value: 'ba', label: 'Bashkir', nativeName: 'башҡорт теле' },
    { value: 'eu', label: 'Basque', nativeName: 'euskara, euskera' },
    { value: 'be', label: 'Belarusian', nativeName: 'Беларуская' },
    { value: 'bn', label: 'Bengali', nativeName: 'বাংলা' },
    { value: 'bh', label: 'Bihari', nativeName: 'भोजपुरी' },
    { value: 'bi', label: 'Bislama', nativeName: 'Bislama' },
    { value: 'bs', label: 'Bosnian', nativeName: 'bosanski jezik' },
    { value: 'br', label: 'Breton', nativeName: 'brezhoneg' },
    { value: 'bg', label: 'Bulgarian', nativeName: 'български език' },
    { value: 'my', label: 'Burmese', nativeName: 'ဗမာစာ' },
    { value: 'ca', label: 'Catalan; Valencian', nativeName: 'Català' },
    { value: 'ch', label: 'Chamorro', nativeName: 'Chamoru' },
    { value: 'ce', label: 'Chechen', nativeName: 'нохчийн мотт' },
    {
        value: 'ny',
        label: 'Chichewa; Chewa; Nyanja',
        nativeName: 'chiCheŵa, chinyanja'
    },
    {
        value: 'zh',
        label: 'Chinese',
        nativeName: '中文 (Zhōngwén), 汉语, 漢語'
    },
    { value: 'cv', label: 'Chuvash', nativeName: 'чӑваш чӗлхи' },
    { value: 'kw', label: 'Cornish', nativeName: 'Kernewek' },
    { value: 'co', label: 'Corsican', nativeName: 'corsu, lingua corsa' },
    { value: 'cr', label: 'Cree', nativeName: 'ᓀᐦᐃᔭᐍᐏᐣ' },
    { value: 'hr', label: 'Croatian', nativeName: 'hrvatski' },
    { value: 'cs', label: 'Czech', nativeName: 'česky, čeština' },
    { value: 'da', label: 'Danish', nativeName: 'dansk' },
    { value: 'dv', label: 'Divehi; Dhivehi; Maldivian;', nativeName: 'ދިވެހި' },
    { value: 'nl', label: 'Dutch', nativeName: 'Nederlands, Vlaams' },
    { value: 'en', label: 'English', nativeName: 'English' },
    { value: 'eo', label: 'Esperanto', nativeName: 'Esperanto' },
    { value: 'et', label: 'Estonian', nativeName: 'eesti, eesti keel' },
    { value: 'ee', label: 'Ewe', nativeName: 'Eʋegbe' },
    { value: 'fo', label: 'Faroese', nativeName: 'føroyskt' },
    { value: 'fj', label: 'Fijian', nativeName: 'vosa Vakaviti' },
    { value: 'fi', label: 'Finnish', nativeName: 'suomi, suomen kieli' },
    { value: 'fr', label: 'French', nativeName: 'français, langue française' },
    {
        value: 'ff',
        label: 'Fula; Fulah; Pulaar; Pular',
        nativeName: 'Fulfulde, Pulaar, Pular'
    },
    { value: 'gl', label: 'Galician', nativeName: 'Galego' },
    { value: 'ka', label: 'Georgian', nativeName: 'ქართული' },
    { value: 'de', label: 'German', nativeName: 'Deutsch' },
    { value: 'el', label: 'Greek, Modern', nativeName: 'Ελληνικά' },
    { value: 'gn', label: 'Guaraní', nativeName: 'Avañeẽ' },
    { value: 'gu', label: 'Gujarati', nativeName: 'ગુજરાતી' },
    {
        value: 'ht',
        label: 'Haitian; Haitian Creole',
        nativeName: 'Kreyòl ayisyen'
    },
    { value: 'ha', label: 'Hausa', nativeName: 'Hausa, هَوُسَ' },
    { value: 'he', label: 'Hebrew (modern)', nativeName: 'עברית' },
    { value: 'hz', label: 'Herero', nativeName: 'Otjiherero' },
    { value: 'hi', label: 'Hindi', nativeName: 'हिन्दी, हिंदी' },
    { value: 'ho', label: 'Hiri Motu', nativeName: 'Hiri Motu' },
    { value: 'hu', label: 'Hungarian', nativeName: 'Magyar' },
    { value: 'ia', label: 'Interlingua', nativeName: 'Interlingua' },
    { value: 'id', label: 'Indonesian', nativeName: 'Bahasa Indonesia' },
    {
        value: 'ie',
        label: 'Interlingue',
        nativeName: 'Originally called Occidental; then Interlingue after WWII'
    },
    { value: 'ga', label: 'Irish', nativeName: 'Gaeilge' },
    { value: 'ig', label: 'Igbo', nativeName: 'Asụsụ Igbo' },
    { value: 'ik', label: 'Inupiaq', nativeName: 'Iñupiaq, Iñupiatun' },
    { value: 'io', label: 'Ido', nativeName: 'Ido' },
    { value: 'is', label: 'Icelandic', nativeName: 'Íslenska' },
    { value: 'it', label: 'Italian', nativeName: 'Italiano' },
    { value: 'iu', label: 'Inuktitut', nativeName: 'ᐃᓄᒃᑎᑐᑦ' },
    {
        value: 'ja',
        label: 'Japanese',
        nativeName: '日本語 (にほんご／にっぽんご)'
    },
    { value: 'jv', label: 'Javanese', nativeName: 'basa Jawa' },
    {
        value: 'kl',
        label: 'Kalaallisut, Greenlandic',
        nativeName: 'kalaallisut, kalaallit oqaasii'
    },
    { value: 'kn', label: 'Kannada', nativeName: 'ಕನ್ನಡ' },
    { value: 'kr', label: 'Kanuri', nativeName: 'Kanuri' },
    { value: 'ks', label: 'Kashmiri', nativeName: 'कश्मीरी, كشميري‎' },
    { value: 'kk', label: 'Kazakh', nativeName: 'Қазақ тілі' },
    { value: 'km', label: 'Khmer', nativeName: 'ភាសាខ្មែរ' },
    { value: 'ki', label: 'Kikuyu, Gikuyu', nativeName: 'Gĩkũyũ' },
    { value: 'rw', label: 'Kinyarwanda', nativeName: 'Ikinyarwanda' },
    { value: 'ky', label: 'Kirghiz, Kyrgyz', nativeName: 'кыргыз тили' },
    { value: 'kv', label: 'Komi', nativeName: 'коми кыв' },
    { value: 'kg', label: 'Kongo', nativeName: 'KiKongo' },
    {
        value: 'ko',
        label: 'Korean',
        nativeName: '한국어 (韓國語), 조선말 (朝鮮語)'
    },
    { value: 'ku', label: 'Kurdish', nativeName: 'Kurdî, كوردی‎' },
    { value: 'kj', label: 'Kwanyama, Kuanyama', nativeName: 'Kuanyama' },
    { value: 'la', label: 'Latin', nativeName: 'latine, lingua latina' },
    {
        value: 'lb',
        label: 'Luxembourgish, Letzeburgesch',
        nativeName: 'Lëtzebuergesch'
    },
    { value: 'lg', label: 'Luganda', nativeName: 'Luganda' },
    {
        value: 'li',
        label: 'Limburgish, Limburgan, Limburger',
        nativeName: 'Limburgs'
    },
    { value: 'ln', label: 'Lingala', nativeName: 'Lingála' },
    { value: 'lo', label: 'Lao', nativeName: 'ພາສາລາວ' },
    { value: 'lt', label: 'Lithuanian', nativeName: 'lietuvių kalba' },
    { value: 'lu', label: 'Luba-Katanga', nativeName: '' },
    { value: 'lv', label: 'Latvian', nativeName: 'latviešu valoda' },
    { value: 'gv', label: 'Manx', nativeName: 'Gaelg, Gailck' },
    { value: 'mk', label: 'Macedonian', nativeName: 'македонски јазик' },
    { value: 'mg', label: 'Malagasy', nativeName: 'Malagasy fiteny' },
    { value: 'ms', label: 'Malay', nativeName: 'bahasa Melayu, بهاس ملايو‎' },
    { value: 'ml', label: 'Malayalam', nativeName: 'മലയാളം' },
    { value: 'mt', label: 'Maltese', nativeName: 'Malti' },
    { value: 'mi', label: 'Māori', nativeName: 'te reo Māori' },
    { value: 'mr', label: 'Marathi (Marāṭhī)', nativeName: 'मराठी' },
    { value: 'mh', label: 'Marshallese', nativeName: 'Kajin M̧ajeļ' },
    { value: 'mn', label: 'Mongolian', nativeName: 'монгол' },
    { value: 'na', label: 'Nauru', nativeName: 'Ekakairũ Naoero' },
    {
        value: 'nv',
        label: 'Navajo, Navaho',
        nativeName: 'Diné bizaad, Dinékʼehǰí'
    },
    { value: 'nb', label: 'Norwegian Bokmål', nativeName: 'Norsk bokmål' },
    { value: 'nd', label: 'North Ndebele', nativeName: 'isiNdebele' },
    { value: 'ne', label: 'Nepali', nativeName: 'नेपाली' },
    { value: 'ng', label: 'Ndonga', nativeName: 'Owambo' },
    { value: 'nn', label: 'Norwegian Nynorsk', nativeName: 'Norsk nynorsk' },
    { value: 'no', label: 'Norwegian', nativeName: 'Norsk' },
    { value: 'ii', label: 'Nuosu', nativeName: 'ꆈꌠ꒿ Nuosuhxop' },
    { value: 'nr', label: 'South Ndebele', nativeName: 'isiNdebele' },
    { value: 'oc', label: 'Occitan', nativeName: 'Occitan' },
    { value: 'oj', label: 'Ojibwe, Ojibwa', nativeName: 'ᐊᓂᔑᓈᐯᒧᐎᓐ' },
    {
        value: 'cu',
        name:
            'Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic',
        nativeName: 'ѩзыкъ словѣньскъ'
    },
    { value: 'om', label: 'Oromo', nativeName: 'Afaan Oromoo' },
    { value: 'or', label: 'Oriya', nativeName: 'ଓଡ଼ିଆ' },
    { value: 'os', label: 'Ossetian, Ossetic', nativeName: 'ирон æвзаг' },
    { value: 'pa', label: 'Panjabi, Punjabi', nativeName: 'ਪੰਜਾਬੀ, پنجابی‎' },
    { value: 'pi', label: 'Pāli', nativeName: 'पाऴि' },
    { value: 'fa', label: 'Persian', nativeName: 'فارسی' },
    { value: 'pl', label: 'Polish', nativeName: 'polski' },
    { value: 'ps', label: 'Pashto, Pushto', nativeName: 'پښتو' },
    { value: 'pt', label: 'Portuguese', nativeName: 'Português' },
    { value: 'qu', label: 'Quechua', nativeName: 'Runa Simi, Kichwa' },
    { value: 'rm', label: 'Romansh', nativeName: 'rumantsch grischun' },
    { value: 'rn', label: 'Kirundi', nativeName: 'kiRundi' },
    {
        value: 'ro',
        label: 'Romanian, Moldavian, Moldovan',
        nativeName: 'română'
    },
    { value: 'ru', label: 'Russian', nativeName: 'русский язык' },
    { value: 'sa', label: 'Sanskrit (Saṁskṛta)', nativeName: 'संस्कृतम्' },
    { value: 'sc', label: 'Sardinian', nativeName: 'sardu' },
    { value: 'sd', label: 'Sindhi', nativeName: 'सिन्धी, سنڌي، سندھی‎' },
    { value: 'se', label: 'Northern Sami', nativeName: 'Davvisámegiella' },
    { value: 'sm', label: 'Samoan', nativeName: 'gagana faa Samoa' },
    { value: 'sg', label: 'Sango', nativeName: 'yângâ tî sängö' },
    { value: 'sr', label: 'Serbian', nativeName: 'српски језик' },
    { value: 'gd', label: 'Scottish Gaelic; Gaelic', nativeName: 'Gàidhlig' },
    { value: 'sn', label: 'Shona', nativeName: 'chiShona' },
    { value: 'si', label: 'Sinhala, Sinhalese', nativeName: 'සිංහල' },
    { value: 'sk', label: 'Slovak', nativeName: 'slovenčina' },
    { value: 'sl', label: 'Slovene', nativeName: 'slovenščina' },
    { value: 'so', label: 'Somali', nativeName: 'Soomaaliga, af Soomaali' },
    { value: 'st', label: 'Southern Sotho', nativeName: 'Sesotho' },
    {
        value: 'es',
        label: 'Spanish; Castilian',
        nativeName: 'español, castellano'
    },
    { value: 'su', label: 'Sundanese', nativeName: 'Basa Sunda' },
    { value: 'sw', label: 'Swahili', nativeName: 'Kiswahili' },
    { value: 'ss', label: 'Swati', nativeName: 'SiSwati' },
    { value: 'sv', label: 'Swedish', nativeName: 'svenska' },
    { value: 'ta', label: 'Tamil', nativeName: 'தமிழ்' },
    { value: 'te', label: 'Telugu', nativeName: 'తెలుగు' },
    { value: 'tg', label: 'Tajik', nativeName: 'тоҷикӣ, toğikī, تاجیکی‎' },
    { value: 'th', label: 'Thai', nativeName: 'ไทย' },
    { value: 'ti', label: 'Tigrinya', nativeName: 'ትግርኛ' },
    {
        value: 'bo',
        label: 'Tibetan Standard, Tibetan, Central',
        nativeName: 'བོད་ཡིག'
    },
    { value: 'tk', label: 'Turkmen', nativeName: 'Türkmen, Түркмен' },
    {
        value: 'tl',
        label: 'Tagalog',
        nativeName: 'Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔'
    },
    { value: 'tn', label: 'Tswana', nativeName: 'Setswana' },
    { value: 'to', label: 'Tonga (Tonga Islands)', nativeName: 'faka Tonga' },
    { value: 'tr', label: 'Turkish', nativeName: 'Türkçe' },
    { value: 'ts', label: 'Tsonga', nativeName: 'Xitsonga' },
    { value: 'tt', label: 'Tatar', nativeName: 'татарча, tatarça, تاتارچا‎' },
    { value: 'tw', label: 'Twi', nativeName: 'Twi' },
    { value: 'ty', label: 'Tahitian', nativeName: 'Reo Tahiti' },
    { value: 'ug', label: 'Uighur, Uyghur', nativeName: 'Uyƣurqə, ئۇيغۇرچە‎' },
    { value: 'uk', label: 'Ukrainian', nativeName: 'українська' },
    { value: 'ur', label: 'Urdu', nativeName: 'اردو' },
    { value: 'uz', label: 'Uzbek', nativeName: 'zbek, Ўзбек, أۇزبېك‎' },
    { value: 've', label: 'Venda', nativeName: 'Tshivenḓa' },
    { value: 'vi', label: 'Vietnamese', nativeName: 'Tiếng Việt' },
    { value: 'vo', label: 'Volapük', nativeName: 'Volapük' },
    { value: 'wa', label: 'Walloon', nativeName: 'Walon' },
    { value: 'cy', label: 'Welsh', nativeName: 'Cymraeg' },
    { value: 'wo', label: 'Wolof', nativeName: 'Wollof' },
    { value: 'fy', label: 'Western Frisian', nativeName: 'Frysk' },
    { value: 'xh', label: 'Xhosa', nativeName: 'isiXhosa' },
    { value: 'yi', label: 'Yiddish', nativeName: 'ייִדיש' },
    { value: 'yo', label: 'Yoruba', nativeName: 'Yorùbá' },
    {
        value: 'za',
        label: 'Zhuang, Chuang',
        nativeName: 'Saɯ cueŋƅ, Saw cuengh'
    }
];

const languages_as_object = {
    ab: {
        value: 'ab',
        label: 'Abkhaz',
        nativeName: 'аҧсуа'
    },
    aa: {
        value: 'aa',
        label: 'Afar',
        nativeName: 'Afaraf'
    },
    af: {
        value: 'af',
        label: 'Afrikaans',
        nativeName: 'Afrikaans'
    },
    ak: {
        value: 'ak',
        label: 'Akan',
        nativeName: 'Akan'
    },
    sq: {
        value: 'sq',
        label: 'Albanian',
        nativeName: 'Shqip'
    },
    am: {
        value: 'am',
        label: 'Amharic',
        nativeName: 'አማርኛ'
    },
    ar: {
        value: 'ar',
        label: 'Arabic',
        nativeName: 'العربية'
    },
    an: {
        value: 'an',
        label: 'Aragonese',
        nativeName: 'Aragonés'
    },
    hy: {
        value: 'hy',
        label: 'Armenian',
        nativeName: 'Հայերեն'
    },
    as: {
        value: 'as',
        label: 'Assamese',
        nativeName: 'অসমীয়া'
    },
    av: {
        value: 'av',
        label: 'Avaric',
        nativeName: 'авар мацӀ, магӀарул мацӀ'
    },
    ae: {
        value: 'ae',
        label: 'Avestan',
        nativeName: 'avesta'
    },
    ay: {
        value: 'ay',
        label: 'Aymara',
        nativeName: 'aymar aru'
    },
    az: {
        value: 'az',
        label: 'Azerbaijani',
        nativeName: 'azərbaycan dili'
    },
    bm: {
        value: 'bm',
        label: 'Bambara',
        nativeName: 'bamanankan'
    },
    ba: {
        value: 'ba',
        label: 'Bashkir',
        nativeName: 'башҡорт теле'
    },
    eu: {
        value: 'eu',
        label: 'Basque',
        nativeName: 'euskara, euskera'
    },
    be: {
        value: 'be',
        label: 'Belarusian',
        nativeName: 'Беларуская'
    },
    bn: {
        value: 'bn',
        label: 'Bengali',
        nativeName: 'বাংলা'
    },
    bh: {
        value: 'bh',
        label: 'Bihari',
        nativeName: 'भोजपुरी'
    },
    bi: {
        value: 'bi',
        label: 'Bislama',
        nativeName: 'Bislama'
    },
    bs: {
        value: 'bs',
        label: 'Bosnian',
        nativeName: 'bosanski jezik'
    },
    br: {
        value: 'br',
        label: 'Breton',
        nativeName: 'brezhoneg'
    },
    bg: {
        value: 'bg',
        label: 'Bulgarian',
        nativeName: 'български език'
    },
    my: {
        value: 'my',
        label: 'Burmese',
        nativeName: 'ဗမာစာ'
    },
    ca: {
        value: 'ca',
        label: 'Catalan; Valencian',
        nativeName: 'Català'
    },
    ch: {
        value: 'ch',
        label: 'Chamorro',
        nativeName: 'Chamoru'
    },
    ce: {
        value: 'ce',
        label: 'Chechen',
        nativeName: 'нохчийн мотт'
    },
    ny: {
        value: 'ny',
        label: 'Chichewa; Chewa; Nyanja',
        nativeName: 'chiCheŵa, chinyanja'
    },
    zh: {
        value: 'zh',
        label: 'Chinese',
        nativeName: '中文 (Zhōngwén), 汉语, 漢語'
    },
    cv: {
        value: 'cv',
        label: 'Chuvash',
        nativeName: 'чӑваш чӗлхи'
    },
    kw: {
        value: 'kw',
        label: 'Cornish',
        nativeName: 'Kernewek'
    },
    co: {
        value: 'co',
        label: 'Corsican',
        nativeName: 'corsu, lingua corsa'
    },
    cr: {
        value: 'cr',
        label: 'Cree',
        nativeName: 'ᓀᐦᐃᔭᐍᐏᐣ'
    },
    hr: {
        value: 'hr',
        label: 'Croatian',
        nativeName: 'hrvatski'
    },
    cs: {
        value: 'cs',
        label: 'Czech',
        nativeName: 'česky, čeština'
    },
    da: {
        value: 'da',
        label: 'Danish',
        nativeName: 'dansk'
    },
    dv: {
        value: 'dv',
        label: 'Divehi; Dhivehi; Maldivian;',
        nativeName: 'ދިވެހި'
    },
    nl: {
        value: 'nl',
        label: 'Dutch',
        nativeName: 'Nederlands, Vlaams'
    },
    en: {
        value: 'en',
        label: 'English',
        nativeName: 'English'
    },
    eo: {
        value: 'eo',
        label: 'Esperanto',
        nativeName: 'Esperanto'
    },
    et: {
        value: 'et',
        label: 'Estonian',
        nativeName: 'eesti, eesti keel'
    },
    ee: {
        value: 'ee',
        label: 'Ewe',
        nativeName: 'Eʋegbe'
    },
    fo: {
        value: 'fo',
        label: 'Faroese',
        nativeName: 'føroyskt'
    },
    fj: {
        value: 'fj',
        label: 'Fijian',
        nativeName: 'vosa Vakaviti'
    },
    fi: {
        value: 'fi',
        label: 'Finnish',
        nativeName: 'suomi, suomen kieli'
    },
    fr: {
        value: 'fr',
        label: 'French',
        nativeName: 'français, langue française'
    },
    ff: {
        value: 'ff',
        label: 'Fula; Fulah; Pulaar; Pular',
        nativeName: 'Fulfulde, Pulaar, Pular'
    },
    gl: {
        value: 'gl',
        label: 'Galician',
        nativeName: 'Galego'
    },
    ka: {
        value: 'ka',
        label: 'Georgian',
        nativeName: 'ქართული'
    },
    de: {
        value: 'de',
        label: 'German',
        nativeName: 'Deutsch'
    },
    el: {
        value: 'el',
        label: 'Greek, Modern',
        nativeName: 'Ελληνικά'
    },
    gn: {
        value: 'gn',
        label: 'Guaraní',
        nativeName: 'Avañeẽ'
    },
    gu: {
        value: 'gu',
        label: 'Gujarati',
        nativeName: 'ગુજરાતી'
    },
    ht: {
        value: 'ht',
        label: 'Haitian; Haitian Creole',
        nativeName: 'Kreyòl ayisyen'
    },
    ha: {
        value: 'ha',
        label: 'Hausa',
        nativeName: 'Hausa, هَوُسَ'
    },
    he: {
        value: 'he',
        label: 'Hebrew (modern)',
        nativeName: 'עברית'
    },
    hz: {
        value: 'hz',
        label: 'Herero',
        nativeName: 'Otjiherero'
    },
    hi: {
        value: 'hi',
        label: 'Hindi',
        nativeName: 'हिन्दी, हिंदी'
    },
    ho: {
        value: 'ho',
        label: 'Hiri Motu',
        nativeName: 'Hiri Motu'
    },
    hu: {
        value: 'hu',
        label: 'Hungarian',
        nativeName: 'Magyar'
    },
    ia: {
        value: 'ia',
        label: 'Interlingua',
        nativeName: 'Interlingua'
    },
    id: {
        value: 'id',
        label: 'Indonesian',
        nativeName: 'Bahasa Indonesia'
    },
    ie: {
        value: 'ie',
        label: 'Interlingue',
        nativeName: 'Originally called Occidental; then Interlingue after WWII'
    },
    ga: {
        value: 'ga',
        label: 'Irish',
        nativeName: 'Gaeilge'
    },
    ig: {
        value: 'ig',
        label: 'Igbo',
        nativeName: 'Asụsụ Igbo'
    },
    ik: {
        value: 'ik',
        label: 'Inupiaq',
        nativeName: 'Iñupiaq, Iñupiatun'
    },
    io: {
        value: 'io',
        label: 'Ido',
        nativeName: 'Ido'
    },
    is: {
        value: 'is',
        label: 'Icelandic',
        nativeName: 'Íslenska'
    },
    it: {
        value: 'it',
        label: 'Italian',
        nativeName: 'Italiano'
    },
    iu: {
        value: 'iu',
        label: 'Inuktitut',
        nativeName: 'ᐃᓄᒃᑎᑐᑦ'
    },
    ja: {
        value: 'ja',
        label: 'Japanese',
        nativeName: '日本語 (にほんご／にっぽんご)'
    },
    jv: {
        value: 'jv',
        label: 'Javanese',
        nativeName: 'basa Jawa'
    },
    kl: {
        value: 'kl',
        label: 'Kalaallisut, Greenlandic',
        nativeName: 'kalaallisut, kalaallit oqaasii'
    },
    kn: {
        value: 'kn',
        label: 'Kannada',
        nativeName: 'ಕನ್ನಡ'
    },
    kr: {
        value: 'kr',
        label: 'Kanuri',
        nativeName: 'Kanuri'
    },
    ks: {
        value: 'ks',
        label: 'Kashmiri',
        nativeName: 'कश्मीरी, كشميري‎'
    },
    kk: {
        value: 'kk',
        label: 'Kazakh',
        nativeName: 'Қазақ тілі'
    },
    km: {
        value: 'km',
        label: 'Khmer',
        nativeName: 'ភាសាខ្មែរ'
    },
    ki: {
        value: 'ki',
        label: 'Kikuyu, Gikuyu',
        nativeName: 'Gĩkũyũ'
    },
    rw: {
        value: 'rw',
        label: 'Kinyarwanda',
        nativeName: 'Ikinyarwanda'
    },
    ky: {
        value: 'ky',
        label: 'Kirghiz, Kyrgyz',
        nativeName: 'кыргыз тили'
    },
    kv: {
        value: 'kv',
        label: 'Komi',
        nativeName: 'коми кыв'
    },
    kg: {
        value: 'kg',
        label: 'Kongo',
        nativeName: 'KiKongo'
    },
    ko: {
        value: 'ko',
        label: 'Korean',
        nativeName: '한국어 (韓國語), 조선말 (朝鮮語)'
    },
    ku: {
        value: 'ku',
        label: 'Kurdish',
        nativeName: 'Kurdî, كوردی‎'
    },
    kj: {
        value: 'kj',
        label: 'Kwanyama, Kuanyama',
        nativeName: 'Kuanyama'
    },
    la: {
        value: 'la',
        label: 'Latin',
        nativeName: 'latine, lingua latina'
    },
    lb: {
        value: 'lb',
        label: 'Luxembourgish, Letzeburgesch',
        nativeName: 'Lëtzebuergesch'
    },
    lg: {
        value: 'lg',
        label: 'Luganda',
        nativeName: 'Luganda'
    },
    li: {
        value: 'li',
        label: 'Limburgish, Limburgan, Limburger',
        nativeName: 'Limburgs'
    },
    ln: {
        value: 'ln',
        label: 'Lingala',
        nativeName: 'Lingála'
    },
    lo: {
        value: 'lo',
        label: 'Lao',
        nativeName: 'ພາສາລາວ'
    },
    lt: {
        value: 'lt',
        label: 'Lithuanian',
        nativeName: 'lietuvių kalba'
    },
    lu: {
        value: 'lu',
        label: 'Luba-Katanga',
        nativeName: ''
    },
    lv: {
        value: 'lv',
        label: 'Latvian',
        nativeName: 'latviešu valoda'
    },
    gv: {
        value: 'gv',
        label: 'Manx',
        nativeName: 'Gaelg, Gailck'
    },
    mk: {
        value: 'mk',
        label: 'Macedonian',
        nativeName: 'македонски јазик'
    },
    mg: {
        value: 'mg',
        label: 'Malagasy',
        nativeName: 'Malagasy fiteny'
    },
    ms: {
        value: 'ms',
        label: 'Malay',
        nativeName: 'bahasa Melayu, بهاس ملايو‎'
    },
    ml: {
        value: 'ml',
        label: 'Malayalam',
        nativeName: 'മലയാളം'
    },
    mt: {
        value: 'mt',
        label: 'Maltese',
        nativeName: 'Malti'
    },
    mi: {
        value: 'mi',
        label: 'Māori',
        nativeName: 'te reo Māori'
    },
    mr: {
        value: 'mr',
        label: 'Marathi (Marāṭhī)',
        nativeName: 'मराठी'
    },
    mh: {
        value: 'mh',
        label: 'Marshallese',
        nativeName: 'Kajin M̧ajeļ'
    },
    mn: {
        value: 'mn',
        label: 'Mongolian',
        nativeName: 'монгол'
    },
    na: {
        value: 'na',
        label: 'Nauru',
        nativeName: 'Ekakairũ Naoero'
    },
    nv: {
        value: 'nv',
        label: 'Navajo, Navaho',
        nativeName: 'Diné bizaad, Dinékʼehǰí'
    },
    nb: {
        value: 'nb',
        label: 'Norwegian Bokmål',
        nativeName: 'Norsk bokmål'
    },
    nd: {
        value: 'nd',
        label: 'North Ndebele',
        nativeName: 'isiNdebele'
    },
    ne: {
        value: 'ne',
        label: 'Nepali',
        nativeName: 'नेपाली'
    },
    ng: {
        value: 'ng',
        label: 'Ndonga',
        nativeName: 'Owambo'
    },
    nn: {
        value: 'nn',
        label: 'Norwegian Nynorsk',
        nativeName: 'Norsk nynorsk'
    },
    no: {
        value: 'no',
        label: 'Norwegian',
        nativeName: 'Norsk'
    },
    ii: {
        value: 'ii',
        label: 'Nuosu',
        nativeName: 'ꆈꌠ꒿ Nuosuhxop'
    },
    nr: {
        value: 'nr',
        label: 'South Ndebele',
        nativeName: 'isiNdebele'
    },
    oc: {
        value: 'oc',
        label: 'Occitan',
        nativeName: 'Occitan'
    },
    oj: {
        value: 'oj',
        label: 'Ojibwe, Ojibwa',
        nativeName: 'ᐊᓂᔑᓈᐯᒧᐎᓐ'
    },
    cu: {
        value: 'cu',
        name:
            'Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic',
        nativeName: 'ѩзыкъ словѣньскъ'
    },
    om: {
        value: 'om',
        label: 'Oromo',
        nativeName: 'Afaan Oromoo'
    },
    or: {
        value: 'or',
        label: 'Oriya',
        nativeName: 'ଓଡ଼ିଆ'
    },
    os: {
        value: 'os',
        label: 'Ossetian, Ossetic',
        nativeName: 'ирон æвзаг'
    },
    pa: {
        value: 'pa',
        label: 'Panjabi, Punjabi',
        nativeName: 'ਪੰਜਾਬੀ, پنجابی‎'
    },
    pi: {
        value: 'pi',
        label: 'Pāli',
        nativeName: 'पाऴि'
    },
    fa: {
        value: 'fa',
        label: 'Persian',
        nativeName: 'فارسی'
    },
    pl: {
        value: 'pl',
        label: 'Polish',
        nativeName: 'polski'
    },
    ps: {
        value: 'ps',
        label: 'Pashto, Pushto',
        nativeName: 'پښتو'
    },
    pt: {
        value: 'pt',
        label: 'Portuguese',
        nativeName: 'Português'
    },
    qu: {
        value: 'qu',
        label: 'Quechua',
        nativeName: 'Runa Simi, Kichwa'
    },
    rm: {
        value: 'rm',
        label: 'Romansh',
        nativeName: 'rumantsch grischun'
    },
    rn: {
        value: 'rn',
        label: 'Kirundi',
        nativeName: 'kiRundi'
    },
    ro: {
        value: 'ro',
        label: 'Romanian, Moldavian, Moldovan',
        nativeName: 'română'
    },
    ru: {
        value: 'ru',
        label: 'Russian',
        nativeName: 'русский язык'
    },
    sa: {
        value: 'sa',
        label: 'Sanskrit (Saṁskṛta)',
        nativeName: 'संस्कृतम्'
    },
    sc: {
        value: 'sc',
        label: 'Sardinian',
        nativeName: 'sardu'
    },
    sd: {
        value: 'sd',
        label: 'Sindhi',
        nativeName: 'सिन्धी, سنڌي، سندھی‎'
    },
    se: {
        value: 'se',
        label: 'Northern Sami',
        nativeName: 'Davvisámegiella'
    },
    sm: {
        value: 'sm',
        label: 'Samoan',
        nativeName: 'gagana faa Samoa'
    },
    sg: {
        value: 'sg',
        label: 'Sango',
        nativeName: 'yângâ tî sängö'
    },
    sr: {
        value: 'sr',
        label: 'Serbian',
        nativeName: 'српски језик'
    },
    gd: {
        value: 'gd',
        label: 'Scottish Gaelic; Gaelic',
        nativeName: 'Gàidhlig'
    },
    sn: {
        value: 'sn',
        label: 'Shona',
        nativeName: 'chiShona'
    },
    si: {
        value: 'si',
        label: 'Sinhala, Sinhalese',
        nativeName: 'සිංහල'
    },
    sk: {
        value: 'sk',
        label: 'Slovak',
        nativeName: 'slovenčina'
    },
    sl: {
        value: 'sl',
        label: 'Slovene',
        nativeName: 'slovenščina'
    },
    so: {
        value: 'so',
        label: 'Somali',
        nativeName: 'Soomaaliga, af Soomaali'
    },
    st: {
        value: 'st',
        label: 'Southern Sotho',
        nativeName: 'Sesotho'
    },
    es: {
        value: 'es',
        label: 'Spanish; Castilian',
        nativeName: 'español, castellano'
    },
    su: {
        value: 'su',
        label: 'Sundanese',
        nativeName: 'Basa Sunda'
    },
    sw: {
        value: 'sw',
        label: 'Swahili',
        nativeName: 'Kiswahili'
    },
    ss: {
        value: 'ss',
        label: 'Swati',
        nativeName: 'SiSwati'
    },
    sv: {
        value: 'sv',
        label: 'Swedish',
        nativeName: 'svenska'
    },
    ta: {
        value: 'ta',
        label: 'Tamil',
        nativeName: 'தமிழ்'
    },
    te: {
        value: 'te',
        label: 'Telugu',
        nativeName: 'తెలుగు'
    },
    tg: {
        value: 'tg',
        label: 'Tajik',
        nativeName: 'тоҷикӣ, toğikī, تاجیکی‎'
    },
    th: {
        value: 'th',
        label: 'Thai',
        nativeName: 'ไทย'
    },
    ti: {
        value: 'ti',
        label: 'Tigrinya',
        nativeName: 'ትግርኛ'
    },
    bo: {
        value: 'bo',
        label: 'Tibetan Standard, Tibetan, Central',
        nativeName: 'བོད་ཡིག'
    },
    tk: {
        value: 'tk',
        label: 'Turkmen',
        nativeName: 'Türkmen, Түркмен'
    },
    tl: {
        value: 'tl',
        label: 'Tagalog',
        nativeName: 'Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔'
    },
    tn: {
        value: 'tn',
        label: 'Tswana',
        nativeName: 'Setswana'
    },
    to: {
        value: 'to',
        label: 'Tonga (Tonga Islands)',
        nativeName: 'faka Tonga'
    },
    tr: {
        value: 'tr',
        label: 'Turkish',
        nativeName: 'Türkçe'
    },
    ts: {
        value: 'ts',
        label: 'Tsonga',
        nativeName: 'Xitsonga'
    },
    tt: {
        value: 'tt',
        label: 'Tatar',
        nativeName: 'татарча, tatarça, تاتارچا‎'
    },
    tw: {
        value: 'tw',
        label: 'Twi',
        nativeName: 'Twi'
    },
    ty: {
        value: 'ty',
        label: 'Tahitian',
        nativeName: 'Reo Tahiti'
    },
    ug: {
        value: 'ug',
        label: 'Uighur, Uyghur',
        nativeName: 'Uyƣurqə, ئۇيغۇرچە‎'
    },
    uk: {
        value: 'uk',
        label: 'Ukrainian',
        nativeName: 'українська'
    },
    ur: {
        value: 'ur',
        label: 'Urdu',
        nativeName: 'اردو'
    },
    uz: {
        value: 'uz',
        label: 'Uzbek',
        nativeName: 'zbek, Ўзбек, أۇزبېك‎'
    },
    ve: {
        value: 've',
        label: 'Venda',
        nativeName: 'Tshivenḓa'
    },
    vi: {
        value: 'vi',
        label: 'Vietnamese',
        nativeName: 'Tiếng Việt'
    },
    vo: {
        value: 'vo',
        label: 'Volapük',
        nativeName: 'Volapük'
    },
    wa: {
        value: 'wa',
        label: 'Walloon',
        nativeName: 'Walon'
    },
    cy: {
        value: 'cy',
        label: 'Welsh',
        nativeName: 'Cymraeg'
    },
    wo: {
        value: 'wo',
        label: 'Wolof',
        nativeName: 'Wollof'
    },
    fy: {
        value: 'fy',
        label: 'Western Frisian',
        nativeName: 'Frysk'
    },
    xh: {
        value: 'xh',
        label: 'Xhosa',
        nativeName: 'isiXhosa'
    },
    yi: {
        value: 'yi',
        label: 'Yiddish',
        nativeName: 'ייִדיש'
    },
    yo: {
        value: 'yo',
        label: 'Yoruba',
        nativeName: 'Yorùbá'
    },
    za: {
        value: 'za',
        label: 'Zhuang, Chuang',
        nativeName: 'Saɯ cueŋƅ, Saw cuengh'
    }
};

export default {
    languages_as_array,
    languages_as_object
};
