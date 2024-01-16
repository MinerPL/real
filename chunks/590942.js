"use strict";
n.r(t), n.d(t, {
  default: function() {
    return B
  }
}), n("222007");
var l, a, s = n("37983"),
  i = n("884691"),
  r = n("917351"),
  u = n("446674"),
  o = n("77078"),
  d = n("970728"),
  c = n("206230"),
  E = n("526887"),
  f = n("960757"),
  _ = n("923959"),
  I = n("305961"),
  h = n("683911"),
  T = n("476765"),
  N = n("354023"),
  v = n("686904"),
  m = n("398604"),
  S = n("322224"),
  g = n("152475"),
  C = n("799547"),
  p = n("189443"),
  x = n("841363"),
  R = n("558286"),
  A = n("560309"),
  O = n("151859"),
  L = n("299342"),
  M = n("499950"),
  D = n("27754"),
  y = n("745049"),
  U = n("49111"),
  V = n("782340"),
  j = n("738021");
let {
  INVITE_OPTIONS_7_DAYS: P,
  INVITE_OPTIONS_UNLIMITED: G
} = N.default;

function H(e) {
  let {
    modal: t
  } = e, {
    createMultipleConfetti: n
  } = i.useContext(E.ConfettiCannonContext);
  return i.useEffect(() => {
    let e = null == t ? void 0 : t.getScrollerNode();
    if (null == e) return;
    let l = e.getBoundingClientRect();
    n({
      position: {
        type: "static-random",
        minValue: {
          x: l.left - 100,
          y: l.top - 100
        },
        maxValue: {
          x: l.left + 100,
          y: l.top + 100
        }
      },
      velocity: {
        type: "static-random",
        minValue: {
          x: -20,
          y: -20
        },
        maxValue: {
          x: -60,
          y: -60
        }
      }
    }, 80), n({
      position: {
        type: "static-random",
        minValue: {
          x: l.right - 100,
          y: l.top - 100
        },
        maxValue: {
          x: l.right + 100,
          y: l.top + 100
        }
      },
      velocity: {
        type: "static-random",
        minValue: {
          x: 20,
          y: -20
        },
        maxValue: {
          x: 60,
          y: -60
        }
      }
    }, 80)
  }, [n, t]), null
}

function b(e) {
  let {
    guildId: t,
    guildEvent: n,
    guildEventId: a,
    editBroadcastInfoData: d,
    isEdit: E,
    formErrors: f,
    transitionState: _,
    loading: I,
    error: N,
    onChange: v,
    onSave: S,
    onClose: g,
    createdEvent: C
  } = e, p = (0, T.useUID)(), x = i.useRef(n), D = !(0, r.isEqual)(x.current, n), y = i.useMemo(() => [{
    slideId: 0,
    label: V.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_1,
    valid: null == f.entity,
    userErrorMessage: f.entity
  }, {
    slideId: 1,
    label: V.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_2,
    valid: null == f.schedule && null == f.topic && (!E || D),
    userErrorMessage: f.schedule
  }, {
    slideId: 2,
    label: V.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_3,
    valid: !0
  }], [f, E, D]), U = Object.keys(l).length, P = (0, m.isGuildScheduledEventActive)(n), G = e => Math.max(0, Math.min(e, U - 1)), [b, B] = i.useState(P ? 1 : 0), [F, w] = i.useState(!1), k = i.useMemo(() => y.slice(0, b + 1).map(e => e.valid).every(Boolean), [y, b]), Y = b >= y.length ? 3 : y[G(b)].slideId, z = 3 === Y, Z = (0, R.useGuildEventModalStore)(e => e.onUpdateCanCloseModal);
  Z(z);
  let K = (0, u.useStateFromStores)([c.default], () => c.default.useReducedMotion),
    X = i.useRef(null),
    W = e => {
      w(!1), B(G(e))
    };
  i.useEffect(() => {
    null != C && W(3)
  }, [null == C ? void 0 : C.id, W]);
  let q = () => {
      if (!k) return;
      let e = 2 === Y;
      e ? S() : z ? g() : W(b + 1)
    },
    J = () => {
      W(b - 1)
    },
    Q = V.default.Messages.NEXT;
  return 2 === Y && (Q = E ? V.default.Messages.SAVE_EVENT : V.default.Messages.SCHEDULE_EVENT), (0, s.jsx)(s.Fragment, {
    children: (0, s.jsxs)(o.ModalRoot, {
      transitionState: _,
      "aria-labelledby": p,
      size: o.ModalSize.DYNAMIC,
      children: [!K && z ? (0, s.jsx)(H, {
        modal: X.current
      }) : null, (0, s.jsxs)(o.ModalContent, {
        className: j.content,
        scrollerRef: X,
        children: [!z && (0, s.jsx)(h.default, {
          steps: y.map(e => e.label),
          stepIndex: b,
          onClick: e => {
            e < b ? J() : e > b && q()
          }
        }), (0, s.jsxs)(o.Slides, {
          activeSlide: Y,
          width: 440,
          onSlideReady: e => {
            w(e === Y)
          },
          children: [(0, s.jsx)(o.Slide, {
            id: 0,
            children: (0, s.jsx)(A.default, {
              guildId: t,
              guildEvent: n,
              validationErrorMessage: f.entity,
              isSlideReady: F,
              onChange: v
            })
          }), (0, s.jsx)(o.Slide, {
            id: 1,
            children: (0, s.jsx)(L.default, {
              guildEvent: n,
              guildEventId: a,
              guildId: t,
              editBroadcastInfoData: d,
              onChange: v,
              error: N,
              validationErrorMessage: f.schedule,
              isSlideReady: F
            })
          }), (0, s.jsx)(o.Slide, {
            id: 2,
            children: (0, s.jsx)(O.default, {
              guildId: t,
              guildEvent: n,
              guildEventId: a,
              error: N
            })
          }), (0, s.jsx)(o.Slide, {
            id: 3,
            children: (0, s.jsx)(M.default, {
              onClose: g,
              event: C
            })
          })]
        })]
      }), !z && (0, s.jsxs)(o.ModalFooter, {
        className: j.footer,
        children: [(0, s.jsxs)("div", {
          className: j.inline,
          children: [(0, s.jsx)(o.Button, {
            color: o.Button.Colors.PRIMARY,
            onClick: g,
            children: V.default.Messages.CANCEL
          }), (0, s.jsx)(o.Button, {
            onClick: q,
            disabled: !k,
            className: j.button,
            submitting: I,
            children: Q
          })]
        }), 0 !== Y && (0, s.jsx)(o.Button, {
          look: o.Button.Looks.LINK,
          size: o.Button.Sizes.MIN,
          onClick: J,
          color: o.Button.Colors.LINK,
          children: V.default.Messages.BACK
        })]
      })]
    })
  })
}

