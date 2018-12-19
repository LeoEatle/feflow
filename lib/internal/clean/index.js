'use strict';

module.exports = function (ctx) {
  const cmd = ctx.cmd;
  cmd.register('clean', 'clean .feflow directory for uninstalling or fixing feflow.', {}, require('./clean'));
};