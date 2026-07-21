/**
 * World Clock Module for Lords Mobile Hub
 * Features:
 * - Live digital clocks with IANA timezone support
 * - Searchable timezone dropdown with 400+ zones
 * - Automatic DST handling
 * - localStorage persistence & GitHub Sync
 * - Mobile-friendly responsive design
 */

class WorldClock {
    constructor() {
        this.selectedTimeZones = [];
        this.allTimeZones = this.getIANATimeZones();
        this.timeZoneFlags = this.getTimeZoneFlags();
        this.init();
    }

    /**
     * Get country flags for each timezone
     */
    getTimeZoneFlags() {
        return {
            // Africa
            'Africa/Abidjan': '🇨🇮', 'Africa/Accra': '🇬🇭', 'Africa/Addis_Ababa': '🇪🇹', 'Africa/Algiers': '🇩🇿', 'Africa/Asmara': '🇪🇷',
            'Africa/Bamako': '🇲🇱', 'Africa/Bangui': '🇨🇫', 'Africa/Banjul': '🇬🇲', 'Africa/Bissau': '🇬🇼', 'Africa/Blantyre': '🇲🇼',
            'Africa/Brazzaville': '🇨🇬', 'Africa/Bujumbura': '🇧🇮', 'Africa/Cairo': '🇪🇬', 'Africa/Casablanca': '🇲🇦', 'Africa/Ceuta': '🇪🇸',
            'Africa/Conakry': '🇬🇳', 'Africa/Dakar': '🇸🇳', 'Africa/Dar_es_Salaam': '🇹🇿', 'Africa/Djibouti': '🇩🇯', 'Africa/Douala': '🇨🇲',
            'Africa/El_Aaiun': '🇪🇭', 'Africa/Freetown': '🇸🇱', 'Africa/Gaborone': '🇧🇼', 'Africa/Harare': '🇿🇼', 'Africa/Johannesburg': '🇿🇦',
            'Africa/Juba': '🇸🇸', 'Africa/Kampala': '🇺🇬', 'Africa/Khartoum': '🇸🇩', 'Africa/Kigali': '🇷🇼', 'Africa/Kinshasa': '🇨🇩',
            'Africa/Lagos': '🇳🇬', 'Africa/Libreville': '🇬🇦', 'Africa/Lilongwe': '🇲🇼', 'Africa/Lome': '🇹🇬', 'Africa/Luanda': '🇦🇴',
            'Africa/Lubumbashi': '🇨🇩', 'Africa/Lusaka': '🇿🇲', 'Africa/Malabo': '🇬🇶', 'Africa/Maputo': '🇲🇿', 'Africa/Maseru': '🇱🇸',
            'Africa/Mbabane': '🇪🇿', 'Africa/Mogadishu': '🇸🇴', 'Africa/Monrovia': '🇱🇷', 'Africa/Montserrado': '🇱🇷', 'Africa/Nairobi': '🇰🇪',
            'Africa/Ndjamena': '🇹🇩', 'Africa/Niamey': '🇳🇪', 'Africa/Nouakchott': '🇲🇷', 'Africa/Ouagadougou': '🇧🇫', 'Africa/Porto-Novo': '🇧🇯',
            'Africa/Sao_Tome': '🇸🇹', 'Africa/Timbuktu': '🇲🇱', 'Africa/Tripoli': '🇱🇾', 'Africa/Tunis': '🇹🇳', 'Africa/Windhoek': '🇳🇦',
            // Americas
            'America/Adak': '🇺🇸', 'America/Anchorage': '🇺🇸', 'America/Anguilla': '🇦🇮', 'America/Antigua': '🇦🇬', 'America/Araguaina': '🇧🇷',
            'America/Argentina/Buenos_Aires': '🇦🇷', 'America/Argentina/Catamarca': '🇦🇷', 'America/Argentina/ComodRivadavia': '🇦🇷',
            'America/Argentina/Cordoba': '🇦🇷', 'America/Argentina/Jujuy': '🇦🇷', 'America/Argentina/La_Rioja': '🇦🇷',
            'America/Argentina/Mendoza': '🇦🇷', 'America/Argentina/Rio_Gallegos': '🇦🇷', 'America/Argentina/Salta': '🇦🇷',
            'America/Argentina/San_Juan': '🇦🇷', 'America/Argentina/San_Luis': '🇦🇷', 'America/Argentina/Tucuman': '🇦🇷',
            'America/Argentina/Ushuaia': '🇦🇷', 'America/Aruba': '🇦🇼', 'America/Asuncion': '🇵🇾', 'America/Atikokan': '🇨🇦',
            'America/Bahia': '🇧🇷', 'America/Bahia_Banderas': '🇲🇽', 'America/Barbados': '🇧🇧', 'America/Belem': '🇧🇷', 'America/Belize': '🇧🇿',
            'America/Blanc-Sablon': '🇨🇦', 'America/Boa_Vista': '🇧🇷', 'America/Bogota': '🇨🇴', 'America/Boise': '🇺🇸', 'America/Buenos_Aires': '🇦🇷',
            'America/Cambridge_Bay': '🇨🇦', 'America/Campo_Grande': '🇧🇷', 'America/Cancun': '🇲🇽', 'America/Caracas': '🇻🇪', 'America/Catamarca': '🇦🇷',
            'America/Cayenne': '🇬🇫', 'America/Cayman': '🇰🇾', 'America/Chicago': '🇺🇸', 'America/Chihuahua': '🇲🇽', 'America/Coral_Harbour': '🇨🇦',
            'America/Cordoba': '🇦🇷', 'America/Costa_Rica': '🇨🇷', 'America/Creston': '🇨🇦', 'America/Cuiaba': '🇧🇷', 'America/Curacao': '🇨🇼',
            'America/Danmarkshavn': '🇬🇱', 'America/Dawson': '🇨🇦', 'America/Dawson_Creek': '🇨🇦', 'America/Denver': '🇺🇸', 'America/Detroit': '🇺🇸',
            'America/Dominica': '🇩🇲', 'America/Edmonton': '🇨🇦', 'America/Eirunepe': '🇧🇷', 'America/El_Salvador': '🇸🇻', 'America/Ensenada': '🇲🇽',
            'America/Fort_Nelson': '🇨🇦', 'America/Fort_Wayne': '🇺🇸', 'America/Fortaleza': '🇧🇷', 'America/Glace_Bay': '🇨🇦', 'America/Godthab': '🇬🇱',
            'America/Goose_Bay': '🇨🇦', 'America/Grand_Turk': '🇹🇨', 'America/Grenada': '🇬🇩', 'America/Guadeloupe': '🇬🇵', 'America/Guam': '🇬🇺',
            'America/Guatemala': '🇬🇹', 'America/Guayaquil': '🇪🇨', 'America/Guyana': '🇬🇾', 'America/Halifax': '🇨🇦', 'America/Havana': '🇨🇺',
            'America/Hermosillo': '🇲🇽', 'America/Indianapolis': '🇺🇸', 'America/Jamaica': '🇯🇲', 'America/Juneau': '🇺🇸', 'America/Knox_IN': '🇺🇸',
            'America/Kralendijk': '🇧🇶', 'America/La_Paz': '🇧🇴', 'America/Lima': '🇵🇪', 'America/Los_Angeles': '🇺🇸', 'America/Louisville': '🇺🇸',
            'America/Lower_Princes': '🇸🇽', 'America/Maceio': '🇧🇷', 'America/Managua': '🇳🇮', 'America/Manaus': '🇧🇷', 'America/Marigot': '🇲🇫',
            'America/Martinique': '🇲🇶', 'America/Matamoros': '🇲🇽', 'America/Mazatlan': '🇲🇽', 'America/Mendoza': '🇦🇷', 'America/Menominee': '🇺🇸',
            'America/Merida': '🇲🇽', 'America/Metlakatla': '🇺🇸', 'America/Mexico_City': '🇲🇽', 'America/Miquelon': '🇵🇲', 'America/Mobile': '🇺🇸',
            'America/Moncton': '🇨🇦', 'America/Monterrey': '🇲🇽', 'America/Montevideo': '🇺🇾', 'America/Montreal': '🇨🇦', 'America/Montserrat': '🇲🇸',
            'America/Nassau': '🇧🇸', 'America/New_York': '🇺🇸', 'America/Newfoundland': '🇨🇦', 'America/Nome': '🇺🇸', 'America/Noronha': '🇧🇷',
            'America/Panama': '🇵🇦', 'America/Paramaribo': '🇸🇷', 'America/Phoenix': '🇺🇸', 'America/Port-au-Prince': '🇭🇹', 'America/Port_of_Spain': '🇹🇹',
            'America/Porto_Velho': '🇧🇷', 'America/Puerto_Rico': '🇵🇷', 'America/Punta_Arenas': '🇨🇱', 'America/Rainy_River': '🇨🇦', 'America/Rankin_Inlet': '🇨🇦',
            'America/Recife': '🇧🇷', 'America/Regina': '🇨🇦', 'America/Resolute': '🇨🇦', 'America/Rio_Branco': '🇧🇷', 'America/Santarem': '🇧🇷',
            'America/Santiago': '🇨🇱', 'America/Santo_Domingo': '🇩🇴', 'America/Sao_Paulo': '🇧🇷', 'America/Scoresbysund': '🇬🇱', 'America/Sitka': '🇺🇸',
            'America/St_Barthelemy': '🇧🇱', 'America/St_Johns': '🇨🇦', 'America/St_Kitts': '🇰🇳', 'America/St_Lucia': '🇱🇨', 'America/St_Thomas': '🇻🇮',
            'America/St_Vincent': '🇻🇨', 'America/Swift_Current': '🇨🇦', 'America/Tegucigalpa': '🇭🇳', 'America/Thule': '🇬🇱', 'America/Thunder_Bay': '🇨🇦',
            'America/Tijuana': '🇲🇽', 'America/Toronto': '🇨🇦', 'America/Tortola': '🇻🇬', 'America/Vancouver': '🇨🇦', 'America/Whitehorse': '🇨🇦',
            'America/Winnipeg': '🇨🇦', 'America/Yakutat': '🇺🇸', 'America/Yellowknife': '🇨🇦',
            // Asia
            'Asia/Aden': '🇾🇪', 'Asia/Almaty': '🇰🇿', 'Asia/Amman': '🇯🇴', 'Asia/Anadyr': '🇷🇺', 'Asia/Aqtau': '🇰🇿', 'Asia/Aqtobe': '🇰🇿',
            'Asia/Ashgabat': '🇹🇲', 'Asia/Atyrau': '🇰🇿', 'Asia/Baghdad': '🇮🇶', 'Asia/Bahrain': '🇧🇭', 'Asia/Baku': '🇦🇿', 'Asia/Bangkok': '🇹🇭',
            'Asia/Barnaul': '🇷🇺', 'Asia/Beirut': '🇱🇧', 'Asia/Bishkek': '🇰🇬', 'Asia/Brunei': '🇧🇳', 'Asia/Calcutta': '🇮🇳', 'Asia/Chita': '🇷🇺',
            'Asia/Choibalsan': '🇲🇳', 'Asia/Chongqing': '🇨🇳', 'Asia/Colombo': '🇱🇰', 'Asia/Dacca': '🇧🇩', 'Asia/Damascus': '🇸🇾', 'Asia/Dhaka': '🇧🇩',
            'Asia/Dili': '🇹🇱', 'Asia/Dubai': '🇦🇪', 'Asia/Dushanbe': '🇹🇯', 'Asia/Famagusta': '🇨🇾', 'Asia/Gaza': '🇵🇸', 'Asia/Harbin': '🇨🇳',
            'Asia/Hebron': '🇵🇸', 'Asia/Ho_Chi_Minh': '🇻🇳', 'Asia/Hong_Kong': '🇭🇰', 'Asia/Hovd': '🇲🇳', 'Asia/Irkutsk': '🇷🇺', 'Asia/Istanbul': '🇹🇷',
            'Asia/Jakarta': '🇮🇩', 'Asia/Jayapura': '🇮🇩', 'Asia/Jerusalem': '🇮🇱', 'Asia/Kabul': '🇦🇫', 'Asia/Kamchatka': '🇷🇺', 'Asia/Karachi': '🇵🇰',
            'Asia/Kashgar': '🇨🇳', 'Asia/Kathmandu': '🇳營', 'Asia/Khandyga': '🇷🇺', 'Asia/Kolkata': '🇮🇳', 'Asia/Krasnoyarsk': '🇷🇺', 'Asia/Kuala_Lumpur': '🇲🇾',
            'Asia/Kuching': '🇲🇾', 'Asia/Kuwait': '🇰🇼', 'Asia/Macao': '🇲🇴', 'Asia/Macau': '🇲🇴', 'Asia/Magadan': '🇷🇺', 'Asia/Makassar': '🇮🇩',
            'Asia/Manila': '🇵🇭', 'Asia/Minsk': '🇧🇾', 'Asia/Mogadishu': '🇸🇴', 'Asia/Moscow': '🇷🇺', 'Asia/Muscat': '🇴🇲', 'Asia/Nagpur': '🇮🇳',
            'Asia/Nicosia': '🇨🇾', 'Asia/Novokuznetsk': '🇷🇺', 'Asia/Novosibirsk': '🇷🇺', 'Asia/Omsk': '🇷🇺', 'Asia/Oral': '🇰🇿', 'Asia/Phnom_Penh': '🇰🇭',
            'Asia/Pontianak': '🇮🇩', 'Asia/Pyongyang': '🇰🇵', 'Asia/Qatar': '🇶🇦', 'Asia/Qyzylorda': '🇰🇿', 'Asia/Rangoon': '🇲🇲', 'Asia/Riyadh': '🇸🇦',
            'Asia/Saigon': '🇻🇳', 'Asia/Sakhalin': '🇷🇺', 'Asia/Samarkand': '🇺🇿', 'Asia/Seoul': '🇰🇷', 'Asia/Shanghai': '🇨🇳', 'Asia/Singapore': '🇸🇬',
            'Asia/Srednekolymsk': '🇷🇺', 'Asia/Taipei': '🇹🇼', 'Asia/Tashkent': '🇺🇿', 'Asia/Tbilisi': '🇬🇪', 'Asia/Tehran': '🇮🇷', 'Asia/Tel_Aviv': '🇮🇱',
            'Asia/Thimphu': '🇧🇹', 'Asia/Tokyo': '🇯🇵', 'Asia/Tomsk': '🇷🇺', 'Asia/Ujung_Pandang': '🇮🇩', 'Asia/Ulaanbaatar': '🇲🇳', 'Asia/Urumqi': '🇨🇳',
            'Asia/Ust-Nera': '🇷🇺', 'Asia/Vientiane': '🇱🇦', 'Asia/Vladivostok': '🇷🇺', 'Asia/Volgograd': '🇷🇺', 'Asia/Yakutsk': '🇷🇺', 'Asia/Yangon': '🇲🇲',
            'Asia/Yerevan': '🇦🇲',
            // Atlantic
            'Atlantic/Azores': '🇵🇹', 'Atlantic/Bermuda': '🇧🇲', 'Atlantic/Canary': '🇪🇸', 'Atlantic/Cape_Verde': '🇨🇻', 'Atlantic/Chatham': '🇳🇿',
            'Atlantic/Faeroe': '🇫🇴', 'Atlantic/Faroe': '🇫🇴', 'Atlantic/Greenland': '🇬🇱', 'Atlantic/Jan_Mayen': '🇳🇴', 'Atlantic/Madeira': '🇵🇹',
            'Atlantic/Reykjavik': '🇮🇸', 'Atlantic/South_Georgia': '🇬🇸', 'Atlantic/South_Sandwich': '🇬🇸', 'Atlantic/Stanley': '🇫🇰', 'Atlantic/St_Helena': '🇸🇭',
            // Australia
            'Australia/Adelaide': '🇦🇺', 'Australia/Brisbane': '🇦🇺', 'Australia/Broken_Hill': '🇦🇺', 'Australia/Canberra': '🇦🇺', 'Australia/Currie': '🇦🇺',
            'Australia/Darwin': '🇦🇺', 'Australia/Eucla': '🇦🇺', 'Australia/Hobart': '🇦🇺', 'Australia/Lindeman': '🇦🇺', 'Australia/Lord_Howe': '🇦🇺',
            'Australia/Melbourne': '🇦🇺', 'Australia/Perth': '🇦🇺', 'Australia/Sydney': '🇦🇺',
            // Europe
            'Europe/Amsterdam': '🇳🇱', 'Europe/Andorra': '🇦🇩', 'Europe/Astrakhan': '🇷🇺', 'Europe/Athens': '🇬🇷', 'Europe/Belfast': '🇬🇧',
            'Europe/Belgrade': '🇷🇸', 'Europe/Berlin': '🇩🇪', 'Europe/Bratislava': '🇸🇰', 'Europe/Brussels': '🇧🇪', 'Europe/Bucharest': '🇷🇴',
            'Europe/Budapest': '🇭🇺', 'Europe/Busingen': '🇩🇪', 'Europe/Chisinau': '🇲🇩', 'Europe/Copenhagen': '🇩🇰', 'Europe/Dublin': '🇮🇪',
            'Europe/Gibraltar': '🇬🇮', 'Europe/Guernsey': '🇬🇬', 'Europe/Helsinki': '🇫🇮', 'Europe/Isle_of_Man': '🇮🇲', 'Europe/Istanbul': '🇹🇷',
            'Europe/Jersey': '🇯🇪', 'Europe/Kaliningrad': '🇷🇺', 'Europe/Kiev': '🇺🇦', 'Europe/Kirov': '🇷🇺', 'Europe/Lisbon': '🇵🇹',
            'Europe/Ljubljana': '🇸🇮', 'Europe/London': '🇬🇧', 'Europe/Luxembourg': '🇱🇺', 'Europe/Madrid': '🇪🇸', 'Europe/Malta': '🇲🇹',
            'Europe/Mariehamn': '🇦🇽', 'Europe/Minsk': '🇧🇾', 'Europe/Monaco': '🇲🇨', 'Europe/Moscow': '🇷🇺', 'Europe/Nicosia': '🇨🇾',
            'Europe/Oslo': '🇳🇴', 'Europe/Paris': '🇫🇷', 'Europe/Perm': '🇷🇺', 'Europe/Prague': '🇨🇿', 'Europe/Riga': '🇱🇻', 'Europe/Rome': '🇮🇹',
            'Europe/Samara': '🇷🇺', 'Europe/San_Marino': '🇸🇲', 'Europe/Saratov': '🇷🇺', 'Europe/Sarajevo': '🇧🇦', 'Europe/Simferopol': '🇷🇺',
            'Europe/Skopje': '🇲🇰', 'Europe/Sofia': '🇧🇬', 'Europe/Stockholm': '🇸🇪', 'Europe/Tallinn': '🇪🇪', 'Europe/Tirane': '🇦🇱',
            'Europe/Ulyanovsk': '🇷🇺', 'Europe/Uzhgorod': '🇺🇦', 'Europe/Vaduz': '🇱🇮', 'Europe/Vatican': '🇻🇦', 'Europe/Vienna': '🇦🇹',
            'Europe/Vilnius': '🇱🇹', 'Europe/Volgograd': '🇷🇺', 'Europe/Warsaw': '🇵🇱', 'Europe/Zagreb': '🇭🇷', 'Europe/Zaporozhye': '🇺🇦',
            'Europe/Zurich': '🇨🇭',
            // Indian
            'Indian/Antananarivo': '🇲🇬', 'Indian/Chagos': '🇮🇴', 'Indian/Christmas': '🇨🇽', 'Indian/Cocos': '🇨🇨', 'Indian/Comoro': '🇰🇲',
            'Indian/Kerguelen': '🇹🇫', 'Indian/Mahe': '🇸🇨', 'Indian/Maldives': '🇲🇻', 'Indian/Mauritius': '🇲🇺', 'Indian/Mayotte': '🇾🇹',
            'Indian/Reunion': '🇷🇪',
            // Pacific
            'Pacific/Apia': '🇼🇸', 'Pacific/Auckland': '🇳🇿', 'Pacific/Bougainville': '🇵🇬', 'Pacific/Chatham': '🇳🇿', 'Pacific/Chuuk': '🇫🇲',
            'Pacific/Easter': '🇨🇱', 'Pacific/Efate': '🇻🇺', 'Pacific/Fakaofo': '🇹🇰', 'Pacific/Fiji': '🇫🇯', 'Pacific/Funafuti': '🇹🇻',
            'Pacific/Galapagos': '🇪🇨', 'Pacific/Gambier': '🇵🇫', 'Pacific/Guadalcanal': '🇸🇧', 'Pacific/Guam': '🇬🇺', 'Pacific/Honolulu': '🇺🇸',
            'Pacific/Johnston': '🇺🇸', 'Pacific/Kiritimati': '🇰🇮', 'Pacific/Kosrae': '🇫🇲', 'Pacific/Kwajalein': '🇲🇭', 'Pacific/Majuro': '🇲🇭',
            'Pacific/Marquesas': '🇵🇫', 'Pacific/Midway': '🇺🇸', 'Pacific/Nauru': '🇳🇷', 'Pacific/Niue': '🇳🇺', 'Pacific/Norfolk': '🇦🇺',
            'Pacific/Noumea': '🇳🇨', 'Pacific/Pago_Pago': '🇦🇸', 'Pacific/Palau': '🇵🇼', 'Pacific/Palmyra': '🇺🇸', 'Pacific/Papeete': '🇵🇫',
            'Pacific/Pitcairn': '🇵🇳', 'Pacific/Pohnpei': '🇫🇲', 'Pacific/Ponape': '🇫🇲', 'Pacific/Port_Moresby': '🇵🇬', 'Pacific/Rarotonga': '🇨🇰',
            'Pacific/Saipan': '🇲🇵', 'Pacific/Samoa': '🇼🇸', 'Pacific/Tahiti': '🇵🇫', 'Pacific/Tarawa': '🇰🇮', 'Pacific/Tongatapu': '🇹🇴',
            'Pacific/Truk': '🇫🇲', 'Pacific/Wake': '🇺🇸', 'Pacific/Wallis': '🇼🇫', 'Pacific/Yap': '🇫🇲',
            // UTC
            'UTC': '🌍', 'Etc/UTC': '🌍', 'Etc/GMT': '🌍'
        };
    }

