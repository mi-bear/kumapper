var config = require('config');
var log4js = require('log4js');
log4js.configure(config.log4js);

module.exports = {
    access: log4js.getLogger('access'),
    system: log4js.getLogger('system'),
    error: log4js.getLogger('error'),
    express: log4js.connectLogger(log4js.getLogger('access'), {level: config.log4js.level})
}
