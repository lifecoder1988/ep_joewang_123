/*
          "documentReady" : "ep_joewang_123/static/js/index",
          "aceEditEvent": "ep_joewang_123/static/js/index",
          "postToolbarInit": "ep_joewang_123/static/js/index",
          "aceDomLineProcessLineAttributes": "ep_joewang_123/static/js/index",
          "postAceInit": "ep_joewang_123/static/js/index",
          "aceInitialized": "ep_joewang_123/static/js/index",
          "aceAttribsToClasses": "ep_joewang_123/static/js/index",
          "collectContentPre": "ep_joewang_123/static/js/index",
          "aceRegisterBlockElements": "ep_joewang_123/static/js/index",
          "aceDomLinePreProcessLineAttributes": "ep_joewang_123/static/js/index",
          "aceCreateDomLine": "ep_joewang_123/static/js/index",
          "acePostWriteDomLineHTML": "ep_joewang_123/static/js/index",
          "aceAttribClasses": "ep_joewang_123/static/js/index",
          "aceGetFilterStack": "ep_joewang_123/static/js/index",
          "aceEditorCSS": "ep_joewang_123/static/js/index",
          "aceInitInnerdocbodyHead": "ep_joewang_123/static/js/index",
          "aceRegisterNonScrollableEditEvents": "ep_joewang_123/static/js/index",
          "postTimesliderInit": "ep_joewang_123/static/js/index",
          "goToRevisionEvent": "ep_joewang_123/static/js/index",
          "userJoinOrUpdate": "ep_joewang_123/static/js/index",
          "chatNewMessage": "ep_joewang_123/static/js/index",
          "chatSendMessage": "ep_joewang_123/static/js/index",
          "collectContentImage": "ep_joewang_123/static/js/index",
          "collectContentPost": "ep_joewang_123/static/js/index",
          "handleClientMessage_name": "ep_joewang_123/static/js/index",
          "aceStartLineAndCharForPoint": "ep_joewang_123/static/js/index",
          "aceEndLineAndCharForPoint": "ep_joewang_123/static/js/index",
          "aceKeyEvent": "ep_joewang_123/static/js/index",
          "collectContentLineText": "ep_joewang_123/static/js/index",
          "collectContentLineBreak": "ep_joewang_123/static/js/index",
          "disableAuthorColorsForThisLine": "ep_joewang_123/static/js/index",
          "aceSetAuthorStyle": "ep_joewang_123/static/js/index",
          "aceSelectionChanged": "ep_joewang_123/static/js/index"

*/

const {loginfo} = require('./shared');

const {epJson} = require('../../ep.json');

function handle() {
    loginfo(arguments)
}

for ( let key in epJson['parts']['client_hooks'] ) {
    exports[key] = handle
}

/*exports.documentReady = () => {
    loginfo(arguments)
}
exports.aceDomLinePreProcessLineAttributes = (domline,cls) => {
    loginfo(arguments)
}
exports.aceDomLineProcessLineAttributes = (domline,cls) => {
    loginfo(arguments)
}
exports.aceCreateDomLine = (domline,cls) => {
    loginfo(arguments)
}
exports.acePostWriteDomLineHTML = function()  {
    loginfo(arguments)
}
exports.aceAttribsToClasses = function()  {
    loginfo(arguments)
}
exports.documentReady = function()  {
    loginfo(arguments)
}
exports.aceAttribClasses = function()  {
    loginfo(arguments)
}
exports.aceGetFilterStack = function()  {
    loginfo(arguments)
}
exports.aceEditorCSS = function()  {
    loginfo(arguments)
}
exports.aceInitInnerdocbodyHead = function()  {
    loginfo(arguments)
}
exports.aceEditEvent = function()  {
    loginfo(arguments)
}
exports.aceRegisterNonScrollableEditEvents =function()  {
    loginfo(arguments)
}
exports.aceRegisterBlockElements = function()  {
    loginfo(arguments)
}
exports.aceInitialized = function()  {
    loginfo(arguments)
}
exports.postAceInit = function()  {
    loginfo(arguments)
}
exports.postToolbarInit = function()  {
    loginfo(arguments)
}
exports.postTimesliderInit = function()  {
    loginfo(arguments)
}
exports.goToRevisionEvent =function()  {
    loginfo(arguments)
}
exports.userJoinOrUpdate = function()  {
    loginfo(arguments)
}
exports.chatNewMessage =function()  {

}*/