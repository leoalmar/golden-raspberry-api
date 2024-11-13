const producerService = require('../services/producerService');

async function getProducerIntervals(type) {
    const { min, max } = await producerService.getProducerIntervals();
    return type === 'min' ? min : max;
}

module.exports = { getProducerIntervals };
