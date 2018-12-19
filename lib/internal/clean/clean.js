const osenv = require("osenv");
const rimraf = require("rimraf");

module.exports = function(args) {
  const base = pathFn.join(osenv.home(), "./.feflow");
  rimraf(base, err => {
    if (err) {
      this.log.error("Ops, we have some problems here 👀 ", err);
    } else {
      this.log.info("Now .feflow is cleaned");
    }
  });
};
