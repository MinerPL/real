"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var i = n("862205");
let r = (0, i.createExperiment)({
  kind: "user",
  id: "2022-07_file_upload_limit",
  label: "File Upload Limit Increase",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enabled",
    config: {
      enabled: !0
    }
  }]
});
var s = r