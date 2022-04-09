const crypto = require('crypto');
const config = require('../lib/config')


let helper = {}


helper.hash = function(string){
    if (typeof(string) == 'string' && string.length > 0){
        let hash = crypto.createHmac('sha256', config.secret).update(string).digest('hex');
        return hash
    }else
    {
        return false;
    }
}

module.exports = helper