    /**
     * Get all IANA timezone identifiers
     */
    getIANATimeZones() {
        const timeZones = [
            'Africa/Abidjan', 'Africa/Accra', 'Africa/Addis_Ababa', 'Africa/Algiers', 'Africa/Asmara', 'Africa/Bamako',
            'Africa/Bangui', 'Africa/Banjul', 'Africa/Bissau', 'Africa/Blantyre', 'Africa/Brazzaville', 'Africa/Bujumbura',
            'Africa/Cairo', 'Africa/Casablanca', 'Africa/Ceuta', 'Africa/Conakry', 'Africa/Dakar', 'Africa/Dar_es_Salaam',
            'Africa/Djibouti', 'Africa/Douala', 'Africa/El_Aaiun', 'Africa/Freetown', 'Africa/Gaborone', 'Africa/Harare',
            'Africa/Johannesburg', 'Africa/Juba', 'Africa/Kampala', 'Africa/Khartoum', 'Africa/Kigali', 'Africa/Kinshasa',
            'Africa/Lagos', 'Africa/Libreville', 'Africa/Lilongwe', 'Africa/Lome', 'Africa/Luanda', 'Africa/Lubumbashi',
            'Africa/Lusaka', 'Africa/Malabo', 'Africa/Maputo', 'Africa/Maseru', 'Africa/Mbabane', 'Africa/Mogadishu',
            'Africa/Monrovia', 'Africa/Nairobi', 'Africa/Ndjamena', 'Africa/Niamey', 'Africa/Nouakchott', 'Africa/Ouagadougou',
            'Africa/Porto-Novo', 'Africa/Sao_Tome', 'Africa/Tripoli', 'Africa/Tunis', 'Africa/Windhoek',
            // Americas
            'America/Adak', 'America/Anchorage', 'America/Anguilla', 'America/Antigua', 'America/Araguaina', 'America/Argentina/Buenos_Aires',
            'America/Argentina/Catamarca', 'America/Argentina/Cordoba', 'America/Argentina/Jujuy', 'America/Argentina/La_Rioja',
            'America/Argentina/Mendoza', 'America/Argentina/Rio_Gallegos', 'America/Argentina/Salta', 'America/Argentina/San_Juan',
            'America/Argentina/San_Luis', 'America/Argentina/Tucuman', 'America/Argentina/Ushuaia', 'America/Aruba', 'America/Asuncion',
            'America/Atikokan', 'America/Bahia', 'America/Bahia_Banderas', 'America/Barbados', 'America/Belem', 'America/Belize',
            'America/Blanc-Sablon', 'America/Boa_Vista', 'America/Bogota', 'America/Boise', 'America/Cambridge_Bay', 'America/Campo_Grande',
            'America/Cancun', 'America/Caracas', 'America/Cayenne', 'America/Cayman', 'America/Chicago', 'America/Chihuahua',
            'America/Costa_Rica', 'America/Creston', 'America/Cuiaba', 'America/Curacao', 'America/Danmarkshavn', 'America/Dawson',
            'America/Dawson_Creek', 'America/Denver', 'America/Detroit', 'America/Dominica', 'America/Edmonton', 'America/Eirunepe',
            'America/El_Salvador', 'America/Fort_Nelson', 'America/Fortaleza', 'America/Glace_Bay', 'America/Goose_Bay', 'America/Grand_Turk',
            'America/Grenada', 'America/Guadeloupe', 'America/Guatemala', 'America/Guayaquil', 'America/Guyana', 'America/Halifax',
            'America/Havana', 'America/Hermosillo', 'America/Indianapolis', 'America/Jamaica', 'America/Juneau', 'America/Kentucky/Louisville',
            'America/Kentucky/Monticello', 'America/Kralendijk', 'America/La_Paz', 'America/Lima', 'America/Los_Angeles', 'America/Lower_Princes',
            'America/Maceio', 'America/Managua', 'America/Manaus', 'America/Marigot', 'America/Martinique', 'America/Matamoros',
            'America/Mazatlan', 'America/Menominee', 'America/Merida', 'America/Metlakatla', 'America/Mexico_City', 'America/Miquelon',
            'America/Moncton', 'America/Monterrey', 'America/Montevideo', 'America/Nassau', 'America/New_York', 'America/Newfoundland',
            'America/Nome', 'America/Noronha', 'America/North_Dakota/Beulah', 'America/North_Dakota/Center', 'America/North_Dakota/New_Salem',
            'America/Nuuk', 'America/Ojinaga', 'America/Panama', 'America/Pangnirtung', 'America/Paramaribo', 'America/Phoenix',
            'America/Port-au-Prince', 'America/Port_of_Spain', 'America/Porto_Velho', 'America/Puerto_Rico', 'America/Punta_Arenas',
            'America/Rainy_River', 'America/Rankin_Inlet', 'America/Recife', 'America/Regina', 'America/Resolute', 'America/Rio_Branco',
            'America/Santarem', 'America/Santiago', 'America/Santo_Domingo', 'America/Sao_Paulo', 'America/Scoresbysund', 'America/Sitka',
            'America/St_Barthelemy', 'America/St_Johns', 'America/St_Kitts', 'America/St_Lucia', 'America/St_Thomas', 'America/St_Vincent',
            'America/Swift_Current', 'America/Tegucigalpa', 'America/Thule', 'America/Thunder_Bay', 'America/Tijuana', 'America/Toronto',
            'America/Tortola', 'America/Vancouver', 'America/Whitehorse', 'America/Winnipeg', 'America/Yakutat', 'America/Yellowknife',
            // Asia
            'Asia/Aden', 'Asia/Almaty', 'Asia/Amman', 'Asia/Anadyr', 'Asia/Aqtau', 'Asia/Aqtobe', 'Asia/Ashgabat', 'Asia/Atyrau',
            'Asia/Baghdad', 'Asia/Bahrain', 'Asia/Baku', 'Asia/Bangkok', 'Asia/Barnaul', 'Asia/Beirut', 'Asia/Bishkek', 'Asia/Brunei',
            'Asia/Chita', 'Asia/Choibalsan', 'Asia/Colombo', 'Asia/Damascus', 'Asia/Dhaka', 'Asia/Dili', 'Asia/Dubai', 'Asia/Dushanbe',
            'Asia/Famagusta', 'Asia/Gaza', 'Asia/Hebron', 'Asia/Ho_Chi_Minh', 'Asia/Hong_Kong', 'Asia/Hovd', 'Asia/Irkutsk', 'Asia/Istanbul',
            'Asia/Jakarta', 'Asia/Jayapura', 'Asia/Jerusalem', 'Asia/Kabul', 'Asia/Kamchatka', 'Asia/Karachi', 'Asia/Kathmandu',
            'Asia/Khandyga', 'Asia/Kolkata', 'Asia/Krasnoyarsk', 'Asia/Kuala_Lumpur', 'Asia/Kuching', 'Asia/Kuwait', 'Asia/Macau',
            'Asia/Magadan', 'Asia/Makassar', 'Asia/Manila', 'Asia/Muscat', 'Asia/Nicosia', 'Asia/Novokuznetsk', 'Asia/Novosibirsk',
            'Asia/Omsk', 'Asia/Oral', 'Asia/Phnom_Penh', 'Asia/Pontianak', 'Asia/Pyongyang', 'Asia/Qatar', 'Asia/Qostanay', 'Asia/Qyzylorda',
            'Asia/Riyadh', 'Asia/Sakhalin', 'Asia/Samarkand', 'Asia/Seoul', 'Asia/Shanghai', 'Asia/Singapore', 'Asia/Srednekolymsk',
            'Asia/Taipei', 'Asia/Tashkent', 'Asia/Tbilisi', 'Asia/Tehran', 'Asia/Thimphu', 'Asia/Tokyo', 'Asia/Tomsk', 'Asia/Ulaanbaatar',
            'Asia/Urumqi', 'Asia/Ust-Nera', 'Asia/Vientiane', 'Asia/Vladivostok', 'Asia/Yakutsk', 'Asia/Yangon', 'Asia/Yerevan',
            // Atlantic
            'Atlantic/Azores', 'Atlantic/Bermuda', 'Atlantic/Canary', 'Atlantic/Cape_Verde', 'Atlantic/Chatham', 'Atlantic/Faroe',
            'Atlantic/Madeira', 'Atlantic/Reykjavik', 'Atlantic/South_Georgia', 'Atlantic/Stanley',
            // Australia
            'Australia/Adelaide', 'Australia/Brisbane', 'Australia/Broken_Hill', 'Australia/Darwin', 'Australia/Eucla', 'Australia/Hobart',
            'Australia/Lindeman', 'Australia/Lord_Howe', 'Australia/Melbourne', 'Australia/Perth', 'Australia/Sydney',
            // Europe
            'Europe/Amsterdam', 'Europe/Andorra', 'Europe/Astrakhan', 'Europe/Athens', 'Europe/Belgrade', 'Europe/Berlin', 'Europe/Brussels',
            'Europe/Bucharest', 'Europe/Budapest', 'Europe/Busingen', 'Europe/Chisinau', 'Europe/Copenhagen', 'Europe/Dublin', 'Europe/Gibraltar',
            'Europe/Helsinki', 'Europe/Istanbul', 'Europe/Kaliningrad', 'Europe/Kirov', 'Europe/Kyiv', 'Europe/Lisbon', 'Europe/London',
            'Europe/Luxembourg', 'Europe/Madrid', 'Europe/Malta', 'Europe/Minsk', 'Europe/Monaco', 'Europe/Moscow', 'Europe/Oslo', 'Europe/Paris',
            'Europe/Prague', 'Europe/Riga', 'Europe/Rome', 'Europe/Samara', 'Europe/Saratov', 'Europe/Simferopol', 'Europe/Sofia', 'Europe/Stockholm',
            'Europe/Tallinn', 'Europe/Tirane', 'Europe/Ulyanovsk', 'Europe/Vienna', 'Europe/Vilnius', 'Europe/Volgograd', 'Europe/Warsaw',
            'Europe/Zurich',
            // Indian
            'Indian/Chagos', 'Indian/Christmas', 'Indian/Cocos', 'Indian/Kerguelen', 'Indian/Mahe', 'Indian/Maldives', 'Indian/Mauritius', 'Indian/Reunion',
            // Pacific
            'Pacific/Apia', 'Pacific/Auckland', 'Pacific/Bougainville', 'Pacific/Chatham', 'Pacific/Chuuk', 'Pacific/Easter', 'Pacific/Efate',
            'Pacific/Fakaofo', 'Pacific/Fiji', 'Pacific/Funafuti', 'Pacific/Galapagos', 'Pacific/Gambier', 'Pacific/Guadalcanal', 'Pacific/Guam',
            'Pacific/Honolulu', 'Pacific/Kiritimati', 'Pacific/Kosrae', 'Pacific/Kwajalein', 'Pacific/Majuro', 'Pacific/Marquesas', 'Pacific/Nauru',
            'Pacific/Niue', 'Pacific/Norfolk', 'Pacific/Noumea', 'Pacific/Pago_Pago', 'Pacific/Palau', 'Pacific/Papeete', 'Pacific/Pitcairn',
            'Pacific/Pohnpei', 'Pacific/Port_Moresby', 'Pacific/Rarotonga', 'Pacific/Saipan', 'Pacific/Tahiti', 'Pacific/Tarawa', 'Pacific/Tongatapu',
            'Pacific/Wake', 'Pacific/Wallis',
            // UTC
            'UTC', 'Etc/UTC', 'Etc/GMT'
        ];
        return [...new Set(timeZones)].sort();
    }

