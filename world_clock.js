/**
 * World Clock Module for Lords Mobile Hub
 * Features:
 * - Live digital clocks with IANA timezone support
 * - Searchable timezone dropdown with 400+ zones
 * - Automatic DST handling
 * - localStorage persistence
 * - Mobile-friendly responsive design
 */

class WorldClock {
    constructor() {
        this.selectedTimeZones = [];
        this.allTimeZones = this.getIANATimeZones();
        this.init();
    }

    /**
     * Get all IANA timezone identifiers
     * These are the official timezone names recognized by JavaScript's Intl API
     */
    getIANATimeZones() {
        const timeZones = [
            // Africa
            'Africa/Abidjan', 'Africa/Accra', 'Africa/Addis_Ababa', 'Africa/Algiers', 'Africa/Asmara',
            'Africa/Bamako', 'Africa/Bangui', 'Africa/Banjul', 'Africa/Bissau', 'Africa/Blantyre',
            'Africa/Brazzaville', 'Africa/Bujumbura', 'Africa/Cairo', 'Africa/Casablanca', 'Africa/Ceuta',
            'Africa/Conakry', 'Africa/Dakar', 'Africa/Dar_es_Salaam', 'Africa/Djibouti', 'Africa/Douala',
            'Africa/El_Aaiun', 'Africa/Freetown', 'Africa/Gaborone', 'Africa/Harare', 'Africa/Johannesburg',
            'Africa/Juba', 'Africa/Kampala', 'Africa/Khartoum', 'Africa/Kigali', 'Africa/Kinshasa',
            'Africa/Lagos', 'Africa/Libreville', 'Africa/Lilongwe', 'Africa/Lome', 'Africa/Luanda',
            'Africa/Lubumbashi', 'Africa/Lusaka', 'Africa/Malabo', 'Africa/Maputo', 'Africa/Maseru',
            'Africa/Mbabane', 'Africa/Mogadishu', 'Africa/Monrovia', 'Africa/Montserrado', 'Africa/Nairobi',
            'Africa/Ndjamena', 'Africa/Niamey', 'Africa/Nouakchott', 'Africa/Ouagadougou', 'Africa/Porto-Novo',
            'Africa/Sao_Tome', 'Africa/Timbuktu', 'Africa/Tripoli', 'Africa/Tunis', 'Africa/Windhoek',
            // Americas
            'America/Adak', 'America/Anchorage', 'America/Anguilla', 'America/Antigua', 'America/Araguaina',
            'America/Argentina/Buenos_Aires', 'America/Argentina/Catamarca', 'America/Argentina/ComodRivadavia',
            'America/Argentina/Cordoba', 'America/Argentina/Jujuy', 'America/Argentina/La_Rioja',
            'America/Argentina/Mendoza', 'America/Argentina/Rio_Gallegos', 'America/Argentina/Salta',
            'America/Argentina/San_Juan', 'America/Argentina/San_Luis', 'America/Argentina/Tucuman',
            'America/Argentina/Ushuaia', 'America/Aruba', 'America/Asuncion', 'America/Atikokan',
            'America/Bahia', 'America/Bahia_Banderas', 'America/Barbados', 'America/Belem', 'America/Belize',
            'America/Blanc-Sablon', 'America/Boa_Vista', 'America/Bogota', 'America/Boise', 'America/Buenos_Aires',
            'America/Cambridge_Bay', 'America/Campo_Grande', 'America/Cancun', 'America/Caracas', 'America/Catamarca',
            'America/Cayenne', 'America/Cayman', 'America/Chicago', 'America/Chihuahua', 'America/Coral_Harbour',
            'America/Cordoba', 'America/Costa_Rica', 'America/Creston', 'America/Cuiaba', 'America/Curacao',
            'America/Danmarkshavn', 'America/Dawson', 'America/Dawson_Creek', 'America/Denver', 'America/Detroit',
            'America/Dominica', 'America/Edmonton', 'America/Eirunepe', 'America/El_Salvador', 'America/Ensenada',
            'America/Fort_Nelson', 'America/Fort_Wayne', 'America/Fortaleza', 'America/Glace_Bay', 'America/Godthab',
            'America/Goose_Bay', 'America/Grand_Turk', 'America/Grenada', 'America/Guadeloupe', 'America/Guam',
            'America/Guatemala', 'America/Guayaquil', 'America/Guyana', 'America/Halifax', 'America/Havana',
            'America/Hermosillo', 'America/Indiana/Indianapolis', 'America/Indiana/Knox', 'America/Indiana/Marengo',
            'America/Indiana/Petersburg', 'America/Indiana/Tell_City', 'America/Indiana/Vevay', 'America/Indiana/Vincennes',
            'America/Indiana/Winamac', 'America/Indianapolis', 'America/Inuvik', 'America/Iqaluit', 'America/Jamaica',
            'America/Jujuy', 'America/Juneau', 'America/Kentucky/Louisville', 'America/Kentucky/Monticello',
            'America/Knox_IN', 'America/Kralendijk', 'America/La_Paz', 'America/Lima', 'America/Los_Angeles',
            'America/Louisville', 'America/Lower_Princes', 'America/Maceio', 'America/Managua', 'America/Manaus',
            'America/Marigot', 'America/Martinique', 'America/Matamoros', 'America/Mazatlan', 'America/Mendoza',
            'America/Menominee', 'America/Merida', 'America/Metlakatla', 'America/Mexico_City', 'America/Miquelon',
            'America/Miquimaon', 'America/Mobile', 'America/Moncton', 'America/Monterrey', 'America/Montevideo',
            'America/Montreal', 'America/Montserrat', 'America/Nassau', 'America/New_York', 'America/Newfoundland',
            'America/Niquero', 'America/Nome', 'America/Noronha', 'America/North_Dakota/Beulah', 'America/North_Dakota/Center',
            'America/North_Dakota/New_Salem', 'America/Nuuk', 'America/Ojinaga', 'America/Panama', 'America/Pangnirtung',
            'America/Paramaribo', 'America/Phoenix', 'America/Port-au-Prince', 'America/Port_of_Spain', 'America/Porto_Acre',
            'America/Porto_Velho', 'America/Puerto_Rico', 'America/Punta_Arenas', 'America/Rainy_River', 'America/Rankin_Inlet',
            'America/Recife', 'America/Regina', 'America/Resolute', 'America/Rio_Branco', 'America/Rosario',
            'America/Santarem', 'America/Santiago', 'America/Santo_Domingo', 'America/Sao_Paulo', 'America/Scoresbysund',
            'America/Shiprock', 'America/Sitka', 'America/St_Barthelemy', 'America/St_Johns', 'America/St_Kitts',
            'America/St_Lucia', 'America/St_Thomas', 'America/St_Vincent', 'America/Swift_Current', 'America/Tegucigalpa',
            'America/Thule', 'America/Thunder_Bay', 'America/Tijuana', 'America/Toronto', 'America/Tortola',
            'America/Tucuman', 'America/Tucson', 'America/Tumbes', 'America/Ushuaia', 'America/Vancouver',
            'America/Virgin', 'America/Whitehorse', 'America/Winnipeg', 'America/Yakutat', 'America/Yellowknife',
            // Asia
            'Asia/Aden', 'Asia/Almaty', 'Asia/Amman', 'Asia/Anadyr', 'Asia/Aqtau', 'Asia/Aqtobe', 'Asia/Ashgabat',
            'Asia/Ashkhabad', 'Asia/Atyrau', 'Asia/Baghdad', 'Asia/Bahrain', 'Asia/Baku', 'Asia/Bangkok', 'Asia/Barnaul',
            'Asia/Beirut', 'Asia/Bishkek', 'Asia/Bloemfontein', 'Asia/Brunei', 'Asia/Calcutta', 'Asia/Chita', 'Asia/Choibalsan',
            'Asia/Chongqing', 'Asia/Chungking', 'Asia/Colombo', 'Asia/Comoro', 'Asia/Dacca', 'Asia/Damascus', 'Asia/Dhaka',
            'Asia/Dili', 'Asia/Dubai', 'Asia/Dushanbe', 'Asia/Famagusta', 'Asia/Gaza', 'Asia/Harbin', 'Asia/Hebron',
            'Asia/Ho_Chi_Minh', 'Asia/Hong_Kong', 'Asia/Hovd', 'Asia/Irkutsk', 'Asia/Istanbul', 'Asia/Jakarta', 'Asia/Jayapura',
            'Asia/Jerusalem', 'Asia/Kabul', 'Asia/Kamchatka', 'Asia/Karachi', 'Asia/Kashgar', 'Asia/Kathmandu', 'Asia/Katmandu',
            'Asia/Khandyga', 'Asia/Kolkata', 'Asia/Krasnoyarsk', 'Asia/Kuala_Lumpur', 'Asia/Kuching', 'Asia/Kuwait', 'Asia/Macao',
            'Asia/Macau', 'Asia/Magadan', 'Asia/Makassar', 'Asia/Manila', 'Asia/Mariehamn', 'Asia/Marquesas', 'Asia/Maseru',
            'Asia/Mauritius', 'Asia/Mecca', 'Asia/Medina', 'Asia/Meymaneh', 'Asia/Minsk', 'Asia/Mogadishu', 'Asia/Monastir',
            'Asia/Monrovia', 'Asia/Montserrado', 'Asia/Moscow', 'Asia/Muscat', 'Asia/Nagpur', 'Asia/Nakhichevan', 'Asia/Nicosia',
            'Asia/Novokuznetsk', 'Asia/Novosibirsk', 'Asia/Omsk', 'Asia/Oral', 'Asia/Phnom_Penh', 'Asia/Pontianak', 'Asia/Pyongyang',
            'Asia/Qatar', 'Asia/Qyzylorda', 'Asia/Rangoon', 'Asia/Riyadh', 'Asia/Saigon', 'Asia/Sakhalin', 'Asia/Samarkand',
            'Asia/Samarqand', 'Asia/Seoul', 'Asia/Shanghai', 'Asia/Singapore', 'Asia/Srednekolymsk', 'Asia/Taipei', 'Asia/Tashkent',
            'Asia/Taskhent', 'Asia/Tbilisi', 'Asia/Tehran', 'Asia/Tel_Aviv', 'Asia/Thimbu', 'Asia/Thimphu', 'Asia/Tokyo',
            'Asia/Tomsk', 'Asia/Ujung_Pandang', 'Asia/Ulaanbaatar', 'Asia/Ulan_Bator', 'Asia/Urumqi', 'Asia/Ust-Nera', 'Asia/Vientiane',
            'Asia/Vladivostok', 'Asia/Volgograd', 'Asia/Yakutsk', 'Asia/Yangon', 'Asia/Yarkand', 'Asia/Yerevan',
            // Atlantic
            'Atlantic/Azores', 'Atlantic/Bermuda', 'Atlantic/Canary', 'Atlantic/Cape_Verde', 'Atlantic/Chatham',
            'Atlantic/Faeroe', 'Atlantic/Faroe', 'Atlantic/Greenland', 'Atlantic/Jan_Mayen', 'Atlantic/Madeira',
            'Atlantic/Reykjavik', 'Atlantic/South_Georgia', 'Atlantic/South_Sandwich', 'Atlantic/Stanley', 'Atlantic/St_Helena',
            // Australia
            'Australia/ACT', 'Australia/Adelaide', 'Australia/Brisbane', 'Australia/Broken_Hill', 'Australia/Canberra',
            'Australia/Currie', 'Australia/Darwin', 'Australia/Eucla', 'Australia/Hobart', 'Australia/LHI',
            'Australia/Lindeman', 'Australia/Lord_Howe', 'Australia/Melbourne', 'Australia/NSW', 'Australia/North',
            'Australia/Perth', 'Australia/Queensland', 'Australia/South', 'Australia/Sydney', 'Australia/Tasmania',
            'Australia/Victoria', 'Australia/West', 'Australia/Yancowinna',
            // Europe
            'Europe/Amsterdam', 'Europe/Andorra', 'Europe/Astrakhan', 'Europe/Athens', 'Europe/Belfast', 'Europe/Belgrade',
            'Europe/Berlin', 'Europe/Bratislava', 'Europe/Brussels', 'Europe/Bucharest', 'Europe/Budapest', 'Europe/Busingen',
            'Europe/Chisinau', 'Europe/Copenhagen', 'Europe/Dublin', 'Europe/Gibraltar', 'Europe/Guernsey', 'Europe/Helsinki',
            'Europe/Isle_of_Man', 'Europe/Istanbul', 'Europe/Jersey', 'Europe/Jassy', 'Europe/Kaliningrad', 'Europe/Kiev',
            'Europe/Kirov', 'Europe/Lisbon', 'Europe/Ljubljana', 'Europe/London', 'Europe/Luxembourg', 'Europe/Madrid',
            'Europe/Malta', 'Europe/Mariehamn', 'Europe/Minsk', 'Europe/Miquelon', 'Europe/Monaco', 'Europe/Moscow',
            'Europe/Nicosia', 'Europe/Oslo', 'Europe/Paris', 'Europe/Perm', 'Europe/Prague', 'Europe/Riga', 'Europe/Rome',
            'Europe/Rosario', 'Europe/Samara', 'Europe/San_Marino', 'Europe/Saratov', 'Europe/Sarajevo', 'Europe/Saratov',
            'Europe/Simferopol', 'Europe/Skopje', 'Europe/Sofia', 'Europe/Stockholm', 'Europe/Tallinn', 'Europe/Tirane',
            'Europe/Tiraspol', 'Europe/Ulyanovsk', 'Europe/Uzhgorod', 'Europe/Vaduz', 'Europe/Vatican', 'Europe/Vienna',
            'Europe/Vilnius', 'Europe/Volgograd', 'Europe/Warsaw', 'Europe/Zagreb', 'Europe/Zaporozhye', 'Europe/Zurich',
            // Indian
            'Indian/Antananarivo', 'Indian/Chagos', 'Indian/Christmas', 'Indian/Cocos', 'Indian/Comoro', 'Indian/Kerguelen',
            'Indian/Mahe', 'Indian/Maldives', 'Indian/Mauritius', 'Indian/Mayotte', 'Indian/Reunion',
            // Pacific
            'Pacific/Apia', 'Pacific/Auckland', 'Pacific/Bougainville', 'Pacific/Chatham', 'Pacific/Chuuk', 'Pacific/Easter',
            'Pacific/Efate', 'Pacific/Enderbury', 'Pacific/Fakaofo', 'Pacific/Fiji', 'Pacific/Funafuti', 'Pacific/Galapagos',
            'Pacific/Gambier', 'Pacific/Guadalcanal', 'Pacific/Guam', 'Pacific/Honolulu', 'Pacific/Johnston', 'Pacific/Kiritimati',
            'Pacific/Kosrae', 'Pacific/Kwajalein', 'Pacific/Majuro', 'Pacific/Marquesas', 'Pacific/Midway', 'Pacific/Nauru',
            'Pacific/Niue', 'Pacific/Norfolk', 'Pacific/Noumea', 'Pacific/Pago_Pago', 'Pacific/Palau', 'Pacific/Palmyra',
            'Pacific/Papeete', 'Pacific/Pitcairn', 'Pacific/Pohnpei', 'Pacific/Ponape', 'Pacific/Port_Moresby', 'Pacific/Rarotonga',
            'Pacific/Saipan', 'Pacific/Samoa', 'Pacific/Tahiti', 'Pacific/Tarawa', 'Pacific/Tongatapu', 'Pacific/Truk',
            'Pacific/Wake', 'Pacific/Wallis', 'Pacific/Yap',
            // UTC
            'UTC', 'Etc/UTC', 'Etc/GMT', 'Etc/GMT+1', 'Etc/GMT+2', 'Etc/GMT+3', 'Etc/GMT+4', 'Etc/GMT+5',
            'Etc/GMT+6', 'Etc/GMT+7', 'Etc/GMT+8', 'Etc/GMT+9', 'Etc/GMT+10', 'Etc/GMT+11', 'Etc/GMT+12',
            'Etc/GMT-1', 'Etc/GMT-2', 'Etc/GMT-3', 'Etc/GMT-4', 'Etc/GMT-5', 'Etc/GMT-6', 'Etc/GMT-7',
            'Etc/GMT-8', 'Etc/GMT-9', 'Etc/GMT-10', 'Etc/GMT-11', 'Etc/GMT-12', 'Etc/GMT-13', 'Etc/GMT-14'
        ];
        return [...new Set(timeZones)].sort();
    }

