let journal = require('./journal');
let getEvents = require('./module').getEvents;
let gatherTables = require('./module').gatherTables;
let phi = require('./module').phi;

let eventList = getEvents(journal);
let phisTable = gatherTables(eventList, journal);
function start() {
  for (let phiItem of phisTable.keys()) {
      console.log(`${phiItem}  ${phi(phisTable.get(phiItem))}`);
  }
}

module.exports.start = start;
