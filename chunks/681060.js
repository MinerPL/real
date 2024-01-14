"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eu
  }
}), n("222007"), n("70102");
var l = n("37983"),
  i = n("884691"),
  r = n("414456"),
  o = n.n(r),
  s = n("44170"),
  a = n("627445"),
  u = n.n(a),
  d = n("16470"),
  c = n("394846"),
  f = n("316693"),
  p = n("446674"),
  m = n("77078"),
  h = n("295426"),
  E = n("206230"),
  S = n("812204"),
  g = n("685665"),
  C = n("996554"),
  T = n("426969"),
  v = n("847352"),
  y = n("383018"),
  x = n("529190"),
  I = n("829290"),
  N = n("842343"),
  _ = n("200197"),
  A = n("538282"),
  R = n("241488"),
  O = n("292936"),
  M = n("791234"),
  k = n("267567"),
  b = n("217535"),
  P = n("558901"),
  L = n("328511"),
  U = n("467094"),
  j = n("24373"),
  D = n("300322"),
  w = n("845579"),
  B = n("26989"),
  H = n("957255"),
  F = n("18494"),
  G = n("769264"),
  K = n("585722"),
  V = n("697218"),
  W = n("378765"),
  Y = n("991170"),
  q = n("773336"),
  z = n("545054"),
  Q = n("850391"),
  X = n("743825"),
  Z = n("231868"),
  J = n("834725"),
  $ = n("537566"),
  ee = n("912823"),
  et = n("376215"),
  en = n("830618"),
  el = n("848471"),
  ei = n("153213"),
  er = n("49111"),
  eo = n("406291"),
  es = n("13030"),
  ea = n("537461"),
  eu = i.memo(i.forwardRef(function(e, t) {
    var r, a, eu, ed, ec, ef, ep, em, eh, eE, eS, eg, eC;
    let {
      textValue: eT,
      richValue: ev,
      className: ey,
      innerClassName: ex,
      editorClassName: eI,
      id: eN,
      required: e_,
      disabled: eA,
      placeholder: eR,
      accessibilityLabel: eO,
      channel: eM,
      type: ek,
      focused: eb,
      renderAttachButton: eP,
      renderAppLauncherButton: eL,
      renderApplicationCommandIcon: eU,
      pendingReply: ej,
      onChange: eD,
      onResize: ew,
      onBlur: eB,
      onFocus: eH,
      onKeyDown: eF,
      onSubmit: eG,
      promptToUpload: eK,
      highlighted: eV,
      canMentionRoles: eW,
      canMentionChannels: eY,
      maxCharacterCount: eq,
      showRemainingCharsAfterCount: ez,
      allowNewLines: eQ = !0,
      characterCountClassName: eX,
      "aria-describedby": eZ,
      "aria-labelledby": eJ,
      setEditorRef: e$,
      autoCompletePosition: e0,
      children: e1,
      disableThemedBackground: e2 = !1,
      emojiPickerCloseOnModalOuterClick: e4,
      parentModalKey: e8
    } = e;
    u(null != ek, "chat input type must be set");
    let {
      AnalyticsLocationProvider: e6
    } = (0, g.default)(S.default.CHANNEL_TEXT_AREA), e3 = function(e) {
      let t = i.useRef(null);
      if (null != e && "function" == typeof e) throw Error("Only Ref objects are supported");
      return null == e ? t : e
    }(t), e7 = i.useRef(null), e5 = i.useRef(null), e9 = i.useRef(null), te = i.useRef(null);
    null == e$ || e$(e5.current);
    let {
      activeCommand: tt,
      activeCommandSection: tn
    } = (0, p.useStateFromStoresObject)([y.default], () => {
      var e, t;
      return {
        activeCommand: (null === (e = ek.commands) || void 0 === e ? void 0 : e.enabled) ? y.default.getActiveCommand(eM.id) : null,
        activeCommandSection: (null === (t = ek.commands) || void 0 === t ? void 0 : t.enabled) ? y.default.getActiveCommandSection(eM.id) : null
      }
    }), {
      isLurking: tl,
      isPendingMember: ti,
      disabled: tr,
      canAttachFiles: to,
      canCreateThreads: ts,
      canEveryoneSendMessages: ta
    } = function(e, t, n, l) {
      let i = e.getGuildId(),
        r = (0, p.useStateFromStores)([k.default], () => null != i && k.default.isLurking(i), [i]),
        o = (0, p.useStateFromStores)([B.default, V.default], () => {
          var e, t;
          let n = V.default.getCurrentUser();
          return null !== (t = null != i && null != n ? null === (e = B.default.getMember(i, n.id)) || void 0 === e ? void 0 : e.isPending : null) && void 0 !== t && t
        }),
        s = (0, p.useStateFromStoresObject)([H.default], () => {
          var i, r;
          let s = e.isPrivate(),
            a = H.default.computePermissions(e),
            u = f.default.has(a, er.Permissions.CREATE_PUBLIC_THREADS) || f.default.has(a, er.Permissions.CREATE_PRIVATE_THREADS),
            d = (!(null === (i = t.permissions) || void 0 === i ? void 0 : i.requireCreateTherads) || u) && (!(null === (r = t.permissions) || void 0 === r ? void 0 : r.requireSendMessages) || f.default.has(a, er.Permissions.SEND_MESSAGES)),
            c = d && f.default.has(a, er.Permissions.ATTACH_FILES),
            p = null != n,
            m = (0, D.computeIsReadOnlyThread)(e);
          return {
            disabled: l || o || !s && !d || m,
            canAttachFiles: !0 === t.attachments && (s || o || c || p),
            canCreateThreads: u,
            canEveryoneSendMessages: Y.default.canEveryoneRole(er.Permissions.SEND_MESSAGES, e)
          }
        }, [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, l, o]);
      return {
        isLurking: r,
        isPendingMember: o,
        ...s
      }
    }(eM, ek, tt, eA), tu = ek.toolbarType === Q.SlateToolbarTypes.STATIC, td = !w.UseLegacyChatInput.useSetting() && !(0, q.isAndroidWeb)() && null != window.ResizeObserver, tc = !td || !(null === (r = ek.commands) || void 0 === r ? void 0 : r.enabled) || !eb || eT !== eo.COMMAND_SENTINEL, tf = (0, b.default)(), {
      isSubmitButtonEnabled: tp,
      fontSize: tm
    } = (0, p.useStateFromStoresObject)([E.default], () => ({
      fontSize: E.default.fontSize,
      isSubmitButtonEnabled: E.default.isSubmitButtonEnabled
    })), th = (0, p.useStateFromStores)([G.default], () => G.default.isEnabled());
    ! function(e, t) {
      let n = i.useCallback(() => {
          !t && (0, A.toggleExpressionPicker)(es.ExpressionPickerViewType.EMOJI, e)
        }, [t, e]),
        l = i.useCallback(() => {
          var n;
          !t && (null === (n = e.gifs) || void 0 === n ? void 0 : n.allowSending) && (0, A.toggleExpressionPicker)(es.ExpressionPickerViewType.GIF, e)
        }, [t, e]),
        r = i.useCallback(() => {
          var n;
          !t && (null === (n = e.stickers) || void 0 === n ? void 0 : n.allowSending) && (0, A.toggleExpressionPicker)(es.ExpressionPickerViewType.STICKER, e)
        }, [t, e]);
      (0, W.useComponentAction)({
        event: er.ComponentActions.TOGGLE_EMOJI_POPOUT,
        handler: n
      }), (0, W.useComponentAction)({
        event: er.ComponentActions.TOGGLE_GIF_PICKER,
        handler: l
      }), (0, W.useComponentAction)({
        event: er.ComponentActions.TOGGLE_STICKER_PICKER,
        handler: r
      })
    }(ek, tr);
    let {
      eventEmitter: tE,
      handleEditorSelectionChanged: tS
    } = function(e, t, n) {
      let [l] = i.useState(() => new s.EventEmitter);
      return i.useEffect(() => {
        l.emit("text-changed", t, n)
      }, [t, n, l]), {
        eventEmitter: l,
        handleEditorSelectionChanged: t => {
          null != e.current && l.emit("selection-changed", t)
        }
      }
    }(e5, eT, ev), {
      submitting: tg,
      submit: tC,
      handleSubmit: tT
    } = function(e, t, r, o) {
      let [s, a] = i.useState(!1), u = i.useCallback((i, d, c, f, p) => {
        var E, S, g;
        if (s) return;
        a(!0);
        let C = null !== (S = null === (E = L.default.getStickerPreview(o, t.drafts.type)) || void 0 === E ? void 0 : E.map(e => e.id)) && void 0 !== S ? S : [],
          T = null !== (g = K.default.getUploads(o, t.drafts.type)) && void 0 !== g ? g : [];
        if (null == d && !f && !p && (0, M.shouldShowAddMediaToOriginalPostModal)(T, o)) {
          a(!1), (0, m.openModalLazy)(async () => {
            let {
              default: e
            } = await n.el("67994").then(n.bind(n, "67994"));
            return t => (0, l.jsx)(e, {
              ...t,
              threadId: o,
              attachments: T,
              sendMessage: () => u(i, void 0, void 0, void 0, !0)
            })
          });
          return
        }
        e({
          value: i,
          uploads: T,
          stickers: C,
          command: d,
          commandOptionValues: c,
          isGif: f
        }).then(e => {
          var n, l, i, s;
          let {
            shouldClear: u,
            shouldRefocus: d
          } = e;
          let c = (n = u, l = t, null !== (s = n && (null === (i = l.submit) || void 0 === i ? void 0 : i.clearOnSubmit)) && void 0 !== s && s),
            f = null != r.current;
          if (c) {
            if (o !== F.default.getChannelId()) h.default.saveDraft(o, "", t.drafts.type);
            else f && r.current.clearValue()
          }
          f && (a(!1), (0, A.closeExpressionPicker)(), d && r.current.focus())
        })
      }, [r, e, s, t, o]), d = i.useCallback(e => {
        var t;
        null == r || null === (t = r.current) || void 0 === t || t.submit(e)
      }, []);
      return {
        submitting: s,
        submit: u,
        handleSubmit: d
      }
    }(eG, ek, e5, eM.id), {
      autocompleteRef: tv,
      handleMaybeShowAutocomplete: ty,
      handleHideAutocomplete: tx
    } = function() {
      let e = i.useRef(null),
        t = i.useCallback(() => {
          var t;
          null === (t = e.current) || void 0 === t || t.onMaybeShowAutocomplete()
        }, []),
        n = i.useCallback(() => {
          var t;
          null === (t = e.current) || void 0 === t || t.onHideAutocomplete()
        }, []);
      return {
        autocompleteRef: e,
        handleMaybeShowAutocomplete: t,
        handleHideAutocomplete: n
      }
    }();
    let tI = (eh = tC, eE = ek, eS = e5, i.useCallback(e => {
      var t, n;
      eE === Q.ChatInputTypes.CREATE_FORUM_POST ? null === (n = eS.current) || void 0 === n || n.insertGIF(e) : eh(e.url, void 0, void 0, !0), (0, A.closeExpressionPicker)(), null === (t = eS.current) || void 0 === t || t.focus()
    }, [eS, eh, eE]));
    let tN = (eg = e5, i.useCallback(function(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          l = eg.current;
        null != e && null != l && l.insertEmoji(e, t, n), t && (0, A.closeExpressionPicker)()
      }, [eg])),
      t_ = function(e) {
        let {
          editorRef: t,
          disabled: n,
          textValue: l,
          channelId: r,
          chatInputType: o,
          submit: s
        } = e, {
          analyticsLocations: a
        } = (0, g.default)();
        return i.useCallback((e, i) => {
          var u, d;
          !n && ((0, j.shouldAttachSticker)(i, l, r, o.drafts.type) ? ((0, J.trackStickerPreviewSelect)({
            sticker: e,
            stickerSelectLocation: i,
            isReplacement: null != L.default.getStickerPreview(r, o.drafts.type),
            analyticsLocations: a
          }), (0, U.addStickerPreview)(r, e, o.drafts.type)) : (s({
            value: "",
            uploads: void 0,
            stickers: [e.id]
          }), null === (d = t.current) || void 0 === d || d.clearValue()), (0, A.closeExpressionPicker)(), null === (u = t.current) || void 0 === u || u.focus())
        }, [n, l, r, o.drafts.type, t, a, s])
      }({
        editorRef: e5,
        disabled: tr,
        textValue: eT,
        channelId: eM.id,
        chatInputType: ek,
        submit: eG
      });
    let tA = (eC = e5, i.useCallback(e => {
        let t = eC.current;
        null != e && null != t && t.insertSound(e), (0, A.closeExpressionPicker)()
      }, [eC])),
      tR = i.useCallback(() => {
        var e;
        return null == te ? void 0 : null === (e = te.current) || void 0 === e ? void 0 : e.hide()
      }, []),
      {
        editorHeight: tO,
        handleResize: tM
      } = function(e) {
        let [t, n] = i.useState(0), l = i.useCallback(t => {
          n(null != t ? t : 0), null == e || e(t)
        }, [e]);
        return {
          editorHeight: t,
          handleResize: l
        }
      }(ew),
      {
        handleTab: tk,
        handleEnter: tb,
        handleMoveSelection: tP
      } = function(e, t, n) {
        let l = i.useCallback(() => {
            var l, i;
            return !!(!n && (null === (l = t.current) || void 0 === l ? void 0 : l.onTabOrEnter(!1))) || (null === (i = e.current) || void 0 === i ? void 0 : i.onTabOrEnter(!1)) || !1
          }, [n]),
          r = i.useCallback(() => {
            var l, i;
            return !!(!n && (null === (l = t.current) || void 0 === l ? void 0 : l.onTabOrEnter(!0))) || (null === (i = e.current) || void 0 === i ? void 0 : i.onTabOrEnter(!0)) || !1
          }, [n]),
          o = i.useCallback(l => {
            var i, r;
            return !!(!n && (null === (i = t.current) || void 0 === i ? void 0 : i.onMoveSelection(l))) || (null === (r = e.current) || void 0 === r ? void 0 : r.onMoveSelection(l)) || !1
          }, [n]);
        return {
          handleTab: l,
          handleEnter: r,
          handleMoveSelection: o
        }
      }(tv, e7, tc),
      {
        expressionPickerView: tL,
        shouldHideExpressionPicker: tU,
        handleAutocompleteVisibilityChange: tj,
        handleOuterClick: tD
      } = function(e, t, n) {
        let [l, r] = (0, A.useExpressionPickerStore)(e => [e.activeView, e.activeViewType], d.default);
        i.useEffect(() => () => {
          (0, A.closeExpressionPicker)(e)
        }, [e]);
        let o = i.useCallback(e => {
            t.emit("autocomplete-visibility-change", e), e && (0, A.closeExpressionPicker)()
          }, [t]),
          s = i.useCallback(() => {
            var e;
            null == l && (null === (e = n.current) || void 0 === e || e.handleOuterClick())
          }, [l]),
          a = null == l || null == r || r !== e;
        return {
          expressionPickerView: l,
          shouldHideExpressionPicker: a,
          handleAutocompleteVisibilityChange: o,
          handleOuterClick: s
        }
      }(ek, tE, e5),
      tw = C.AppLauncherDesktopExperiment.useExperiment({
        location: "chat_input"
      }, {
        autoTrackExposure: !1
      }).enabled,
      tB = (0, p.useStateFromStores)([T.default], () => T.default.shouldShowPopup(), []);
    (0, z.useHereMentionCallback)(tE, eM.guild_id, eM.id);
    let tH = null != ej,
      tF = tr && !((tl || ti) && ta) || tg && (null === (a = ek.submit) || void 0 === a ? void 0 : a.useDisabledStylesOnSubmit),
      tG = null,
      tK = null;
    null != tt ? tG = null == eU ? void 0 : eU(tt, tn, ea.attachButton) : (!tr || ts) && (tG = null == eP ? void 0 : eP(tH, ea.attachButton), tw && (tK = null == eL ? void 0 : eL()));
    let tV = td && null != ev && !tr && ek.showCharacterCount && null == tt,
      tW = td && !__OVERLAY__ && null != ev && null == tt,
      tY = function(e, t, n, l) {
        var i, r;
        let o = w.ExpressionSuggestionsEnabled.useSetting(),
          s = (0, p.useStateFromStores)([L.default], () => L.default.getStickerPreview(e.id, t.drafts.type)),
          a = null != s && s.length > 0;
        return o && (null === (i = t.stickers) || void 0 === i ? void 0 : i.autoSuggest) && !a && (null === (r = l.current) || void 0 === r ? void 0 : r.isVisible()) !== !0 && !__OVERLAY__ && null != n
      }(eM, ek, ev, tv),
      tq = (0, I.useShouldShowPTONotice)(eM),
      tz = null != tt || null != ej || tq;
    return (0, l.jsx)(_.EventEmitterProvider, {
      value: tE,
      children: (0, l.jsxs)(e6, {
        children: [tW && tu ? (0, l.jsx)(ei.default, {
          editorRef: e5,
          options: ek.markdown,
          channel: eM
        }) : tW ? (0, l.jsx)(el.default, {
          ref: te,
          editorRef: e5,
          containerRef: e9,
          options: ek.markdown
        }) : null, (0, l.jsxs)("div", {
          ref: e3,
          className: o(ey, {
            [ea.channelTextArea]: !0,
            [ea.channelTextAreaDisabled]: tF,
            [ea.highlighted]: eV,
            [ea.textAreaMobileThemed]: c.isMobile
          }),
          onMouseDown: tD,
          children: [(0, l.jsx)($.default, {
            type: ek,
            channel: eM,
            activeCommand: tt,
            pendingReply: ej
          }), (0, l.jsxs)("div", {
            ref: e9,
            onScroll: tR,
            className: o(ex, {
              [ea.scrollableContainer]: !0,
              [ea.themedBackground]: !e2,
              [ea.webkit]: "Blink" === platform.layout,
              [ea.hasConnectedBar]: tz
            }),
            children: [(0, l.jsx)(Z.default, {
              channelId: eM.id,
              chatInputType: ek
            }), ek.hideAttachmentArea ? null : (0, l.jsx)(et.default, {
              channelId: eM.id,
              type: ek,
              canAttachFiles: to
            }), (0, l.jsxs)("div", {
              className: o(ea.inner, {
                [ea.innerDisabled]: tF,
                [ea.sansAttachButton]: ek !== Q.ChatInputTypes.EDIT && (null != tG || tF && null == tG || tl),
                [ea.sansAttachButtonCreateThread]: ek === Q.ChatInputTypes.THREAD_CREATION,
                [ea.sansAttachButtonCreatePost]: ek === Q.ChatInputTypes.CREATE_FORUM_POST
              }),
              children: [tG, tK, (0, l.jsx)(m.FocusRing, {
                ringTarget: e3,
                ringClassName: ea.focusRing,
                children: (0, l.jsx)(X.default, {
                  ref: e5,
                  id: eN,
                  focused: eb,
                  useSlate: td,
                  textValue: eT,
                  richValue: ev,
                  disabled: tr,
                  placeholder: eR,
                  required: e_,
                  accessibilityLabel: eO,
                  isPreviewing: (tl || ti) && ta,
                  channel: eM,
                  type: ek,
                  canPasteFiles: to,
                  uploadPromptCharacterCount: er.MAX_MESSAGE_LENGTH_PREMIUM,
                  maxCharacterCount: null != eq ? eq : tf,
                  allowNewLines: eQ,
                  "aria-describedby": eZ,
                  onChange: eD,
                  onResize: tM,
                  onBlur: eB,
                  onFocus: eH,
                  onKeyDown: eF,
                  onSubmit: tC,
                  onTab: tk,
                  onEnter: tb,
                  onMoveSelection: tP,
                  onSelectionChanged: tS,
                  onMaybeShowAutocomplete: ty,
                  onHideAutocomplete: tx,
                  promptToUpload: eK,
                  fontSize: tm,
                  spellcheckEnabled: th,
                  canOnlyUseTextCommands: tH,
                  className: o({
                    [ea.textAreaThreadCreation]: ek === Q.ChatInputTypes.THREAD_CREATION,
                    [ea.profileBioInput]: ek === Q.ChatInputTypes.PROFILE_BIO_INPUT
                  }, eI),
                  "aria-labelledby": eJ
                })
              }), (0, l.jsx)(ee.default, {
                type: ek,
                disabled: tr,
                channel: eM,
                handleSubmit: tT,
                isEmpty: 0 === eT.trim().length
              })]
            })]
          }), tc ? null : (0, l.jsx)(x.default, {
            ref: e7,
            channel: eM,
            canOnlyUseTextCommands: tH
          }), (0, l.jsx)(N.default, {
            ref: tv,
            channel: eM,
            canMentionRoles: eW,
            canMentionChannels: eY,
            useNewSlashCommands: td,
            canOnlyUseTextCommands: tH,
            canSendStickers: null === (eu = ek.stickers) || void 0 === eu ? void 0 : eu.allowSending,
            textValue: eT,
            focused: eb,
            expressionPickerView: tL,
            type: ek,
            editorRef: e5,
            onSendMessage: tC,
            onSendSticker: t_,
            onVisibilityChange: tj,
            editorHeight: tO,
            setValue: (e, t) => null == eD ? void 0 : eD(null, e, t),
            position: e0
          }), (0, l.jsx)(P.default, {
            textValue: eT,
            editorHeight: tO
          }), tV ? (0, l.jsx)(en.default, {
            type: ek,
            textValue: eT,
            className: eX,
            maxCharacterCount: eq,
            showRemainingCharsAfterCount: ez
          }) : null, tY ? (0, l.jsx)(O.default, {
            editorRef: e5,
            channel: eM,
            isEditorFocused: eb,
            onSelectSticker: t_,
            submitButtonVisible: (null === (ed = ek.submit) || void 0 === ed ? void 0 : ed.button) && (null !== (ep = null === (ec = ek.submit) || void 0 === ec ? void 0 : ec.ignorePreference) && void 0 !== ep ? ep : tp),
            stickerIconVisible: null !== (em = null === (ef = ek.stickers) || void 0 === ef ? void 0 : ef.button) && void 0 !== em && em
          }) : null, e1]
        }), tU ? null : (0, l.jsx)(R.default, {
          positionTargetRef: e3,
          type: ek,
          onSelectGIF: tI,
          onSelectEmoji: tN,
          onSelectSticker: t_,
          onSelectSound: tA,
          channel: eM,
          closeOnModalOuterClick: e4,
          parentModalKey: e8,
          position: "top",
          align: "right",
          positionLayerClassName: ea.expressionPickerPositionLayer
        }), tB ? (0, l.jsx)(v.default, {
          positionTargetRef: e3,
          channel: eM,
          closeOnModalOuterClick: e4,
          parentModalKey: e8
        }) : null]
      })
    })
  }))