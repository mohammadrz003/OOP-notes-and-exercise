function Stopwatch() {
  let duration = 0;

  let isStarted = false;
  let isStoped = false;

  let startMoment = null;
  let endMoment = null;

  this.start = function () {
    if (isStarted === true) {
      throw new Error("Stopwatch has already started");
    }
    startMoment = new Date();
    isStarted = true;
  };

  this.stop = function () {
    if (isStoped === true) {
      throw new Error("Stopwatch has already stoped");
    } else if (!isStoped && !isStarted) {
      throw new Error("Stopwatch hasn't started yet");
    }
    endMoment = new Date();
    isStoped = false;
    isStarted = false;
    duration += (endMoment.getTime() - startMoment.getTime()) / 1000;
  };

  this.reset = function () {
    isStarted = false;
    isStoped = false;
    startMoment = null;
    endMoment = null;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

let sw = new Stopwatch();
