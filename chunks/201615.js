"use strict";
E.r(_), E.d(_, {
  default: function() {
    return r
  }
});
var t = E("701909"),
  o = E("171644"),
  n = E("782340");

function r(e, _, E) {
  let r = null;
  return "failed" === _ ? r = function(e, _) {
    let {
      platform: E,
      name: t
    } = e;
    switch (_) {
      case o.GameConsoleCommandResultErrorCodes.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED:
        return {
          title: n.default.Messages.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED, body: n.default.Messages.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED_BODY.format({
            deviceType: E
          })
        };
      case o.GameConsoleCommandResultErrorCodes.CONSOLE_DEVICE_INVALID_POWER_MODE:
        return {
          title: n.default.Messages.CONSOLE_DEVICE_NOT_RESPONDING.format({
            deviceType: E
          }), body: n.default.Messages.CONSOLE_DEVICE_NOT_RESPONDING_BODY.format({
            deviceName: t
          })
        };
      case o.GameConsoleCommandResultErrorCodes.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS:
        return {
          title: n.default.Messages.CONSOLE_DEVICE_IN_USE.format({
            deviceType: E
          }), body: n.default.Messages.CONSOLE_DEVICE_IN_USE_BODY.format({
            deviceName: t
          })
        };
      case o.GameConsoleCommandResultErrorCodes.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR:
        return {
          title: n.default.Messages.CONSOLE_DEVICE_UNKNOWN_ERROR, body: n.default.Messages.CONSOLE_DEVICE_RECONNECT_ACCOUNT.format({
            deviceType: E
          }), isAccountLinkError: !0
        };
      default:
        return {
          title: n.default.Messages.CONSOLE_DEVICE_UNKNOWN_ERROR, body: n.default.Messages.CONSOLE_DEVICE_UNKNOWN_ERROR_BODY.format({
            deviceName: t
          })
        }
    }
  }(e, E.code) : "n/a" === _ && (r = function(e, _) {
    let {
      platform: E,
      name: t
    } = e;
    if (_ === o.GameConsoleCommandResultErrorCodes.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED) return {
      title: n.default.Messages.CONSOLE_DEVICE_REQUIRES_PASSCODE.format({
        deviceType: E
      }),
      body: n.default.Messages.CONSOLE_DEVICE_REQUIRES_PASSCODE_BODY.format({
        deviceName: t
      })
    };
    return null
  }(e, E.code)), null != r && (r.errorCodeMessage = n.default.Messages.CONSOLE_ERROR_CODE_SUPPORT.format({
    supportURL: t.default.getSubmitRequestURL(),
    errorCode: E.code
  })), r
}