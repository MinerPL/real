"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("222007");
var l = n("884691"),
  i = n("44170"),
  r = n("987295"),
  o = n("244201"),
  s = n("988721"),
  a = n("166004"),
  u = n("383018"),
  d = n("845579"),
  c = n("149022"),
  f = n("169694"),
  p = n("646220"),
  m = n("467123"),
  h = n("506038"),
  E = n("663190"),
  S = n("93640"),
  g = n("100576"),
  C = n("665613");
n("473752");
var T = n("541926"),
  v = n("926970"),
  y = n("755107"),
  x = n("518542"),
  I = n("269149"),
  N = n("566819");

function _(e) {
  let t = l.useContext(o.default),
    n = d.UseRichChatInput.useSetting(),
    [_] = l.useState(() => {
      let l = (0, r.createEditor)();
      return l.children = (0, c.toRichValue)(""), l.selection = {
          anchor: N.FIRST_TEXT_POINT,
          focus: N.FIRST_TEXT_POINT
        },
        function(e) {
          var t, n, l;
          let {
            editor: r,
            chatInputType: o,
            channel: s,
            canUseCommands: a,
            canOnlyUseTextCommands: u,
            windowContext: d,
            previewMarkdown: c,
            forTests: N,
            onChangeStart: _,
            onChangeEnd: A,
            updateState: R
          } = e, O = r, {
            onChange: M
          } = O;
          O.chatInputType = o, O.windowContext = d, O.previewMarkdown = c, O.composition = null, O.events = new i.EventEmitter, O.isMac = "MacIntel" === navigator.platform, O.onChange = () => {
            O.events.emit("onChange"), M()
          }, O = (0, v.withReact)(O, !0 === N), O = (0, T.default)(O), O = (0, C.default)(O), (null === (t = o.commands) || void 0 === t ? void 0 : t.enabled) && (O = (0, f.default)(O, s, !0 === a, !0 === u)), O = (0, g.default)(O, s.guild_id, s.id), !(null === (n = o.markdown) || void 0 === n ? void 0 : n.disableBlockQuotes) && (O = (0, p.default)(O)), !(null === (l = o.markdown) || void 0 === l ? void 0 : l.disableCodeBlocks) && (O = (0, m.default)(O)), N && (O = (0, x.default)(O)), O = (0, S.default)(O), O = (0, h.default)(O), O = (0, y.default)(O), O = (0, I.default)(O, _, A), O = (0, E.default)(O, e => {
            let {
              newValue: t,
              newSelection: n
            } = e;
            return R(O, "undo", {
              value: t,
              selection: n
            })
          })
        }({
          ...e,
          editor: l,
          windowContext: t,
          previewMarkdown: n
        }), l
    });
  return l.useEffect(() => {
    let e = () => _.onChange();
    return u.default.addChangeListener(e), a.default.addChangeListener(e), s.default.addChangeListener(e), () => {
      u.default.removeChangeListener(e), a.default.removeChangeListener(e), s.default.removeChangeListener(e)
    }
  }, [_]), l.useEffect(() => {
    _.previewMarkdown !== n && (_.previewMarkdown = n, _.onChange())
  }, [_, n]), _
}