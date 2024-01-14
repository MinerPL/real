"use strict";
s.r(t), s.d(t, {
  default: function() {
    return T
  }
});
var a = s("37983"),
  n = s("884691"),
  l = s("169456"),
  i = s("484811"),
  r = s("185709"),
  o = s("260928"),
  d = s("67310"),
  u = s("296416"),
  c = s("143460"),
  E = s("782340"),
  _ = s("452938");

function T(e) {
  var t, s, T;
  let {
    rule: I,
    onChangeRule: S
  } = e, N = n.useCallback(e => {
    S({
      ...I,
      triggerMetadata: {
        ...I.triggerMetadata,
        allowList: e
      }
    })
  }, [S, I]);
  return (0, a.jsx)(a.Fragment, {
    children: (0, a.jsxs)("div", {
      className: _.cardContentsContainer,
      children: [(0, a.jsxs)(d.default, {
        step: 1,
        header: E.default.Messages.GUILD_AUTOMOD_DEFAULT_KEYWORD_LIST_TRIGGER_DESCRIPTION,
        children: [(0, a.jsx)(i.default, {
          rule: I,
          onChangeRule: S
        }), (0, a.jsx)(l.default, {
          onChange: N,
          initialValue: null === (t = I.triggerMetadata) || void 0 === t ? void 0 : t.allowList,
          maxWordCount: c.MAX_KEYWORDS_PER_ALLOWLIST_DEFAULT_KEYWORD_RULE,
          collapsed: (null === (s = I.triggerMetadata) || void 0 === s ? void 0 : s.allowList) == null || (null === (T = I.triggerMetadata) || void 0 === T ? void 0 : T.allowList.length) === 0
        })]
      }), (0, a.jsx)(u.default, {
        type: u.default.Type.ARROW_DOWN
      }), (0, a.jsx)(d.default, {
        step: 2,
        header: E.default.Messages.GUILD_AUTOMOD_ACTIONS_HEADER,
        children: (0, a.jsx)(r.default, {
          rule: I,
          onChangeRule: S
        })
      }), (0, a.jsx)(u.default, {
        type: u.default.Type.CROSS
      }), (0, a.jsx)(d.default, {
        step: 3,
        header: E.default.Messages.GUILD_AUTOMOD_EXEMPTION_HEADER,
        children: (0, a.jsx)(o.default, {
          rule: I,
          onChangeRule: S
        })
      })]
    })
  })
}