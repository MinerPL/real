"use strict";
a.r(t), a.d(t, {
  default: function() {
    return ex
  }
}), a("424973"), a("222007");
var s = a("37983"),
  n = a("884691"),
  l = a("414456"),
  r = a.n(l),
  i = a("866227"),
  o = a.n(i),
  d = a("907002"),
  u = a("171210"),
  c = a("316693"),
  m = a("249654"),
  h = a("446674"),
  f = a("77078"),
  g = a("18054"),
  x = a("581583"),
  C = a("206230"),
  T = a("656038"),
  _ = a("454273"),
  S = a("781555"),
  p = a("305961"),
  E = a("36694"),
  N = a("945330"),
  M = a("717018"),
  A = a("673078"),
  v = a("68238"),
  I = a("904276"),
  j = a("772280"),
  R = a("423487"),
  O = a("956089"),
  F = a("659500"),
  b = a("718517"),
  L = a("526812"),
  P = a("404607"),
  y = a("713955"),
  D = a("339792"),
  w = a("680986"),
  U = a("867965"),
  k = a("258039"),
  H = a("729608"),
  B = a("578198"),
  G = a("953371"),
  V = a("49111"),
  z = a("782340"),
  W = a("358040");
let K = {
    width: 28,
    height: 28
  },
  Y = {
    width: 20,
    height: 20,
    borderRadius: 10
  },
  X = e => {
    (0, U.trackForumOnboardingClicked)({
      onboardingCTA: e
    })
  };
