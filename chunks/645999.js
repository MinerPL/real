"use strict";
i.r(t), i.d(t, {
  showActivitiesInvalidPermissionsAlert: function() {
    return a
  }
});
var n = i("404118"),
  l = i("782340");
let a = () => {
  n.default.show({
    title: l.default.Messages.NO_EMBEDDED_ACTIVITY_PERMISSION_DIALOG_TITLE,
    body: l.default.Messages.NO_EMBEDDED_ACTIVITY_PERMISSION_DIALOG_BODY,
    hideActionSheet: !1
  })
}