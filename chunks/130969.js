"use strict";
n.r(t), n.d(t, {
  DialogContext: function() {
    return u
  },
  Dialog: function() {
    return c
  }
});
var i = n("37983"),
  r = n("884691"),
  o = n("311720"),
  s = n("718776"),
  l = n("860226"),
  a = n("542489");
let u = r.createContext(void 0),
  c = r.forwardRef(function(e, t) {
    let {
      children: n,
      impressionType: c,
      impression: d,
      disableTrack: _,
      returnRef: f,
      ...E
    } = e, S = r.useRef(null);
    (0, o.useFocusLock)(S, {
      returnRef: f
    });
    let g = r.useContext(a.default);
    return g({
      type: c,
      name: null == d ? void 0 : d.impressionName,
      properties: null == d ? void 0 : d.impressionProperties
    }, {
      disableTrack: _
    }), r.useImperativeHandle(t, () => S.current), (0, i.jsx)(u.Provider, {
      value: !0,
      children: (0, i.jsx)("div", {
        ...E,
        ref: S,
        role: "dialog",
        tabIndex: -1,
        "aria-modal": !0,
        children: (0, i.jsx)(l.HeadingLevel, {
          forceLevel: 1,
          children: (0, i.jsx)(s.FocusRingScope, {
            containerRef: S,
            children: n
          })
        })
      })
    })
  })