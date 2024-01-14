"use strict";
s.r(t), s.d(t, {
  default: function() {
    return B
  }
}), s("222007"), s("808653");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("597755"),
  o = s.n(r),
  d = s("446674"),
  u = s("862337"),
  c = s("77078"),
  E = s("327037"),
  _ = s("430568"),
  T = s("841098"),
  I = s("95039"),
  S = s("817963"),
  N = s("305122"),
  g = s("235004"),
  f = s("520497"),
  A = s("812809"),
  L = s("697218"),
  m = s("941886"),
  C = s("245307"),
  O = s("945330"),
  h = s("95689"),
  R = s("987772"),
  D = s("368121"),
  M = s("315102"),
  G = s("427459"),
  x = s("773336"),
  p = s("900938"),
  U = s("826485"),
  v = s("49111"),
  j = s("846325"),
  P = s("782340"),
  y = s("28058");
let b = x.isPlatformEmbedded || "Safari" !== o.name && "Firefox" !== o.name;

function B() {
  let e = (0, d.useStateFromStores)([p.default], () => p.default.getProps().guild);
  return null == e ? null : (0, a.jsx)(c.FormSection, {
    tag: c.FormTitleTags.H1,
    title: P.default.Messages.GUILD_SETTINGS_SOUNDBOARD,
    children: (0, a.jsx)(w, {
      guild: e
    })
  })
}

function F(e) {
  let {
    children: t
  } = e;
  return (0, a.jsx)(c.Heading, {
    className: y.tableHeader,
    variant: "heading-sm/semibold",
    color: "header-secondary",
    children: t
  })
}

function H(e) {
  let {
    currentTier: t,
    availableSounds: s,
    guildId: n
  } = e, l = (0, G.getTotalSoundboardSoundCountForTier)(t);
  return 0 === t ? (0, a.jsx)(a.Fragment, {
    children: P.default.Messages.GUILD_SETTINGS_SOUND_LIST_SOUNDS_AVAILABLE.format({
      slots: s,
      totalSlots: l
    })
  }) : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(c.Tooltip, {
      text: P.default.Messages.GUILD_SETTINGS_SOUNDBOARD_BOOST_LEVEL.format({
        currentBoostLevel: t
      }),
      children: e => (0, a.jsx)(c.Clickable, {
        className: y.boostingIconWrapper,
        onClick: () => {
          var e;
          return e = n, void(0, I.openGuildBoostingMarketingModal)({
            guildId: e,
            location: {
              section: v.AnalyticsSections.GUILD_SETTINGS_SOUNDBOARD,
              object: v.AnalyticsObjects.BOOST_GEM_ICON
            }
          })
        },
        tabIndex: -1,
        children: (0, a.jsx)(C.default, {
          ...e
        })
      })
    }), P.default.Messages.GUILD_SETTINGS_SOUND_LIST_SOUNDS_AVAILABLE_BOOST_LEVEL.format({
      slots: s,
      totalSlots: l,
      boostLevel: t
    })]
  })
}
let V = e => {
    let {
      renderPopoutBody: t,
      renderPopoutChildren: s,
      ...l
    } = e, [i, r] = n.useState(!1), o = n.useMemo(() => new u.Timeout, []), d = n.useCallback(() => {
      o.stop(), r(!0)
    }, [o]), E = n.useCallback(() => {
      o.start(200, () => r(!1))
    }, [o]);
    return (0, a.jsx)(c.Popout, {
      shouldShow: i,
      renderPopout: e => (0, a.jsx)(c.Dialog, {
        className: y.browserUnsupportedDialog,
        onMouseEnter: d,
        onMouseLeave: E,
        children: t(e)
      }),
      ...l,
      children: e => s(e)
    })
  },
  k = () => (0, a.jsx)(V, {
    renderPopoutBody: () => (0, a.jsx)(c.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      children: P.default.Messages.GUILD_SETTINGS_SOUNDBOARD_UPLOAD_SOUND_NOT_SUPPORTED.format()
    }),
    renderPopoutChildren: e => (0, a.jsx)(c.Button, {
      ...e,
      disabled: !0,
      children: P.default.Messages.GUILD_SETTINGS_SOUNDBOARD_UPLOAD_SOUND
    })
  });

