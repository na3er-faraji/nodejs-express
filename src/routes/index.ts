// Router
const router = require('express').Router()

import routeFavorite from '../services/favorite'
import routeProfile from '../services/profile'
import routeSimulator from '../services/simulator'


// Routes
router.use('/favorite', routeFavorite)
router.use('/profile', routeProfile)
router.use('/simulator', routeSimulator)

// All other routes should return a 404
router.route('/*').all((req, res) => {
  res.status(404).send('Not Found !')
})

export default router
