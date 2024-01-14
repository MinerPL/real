"use strict";
s.r(t), s.d(t, {
  default: function() {
    return x
  }
});
var i = s("37983");
s("884691");
var l = s("917351"),
  a = s.n(l),
  n = s("446674"),
  r = s("77078"),
  d = s("320954"),
  o = s("679653"),
  u = s("419830"),
  c = s("233069"),
  h = s("42203"),
  f = s("245997"),
  N = s("27618"),
  g = s("697218"),
  S = s("612434"),
  E = s("49111"),
  m = s("782340"),
  T = s("57317");
let _ = e => {
  let {
    channel: {
      type: t
    }
  } = e;
  return (0, c.isGuildSelectableChannelType)(t) || t === E.ChannelTypes.GUILD_CATEGORY
};

function x(e) {
  var t;
  let {
    guildId: s,
    onSelected: l
  } = e;
  let {
    channels: c,
    categories: x
  } = (t = s, (0, n.useStateFromStoresObject)([f.default], () => {
    let e = f.default.getCategories(t);
    return {
      channels: (0, d.default)(e._categories, e, _),
      categories: e
    }
  })), I = a(c).filter(e => {
    let {
      channel: t
    } = e;
    return t.type !== E.ChannelTypes.GUILD_CATEGORY || null != x[t.id] && x[t.id].length > 0
  }).map(e => {
    let {
      channel: t
    } = e;
    return {
      value: t.id,
      label: (0, o.computeChannelName)(t, g.default, N.default)
    }
  }).value();
  return (0, i.jsxs)(r.FormItem, {
    children: [(0, i.jsx)(r.FormText, {
      type: r.FormText.Types.DESCRIPTION,
      children: m.default.Messages.ADD_CHANNEL_TO_OVERRIDE
    }), (0, i.jsx)("div", {
      className: T.input,
      children: (0, i.jsx)(r.SearchableSelect, {
        value: "",
        onChange: l,
        options: I,
        renderOptionLabel: e => {
          let t = h.default.getChannel(e.value);
          if (null == t) return e.label;
          let s = h.default.getChannel(t.parent_id),
            l = null != s ? s.name : null;
          return (0, i.jsx)(S.default, {
            icon: (0, u.getChannelIconComponent)(t),
            title: e.label,
            subtitle: l
          })
        },
        placeholder: m.default.Messages.SELECT_CHANNEL_OR_CATEGORY
      })
    })]
  })
}