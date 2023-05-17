function gameObject() {
    const gameObject = {
        home: {
            teamname: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players:  {
                'Alan Anderson': {
                    number: '0',
                    shoe: '16',
                    points: '22',
                    rebounds: '12',
                    assists: '12',
                    steals: '3',
                    blocks: '1',
                    slamDunks: '1'
                },
                'Reggie Evans': {
                    number: '30',
                    shoe: '14',
                    points: '12',
                    rebounds: '12',
                    assists: '12',
                    steals: '12',
                    blocks: '12',
                    slamDunks: '7'
                },
                'Brook Lopez': {
                    number: '11',
                    shoe: '17',
                    points: '17',
                    rebounds: '19',
                    assists: '10',
                    steals: '3',
                    blocks: '1',
                    slamDunks: '15'
                },
                'Mason Plumlee': {
                    number: '1',
                    shoe: '19',
                    points: '26',
                    rebounds: '12',
                    assists: '6',
                    steals: '3',
                    blocks: '8',
                    slamDunks: '5'
                },	
                'Jason Terry': {
                    number: '31',
                    shoe: '15',
                    points: '19',
                    rebounds: '2',
                    assists: '2',
                    steals: '4',
                    blocks: '11',
                    slamDunks: '1'
                }
            }
        },
        away: {
            teamname: 'Charlotte Hornets',
            colors: ['Turquoise', 'purple'],
            players: {
                'Jeff Adrien': {
                    number: '4',
                    shoe: '18',
                    points: '10',
                    rebounds: '1',
                    assists: '1',
                    steals: '2',
                    blocks: '7',
                    slamDunks: '2'
                },
                'Bismak Biyombo': {
                    number: '0',
                    shoe: '16',
                    points: '12',
                    rebounds: '4',
                    assists: '7',
                    steals: '7',
                    blocks: '15',
                    slamDunks: '10'
                },
                'DeSagna Diop': {
                    number: '2',
                    shoe: '14',
                    points: '24',
                    rebounds: '12',
                    assists: '12',
                    steals: '4',
                    blocks: '5',
                    slamDunks: '5'
                },
                'Ben Gordon': {
                    number: '8',
                    shoe: '15',
                    points: '33',
                    rebounds: '3',
                    assists: '2',
                    steals: '1',
                    blocks: '1',
                    slamDunks: '0'
                },	
                'Brendan Haywood': {
                    number: '33',
                    shoe: '15',
                    points: '6',
                    rebounds: '12',
                    assists: '12',
                    steals: '22',
                    blocks: '5',
                    slamDunks: '12'
                }
            }
        }
    }
    return gameObject
}

const gameObj = gameObject();

function numPointsScored(playerName) {

  // Search for the player in the home team
  const homePlayer = gameObj.home.players[playerName];
  if (homePlayer) {
    return homePlayer.points;
  }

  // Search for the player in the away team
  const awayPlayer = gameObj.away.players[playerName];
  if (awayPlayer) {
    return awayPlayer.points;
  }

  // Player not found
  return null;
}

function shoeSize(playerName) {

  // Search for the player in the home team
  const homePlayer = gameObj.home.players[playerName];
  if (homePlayer) {
    return homePlayer.shoe;
  }

  // Search for the player in the away team
  const awayPlayer = gameObj.away.players[playerName];
  if (awayPlayer) {
    return awayPlayer.shoe;
  }

  // Player not found
  return null;
}

function teamColors(teamName) {
    const homeTeam = gameObj.home.teamname
    const awayTeam = gameObj.away.teamname
    if (homeTeam === teamName) {
        return gameObj.home.colors
    } else if (awayTeam === teamName) {
        return gameObj.away.colors
    }
}

function teamNames() {
    let arr = []
    arr.push(gameObj.home.teamname)
    arr.push(gameObj.away.teamname)
    return arr;
}

function playerNumbers(teamname) {
    let arr = []
    if (gameObj.home.teamname === teamname) {
        arr.push('home')
        const homePlayers = gameObj.home.players
        Object.values(homePlayers).forEach((element) => {
            arr.push(element.number)
         })
    } else if (gameObj.away.teamname === teamname) {
         arr.push('away')
         const awayPlayers = gameObj.away.players
         Object.values(awayPlayers).forEach((element) => {
            arr.push(element.number)
         })
    } return arr
}

function playerStats(player) {
    const homePlayer = gameObj.home.players
    const awayPlayer = gameObj.away.players
    for (const p in homePlayer) {
        if (p === player) {
            return homePlayer[player]
        }
    }
    for (const p in awayPlayer) {
        if (p === player) {
            return awayPlayer[player]
        }
    }
}
playerStats('Brendan Haywood')
// it should be homeplayers with an s
const homePlayer = gameObj.home.players
const awayPlayer = gameObj.away.players
function bigShoeRebounds() {
    let biggestShoe = 0
    let Rebounds = 0
    debugger
    Object.values(homePlayer).forEach((element) => {
        
        if (Number(element.shoe) > biggestShoe) {
            biggestShoe = Number(element.shoe)
            Rebounds = Number(element.rebounds)
        }
    }) 
    Object.values(awayPlayer).forEach((element) => {
        
        if (Number(element.shoe) > biggestShoe) {
            biggestShoe = Number(element.shoe)
            Rebounds = Number(element.rebounds)
        }
    }) 
    return Rebounds
}




