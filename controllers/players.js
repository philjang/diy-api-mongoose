const express = require('express');
const router = express.Router()
const Player = require('../models/player')

// Index - GET all players
router.get('/', (req, res) => {
  Players.find({}, (err, player) => {
    if (err) {
      console.error(`🔥 Error in player Index route:\n${err}`);
      return res.status(500).json({ error: 'Error in player Index route' });
    }
    res.json({ Players });
  });
});

// Detail — GET player by id 
router.get('/:id', (req, res) => {
  Players.findById(req.params.id, (err, Players) => {
    if (err) {
      console.error(`🔥 Error in player Detail route:\n${err}`);
      return res.status(500).json({ error: 'Error in player Detail route' });
    }
    res.json({ Players });
  });
});

// Create — POST /player
router.post('/', (req, res) => {
  Players.create(req.body, (err, Players) => {
    if (err) {
      console.error(`🔥 Error in player Create route:\n${err}`);
      return res.status(500).json({ error: 'Error in player Create route' });
    }
    res.json({ Players });
  });
});


// Delete — DELETE to /player/:id
router.delete('/:id', (req, res) => {
  Players.findByIdAndDelete(req.params.id, (err, Players) => {
    if (err) {
      console.error(`🔥 Error in player Delete route:\n${err}`);
      return res.status(500).json({ error: 'Error in player Delete route' });
    }
    res.json({ deletedPlayers: Players });
  })
})

// DIY API BONUS PROMPT ROUTES

// #1: find all player ID related brands
router.get('/brands/:playerId', (req, res) => {
    Player.findById(req.params.playerId, (err, Player) => {
      if (err) {
        console.error(`🔥 Error in player Detail route:\n${err}`);
        return res.status(500).json({ error: 'Error in player Detail route' });
      } else {
        console.log(`Brands from player: ${Player.partnerships}`)
        res.json({ Player });
      }
    });
  });

// #2: add new model doc with related elements in second model at :id
router.post('/brands/:playerId', (req, res) => {
    Players.create(req.body, (err, Players) => {
      if (err) {
        console.error(`Error in player Create route:\n${err}`);
        return res.status(500).json({ error: 'Error in player Create route' });
      }
      res.json({ Players });
    });
  });
 
module.exports = router;