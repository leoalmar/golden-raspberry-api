const express = require('express');
const { getMovies } = require('../controllers/movieController');

const router = express.Router();

/**
 * @swagger
 * /api/movies:
 *   get:
 *     summary: Retorna todos os filmes.
 *     tags: [Movies]
 *     responses:
 *       200:
 *         description: Lista de filmes.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   year:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   studios:
 *                     type: string
 *                   producers:
 *                     type: string
 *                   winner:
 *                     type: boolean
 *       500:
 *         description: Erro interno do servidor ao processar a requisição
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Erro ao processar a requisição"
 */
router.get('/movies', getMovies); // Definindo a rota


module.exports = router;