    /**
     * Initialize the World Clock module
     */
    async init() {
        // Try to load from GitHub first if in admin, else fallback to localStorage
        if (window.location.pathname.includes('admin-control.html')) {
            await this.loadFromGitHub();
        } else {
            this.loadFromLocalStorage();
        }
        
        this.renderTimeZoneDropdown();
        this.renderClocks();
        this.startClockUpdates();
    }

    async loadFromGitHub() {
        try {
            const response = await fetch('data/clocks.json?t=' + Date.now());
            if (response.ok) {
                this.selectedTimeZones = await response.json();
                this.saveToLocalStorage();
            } else {
                this.loadFromLocalStorage();
            }
        } catch (e) {
            console.error('Error loading clocks from GitHub:', e);
            this.loadFromLocalStorage();
        }
    }

    /**
     * Load saved timezones from localStorage
     */
    loadFromLocalStorage() {
        const saved = localStorage.getItem('worldClockTimeZones');
        if (saved) {
            try {
                this.selectedTimeZones = JSON.parse(saved);
            } catch (e) {
                console.error('Failed to load saved timezones:', e);
                this.selectedTimeZones = [];
            }
        }
    }

    /**
     * Save selected timezones to localStorage
     */
    saveToLocalStorage() {
        localStorage.setItem('worldClockTimeZones', JSON.stringify(this.selectedTimeZones));
    }