function B(e) {
  let {
    guildId: t,
    guildScheduledEventId: l,
    transitionState: a,
    onClose: c
  } = e, E = (0, u.useStateFromStores)([I.default], () => I.default.getGuild(t)), h = (0, u.useStateFromStores)([m.default], () => m.default.getGuildScheduledEvent(l), [l]), T = (0, u.useStateFromStores)([_.default], () => _.default.getDefaultChannel(t), [t]), N = (0, p.getInitialGuildEventData)(h, T), [R, A] = i.useState(N), [O] = i.useState((0, p.isEditingEvent)(h)), [L, M] = i.useState(null), j = e => {
    var t;
    let n = (0, g.isGuildEventInvitable)(e),
      l = null !== (t = e.channel_id) && void 0 !== t ? t : null == T ? void 0 : T.id;
    null != l && d.default.createInvite(l, {
      max_age: P.value,
      max_uses: G.value
    }, U.InstantInviteSources.GUILD_EVENTS), n ? M(e) : c()
  }, H = (0, f.default)(E, null == h ? void 0 : h.id, R), [B, {
    loading: F,
    error: w
  }] = (0, v.default)(async () => {
    if (null != L) return;
    let e = {
      broadcastToDirectoryChannels: H.broadcastToDirectoryChannels
    };
    if (O && null != l) return await S.default.saveEvent(l, R, t, e), c();
    let n = await S.default.createGuildEvent(R, t, e);
    return j(n.body), n
  }), k = i.useMemo(() => (0, D.default)(R, O), [R, O]);
  return (0, s.jsx)(b, {
    guildId: t,
    guildEvent: R,
    guildEventId: l,
    editBroadcastInfoData: H,
    isEdit: O,
    formErrors: k,
    transitionState: a,
    loading: F,
    error: w,
    onChange: e => {
      if (null != e.entityType) {
        var n;
        let l = (0, x.getChannelTypeFromEntity)(e.entityType),
          [a] = (0, C.getEventChannelsByType)(t, l);
        e.channelId = null !== (n = null == a ? void 0 : a.id) && void 0 !== n ? n : null, e.entityType !== y.GuildScheduledEventEntityTypes.EXTERNAL && R.entityType === y.GuildScheduledEventEntityTypes.EXTERNAL && (e.entityMetadata = null)
      }
      A(t => ({
        ...t,
        ...e
      }))
    },
    onSave: () => {
      let e = (null == h ? void 0 : h.scheduled_start_time) !== R.scheduledStartTime || h.scheduled_end_time !== R.scheduledEndTime || !(0, r.isEqual)(h.recurrence_rule, R.recurrenceRule);
      null != R.recurrenceRule && O && e ? (0, o.openModalLazy)(async () => {
        let {
          ConfirmModal: e
        } = await n.el("77078").then(n.bind(n, "77078"));
        return t => (0, s.jsxs)(e, {
          ...t,
          header: V.default.Messages.EDIT_ALL_EVENTS,
          confirmText: V.default.Messages.SAVE_EVENT,
          cancelText: V.default.Messages.NEVERMIND,
          onConfirm: B,
          children: [(0, s.jsx)(o.Text, {
            variant: "text-md/normal",
            children: V.default.Messages.GUILD_EVENT_EDIT_CONFIRM_BODY_CONFIRM
          }), (0, s.jsx)("br", {}), (0, s.jsx)(o.Text, {
            variant: "text-md/normal",
            children: V.default.Messages.GUILD_EVENT_EDIT_CONFIRM_BODY_EDIT_ALL_HINT.format()
          })]
        })
      }) : B()
    },
    onClose: c,
    createdEvent: L
  })
}(a = l || (l = {}))[a.ENTITY = 0] = "ENTITY", a[a.SETTINGS = 1] = "SETTINGS", a[a.PREVIEW = 2] = "PREVIEW", a[a.SUCCESS = 3] = "SUCCESS"