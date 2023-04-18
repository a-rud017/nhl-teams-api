const express = require('express')
const app = express()
const PORT = 8000

const teams = {
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
        'location': 'Montreal, QB',
        'division': 'Atlantic Division',
        'arenaName': 'Bell Centre'
    },
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