    /**
     * Render the timezone search dropdown
     */
    renderTimeZoneDropdown() {
        const container = document.getElementById('worldClockDropdownContainer');
        if (!container) return;

        container.innerHTML = `
            <div style="margin-bottom: 20px;">
                <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 15px;">
                    <input 
                        type="text" 
                        id="timezoneSearch" 
                        class="search-box" 
                        placeholder="Search timezone (e.g., New_York, Tokyo, London)..."
                        style="flex: 1; min-width: 200px;"
                    >
                    <button class="cyber-btn" onclick="worldClock.performSearch()" style="white-space: nowrap;">🔍 SEARCH</button>
                </div>
                <select id="timezoneSelect" class="player-select" style="width: 100%; margin-bottom: 10px;">
                    <option value="">-- Select Timezone --</option>
                    ${this.allTimeZones.map(tz => `<option value="${tz}">${tz}</option>`).join('')}
                </select>
                <button class="cyber-btn" onclick="worldClock.addTimeZone()" style="width: 100%;">ADD_CLOCK</button>
            </div>
            <div id="searchResults" style="display: none; margin-top: 15px; padding: 15px; background: rgba(0,0,0,0.3); border: 1px solid var(--cyber-border); border-radius: 8px;">
                <div style="color: var(--cyber-gold); font-family: 'Orbitron'; font-size: 0.9rem; margin-bottom: 10px;">SEARCH_RESULTS:</div>
                <div id="searchResultsList" style="max-height: 300px; overflow-y: auto;"></div>
            </div>
        `;

        const searchInput = document.getElementById('timezoneSearch');
        const selectInput = document.getElementById('timezoneSelect');

        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            if (query.length === 0) {
                selectInput.innerHTML = \`<option value="">-- Select Timezone --</option>\`;
                this.allTimeZones.forEach(tz => {
                    const option = document.createElement('option');
                    option.value = tz;
                    option.textContent = tz;
                    selectInput.appendChild(option);
                });
            } else {
                const filtered = this.allTimeZones.filter(tz => tz.toLowerCase().includes(query));
                selectInput.innerHTML = \`<option value="">-- Select Timezone (\${filtered.length} found) --</option>\`;
                filtered.forEach(tz => {
                    const option = document.createElement('option');
                    option.value = tz;
                    const flag = this.timeZoneFlags[tz] || '🌍';
                    option.textContent = \`\${flag} \${tz}\`;
                    selectInput.appendChild(option);
                });
            }
        });
    }

    performSearch() {
        const searchInput = document.getElementById('timezoneSearch');
        const query = searchInput.value.toLowerCase().trim();

        if (!query) return;

        const filtered = this.allTimeZones.filter(tz => tz.toLowerCase().includes(query));
        const resultsContainer = document.getElementById('searchResults');
        const resultsList = document.getElementById('searchResultsList');

        if (filtered.length === 0) {
            resultsList.innerHTML = '<p style="color: #ff3232;">No timezones found matching "' + query + '"</p>';
        } else {
            resultsList.innerHTML = filtered.map(tz => {
                const flag = this.timeZoneFlags[tz] || '🌍';
                return `
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px; border-bottom: 1px solid rgba(245, 166, 35, 0.2); cursor: pointer;" onmouseover="this.style.background='rgba(245, 166, 35, 0.1)'" onmouseout="this.style.background='transparent'">
                    <span style="color: #e0e0e0;"><span style="font-size: 1.2rem; margin-right: 8px;">\${flag}</span>\${tz}</span>
                    <button class="cyber-btn" onclick="worldClock.selectAndAdd('\${tz}')" style="padding: 6px 12px; font-size: 0.75rem;">ADD</button>
                </div>
            `;
            }).join('');
        }
        resultsContainer.style.display = 'block';
    }

    selectAndAdd(timezone) {
        if (this.selectedTimeZones.some(tz => tz.zone === timezone)) return;
        const flag = this.timeZoneFlags[timezone] || '🌍';
        const name = timezone.split('/').pop().replace(/_/g, ' ');
        this.selectedTimeZones.push({ zone: timezone, name, flag });
        this.saveToLocalStorage();
        this.renderClocks();
        if (window.location.pathname.includes('admin-control.html') && typeof saveClocksToGitHub === 'function') {
            saveClocksToGitHub();
        }
        document.getElementById('timezoneSearch').value = '';
        document.getElementById('searchResults').style.display = 'none';
    }

    addTimeZone() {
        const select = document.getElementById('timezoneSelect');
        const timezone = select.value;
        if (!timezone) return;
        this.selectAndAdd(timezone);
        select.value = '';
    }

    removeTimeZone(zone) {
        this.selectedTimeZones = this.selectedTimeZones.filter(tz => tz.zone !== zone);
        this.saveToLocalStorage();
        this.renderClocks();
        if (window.location.pathname.includes('admin-control.html') && typeof saveClocksToGitHub === 'function') {
            saveClocksToGitHub();
        }
    }

    getTimeForZone(tzObj) {
        try {
            const now = new Date();
            const formatter = new Intl.DateTimeFormat('en-US', {
                timeZone: tzObj.zone,
                year: 'numeric', month: '2-digit', day: '2-digit',
                hour: '2-digit', minute: '2-digit', second: '2-digit',
                hour12: false
            });
            const parts = formatter.formatToParts(now);
            return {
                year: parts.find(p => p.type === 'year').value,
                month: parts.find(p => p.type === 'month').value,
                day: parts.find(p => p.type === 'day').value,
                hour: parts.find(p => p.type === 'hour').value,
                minute: parts.find(p => p.type === 'minute').value,
                second: parts.find(p => p.type === 'second').value
            };
        } catch (e) { return null; }
    }

    getUTCOffset(timezone) {
        try {
            const now = new Date();
            const utcDate = new Date(now.toLocaleString('en-US', { timeZone: 'UTC' }));
            const tzDate = new Date(now.toLocaleString('en-US', { timeZone: timezone }));
            const offset = (tzDate - utcDate) / (1000 * 60 * 60);
            const sign = offset >= 0 ? '+' : '';
            return `UTC \${sign}\${offset.toFixed(1)}`;
        } catch (e) { return 'UTC'; }
    }

    renderClocks() {
        const container = document.getElementById('worldClockContainer');
        if (!container) return;

        if (this.selectedTimeZones.length === 0) {
            container.innerHTML = '<p style="text-align: center; color: #888;">No clocks added. Select a timezone above to get started.</p>';
            return;
        }

        container.innerHTML = this.selectedTimeZones.map(tz => {
            const time = this.getTimeForZone(tz);
            if (!time) return '';
            const offset = this.getUTCOffset(tz.zone);
            return `
                <div class="battle-clock-card" style="margin-bottom: 15px;">
                    <div class="clock-label" style="font-size: 2rem; margin-bottom: 10px;">\${tz.flag}</div>
                    <div class="clock-label">\${tz.name} (\${tz.zone})</div>
                    <div class="clock-label" style="font-size: 0.7rem; color: #666; margin-bottom: 5px;">\${offset}</div>
                    <div class="clock-display" style="font-size: 2rem;">\${time.hour}:\${time.minute}:\${time.second}</div>
                    <div class="clock-label" style="font-size: 0.8rem; margin-top: 10px;">\${time.year}-\${time.month}-\${time.day}</div>
                    \${window.location.pathname.includes('admin-control.html') ? \`
                    <button class="cyber-btn secondary" onclick="worldClock.removeTimeZone('\${tz.zone}')" style="margin-top: 10px; border-color: #ff3232; color: #ff3232; width: 100%;">
                        REMOVE_CLOCK
                    </button>\` : ''}
                </div>
            `;
        }).join('');
    }

    startClockUpdates() {
        setInterval(() => this.renderClocks(), 1000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.worldClock = new WorldClock();
});
