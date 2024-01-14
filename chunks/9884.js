"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("222007");
var l = n("627445"),
  a = n.n(l),
  s = n("798609"),
  u = n("782340");
let o = (e, t) => {
    let {
      minValues: n,
      maxValues: l
    } = e;
    if (null == t) return 0 === n ? null : u.default.Messages.MESSAGE_SELECT_COMPONENT_SELECT_REQUIREMENT.format({
      count: n
    });
    if (t.type === s.ComponentType.STRING_SELECT) {
      if (t.values.length < n) return u.default.Messages.MESSAGE_SELECT_COMPONENT_SELECT_REQUIREMENT.format({
        count: n
      });
      if (t.values.length > l) return u.default.Messages.MESSAGE_SELECT_COMPONENT_MAX_SELECT_REQUIREMENT.format({
        count: l
      })
    } else {
      if (t.selectedOptions.length < n) return u.default.Messages.MESSAGE_SELECT_COMPONENT_SELECT_REQUIREMENT.format({
        count: n
      });
      if (t.selectedOptions.length > l) return u.default.Messages.MESSAGE_SELECT_COMPONENT_MAX_SELECT_REQUIREMENT.format({
        count: l
      })
    }
    return null
  },
  i = (e, t) => {
    let {
      minLength: n,
      maxLength: l,
      required: a
    } = e;
    if (null == t || 0 === t.value.length) return a ? u.default.Messages.FORM_LENGTH_ERROR.format({
      min: n,
      max: l
    }) : null;
    return t.value.length < n || t.value.length > l ? u.default.Messages.FORM_LENGTH_ERROR.format({
      min: n,
      max: l
    }) : null
  };

function r(e, t) {
  switch (null != t && a(t.type === e.type, "component type matches state"), e.type) {
    case s.ComponentType.ACTION_ROW:
    case s.ComponentType.BUTTON:
      return null;
    case s.ComponentType.STRING_SELECT:
    case s.ComponentType.USER_SELECT:
    case s.ComponentType.ROLE_SELECT:
    case s.ComponentType.MENTIONABLE_SELECT:
    case s.ComponentType.CHANNEL_SELECT:
      return o(e, t);
    case s.ComponentType.INPUT_TEXT:
      return i(e, t);
    default:
      a(!1, "missing validator for this component")
  }
}