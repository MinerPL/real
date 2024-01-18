"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("702976"), n("222007");
var s = n("37983"),
  a = n("884691"),
  l = n("446674"),
  i = n("819689"),
  r = n("249561"),
  o = n("850391"),
  u = n("681060"),
  d = n("271938"),
  c = n("836417"),
  f = n("305961"),
  h = n("957255"),
  C = n("497880"),
  p = n("851220"),
  m = n("659500"),
  E = n("568734"),
  g = n("718422"),
  S = n("49111"),
  A = n("877671");

function _(e) {
  let {
    value: t,
    channel: n
  } = e;
  return (0, g.applyChatRestrictions)({
    type: o.ChatInputTypes.EDIT,
    content: t,
    channel: n,
    restrictMentions: !1,
    respectCooldown: !1
  })
}

function T(e) {
  let {
    channel: t,
    message: n
  } = e, {
    id: o
  } = t, {
    id: u
  } = n, C = t.getGuildId(), m = (0, l.useStateFromStores)([f.default], () => f.default.getGuild(C), [C]), g = t.type === S.ChannelTypes.GUILD_ANNOUNCEMENT, T = null != m && m.hasFeature(S.GuildFeatures.NEWS), N = g && T, {
    editingMessage: I,
    editingTextValue: v,
    editingRichValue: L
  } = (0, l.useStateFromStoresObject)([c.default], () => ({
    editingMessage: c.default.getEditingMessage(o),
    editingTextValue: c.default.getEditingTextValue(o),
    editingRichValue: c.default.getEditingRichValue(o)
  }), [o]), x = (0, l.useStateFromStores)([d.default], () => d.default.getId()), R = a.useCallback((e, n, s) => {
    let {
      content: a
    } = s, l = h.default.can(S.Permissions.MANAGE_MESSAGES, t), o = null != I && null != I.author ? I.author.id : null, u = N && (o === x || l);
    return u && null != I && (0, E.hasFlag)(I.flags, S.MessageFlags.CROSSPOSTED) ? r.default.confirmEdit(e, n, a) : i.default.editMessage(e, n, {
      content: a
    }), Promise.resolve()
  }, [I, N, x, t]), y = a.useCallback(e => (0, a.createElement)(M, {
    ...e,
    className: A.channelTextArea,
    key: u
  }), [u]);
  return null != v && null != L ? (0, s.jsx)(p.default, {
    ref: void 0,
    channel: t,
    message: n,
    textValue: v,
    richValue: L,
    onCancel: i.default.endEditMessage,
    onChange: i.default.updateEditMessage,
    onConfirmDelete: r.default.confirmDelete,
    saveMessage: R,
    validateEdit: _,
    children: y
  }) : null
}

function M(e) {
  let {
    textValue: t,
    richValue: n,
    message: l,
    channel: i,
    onChange: r,
    onSubmit: d,
    onKeyDown: c
  } = e, [f, h] = a.useState(!0), C = a.useCallback(() => h(!0), []), p = a.useCallback(() => h(!1), []);
  return a.useEffect(() => (m.ComponentDispatch.subscribe(S.ComponentActions.TEXTAREA_FOCUS, C), m.ComponentDispatch.subscribe(S.ComponentActions.TEXTAREA_BLUR, p), () => {
    m.ComponentDispatch.unsubscribe(S.ComponentActions.TEXTAREA_FOCUS, C), m.ComponentDispatch.unsubscribe(S.ComponentActions.TEXTAREA_BLUR, p)
  }), [C, p]), (0, s.jsx)(u.default, {
    className: A.channelTextArea,
    textValue: t,
    richValue: n,
    channel: i,
    type: o.ChatInputTypes.EDIT,
    onChange: r,
    onSubmit: e => {
      let {
        value: t
      } = e;
      return d(t)
    },
    onKeyDown: c,
    focused: f,
    onFocus: C,
    onBlur: p
  }, l.id)
}

function N(e, t, n) {
  let {
    message: a,
    channel: l
  } = e;
  return n ? (0, s.jsx)(T, {
    channel: l,
    message: a
  }) : (0, s.jsx)(C.default, {
    message: a,
    content: t
  })
}