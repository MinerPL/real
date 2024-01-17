"use strict";
n.r(t), n.d(t, {
  getActionRowErrorText: function() {
    return T
  },
  createComponents: function() {
    return function e(t, n) {
      let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
        {
          includeEmojiSrc: o
        } = a;
      return t.map((t, m) => {
        var T, _, C, N, I, O;
        if (!S(t.type)) return null;
        let v = i.concat(m);
        switch (t.type) {
          case u.ComponentType.ACTION_ROW:
            let L = null != t.components ? e(t.components, n, l, a, v) : void 0;
            return {
              type: u.ComponentType.ACTION_ROW, indices: v, components: L
            };
          case u.ComponentType.BUTTON:
            if (f.includes(n) && null != t.custom_id && E.test(t.custom_id) && !(0, d.default)(l)) return null;
            let A = null != t.emoji ? p(t.emoji, o) : void 0;
            return {
              type: u.ComponentType.BUTTON, customId: t.custom_id, style: t.style, disabled: t.disabled, url: t.url, label: t.label, emoji: A, indices: v, applicationId: n
            };
          case u.ComponentType.STRING_SELECT:
            return {
              type: u.ComponentType.STRING_SELECT, customId: t.custom_id, disabled: t.disabled, options: t.options.map(e => ({
                type: s.SelectOptionType.STRING,
                label: e.label,
                value: e.value,
                default: e.default,
                description: e.description,
                emoji: null != e.emoji ? p(e.emoji, o) : void 0
              })), placeholder: null !== (T = t.placeholder) && void 0 !== T ? T : c.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: t.min_values, maxValues: t.max_values, indices: v, applicationId: n
            };
          case u.ComponentType.INPUT_TEXT:
            return {
              type: t.type, style: t.style, customId: t.custom_id, label: t.label, value: t.value, placeholder: t.placeholder, disabled: t.disabled, required: t.required, minLength: t.min_length, maxLength: t.max_length, indices: v
            };
          case u.ComponentType.USER_SELECT:
            return {
              type: u.ComponentType.USER_SELECT, customId: t.custom_id, disabled: t.disabled, placeholder: null !== (_ = t.placeholder) && void 0 !== _ ? _ : c.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: t.min_values, maxValues: t.max_values, defaultValues: t.default_values, indices: v, applicationId: n, selectedOptions: (0, r.getSnowflakeSelectDefaultValues)(t.default_values, l)
            };
          case u.ComponentType.ROLE_SELECT:
            return {
              type: u.ComponentType.ROLE_SELECT, customId: t.custom_id, disabled: t.disabled, placeholder: null !== (C = t.placeholder) && void 0 !== C ? C : c.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: t.min_values, maxValues: t.max_values, defaultValues: t.default_values, indices: v, applicationId: n, selectedOptions: (0, r.getSnowflakeSelectDefaultValues)(t.default_values, l)
            };
          case u.ComponentType.MENTIONABLE_SELECT:
            return {
              type: u.ComponentType.MENTIONABLE_SELECT, customId: t.custom_id, disabled: t.disabled, placeholder: null !== (N = t.placeholder) && void 0 !== N ? N : c.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: t.min_values, maxValues: t.max_values, defaultValues: t.default_values, indices: v, applicationId: n, selectedOptions: (0, r.getSnowflakeSelectDefaultValues)(t.default_values, l)
            };
          case u.ComponentType.CHANNEL_SELECT:
            return {
              type: u.ComponentType.CHANNEL_SELECT, customId: t.custom_id, disabled: t.disabled, placeholder: null !== (I = t.placeholder) && void 0 !== I ? I : c.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: t.min_values, maxValues: t.max_values, indices: v, channelTypes: t.channel_types, defaultValues: t.default_values, applicationId: n, selectedOptions: (0, r.getSnowflakeSelectDefaultValues)(t.default_values, l, null !== (O = t.channel_types) && void 0 !== O ? O : [])
            };
          default:
            return null
        }
      }).filter(e => null != e)
    }
  }
});
var l = n("917351"),
  a = n.n(l),
  u = n("798609"),
  i = n("3765"),
  o = n("315102"),
  s = n("192112"),
  r = n("704257"),
  d = n("988878"),
  c = n("782340");
let f = ["934240649153220678", "936929561302675456", "762275850782900254", "1022952195194359889"],
  E = /MJ::Inpaint::\d(::[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12})?(::SOLO)?/,
  p = (e, t) => ({
    id: e.id,
    name: e.name,
    animated: e.animated,
    src: t && null != e.id ? o.default.getEmojiURL({
      id: e.id,
      animated: e.animated || !1,
      size: 48
    }) : void 0
  }),
  m = e => (null == e ? void 0 : e.errorCode) === 429 ? c.default.Messages.INTERACTION_RATE_LIMITED : c.default.Messages.APPLICATION_COMMAND_FAILED,
  T = (e, t, n) => {
    let l = (null == e ? void 0 : e.data.interactionType) === u.InteractionTypes.MESSAGE_COMPONENT && (null == e ? void 0 : e.state) === i.InteractionState.FAILED ? e.data.indices : null;
    if (null != l && a.isEqual(l.slice(0, l.length - 1), n.indices)) {
      var o;
      return null !== (o = null == t ? void 0 : t.interactionError) && void 0 !== o ? o : m(e)
    }
  },
  S = e => {
    switch (e) {
      case u.ComponentType.ACTION_ROW:
      case u.ComponentType.BUTTON:
      case u.ComponentType.STRING_SELECT:
      case u.ComponentType.INPUT_TEXT:
      case u.ComponentType.USER_SELECT:
      case u.ComponentType.ROLE_SELECT:
      case u.ComponentType.MENTIONABLE_SELECT:
      case u.ComponentType.CHANNEL_SELECT:
        return !0
    }
  }