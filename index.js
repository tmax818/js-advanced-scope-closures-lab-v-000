

function produceDrivingRange(blockRange) {
  return function (start, finish) {
    let dist = finish.substr(0, 2) - start.substr(0, 2);
    if (dist > blockRange) {
      return `${dist - blockRange} blocks out of range`;
    } else {
      return `within range by ${blockRange - dist}`;
    }
  };
}

function produceTipCalculator(tip) {
  return function (fare) {
    return fare * tip;
  };
}

function createDriver() {
  return class Driver {
      constructor(name) {
    this.name = name   
  }
  }

    
}
