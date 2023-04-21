const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3000

app.use(cors())

const teams = {
    //Atlantic Division
    'red wings': {
        'name': 'Detroit Red Wings',
        'location': 'Detroit, MI',
        'division': 'Atlantic Division',
        'arenaName': 'Little Caesars Arena'
    },
    'bruins': {
        'name': 'Boston Bruins',
        'location': 'Boston, MA',
        'division': 'Atlantic Division',
        'arenaName': 'TD Garden'
    },
    'maple leafs': {
        'name': 'Toronto Maple Leafs',
        'location': 'Toronto, ON',
        'division': 'Atlantic Division',
        'arenaName': 'Scotiabank Arena'
    },
    'lightning': {
        'name': 'Tampa Bay Lightning',
        'location': 'Tampa, FL',
        'division': 'Atlantic Division',
        'arenaName': 'Amalie Arena'
    },
    'panthers': {
        'name': 'Florida Panthers',
        'location': 'Sunrise, FL',
        'division': 'Atlantic Division',
        'arenaName': 'FLA Live Arena'
    },
    'sabres': {
        'name': 'Buffalo Sabres',
        'location': 'Buffalo, NY',
        'division': 'Atlantic Division',
        'arenaName': 'KeyBank Center'
    },
    'senators': {
        'name': 'Ottawa Senators',
        'location': 'Ottawa, ON',
        'division': 'Atlantic Division',
        'arenaName': 'Canadian Tire Center'
    },
    'canadiens': {
        'name': 'Montreal Canadiens',
        'location': 'Montreal, QC',
        'division': 'Atlantic Division',
        'arenaName': 'Bell Centre'
    },
    //Metropolitan Division
    'hurricanes': {
        'name': 'Carolina Hurricanes',
        'location': 'Raleigh, NC',
        'division': 'Metropolitan Division',
        'arenaName': 'PNC Arena'
    },
    'blue jackets': {
        'name': 'Columbus Blue Jackets',
        'location': 'Columbus, OH',
        'division': 'Metropolitan Division',
        'arenaName': 'Nationwide Arena'
    },
    'devils': {
        'name': 'New Jersey Devils',
        'location': 'Newark, NJ',
        'division': 'Metropolitan Division',
        'arenaName': 'Prudential Center'
    },
    'islanders': {
        'name': 'New York Islanders',
        'location': 'Elmont, NY',
        'division': 'Metropolitan Division',
        'arenaName': 'UBS Arena'
    },
    'rangers': {
        'name': 'New York Rangers',
        'location': 'New York City, NY',
        'division': 'Metropolitan Division',
        'arenaName': 'Madison Square Garden'
    },
    'flyers': {
        'name': 'Philadelphia Flyers',
        'location': 'Philadelphia, PA',
        'division': 'Metropolitan Division',
        'arenaName': 'Wells Fargo Center'
    },
    'penguins': {
        'name': 'Pittsburgh Penguins',
        'location': 'Pittsburgh, PA',
        'division': 'Metropolitan Division',
        'arenaName': 'PPG Paints Arena'
    },
    'capitals': {
        'name': 'Washington Capitals',
        'location': 'Washington, D.C.',
        'division': 'Metropolitan Division',
        'arenaName': 'Capital One Arena'
    },
    //Central Division
    'coyotes': {
        'name': 'Arizona Coyotes',
        'location': 'Tempe, AZ',
        'division': 'Central Division',
        'arenaName': 'Mullett Arena'
    },
    'blackhawks': {
        'name': 'Chicago Blackhawks',
        'location': 'Chicago, IL',
        'division': 'Central Division',
        'arenaName': 'United Center'
    },
    'avalanche': {
        'name': 'Colorado Avalanche',
        'location': 'Denver, CO',
        'division': 'Central Division',
        'arenaName': 'Ball Arena'
    },
    'stars': {
        'name': 'Dallas Stars',
        'location': 'Dallas, TX',
        'division': 'Central Division',
        'arenaName': 'American Airlines Center'
    },
    'wild': {
        'name': 'Minnesota Wild',
        'location': 'Saint Paul, MN',
        'division': 'Central Division',
        'arenaName': 'Xcel Energy Center'
    },
    'predators': {
        'name': 'Nashville Predators',
        'location': 'Nashville, TN',
        'division': 'Central Division',
        'arenaName': 'Bridgestone Arena'
    },
    'blues': {
        'name': 'St. Louis Blues',
        'location': 'St. Louis, MO',
        'division': 'Central Division',
        'arenaName': 'Enterprise Center'
    },
    'jets': {
        'name': 'Winnipeg Jets',
        'location': 'Winnipeg, MB',
        'division': 'Central Division',
        'arenaName': 'Canada Life Centre'
    },
    //Pacific Division
    'ducks': {
        'name': 'Anaheim Ducks',
        'location': 'Anaheim, CA',
        'division': 'Pacific Division',
        'arenaName': 'Honda Center'
    },
    'flames': {
        'name': 'Calgary Flames',
        'location': 'Calgary, AB',
        'division': 'Pacific Division',
        'arenaName': 'Scotiabank Saddledome'
    },
    'oilers': {
        'name': 'Edmonton Oilers',
        'location': 'Edmonton, AB',
        'division': 'Pacific Division',
        'arenaName': 'Rogers Place'
    },
    'kings': {
        'name': 'Los Angeles Kings',
        'location': 'Los Angeles, CA',
        'division': 'Pacific Division',
        'arenaName': 'Crypto.com Arena'
    },
    'sharks': {
        'name': 'San Jose Sharks',
        'location': 'San Jose, CA',
        'division': 'Pacific Division',
        'arenaName': 'SAP Center'
    },
    'kraken': {
        'name': 'Seattle Kraken',
        'location': 'Seattle, WA',
        'division': 'Pacific Division',
        'arenaName': 'Climate Pledge Arena'
    },
    'canucks': {
        'name': 'Vancouver Canucks',
        'location': 'Vancouver, BC',
        'division': 'Pacific Division',
        'arenaName': 'Rogers Arena'
    },
    'golden knights': {
        'name': 'Vegas Golden Knights',
        'location': 'Paradise, NV',
        'division': 'Pacific Division',
        'arenaName': 'T-Mobile Arena'
    },
    //Unknown
    'unknown': {
        'name': 'unknown',
        'location': 'unknown',
        'division': 'unknown',
        'arenaName': 'unknown'
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {
    const teamName = req.params.name.toLowerCase()
    if ( teams[teamName] ) {
        res.json(teams[teamName])
    } else {
        res.json(teams['unknown'])
    }
})

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`)
})