
exports.loginfo = (args) => {
    console.log("start call " + args[0] + "...")
    console.log(args[1])
    console.log("end call " + args[0])
}


exports.epJson = {
    "parts": [
      {
        "name": "main",
        "client_hooks": {
          "documentReady" : "ep_joewang_123/static/js/index",
          //"aceEditEvent": "ep_joewang_123/static/js/index",
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
          //"aceStartLineAndCharForPoint": "ep_joewang_123/static/js/index",
          //"aceEndLineAndCharForPoint": "ep_joewang_123/static/js/index",
          "aceKeyEvent": "ep_joewang_123/static/js/index",
          "collectContentLineText": "ep_joewang_123/static/js/index",
          "collectContentLineBreak": "ep_joewang_123/static/js/index",
          "disableAuthorColorsForThisLine": "ep_joewang_123/static/js/index",
          "aceSetAuthorStyle": "ep_joewang_123/static/js/index",
          "aceSelectionChanged": "ep_joewang_123/static/js/index"

        },
        "hooks": {
          "loadSettings": "ep_joewang_123/index",
          "shutdown": "ep_joewang_123/index",
          "pluginUninstall": "ep_joewang_123/index",
          "pluginInstall": "ep_joewang_123/index",
          "init_plugin_name": "ep_joewang_123/index",
          "expressConfigure": "ep_joewang_123/index",
          "expressCreateServer": "ep_joewang_123/index",
          "expressCloseServer": "ep_joewang_123/index",
          "eejsBlock_xxx":"ep_joewang_123/index",
          "padInitToolbar": "ep_joewang_123/index",
          "onAccessCheck": "ep_joewang_123/index",
          "padCreate": "ep_joewang_123/index",
          "padLoad": "ep_joewang_123/index",
          "padUpdate": "ep_joewang_123/index",
          "padCopy": "ep_joewang_123/index",
          "padRemove": "ep_joewang_123/index",
          "socketio": "ep_joewang_123/index",
          "preAuthorize": "ep_joewang_123/index",
          "authorize": "ep_joewang_123/index",
          "authenticate": "ep_joewang_123/index",
          "authFailure": "ep_joewang_123/index",
          "preAuthzFailure": "ep_joewang_123/index",
          "authnFailure": "ep_joewang_123/index",
          "authzFailure": "ep_joewang_123/index",
          "handleMessage": "ep_joewang_123/index",
          "handleMessageSecurity": "ep_joewang_123/index",
          "clientVars": "ep_joewang_123/index",
          "getLineHTMLForExport": "ep_joewang_123/index",
          "exportHTMLAdditionalContent": "ep_joewang_123/index",
          "stylesForExport": "ep_joewang_123/index",
          "aceAttribClasses": "ep_joewang_123/index",
          "exportFileName": "ep_joewang_123/index",
          "exportHtmlAdditionalTags": "ep_joewang_123/index",
          "exportHtmlAdditionalTagsWithData": "ep_joewang_123/index",
          "exportEtherpadAdditionalContent": "ep_joewang_123/index",
          "import": "ep_joewang_123/index",
          "userJoin": "ep_joewang_123/index",
          "userLeave": "ep_joewang_123/index",
          "chatNewMessage": "ep_joewang_123/index"


        }
      }
    ]
  }