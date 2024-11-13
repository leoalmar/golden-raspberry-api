const express = require('express');
const { getProducerIntervals } = require('../controllers/producerController');

const router = express.Router();

/**
 * @swagger
 * /api/producers:
 *   get:
 *     summary: Retorna os produtores com o menor e maior intervalo entre vitórias.
 *     tags: [Producers]
 *     responses:
 *       200:
 *         description: Retorna os produtores com o menor e maior intervalo entre vitórias.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 min:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       producer:
 *                         type: string
 *                       interval:
 *                         type: integer
 *                       previousWin:
 *                         type: integer
 *                       followingWin:
 *                         type: integer
 *                 max:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       producer:
 *                         type: string
 *                       interval:
 *                         type: integer
 *                       previousWin:
 *                         type: integer
 *                       followingWin:
 *                         type: integer
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
router.get('/producers', getProducerIntervals);

module.exports = router;