class Z {
  addStep(e) {
    ++this.currentIndex, this.steps.push({
      index: this.currentIndex,
      ...e
    }), e.isDone && this.completedSteps++
  }
  getSteps() {
    return this.steps
  }
  isAllDone() {
    return this.steps.every(e => e.isDone)
  }
  constructor() {
    this.currentIndex = 0, this.steps = [], this.completedSteps = 0
  }
}
let q = (e, t, n) => {
    let l = (0, T.default)(t) ? c.default.combine(V.Permissions.VIEW_CHANNEL, V.Permissions.SEND_MESSAGES) : V.Permissions.SEND_MESSAGES,
      r = null != e ? (0, y.getAllExistingRolesWithPermission)(e, t, l).filter(a => t.permissionOverwrites.hasOwnProperty(a.id) || (0, _.isEveryoneRoleId)(e.id, a.id)) : [],
      i = r.length > 0,
      o = r.some(t => (0, _.isEveryoneRoleId)(e.id, t.id));
    return {
      name: z.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_PERMISSION_TITLE,
      description: z.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_PERMISSION_DESCRIPTION,
      isDone: i && o,
      shouldWarn: i && !o,
      children: i ? (0, s.jsx)(eu, {
        guild: e,
        roles: r
      }) : null,
      clickHandler: () => {
        X(G.ForumOnboardingCTAs.PERMISSIONS), (0, f.openModalLazy)(async () => {
          let {
            default: i
          } = await a.el("840489").then(a.bind(a, "840489"));
          return n(!0), a => (0, s.jsx)(i, {
            ...a,
            channel: t,
            guild: e,
            permission: l,
            currentSelectedRoles: r
          })
        }, {
          modalKey: "SEND_MESSAGE_ROLE_PERMISSION_FIX_MODAL_KEY",
          onCloseRequest: V.NOOP_NULL,
          onCloseCallback: () => n(!1)
        })
      }
    }
  },
  Q = e => {
    let t = null != e.topic && e.topic.length > 0;
    return {
      name: z.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_GUIDELINES_TITLE,
      description: z.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_GUIDELINES_DESCRIPTION,
      clickHandler: () => {
        X(G.ForumOnboardingCTAs.GUIDELINES), g.default.open(e.id, void 0, V.ChannelSettingsSubsections.TOPIC)
      },
      isDone: t
    }
  },
  J = e => {
    let t = null != e.availableTags && e.availableTags.length > 0;
    return {
      name: z.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_TAGS_TITLE,
      description: z.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_TAGS_DESCRIPTION,
      clickHandler: () => {
        X(G.ForumOnboardingCTAs.TAGS), g.default.open(e.id), (0, f.openModalLazy)(async () => {
          let {
            default: t
          } = await a.el("987034").then(a.bind(a, "987034"));
          return a => (0, s.jsx)(t, {
            ...a,
            channelId: e.id,
            guildId: e.guild_id
          })
        })
      },
      isDone: t
    }
  },
  $ = e => {
    let t = null != e.defaultReactionEmoji;
    return {
      name: z.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_DEFAULT_REACTION_TITLE,
      description: z.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_DEFAULT_REACTION_DESCRIPTION,
      clickHandler: () => {
        X(G.ForumOnboardingCTAs.DEFAULT_REACTION), (0, f.openModalLazy)(async () => {
          let {
            default: t
          } = await a.el("456552").then(a.bind(a, "456552"));
          return a => (0, s.jsx)(t, {
            ...a,
            channel: e
          })
        })
      },
      isDone: t
    }
  },
  ee = (e, t, n) => ({
    name: z.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_FIRST_POST_TITLE,
    description: t ? z.default.Messages.MEDIA_CHANNEL_ONBOARDING_CHECKLIST_FIRST_POST_DESCRIPTION : z.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_FIRST_POST_DESCRIPTION.format({
      onClick: e => {
        null != n && (e.preventDefault(), e.stopPropagation(), (0, U.trackForumUpsellModalViewed)(), (0, f.openModalLazy)(async () => {
          let {
            default: e
          } = await a.el("135430").then(a.bind(a, "135430"));
          return t => (0, s.jsx)(e, {
            ...t,
            guildId: n
          })
        }))
      }
    }),
    clickHandler: () => {
      X(G.ForumOnboardingCTAs.CREATE_POST), F.ComponentDispatch.dispatch(V.ComponentActions.FOCUS_COMPOSER_TITLE)
    },
    isDone: e
  }),
  et = (e, t, a, s) => n.useMemo(() => {
    let n = new Z,
      l = (null == t ? void 0 : t.isMediaChannel()) === !0;
    return null != e && null != t && !l && n.addStep(q(e, t, s)), !l && n.addStep(Q(t)), n.addStep(J(t)), n.addStep($(t)), n.addStep(ee(a, l, null == e ? void 0 : e.id)), n
  }, [t, e, a, s]),
  ea = (e, t) => n.useCallback(() => (t(!1), P.default.hideAdminOnboarding(e, !0)), [e, t]),
  es = e => {
    let t = m.default.extractTimestamp(e),
      a = o().isBefore(o(t).add(o.duration(15, "days")));
    return a
  },
  en = (e, t, a) => {
    n.useEffect(() => {
      !e && a(!t)
    }, [e, a, t])
  },
  el = (e, t, a, s) => {
    let l = n.useRef(0);
    n.useEffect(() => (a || !e || t ? clearTimeout(l.current) : l.current = setTimeout(() => {
      s()
    }, 60 * b.default.Millis.SECOND), () => clearTimeout(l.current)), [e, t, s, a])
  },
  er = (e, t, a) => {
    n.useEffect(() => {
      e && t && a()
    }, [])
  },
  ei = e => {
    let {
      isAllDone: t,
      isVisible: a,
      canManageChannel: s,
      guild: l,
      channel: r
    } = e, i = n.useCallback(() => {
      F.ComponentDispatch.dispatch(V.ComponentActions.REMEASURE_TARGET)
    }, []);
    n.useEffect(() => {
      i()
    }, [i, t, a, s, null == l ? void 0 : l.roles, r.id, r.permissionOverwrites])
  },
  eo = () => {
    let [e, t] = n.useState(!0), a = (0, h.useStateFromStores)([C.default], () => C.default.useReducedMotion), s = (0, d.useTransition)(e, {
      keys: e => e ? "shown" : "hidden",
      config: ec,
      from: {
        opacity: 0
      },
      enter: {
        opacity: 1
      },
      leave: {
        opacity: 0
      },
      unique: !0,
      immediate: a
    });
    return {
      transitions: s,
      setVisible: t
    }
  },
  ed = e => {
    let t = (0, h.useStateFromStores)([C.default], () => C.default.useReducedMotion);
    return (0, d.useTransition)(e, {
      from: {
        maxHeight: 0
      },
      enter: {
        maxHeight: 500
      },
      leave: {
        maxHeight: 0
      },
      config: {
        duration: 200
      },
      immediate: t
    })
  },
  eu = e => {
    let {
      guild: t,
      roles: a
    } = e;
    return (0, s.jsx)("div", {
      className: W.rolesList,
      "aria-label": z.default.Messages.ROLES_LIST.format({
        numRoles: a.length
      }),
      children: a.map(e => (0, s.jsx)(x.MemberRole, {
        role: e,
        canRemove: !1,
        onRemove: V.NOOP_NULL,
        guildId: t.id,
        className: W.rolePill
      }, e.id))
    })
  },
  ec = {
    mass: 1,
    tension: 250,
    friction: 18,
    clamp: !0
  },
  em = e => {
    let {
      guild: t,
      channel: a,
      hasAnyThread: s,
      handleHide: l
    } = e, [r, i] = n.useState(!1), o = (0, k.isOnboardingDismissed)(a.id), d = (0, h.useStateFromStores)([L.default], () => L.default.hasHidden(a.id)), u = et(t, a, s, i), c = u.isAllDone(), m = o || d || !es(a.id);
    return el(c, m, r, l), {
      onboardingSteps: u,
      isHidden: d,
      isDismissed: o,
      isAllDone: c
    }
  },
  eh = () => n.useCallback(e => {
    var t;
    null === (t = e.clickHandler) || void 0 === t || t.call(e)
  }, []),
  ef = e => {
    let {
      handleHide: t
    } = e;
    return (0, s.jsx)(f.Clickable, {
      onClick: t,
      className: W.closeButton,
      "aria-label": z.default.Messages.DISMISS,
      children: (0, s.jsx)(N.default, {
        className: W.closeIcon
      })
    })
  },
  eg = e => {
    let {
      expanded: t,
      onClick: a
    } = e;
    return (0, s.jsx)(f.Clickable, {
      onClick: a,
      className: W.closeButton,
      "aria-label": t ? z.default.Messages.COLLAPSE : z.default.Messages.EXPAND,
      children: t ? (0, s.jsx)(M.default, {
        className: W.closeIcon
      }) : (0, s.jsx)(A.default, {
        className: W.closeIcon
      })
    })
  };
