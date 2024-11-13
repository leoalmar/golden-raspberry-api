const producerService = require('../services/producerService');

async function getProducerIntervals(req, res) {
    try {
        const { min, max } = await producerService.getProducerIntervals(); // Chama o Service
        res.json({ min, max });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao processar a requisição' });
    }
}

module.exports = { getProducerIntervals };
