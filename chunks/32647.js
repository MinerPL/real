"use strict";
n.r(t), n.d(t, {
  default: function() {
    return k
  }
}), n("222007"), n("424973");
var l = n("37983"),
  i = n("884691"),
  r = n("414456"),
  o = n.n(r),
  s = n("798609"),
  a = n("716241"),
  u = n("383018"),
  d = n("585722"),
  c = n("378765"),
  f = n("659500"),
  p = n("640830"),
  m = n("83800"),
  h = n("776574"),
  E = n("970153"),
  S = n("939563"),
  g = n("385887"),
  C = n("755604"),
  T = n("664610"),
  v = n("688893"),
  y = n("684607"),
  x = n("803322"),
  I = n("127875"),
  N = n("169694"),
  _ = n("100576"),
  A = n("765446"),
  R = n("461593"),
  O = n("49111"),
  M = n("147320"),
  k = i.forwardRef(function(e, t) {
    let {
      value: n,
      type: r,
      channel: k,
      className: b,
      id: P,
      disabled: L,
      submitting: U,
      placeholder: j,
      required: D,
      textAreaPaddingClassName: w,
      onChange: B,
      onPaste: H,
      onResize: F,
      onFocus: G,
      onBlur: K,
      onKeyDown: V,
      onKeyUp: W,
      onTab: Y,
      onEnter: q,
      onSubmit: z,
      maybeShowAutocomplete: Q,
      hideAutocomplete: X,
      moveSelection: Z,
      spellcheckEnabled: J,
      canUseCommands: $,
      canOnlyUseTextCommands: ee,
      disableAutoFocus: et,
      disableEnterToSubmit: en,
      allowNewLines: el,
      "aria-owns": ei,
      "aria-expanded": er,
      "aria-haspopup": eo,
      "aria-activedescendant": es,
      "aria-controls": ea,
      "aria-invalid": eu,
      "aria-describedby": ed,
      "aria-labelledby": ec,
      "aria-autocomplete": ef
    } = e, ep = i.useRef(null), em = i.useRef(null), eh = i.useRef(!0), eE = i.useRef(!0), eS = L || U, eg = i.useCallback((e, t, n) => {
      var l;
      let {
        value: i,
        selection: r
      } = n, o = g.EditorUtils.richValue(e), s = e.selection, a = !1;
      if (void 0 !== i && i !== o) {
        if (e.children = i, "parent" === t && !e.previewMarkdown) {
          try {
            e.previewMarkdown = !0, (0, _.run)(e, k.guild_id, k.id)
          } finally {
            e.previewMarkdown = !1
          }(0, _.run)(e, k.guild_id, k.id), r = void 0
        }
        "undo" !== t && void 0 !== i && i !== o && m.HistoryUtils.insertEntry(e, "other", !1, o, s), a = !0
      }
      if (null != r && !g.SelectionUtils.isValid(e, r) && (r = void 0), (a || !g.SelectionUtils.isValid(e, s)) && void 0 === r) {
        let t = g.EditorUtils.end(e, []);
        r = {
          anchor: t,
          focus: t
        }
      }
      if (null != r && !g.SelectionUtils.equals(r, s)) {
        e.selection = r;
        let t = m.HistoryUtils.currentEntry(e);
        null != t && (t.selection = r), a = !0
      }
      let d = p.getCommandBlock(e);
      if (null != d && d[0].command.id !== (null === (l = u.default.getActiveCommand(k.id)) || void 0 === l ? void 0 : l.id) && m.HistoryUtils.withMergedEntry(e, () => {
          (0, N.unsetCommand)(e, k.id, null, !0)
        }), a) {
        if (!et && g.EditorUtils.focus(e), "parent" === t) try {
          eE.current = !1, e.onChange()
        } finally {
          eE.current = !0
        } else e.onChange()
      }
    }, [k.id, k.guild_id, et]), eC = i.useCallback(() => {
      eh.current = !1
    }, []), eT = i.useCallback(() => {
      eh.current = !0
    }, []), ev = (0, T.default)({
      channel: k,
      chatInputType: r,
      canUseCommands: $,
      canOnlyUseTextCommands: ee,
      onChangeStart: eC,
      onChangeEnd: eT,
      updateState: eg
    }), ey = i.useCallback((e, t) => {
      let n = p.getOptionValues(ev, e),
        l = p.validateOptionValues(e, k.guild_id, k.id, n, t);
      return {
        values: n,
        results: l
      }
    }, [k.guild_id, k.id, ev]), ex = i.useCallback(() => {
      let e;
      let t = $ ? u.default.getActiveCommand(k.id) : null;
      if (null != t && null != t.options) {
        let i = ey(t, !1);
        e = i.values;
        let r = p.getOptionNames(ev),
          o = r.filter(e => !i.results[e].success).map(e => {
            var n;
            return (null !== (n = t.options) && void 0 !== n ? n : []).find(t => t.name === e)
          });
        for (let e of t.options) e.required && !(e.name in i.values) && (S.SlateTransforms.insertCommandOption(ev, e), o.push(e));
        if (o.length > 0) {
          var n, l;
          let e = o[0];
          S.SlateTransforms.selectCommandOption(ev, e.name), f.ComponentDispatch.dispatch(O.ComponentActions.SHAKE_APP, {
            duration: 200,
            intensity: 2
          }), (0, a.trackWithMetadata)(O.AnalyticEvents.APPLICATION_COMMAND_VALIDATION_FAILED, {
            application_id: null == t ? void 0 : t.applicationId,
            command_id: null == t ? void 0 : null === (n = t.rootCommand) || void 0 === n ? void 0 : n.id,
            argument_type: s.ApplicationCommandOptionType[null !== (l = null == e ? void 0 : e.type) && void 0 !== l ? l : 3],
            is_required: null == e ? void 0 : e.required
          });
          return
        }
      }
      null == z || z((0, E.toTextValue)(g.EditorUtils.richValue(ev), {
        mode: "raw",
        ignoreTrailingEmptyNodes: !0
      }), t, e)
    }, [k.id, ev, z, ey, $]);
    (0, v.default)(t, ev, k, ex), (0, I.default)(ev, ep, F);
    let {
      handleKeyDown: eI,
      handleKeyUp: eN
    } = (0, y.default)({
      editor: ev,
      channel: k,
      disableEnterToSubmit: en,
      onKeyDown: V,
      onKeyUp: W,
      onTab: Y,
      onEnter: q,
      allowNewLines: el,
      submit: ex,
      hideAutocomplete: X,
      moveSelection: Z
    }), {
      handlePaste: e_,
      handleGlobalPaste: eA
    } = (0, x.default)(ev, eS, H), eR = i.useCallback(e => {
      null == Q || Q()
    }, [Q]), eO = i.useCallback(e => {
      e !== em.current ? eE.current && (null == B || B(null, (0, E.toTextValue)(e, {
        mode: "raw"
      }), e)) : eE.current && Q()
    }, [Q, B]);
    i.useLayoutEffect(() => {
      eh.current && (em.current = n, eg(ev, "parent", {
        value: n
      }))
    }, [ev, n, eg]), i.useEffect(() => {
      let e = () => {
        var e;
        let t = null !== (e = u.default.getActiveCommand(k.id)) && void 0 !== e ? e : null;
        null !== t && null != t.options && ey(t, !0)
      };
      return d.default.addChangeListener(e), () => d.default.removeChangeListener(e)
    }, [k, ev, ey]);
    let eM = i.useCallback((e, t) => (0, C.default)(e, t), []),
      ek = i.useCallback(e => (0, A.default)(ev, e, k.id), [k.id, ev]),
      eb = i.useCallback(e => (0, R.default)(e), []);
    return (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(c.ComponentAction, {
        event: O.ComponentActions.GLOBAL_CLIPBOARD_PASTE,
        handler: eA
      }), (0, l.jsx)("div", {
        ref: ep,
        className: o(b, M.slateContainer),
        children: (0, l.jsx)(h.default, {
          id: P,
          editor: ev,
          channelId: k.id,
          guildId: k.guild_id,
          className: o(M.slateTextArea, w),
          placeholder: j,
          readOnly: eS,
          spellCheck: J,
          autoFocus: !et,
          canFocus: !L,
          onChange: eO,
          onFocus: G,
          onBlur: K,
          onClick: eR,
          onPaste: e_,
          onKeyDown: eI,
          onKeyUp: eN,
          decorateExtra: eM,
          renderExtraElement: ek,
          renderExtraLeaf: eb,
          "aria-owns": ei,
          "aria-haspopup": eo,
          "aria-expanded": er,
          "aria-activedescendant": es,
          "aria-controls": ea,
          "aria-labelledby": ec,
          "aria-describedby": ed,
          "aria-invalid": eu,
          "aria-autocomplete": ef,
          "aria-required": D
        })
      })]
    })
  })