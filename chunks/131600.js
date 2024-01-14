"use strict";
a.r(t), a.d(t, {
  default: function() {
    return eg
  }
}), a("424973"), a("222007");
var s = a("37983"),
  n = a("884691"),
  l = a("414456"),
  r = a.n(l),
  i = a("866227"),
  o = a.n(i),
  u = a("907002"),
  d = a("171210"),
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
  b = a("526812"),
  L = a("404607"),
  P = a("713955"),
  y = a("339792"),
  D = a("680986"),
  w = a("867965"),
  U = a("258039"),
  k = a("729608"),
  H = a("578198"),
  B = a("953371"),
  G = a("49111"),
  V = a("782340"),
  z = a("358040");
let W = {
    width: 28,
    height: 28
  },
  K = {
    width: 20,
    height: 20,
    borderRadius: 10
  },
  Y = e => {
    (0, w.trackForumOnboardingClicked)({
      onboardingCTA: e
    })
  };
class X {
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
let Z = (e, t, n) => {
    let l = (0, T.default)(t) ? c.default.combine(G.Permissions.VIEW_CHANNEL, G.Permissions.SEND_MESSAGES) : G.Permissions.SEND_MESSAGES,
      r = null != e ? (0, P.getAllExistingRolesWithPermission)(e, t, l).filter(a => t.permissionOverwrites.hasOwnProperty(a.id) || (0, _.isEveryoneRoleId)(e.id, a.id)) : [],
      i = r.length > 0,
      o = r.some(t => (0, _.isEveryoneRoleId)(e.id, t.id));
    return {
      name: V.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_PERMISSION_TITLE,
      description: V.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_PERMISSION_DESCRIPTION,
      isDone: i && o,
      shouldWarn: i && !o,
      children: i ? (0, s.jsx)(eu, {
        guild: e,
        roles: r
      }) : null,
      clickHandler: () => {
        Y(B.ForumOnboardingCTAs.PERMISSIONS), (0, f.openModalLazy)(async () => {
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
          onCloseRequest: G.NOOP_NULL,
          onCloseCallback: () => n(!1)
        })
      }
    }
  },
  q = e => {
    let t = null != e.topic && e.topic.length > 0;
    return {
      name: V.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_GUIDELINES_TITLE,
      description: V.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_GUIDELINES_DESCRIPTION,
      clickHandler: () => {
        Y(B.ForumOnboardingCTAs.GUIDELINES), g.default.open(e.id, void 0, G.ChannelSettingsSubsections.TOPIC)
      },
      isDone: t
    }
  },
  Q = e => {
    let t = null != e.availableTags && e.availableTags.length > 0;
    return {
      name: V.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_TAGS_TITLE,
      description: V.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_TAGS_DESCRIPTION,
      clickHandler: () => {
        Y(B.ForumOnboardingCTAs.TAGS), g.default.open(e.id), (0, f.openModalLazy)(async () => {
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
  J = e => {
    let t = null != e.defaultReactionEmoji;
    return {
      name: V.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_DEFAULT_REACTION_TITLE,
      description: V.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_DEFAULT_REACTION_DESCRIPTION,
      clickHandler: () => {
        Y(B.ForumOnboardingCTAs.DEFAULT_REACTION), (0, f.openModalLazy)(async () => {
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
  $ = (e, t, n) => ({
    name: V.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_FIRST_POST_TITLE,
    description: t ? V.default.Messages.MEDIA_CHANNEL_ONBOARDING_CHECKLIST_FIRST_POST_DESCRIPTION : V.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_FIRST_POST_DESCRIPTION.format({
      onClick: e => {
        null != n && (e.preventDefault(), e.stopPropagation(), (0, w.trackForumUpsellModalViewed)(), (0, f.openModalLazy)(async () => {
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
      Y(B.ForumOnboardingCTAs.CREATE_POST), F.ComponentDispatch.dispatch(G.ComponentActions.FOCUS_COMPOSER_TITLE)
    },
    isDone: e
  }),
  ee = (e, t, a, s) => n.useMemo(() => {
    let n = new X,
      l = (null == t ? void 0 : t.isMediaChannel()) === !0;
    return null != e && null != t && !l && n.addStep(Z(e, t, s)), !l && n.addStep(q(t)), n.addStep(Q(t)), n.addStep(J(t)), n.addStep($(a, l, null == e ? void 0 : e.id)), n
  }, [t, e, a, s]),
  et = (e, t) => n.useCallback(() => (t(!1), L.default.hideAdminOnboarding(e, !0)), [e, t]),
  ea = e => {
    let t = m.default.extractTimestamp(e),
      a = o().isBefore(o(t).add(o.duration(15, "days")));
    return a
  },
  es = (e, t, a) => {
    n.useEffect(() => {
      !e && a(!t)
    }, [e, a, t])
  },
  en = (e, t, a, s) => {
    let l = n.useRef(0);
    n.useEffect(() => (a || !e || t ? clearTimeout(l.current) : l.current = setTimeout(() => {
      s()
    }, 6e4), () => clearTimeout(l.current)), [e, t, s, a])
  },
  el = (e, t, a) => {
    n.useEffect(() => {
      e && t && a()
    }, [])
  },
  er = e => {
    let {
      isAllDone: t,
      isVisible: a,
      canManageChannel: s,
      guild: l,
      channel: r
    } = e, i = n.useCallback(() => {
      F.ComponentDispatch.dispatch(G.ComponentActions.REMEASURE_TARGET)
    }, []);
    n.useEffect(() => {
      i()
    }, [i, t, a, s, null == l ? void 0 : l.roles, r.id, r.permissionOverwrites])
  },
  ei = () => {
    let [e, t] = n.useState(!0), a = (0, h.useStateFromStores)([C.default], () => C.default.useReducedMotion), s = (0, u.useTransition)(e, {
      keys: e => e ? "shown" : "hidden",
      config: ed,
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
  eo = e => {
    let t = (0, h.useStateFromStores)([C.default], () => C.default.useReducedMotion);
    return (0, u.useTransition)(e, {
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
      className: z.rolesList,
      "aria-label": V.default.Messages.ROLES_LIST.format({
        numRoles: a.length
      }),
      children: a.map(e => (0, s.jsx)(x.MemberRole, {
        role: e,
        canRemove: !1,
        onRemove: G.NOOP_NULL,
        guildId: t.id,
        className: z.rolePill
      }, e.id))
    })
  },
  ed = {
    mass: 1,
    tension: 250,
    friction: 18,
    clamp: !0
  },
  ec = e => {
    let {
      guild: t,
      channel: a,
      hasAnyThread: s,
      handleHide: l
    } = e, [r, i] = n.useState(!1), o = (0, U.isOnboardingDismissed)(a.id), u = (0, h.useStateFromStores)([b.default], () => b.default.hasHidden(a.id)), d = ee(t, a, s, i), c = d.isAllDone(), m = o || u || !ea(a.id);
    return en(c, m, r, l), {
      onboardingSteps: d,
      isHidden: u,
      isDismissed: o,
      isAllDone: c
    }
  },
  em = () => n.useCallback(e => {
    var t;
    null === (t = e.clickHandler) || void 0 === t || t.call(e)
  }, []),
  eh = e => {
    let {
      handleHide: t
    } = e;
    return (0, s.jsx)(f.Clickable, {
      onClick: t,
      className: z.closeButton,
      "aria-label": V.default.Messages.DISMISS,
      children: (0, s.jsx)(N.default, {
        className: z.closeIcon
      })
    })
  },
  ef = e => {
    let {
      expanded: t,
      onClick: a
    } = e;
    return (0, s.jsx)(f.Clickable, {
      onClick: a,
      className: z.closeButton,
      "aria-label": t ? V.default.Messages.COLLAPSE : V.default.Messages.EXPAND,
      children: t ? (0, s.jsx)(M.default, {
        className: z.closeIcon
      }) : (0, s.jsx)(A.default, {
        className: z.closeIcon
      })
    })
  };
var eg = e => {
  let {
    hasAnyThread: t,
    channel: a
  } = e, {
    onboardingExpanded: l
  } = (0, H.useForumPostComposerStore)(e => {
    let {
      onboardingExpanded: t
    } = e;
    return {
      onboardingExpanded: t
    }
  }), {
    tagFilter: i
  } = (0, y.useForumChannelStore)(a.id), o = (0, h.useStateFromStores)([p.default], () => p.default.getGuild(a.getGuildId())), c = (0, D.useCanManageChannel)(a), {
    transitions: m,
    setVisible: g
  } = ei(), x = eo(l), C = em(), T = et(a.id, g), {
    onboardingSteps: _,
    isDismissed: N,
    isHidden: M,
    isAllDone: A
  } = ec({
    guild: o,
    channel: a,
    hasAnyThread: t,
    handleHide: T
  }), F = !M && !N, b = (0, H.useForumPostComposerStoreApi)(), L = a.isMediaChannel(), P = e => b.getState().setOnboardingExpanded(e);
  return (el(A, F, T), er({
    isAllDone: A,
    isVisible: F,
    canManageChannel: c,
    guild: o,
    channel: a
  }), es(N, M, g), n.useEffect(() => {
    (!t || !F) && P(!0)
  }, []), null == o) ? null : F && c ? L ? t ? null : (0, s.jsx)(S.default, {
    channel: a
  }) : (0, s.jsx)(s.Fragment, {
    children: m((e, t) => t ? (0, s.jsx)(u.animated.div, {
      style: e,
      className: z.container,
      children: (0, s.jsxs)("div", {
        className: z.wrapper,
        children: [(0, s.jsx)("div", {
          className: z.headerRow,
          children: (0, s.jsxs)(f.HeadingLevel, {
            component: (0, s.jsx)(f.Heading, {
              variant: "heading-md/semibold",
              children: V.default.Messages.GET_STARTED
            }),
            children: [(0, s.jsx)(f.Heading, {
              variant: "heading-md/medium",
              className: z.header,
              children: V.default.Messages.FORUM_CHANNEL_ONBOARDING_COMPLETED_COUNT.format({
                numCompleted: _.completedSteps.toString(),
                numSteps: _.steps.length.toString()
              })
            }), (0, s.jsxs)(f.Text, {
              variant: "text-xs/normal",
              className: z.visibilityInfo,
              children: [(0, s.jsx)(v.default, {
                width: 12,
                height: 12,
                className: z.icon
              }), V.default.Messages.FORUM_CHANNEL_ONBOARDING_VISIBILITY]
            }), (0, s.jsx)(ef, {
              expanded: l,
              onClick: () => P(!l)
            }), (0, s.jsx)(eh, {
              handleHide: T
            })]
          })
        }), x((e, t) => t ? (0, s.jsx)(u.animated.div, {
          style: e,
          className: z.listContainer,
          children: (0, s.jsx)("ol", {
            className: z.checklist,
            children: _.getSteps().map(e => (0, s.jsxs)(f.Clickable, {
              tag: "li",
              "aria-label": e.name,
              onClick: () => C(e),
              className: r(z.stepContainer, {
                [z.completed]: e.isDone
              }),
              children: [e.shouldWarn ? (0, s.jsx)(R.default, {
                color: d.default.STATUS_DANGER,
                className: z.stepStatus
              }) : e.isDone ? (0, s.jsx)(O.IconBadge, {
                color: d.default.STATUS_POSITIVE_BACKGROUND,
                icon: E.default,
                style: K,
                className: z.stepStatus
              }) : (0, s.jsx)(O.IconBadge, {
                disableColor: !0,
                icon: I.default,
                style: W,
                className: r(z.stepStatus, z.completed)
              }), (0, s.jsxs)("div", {
                className: z.step,
                children: [(0, s.jsx)(f.Text, {
                  variant: "text-md/medium",
                  color: e.isDone ? "header-secondary" : "header-primary",
                  className: z.stepName,
                  children: e.name
                }), (0, s.jsx)(f.Text, {
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  className: z.stepDescription,
                  children: e.description
                }), e.children]
              }), (0, s.jsx)(j.default, {
                width: 12,
                className: z.stepStatus
              })]
            }, "onboard-step-".concat(e.index)))
          })
        }) : null)]
      })
    }) : null)
  }) : t ? null : (0, s.jsx)(k.default, {
    channelName: a.name,
    guildId: a.guild_id,
    tagFilter: i,
    channel: a
  })
}