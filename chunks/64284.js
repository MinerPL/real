"use strict";
s.r(t), s.d(t, {
  default: function() {
    return T
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("446674"),
  i = s("77078"),
  r = s("448993"),
  o = s("50926"),
  d = s("526253"),
  u = s("192918"),
  c = s("394294"),
  E = s("782340"),
  _ = s("977618"),
  T = function(e) {
    var t;
    let {
      guildId: s
    } = e, T = (0, l.useStateFromStores)([d.default], () => d.default.get(s)), [I, S] = n.useState(null), [N, g] = n.useState(null !== (t = null == T ? void 0 : T.description) && void 0 !== t ? t : ""), f = n.useRef(!1), A = n.useRef(!1);
    n.useEffect(() => () => {
      A.current = !0
    }, []);
    let L = n.useCallback(async () => {
      if (!f.current) {
        S(null);
        try {
          await o.default.updateVerificationFormDescription(s, N)
        } catch (t) {
          if (A.current) return;
          let e = new r.APIError(t);
          S(e.getAnyErrorMessage())
        } finally {
          if (A.current) return;
          f.current = !1
        }
      }
    }, [N, s]);
    return (0, a.jsxs)(u.default, {
      title: E.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DESCRIPTION_TITLE,
      children: [(0, a.jsx)(i.TextArea, {
        className: _.fieldBackground,
        maxLength: c.MAX_DESCRIPTION_LENGTH,
        value: null != N ? N : "",
        placeholder: E.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DESCRIPTION_PLACEHOLDER,
        onChange: e => {
          g(e)
        },
        onBlur: L,
        autosize: !0
      }), null != I && "" !== I ? (0, a.jsx)(i.Text, {
        className: _.errorText,
        variant: "text-xs/normal",
        color: "text-danger",
        children: I
      }) : null]
    })
  }