"use strict";
E.r(_), E.d(_, {
  default: function() {
    return T
  }
});
var t = E("37983"),
  o = E("884691"),
  n = E("446674"),
  r = E("77078"),
  i = E("629109"),
  a = E("135230"),
  I = E("42887"),
  s = E("782340"),
  T = () => {
    let e = (0, n.useStateFromStores)([I.default], () => I.default.isInteractionRequired(), []),
      _ = o.useRef(null);

    function E() {
      null !== _.current && ((0, r.closeModal)(_.current), _.current = null)
    }

    function T() {
      i.default.interact()
    }
    return o.useEffect(() => (e ? _.current = (0, r.openModal)(e => (0, t.jsx)(a.default, {
      title: s.default.Messages.INTERACTION_REQUIRED_TITLE,
      body: s.default.Messages.INTERACTION_REQUIRED_BODY,
      onConfirm: T,
      confirmText: s.default.Messages.OKAY,
      ...e
    })) : E(), () => {
      E()
    }), [e]), null
  }