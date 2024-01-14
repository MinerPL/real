"use strict";
a.r(t), a.d(t, {
  fetchBugReportConfig: function() {
    return u
  },
  getFeatureId: function() {
    return d
  },
  getPriorities: function() {
    return c
  },
  submitReport: function() {
    return m
  }
}), a("424973");
var n = a("759843"),
  l = a("872717"),
  s = a("147746");
a("18108"), a("773336");
var i = a("840707"),
  r = a("49111"),
  o = a("782340");
async function u() {
  let e = await l.default.get({
    url: r.Endpoints.BUG_REPORTS
  });
  return e.body
}

function d(e) {
  var t, a;
  return null !== (a = null !== (t = null == e ? void 0 : e.name) && void 0 !== t ? t : "" + (null == e ? void 0 : e.squad)) && void 0 !== a ? a : ""
}

function c() {
  return [{
    title: o.default.Messages.BUG_REPORT_PRIORITY_CRITICAL_TITLE,
    description: o.default.Messages.BUG_REPORT_PRIORITY_CRITICAL_DESCRIPTION.format(),
    emoji: "801497159479722084",
    value: 0
  }, {
    title: o.default.Messages.BUG_REPORT_PRIORITY_HIGH_TITLE,
    description: o.default.Messages.BUG_REPORT_PRIORITY_HIGH_DESCRIPTION.format(),
    emoji: "410336837563973632",
    value: 1
  }, {
    title: o.default.Messages.BUG_REPORT_PRIORITY_LOW_TITLE,
    description: o.default.Messages.BUG_REPORT_PRIORITY_LOW_DESCRIPTION.format(),
    emoji: "841420679643529296",
    value: 2
  }, {
    title: o.default.Messages.BUG_REPORT_PRIORITY_VERY_LOW_TITLE,
    description: o.default.Messages.BUG_REPORT_PRIORITY_VERY_LOW_DESCRIPTION.format(),
    emoji: "827645852352512021",
    value: 3
  }]
}
async function m(e, t, a) {
  var l, o;
  let u = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
    d = [{
      name: "name",
      value: e.name
    }, {
      name: "priority",
      value: "".concat(e.priority)
    }, {
      name: "override_platform_information",
      value: "".concat(t.overridePlatformInformation)
    }];
  "" !== e.description && d.push({
    name: "description",
    value: e.description
  }), "" !== e.url && d.push({
    name: "external_url",
    value: e.url
  });
  let c = null === (l = e.feature) || void 0 === l ? void 0 : l.asana_inbox_id;
  null != c && "" !== c && d.push({
    name: "asana_inbox_id",
    value: "".concat(c)
  });
  let m = null === (o = e.feature) || void 0 === o ? void 0 : o.name;
  null != m && "" !== m && d.push({
    name: "feature_name",
    value: m
  }), t.overridePlatformInformation && (d.push({
    name: "device",
    value: t.device
  }), d.push({
    name: "os",
    value: t.operatingSystem
  }), d.push({
    name: "os_version",
    value: t.operatingSystemVersion
  }), d.push({
    name: "client_version",
    value: t.clientVersion
  }), d.push({
    name: "client_build_number",
    value: t.clientBuildNumber
  }), d.push({
    name: "release_channel",
    value: window.GLOBAL_ENV.RELEASE_CHANNEL
  }), d.push({
    name: "locale",
    value: t.locale
  })), u && (0, s.uploadDebugLogFiles)(r.DebugLogCategory.WEB_APP);
  try {
    return await i.default.post({
      url: r.Endpoints.BUG_REPORTS,
      attachments: a,
      fields: d,
      trackedActionData: {
        event: n.NetworkActionNames.BUG_REPORT_SUBMIT,
        properties: {
          priority: e.priority,
          asana_inbox_id: c
        }
      }
    })
  } catch (e) {
    return e
  }
}