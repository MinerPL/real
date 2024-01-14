"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("77078"),
  i = s("143460"),
  r = s("782340"),
  o = s("593532");

function d(e) {
  let {
    preset: t,
    toggled: s,
    onToggle: n
  } = e, {
    headerText: d,
    subtitleText: u
  } = function(e) {
    let t = null,
      s = null;
    switch (e) {
      case i.KeywordPreset.PROFANITY:
        t = r.default.Messages.GUILD_AUTOMOD_DEFAULT_KEYWORD_LIST_PROFANITY_HEADER, s = (0, a.jsx)(a.Fragment, {
          children: r.default.Messages.GUILD_AUTOMOD_DEFAULT_KEYWORD_LIST_PROFANITY_SUBTITLE
        });
        break;
      case i.KeywordPreset.SEXUAL_CONTENT:
        t = r.default.Messages.GUILD_AUTOMOD_DEFAULT_KEYWORD_LIST_SEXUAL_CONTENT_HEADER, s = (0, a.jsx)(a.Fragment, {
          children: r.default.Messages.GUILD_AUTOMOD_DEFAULT_KEYWORD_LIST_SEXUAL_CONTENT_SUBTITLE
        });
        break;
      case i.KeywordPreset.SLURS:
        t = r.default.Messages.GUILD_AUTOMOD_DEFAULT_KEYWORD_LIST_SLURS_HEADER, s = (0, a.jsx)(a.Fragment, {
          children: r.default.Messages.GUILD_AUTOMOD_DEFAULT_KEYWORD_LIST_SLURS_SUBTITLE
        });
        break;
      default:
        t = "Error", s = "Unrecognized list"
    }
    return {
      headerText: t,
      subtitleText: s
    }
  }(t);
  return (0, a.jsxs)("div", {
    className: o.keywordListContainer,
    children: [(0, a.jsxs)("div", {
      className: o.keywordListTextContainer,
      children: [(0, a.jsx)(l.Heading, {
        variant: "heading-sm/semibold",
        children: d
      }), (0, a.jsx)(l.Text, {
        color: "interactive-normal",
        variant: "text-xs/medium",
        children: u
      })]
    }), (0, a.jsx)(l.Checkbox, {
      className: o.toggle,
      type: l.Checkbox.Types.INVERTED,
      value: s,
      onChange: () => n(t)
    })]
  })
}

function u(e) {
  var t;
  let {
    rule: s,
    onChangeRule: l
  } = e, [r, o] = n.useState(new Set(null == s ? void 0 : null === (t = s.triggerMetadata) || void 0 === t ? void 0 : t.presets)), u = n.useMemo(() => e => {
    l({
      ...s,
      triggerMetadata: {
        ...s.triggerMetadata,
        presets: e
      }
    })
  }, [l, s]), c = e => {
    let t = new Set(r);
    t.has(e) ? t.delete(e) : t.add(e), o(t), u(Array.from(t))
  };
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)(d, {
      preset: i.KeywordPreset.PROFANITY,
      toggled: r.has(i.KeywordPreset.PROFANITY),
      onToggle: c
    }), (0, a.jsx)(d, {
      preset: i.KeywordPreset.SLURS,
      toggled: r.has(i.KeywordPreset.SLURS),
      onToggle: c
    }), (0, a.jsx)(d, {
      preset: i.KeywordPreset.SEXUAL_CONTENT,
      toggled: r.has(i.KeywordPreset.SEXUAL_CONTENT),
      onToggle: c
    })]
  })
}