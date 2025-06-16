function findMatching(drivers, query) {
  return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
}

function fuzzyMatch(drivers, query) {
  return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
}

// Removed stray object: { name: "Bobby", hometown: "Pittsburgh" }

function matchName(drivers, query) {
  return drivers.filter(driver => driver.name === query);
}