function w(e) {
  let {
    guild: t
  } = e, [l, i] = (0, d.useStateFromStoresArray)([g.default], () => {
    var e;
    return [null !== (e = g.default.getSoundsForGuild(t.id)) && void 0 !== e ? e : j.EMPTY_SOUND_LIST, g.default.isFetchingSounds() || g.default.isFetchingDefaultSounds()]
  }), {
    canCreateExpressions: r
  } = (0, S.useManageResourcePermissions)(t), o = n.useRef(null), u = (0, T.default)(), E = t.premiumTier, _ = (0, G.getAvailableSoundboardSoundCount)(l, E);
  n.useEffect(() => {
    (0, N.maybeFetchSoundboardSounds)()
  }, []);
  let I = n.useMemo(() => l.reduce((e, t) => (e[t.soundId] = new Audio((0, f.default)(t.soundId)), e), {}), [l]),
    L = 0 === l.length && !i;

  function C(e) {
    var t;
    null === (t = o.current) || void 0 === t || t.pause();
    let s = I[e.soundId];
    null != s && (o.current = s, s.currentTime = 0, s.volume = (0, A.default)(e.volume), s.play())
  }
  n.useEffect(() => () => {
    var e;
    null === (e = o.current) || void 0 === e || e.pause()
  }, []);
  if (i) return (0, a.jsx)(c.Spinner, {});
  let O = b ? (0, a.jsx)(c.Button, {
    onClick: function() {
      (0, c.openModalLazy)(async () => {
        let {
          default: e
        } = await s.el("823749").then(s.bind(s, "823749"));
        return s => (0, a.jsx)(e, {
          ...s,
          guildId: t.id
        })
      })
    },
    disabled: _ <= 0 || !r,
    children: P.default.Messages.GUILD_SETTINGS_SOUNDBOARD_UPLOAD_SOUND
  }) : (0, a.jsx)(k, {});
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      children: [(0, a.jsx)(c.Text, {
        className: y.helpText,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: P.default.Messages.GUILD_SETTINGS_SOUNDBOARD_DESCRIPTION
      }), (0, a.jsx)("div", {
        className: y.buttons,
        children: !L && O
      })]
    }), L ? (0, a.jsxs)(m.default, {
      theme: u,
      className: y.empty,
      children: [(0, a.jsx)(m.EmptyStateImage, {
        darkSrc: s("404807"),
        lightSrc: s("124495"),
        width: 272,
        height: 212
      }), (0, a.jsx)(m.EmptyStateText, {
        note: P.default.Messages.NO_SOUNDS,
        noteClassName: y.emptyText,
        children: P.default.Messages.NO_SOUNDS_TITLE
      }), O]
    }) : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(c.FormDivider, {
        className: y.divider
      }), (0, a.jsx)(c.Heading, {
        className: y.tableTitle,
        variant: "heading-md/bold",
        color: "header-primary",
        children: (0, a.jsx)(H, {
          guildId: t.id,
          currentTier: E,
          availableSounds: _
        })
      }), (0, a.jsx)(U.default, {
        guild: t,
        numSounds: l.length,
        isOutOfSlots: 0 === _
      }), (0, a.jsxs)("div", {
        className: y.soundTable,
        children: [(0, a.jsxs)("div", {
          className: y.tableHeaders,
          children: [(0, a.jsx)(F, {
            children: P.default.Messages.EMOJI
          }), (0, a.jsx)(F, {
            children: P.default.Messages.GUILD_SETTINGS_SOUND_NAME_COLUMN
          }), (0, a.jsx)(F, {
            children: P.default.Messages.GUILD_SETTINGS_SOUND_UPLOADER_COLUMN
          })]
        }), l.map(e => (0, a.jsx)(Y, {
          sound: e,
          isPlaying: !1,
          guild: t,
          onPlaySound: C
        }, e.soundId))]
      })]
    })]
  })
}

