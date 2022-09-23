const {loginfo} = require('./static/js/shared');

const {epJson} = require('./ep.json');

function handle() {
    loginfo(arguments)
}

for ( let key in epJson['parts']['hooks'] ) {
    exports[key] = handle
}