var ex = e => {
  let {
    hasAnyThread: t,
    channel: a
  } = e, {
    onboardingExpanded: l
  } = (0, B.useForumPostComposerStore)(e => {
    let {
      onboardingExpanded: t
    } = e;
    return {
      onboardingExpanded: t
    }
  }), {
    tagFilter: i
  } = (0, D.useForumChannelStore)(a.id), o = (0, h.useStateFromStores)([p.default], () => p.default.getGuild(a.getGuildId())), c = (0, w.useCanManageChannel)(a), {
    transitions: m,
    setVisible: g
  } = eo(), x = ed(l), C = eh(), T = ea(a.id, g), {
    onboardingSteps: _,
    isDismissed: N,
    isHidden: M,
    isAllDone: A
  } = em({
    guild: o,
    channel: a,
    hasAnyThread: t,
    handleHide: T
  }), F = !M && !N, b = (0, B.useForumPostComposerStoreApi)(), L = a.isMediaChannel(), P = e => b.getState().setOnboardingExpanded(e);
  return (er(A, F, T), ei({
    isAllDone: A,
    isVisible: F,
    canManageChannel: c,
    guild: o,
    channel: a
  }), en(N, M, g), n.useEffect(() => {
    (!t || !F) && P(!0)
  }, []), null == o) ? null : F && c ? L ? t ? null : (0, s.jsx)(S.default, {
    channel: a
  }) : (0, s.jsx)(s.Fragment, {
    children: m((e, t) => t ? (0, s.jsx)(d.animated.div, {
      style: e,
      className: W.container,
      children: (0, s.jsxs)("div", {
        className: W.wrapper,
        children: [(0, s.jsx)("div", {
          className: W.headerRow,
          children: (0, s.jsxs)(f.HeadingLevel, {
            component: (0, s.jsx)(f.Heading, {
              variant: "heading-md/semibold",
              children: z.default.Messages.GET_STARTED
            }),
            children: [(0, s.jsx)(f.Heading, {
              variant: "heading-md/medium",
              className: W.header,
              children: z.default.Messages.FORUM_CHANNEL_ONBOARDING_COMPLETED_COUNT.format({
                numCompleted: _.completedSteps.toString(),
                numSteps: _.steps.length.toString()
              })
            }), (0, s.jsxs)(f.Text, {
              variant: "text-xs/normal",
              className: W.visibilityInfo,
              children: [(0, s.jsx)(v.default, {
                width: 12,
                height: 12,
                className: W.icon
              }), z.default.Messages.FORUM_CHANNEL_ONBOARDING_VISIBILITY]
            }), (0, s.jsx)(eg, {
              expanded: l,
              onClick: () => P(!l)
            }), (0, s.jsx)(ef, {
              handleHide: T
            })]
          })
        }), x((e, t) => t ? (0, s.jsx)(d.animated.div, {
          style: e,
          className: W.listContainer,
          children: (0, s.jsx)("ol", {
            className: W.checklist,
            children: _.getSteps().map(e => (0, s.jsxs)(f.Clickable, {
              tag: "li",
              "aria-label": e.name,
              onClick: () => C(e),
              className: r(W.stepContainer, {
                [W.completed]: e.isDone
              }),
              children: [e.shouldWarn ? (0, s.jsx)(R.default, {
                color: u.default.STATUS_DANGER,
                className: W.stepStatus
              }) : e.isDone ? (0, s.jsx)(O.IconBadge, {
                color: u.default.STATUS_POSITIVE_BACKGROUND,
                icon: E.default,
                style: Y,
                className: W.stepStatus
              }) : (0, s.jsx)(O.IconBadge, {
                disableColor: !0,
                icon: I.default,
                style: K,
                className: r(W.stepStatus, W.completed)
              }), (0, s.jsxs)("div", {
                className: W.step,
                children: [(0, s.jsx)(f.Text, {
                  variant: "text-md/medium",
                  color: e.isDone ? "header-secondary" : "header-primary",
                  className: W.stepName,
                  children: e.name
                }), (0, s.jsx)(f.Text, {
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  className: W.stepDescription,
                  children: e.description
                }), e.children]
              }), (0, s.jsx)(j.default, {
                width: 12,
                className: W.stepStatus
              })]
            }, "onboard-step-".concat(e.index)))
          })
        }) : null)]
      })
    }) : null)
  }) : t ? null : (0, s.jsx)(H.default, {
    channelName: a.name,
    guildId: a.guild_id,
    tagFilter: i,
    channel: a
  })
}