function Y(e) {
  let {
    sound: t,
    isPlaying: l,
    onPlaySound: r,
    guild: o
  } = e, {
    soundId: u,
    name: T,
    user: I,
    userId: g,
    emojiId: f,
    emojiName: A
  } = t, m = (0, d.useStateFromStores)([L.default], () => null != I ? I : L.default.getUser(g), [g, I]), {
    canManageGuildExpression: C
  } = (0, S.useManageResourcePermissions)(o), G = n.useMemo(() => C(t), [t, C]), x = null != f || null != A, [p, U] = n.useState(!1);
  async function v() {
    if (!p) {
      U(!0);
      try {
        await (0, N.deleteSound)(o.id, u)
      } catch {
        U(!1)
      }
    }
  }
  return n.useEffect(() => {
    null == m && e();
    async function e() {
      await (0, E.getUser)(g)
    }
  }, [m, g]), (0, a.jsxs)("div", {
    className: i(y.row, {
      [y.active]: l
    }),
    children: [x ? (0, a.jsx)(_.default, {
      emojiId: f,
      emojiName: A,
      className: y.emoji
    }) : (0, a.jsx)(h.default, {
      className: y.emoji
    }), (0, a.jsx)(c.Clickable, {
      onClick: () => {
        !p && r(t)
      },
      className: y.soundName,
      children: (0, a.jsxs)(c.Text, {
        variant: "text-sm/normal",
        className: y.soundName,
        children: [T, " ", (0, a.jsx)(D.default, {
          className: y.soundPreviewIcon
        })]
      })
    }), null != m && (0, a.jsxs)(c.Text, {
      className: y.uploaderName,
      variant: "text-sm/normal",
      children: [(0, a.jsx)(c.Avatar, {
        "aria-label": null == m ? void 0 : m.username,
        size: c.AvatarSizes.SIZE_24,
        className: y.uploaderAvatar,
        src: (0, M.getUserAvatarURL)(m, !1, 24)
      }), null == m ? void 0 : m.username]
    }), G ? (0, a.jsxs)("div", {
      className: y.soundEditContainer,
      children: [(0, a.jsx)(c.Clickable, {
        className: y.soundUpdate,
        onClick: function(e) {
          e.stopPropagation(), (0, c.openModalLazy)(async () => {
            let {
              default: e
            } = await s.el("823749").then(s.bind(s, "823749"));
            return s => (0, a.jsx)(e, {
              ...s,
              guildId: o.id,
              existingSound: t
            })
          })
        },
        "aria-label": P.default.Messages.EDIT,
        children: (0, a.jsx)(R.default, {
          className: y.soundEditIcon
        })
      }), (0, a.jsx)(c.Clickable, {
        className: y.soundRemove,
        onClick: function(e) {
          e.stopPropagation(), (0, c.openModal)(e => (0, a.jsx)(c.ConfirmModal, {
            header: P.default.Messages.GUILD_SETTINGS_SOUNDBOARD_DELETE_SOUND_TITLE.format({
              soundName: T
            }),
            confirmText: P.default.Messages.DELETE,
            cancelText: P.default.Messages.CANCEL,
            onConfirm: v,
            ...e,
            children: (0, a.jsx)(c.Text, {
              variant: "text-md/normal",
              children: P.default.Messages.GUILD_SETTINGS_SOUNDBOARD_DELETE_SOUND_BODY.format({
                soundName: T
              })
            })
          }))
        },
        "aria-label": P.default.Messages.REMOVE,
        children: (0, a.jsx)(O.default, {
          className: y.soundEditIcon
        })
      })]
    }) : null]
  })
}