    /**
     * Initialize the World Clock module
     */
    init() {
        this.loadFromLocalStorage();
        this.renderTimeZoneDropdown();
        this.renderClocks();
        this.startClockUpdates();
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
            <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 20px;">
                <input 
                    type="text" 
                    id="timezoneSearch" 
                    class="search-box" 
                    placeholder="Search timezone (e.g., New_York, Tokyo, London)..."
                    style="flex: 1; min-width: 200px;"
                >
                <select id="timezoneSelect" class="player-select" style="flex: 1; min-width: 200px;">
                    <option value="">-- Select Timezone --</option>
                    ${this.allTimeZones.map(tz => `<option value="${tz}">${tz}</option>`).join('')}
                </select>
                <button class="cyber-btn" onclick="worldClock.addTimeZone()">ADD_CLOCK</button>
            </div>
        `;

        // Add search functionality
        const searchInput = document.getElementById('timezoneSearch');
        const selectInput = document.getElementById('timezoneSelect');

        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const filtered = this.allTimeZones.filter(tz => tz.toLowerCase().includes(query));
            selectInput.innerHTML = `<option value="">-- Select Timezone --</option>`;
            filtered.forEach(tz => {
                const option = document.createElement('option');
                option.value = tz;
                option.textContent = tz;
                selectInput.appendChild(option);
            });
        });
    }

    /**
     * Add a new timezone to the display
     */
    addTimeZone() {
        const select = document.getElementById('timezoneSelect');
        const timezone = select.value;

        if (!timezone) {
            alert('Please select a timezone');
            return;
        }

        if (this.selectedTimeZones.includes(timezone)) {
            alert('This timezone is already added');
            return;
        }

        this.selectedTimeZones.push(timezone);
        this.saveToLocalStorage();
        this.renderClocks();
        select.value = '';
        document.getElementById('timezoneSearch').value = '';
    }

    /**
     * Remove a timezone from the display
     */
    removeTimeZone(timezone) {
        this.selectedTimeZones = this.selectedTimeZones.filter(tz => tz !== timezone);
        this.saveToLocalStorage();
        this.renderClocks();
    }

    /**
     * Get formatted time for a specific timezone
     */
    getTimeForZone(timezone) {
        try {
            const now = new Date();
            const formatter = new Intl.DateTimeFormat('en-US', {
                timeZone: timezone,
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            });

            const parts = formatter.formatToParts(now);
            const time = {
                year: parts.find(p => p.type === 'year').value,
                month: parts.find(p => p.type === 'month').value,
                day: parts.find(p => p.type === 'day').value,
                hour: parts.find(p => p.type === 'hour').value,
                minute: parts.find(p => p.type === 'minute').value,
                second: parts.find(p => p.type === 'second').value
            };

            return time;
        } catch (e) {
            console.error(`Invalid timezone: ${timezone}`, e);
            return null;
        }
    }

    /**
     * Get UTC offset for a timezone
     */
    getUTCOffset(timezone) {
        try {
            const now = new Date();
            const utcDate = new Date(now.toLocaleString('en-US', { timeZone: 'UTC' }));
            const tzDate = new Date(now.toLocaleString('en-US', { timeZone: timezone }));
            const offset = (tzDate - utcDate) / (1000 * 60 * 60);
            const sign = offset >= 0 ? '+' : '';
            return `UTC ${sign}${offset.toFixed(1)}`;
        } catch (e) {
            return 'UTC';
        }
    }

    /**
     * Render all clock cards
     */
    renderClocks() {
        const container = document.getElementById('worldClockContainer');
        if (!container) return;

        if (this.selectedTimeZones.length === 0) {
            container.innerHTML = '<p style="text-align: center; color: #888;">No clocks added. Select a timezone above to get started.</p>';
            return;
        }

        container.innerHTML = this.selectedTimeZones.map(timezone => {
            const time = this.getTimeForZone(timezone);
            if (!time) return '';

            const offset = this.getUTCOffset(timezone);
            const displayTime = `${time.hour}:${time.minute}:${time.second}`;
            const displayDate = `${time.year}-${time.month}-${time.day}`;

            return `
                <div class="battle-clock-card" style="margin-bottom: 15px;">
                    <div class="clock-label">${timezone}</div>
                    <div class="clock-label" style="font-size: 0.7rem; color: #666; margin-bottom: 5px;">${offset}</div>
                    <div class="clock-display" style="font-size: 2rem;">${displayTime}</div>
                    <div class="clock-label" style="font-size: 0.8rem; margin-top: 10px;">${displayDate}</div>
                    <button class="cyber-btn secondary" onclick="worldClock.removeTimeZone('${timezone}')" style="margin-top: 10px; border-color: #ff3232; color: #ff3232; width: 100%;">
                        REMOVE_CLOCK
                    </button>
                </div>
            `;
        }).join('');
    }

    /**
     * Start updating clocks every second
     */
    startClockUpdates() {
        setInterval(() => {
            this.renderClocks();
        }, 1000);
    }
}

// Initialize World Clock when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('worldClockDropdownContainer')) {
        window.worldClock = new WorldClock();
    }
});
