const movieRepository = require('../repositories/movieRepository');

function calculateProducerIntervals(rows) {
    const producerWins = {};

    rows.forEach(row => {
        const producers = row.producers.split(/, | and /);
        producers.forEach(producer => {
            producer = producer.trim();
            if (!producerWins[producer]) {
                producerWins[producer] = [];
            }
            producerWins[producer].push(row.year);
        });
    });

    const intervals = [];
    Object.keys(producerWins).forEach(producer => {
        const years = producerWins[producer];
        if (years.length > 1) {
            for (let i = 1; i < years.length; i++) {
                const interval = years[i] - years[i - 1];
                intervals.push({
                    producer,
                    interval,
                    previousWin: years[i - 1],
                    followingWin: years[i]
                });
            }
        }
    });

    return intervals;
}

function getMinMaxIntervals(intervals) {
    const minInterval = Math.min(...intervals.map(i => i.interval));
    const maxInterval = Math.max(...intervals.map(i => i.interval));

    const minProducers = intervals.filter(i => i.interval === minInterval);
    const maxProducers = intervals.filter(i => i.interval === maxInterval);

    return { min: minProducers, max: maxProducers };
}

async function getProducerIntervals() {
    const rows = await movieRepository.getWinnerMovies();
    const intervals = calculateProducerIntervals(rows);
    return getMinMaxIntervals(intervals);
}

module.exports = { getProducerIntervals };
