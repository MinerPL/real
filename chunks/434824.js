"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var a = s("37983");
s("884691");
var n = s("124969"),
  l = s("5487"),
  i = s("473759"),
  r = s("579033"),
  u = s("685991");
let d = {
  [r.InternalTemplateCodes.CLASSROOM]: s("251834"),
  [r.InternalTemplateCodes.LOCAL_COMMUNITIES]: s("787762"),
  [r.InternalTemplateCodes.CREATORS_HOBBIES]: s("41668"),
  [r.InternalTemplateCodes.GLOBAL_COMMUNITIES]: s("494323"),
  [r.InternalTemplateCodes.FRIENDS_FAMILY]: s("660389"),
  [r.InternalTemplateCodes.STUDY_GROUPS]: s("508971"),
  [r.InternalTemplateCodes.CREATE_FROM_SCRATCH]: s("800573"),
  [r.InternalTemplateCodes.CAMPUS_CLUBS]: s("97595"),
  [r.InternalTemplateCodes.LEAGUE_CLUBS]: s("556659"),
  [r.InternalTemplateCodes.GITHUB_HACKATHON]: s("212509")
};

function o(e) {
  let {
    headerId: t,
    guildTemplate: s
  } = e, o = s.code, c = d[o];
  if (null != c) {
    var E;
    let {
      header: e,
      description: d,
      author: T
    } = (0, l.default)(o);
    return (0, a.jsxs)("div", {
      children: [(0, a.jsx)("img", {
        className: u.image,
        src: c,
        alt: ""
      }), (0, a.jsx)(n.Title, {
        className: u.header,
        id: t,
        children: e
      }), (0, a.jsx)(n.SubTitle, {
        children: d
      }), s.state === r.GuildTemplateStates.RESOLVED ? (0, a.jsx)(i.UsagePill, {
        className: u.usagePill,
        count: null !== (E = s.usageCount) && void 0 !== E ? E : 0,
        verifiedName: T
      }) : null]
    })
  }
  return (0, a.jsx)(i.default, {
    pillClassName: u.usagePill,
    guildTemplate: s,
    tall: !0
  })
}