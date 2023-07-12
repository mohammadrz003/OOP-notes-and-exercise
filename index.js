function Stopwatch() {
  this.duration = 0;

  this.isStarted = false;
  this.isStoped = false;

  this.startMoment = null;
  this.endMoment = null;

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
  Object.defineProperty(this, "isStarted", {
    get: function () {
      return isStarted;
    },
  });
  Object.defineProperty(this, "isStoped", {
    get: function () {
      return isStoped;
    },
  });
  Object.defineProperty(this, "startMoment", {
    get: function () {
      return startMoment;
    },
  });
  Object.defineProperty(this, "endMoment", {
    get: function () {
      return endMoment;
    },
  });
}

Stopwatch.prototype.start = function () {
  if (this.isStarted === true) {
    throw new Error("Stopwatch has already started");
  }
  this.startMoment = new Date();
  this.isStarted = true;
};

Stopwatch.prototype.stop = function () {
  if (this.isStoped === true) {
    throw new Error("Stopwatch has already stoped");
  } else if (!this.isStoped && !this.isStarted) {
    throw new Error("Stopwatch hasn't started yet");
  }
  this.endMoment = new Date();
  this.isStoped = false;
  this.isStarted = false;
  this.duration += (endMoment.getTime() - startMoment.getTime()) / 1000;
};

Stopwatch.prototype.reset = function () {
  this.isStarted = false;
  this.isStoped = false;
  this.startMoment = null;
  this.endMoment = null;
  this.duration = 0;
};

let sw = new Stopwatch();
