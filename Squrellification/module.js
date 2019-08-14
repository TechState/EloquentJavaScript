let getEvents = function(journal) {
    let eventList =  new Set();

    for (let i = 0; i < journal.length; i++) {
        let item = journal[i].events;
        for (let t = 0; t < item.length; t++) {
            if (!eventList.has(item[t])) eventList.add(item[t]);
        }
    }

    return eventList;
}

let gatherTables = function(eventList, journal) {
    let phisTables = new Map();

    for (let event of eventList) {
        let table = [0, 0, 0, 0];
        let index = 0;
        for (let i = 0; i < journal.length; i++) {
            if (journal[i].events.includes(event)) index += 1;
            if (journal[i].squirrel) index += 2;
            table[index]++;
            index = 0;
        }
        phisTables.set(event, table);
    }

    return phisTables;
}

let phi = function(table) {
    return (table[3] * table[0] - table[2] * table[1]) / 
    Math.sqrt((table[2] + table[3]) *
    (table[0] + table[1]) *
    (table[1] + table[3]) *
    (table[0] + table[2]));
}

module.exports.getEvents = getEvents;
module.exports.gatherTables = gatherTables;
module.exports.phi = phi;



