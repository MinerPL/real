"use strict";
l.r(t), l.d(t, {
  default: function() {
    return H
  }
}), l("222007");
var n = l("37983"),
  a = l("884691"),
  s = l("414456"),
  i = l.n(s),
  r = l("627445"),
  o = l.n(r),
  d = l("917351"),
  u = l.n(d),
  c = l("65597"),
  f = l("669491"),
  m = l("77078"),
  I = l("970728"),
  T = l("133403"),
  N = l("145079"),
  E = l("534291"),
  h = l("87657"),
  g = l("841098"),
  p = l("679653"),
  S = l("610174"),
  O = l("712125"),
  _ = l("54346"),
  A = l("27618"),
  C = l("697218"),
  x = l("91551"),
  R = l("941886"),
  M = l("145131"),
  v = l("423487"),
  L = l("100835"),
  j = l("49111"),
  b = l("782340"),
  P = l("322677"),
  D = l("405879"),
  y = l("926622");
let G = {
  INVITER: 3,
  INVITE_CODE: 3,
  USES: 1,
  EXPIRES: 2
};

function B(e) {
  var t, l;
  let {
    invite: a,
    showChannel: s = !1,
    inviteDisabled: r = !1,
    hide: o = !1
  } = e, d = a.uses;
  return a.maxUses > 0 && (d = "".concat(a.uses, "/").concat(a.maxUses)), (0, n.jsxs)(M.default, {
    className: i(P.inviteSettingsInviteRow, D.card, {
      [P.inviteDisabledRow]: r
    }),
    children: [(0, n.jsx)(M.default, {
      grow: G.INVITER,
      basis: 0,
      align: M.default.Align.CENTER,
      className: i(P.text),
      children: (0, n.jsxs)(M.default.Child, {
        children: [null == (t = a.inviter) ? null : (0, n.jsxs)("div", {
          className: P.user,
          children: [(0, n.jsx)(h.default, {
            user: t,
            size: m.AvatarSizes.SIZE_20,
            className: P.avatar
          }), (0, n.jsx)(N.default, {
            className: P.username,
            discriminatorClass: P.discriminator,
            user: t
          })]
        }), (l = a.channel, s ? (0, n.jsx)(m.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          children: (0, p.computeChannelName)(l, C.default, A.default, !0)
        }) : null)]
      })
    }), (0, n.jsx)(M.default, {
      grow: G.INVITE_CODE,
      shrink: 1,
      basis: 0,
      align: M.default.Align.CENTER,
      className: P.text,
      children: (0, n.jsx)(m.Text, {
        className: P.inviteCode,
        variant: "text-sm/normal",
        children: o ? "..." : a.code
      })
    }), (0, n.jsx)(M.default, {
      grow: G.USES,
      basis: 0,
      justify: M.default.Justify.END,
      align: M.default.Align.CENTER,
      className: i(P.text),
      children: (0, n.jsx)(m.Text, {
        className: P.uses,
        variant: "text-sm/normal",
        children: d
      })
    }), (0, n.jsx)(M.default, {
      grow: G.EXPIRES,
      basis: 0,
      align: M.default.Align.CENTER,
      justify: M.default.Justify.END,
      className: i(P.text, P.countdownColumn),
      children: (0, n.jsx)(m.Text, {
        className: P.countdown,
        variant: "text-sm/normal",
        children: (0, n.jsx)(x.default, {
          deadline: a.getExpiresAt()
        })
      })
    }), (0, n.jsx)(T.default, {
      className: P.revokeInvite,
      onClick: () => {
        I.default.revokeInvite(a)
      }
    })]
  })
}

function H(e) {
  let {
    invites: t,
    guild: s,
    hide: i,
    channel: r = null,
    showChannel: d = !1,
    loading: I = !1,
    canCreateInvites: T = !1
  } = e;
  o(null != s, "guild is required");
  let N = (0, L.useInvitesDisabledPermission)(s),
    {
      enableInvitesDisabled: h
    } = (0, L.useInvitesDisabledExperiment)(s),
    {
      showAlertMode: p
    } = (0, S.useGuildAlertModeEnabled)(s.id),
    A = (0, c.default)([_.default], () => _.default.getGuildIncident(s.id)),
    C = s.hasFeature(j.GuildFeatures.INVITES_DISABLED) || p && (null == A ? void 0 : A.invitesDisabledUntil) != null && new Date(A.invitesDisabledUntil) > new Date,
    [x, D] = a.useState(!1);
  a.useEffect(() => {
    N && L.InvitesDisabledExperiment.trackExposure({
      guildId: s.id,
      location: "5c23b0_1"
    })
  }, [N, h, s.id]);
  let H = (0, g.default)(),
    k = a.useMemo(() => null == t || I ? [] : u(t).sortBy(e => {
      var t, l;
      return (null !== (l = null === (t = e.inviter) || void 0 === t ? void 0 : t.username) && void 0 !== l ? l : "").toLowerCase()
    }).value(), [t, I]),
    U = () => {
      (0, m.openModalLazy)(async () => {
        let {
          default: e
        } = await l.el("310688").then(l.bind(l, "310688"));
        return t => (0, n.jsx)(e, {
          ...t,
          channel: r,
          guild: s,
          source: j.InstantInviteSources.SETTINGS_INVITE
        })
      })
    },
    F = async e => {
      if (!x) {
        D(!0);
        try {
          await (0, L.setInvitesDisabled)(s, e)
        } catch (e) {} finally {
          D(!1)
        }
      }
    }, w = () => {
      if (p) {
        let e = {
          source: O.GuildIncidentActionSources.GUILD_SETTINGS
        };
        (0, m.openModalLazy)(async () => {
          let {
            default: t
          } = await l.el("186638").then(l.bind(l, "186638"));
          return l => (0, n.jsx)(t, {
            ...l,
            guildId: s.id,
            analyticsData: e
          })
        })
      } else C ? F(!1) : (0, m.openModalLazy)(async () => {
        let {
          default: e
        } = await l.el("581517").then(l.bind(l, "581517"));
        return function(t) {
          return (0, n.jsx)(e, {
            ...t,
            onConfirm: () => F(!0)
          })
        }
      })
    };
  return (0, n.jsx)(E.ListContentScroller, {
    sections: [Math.max(1, k.length)],
    renderSection: () => {
      let e;
      return e = 0 !== k.length || I ? (0, n.jsxs)(M.default, {
        children: [(0, n.jsx)(M.default.Child, {
          grow: G.INVITER,
          basis: 0,
          className: y.marginReset,
          children: (0, n.jsx)(m.FormTitle, {
            children: b.default.Messages.INSTANT_INVITE_INVITER
          })
        }), (0, n.jsx)(M.default.Child, {
          basis: 0,
          grow: G.INVITE_CODE,
          className: y.marginReset,
          children: (0, n.jsx)(m.FormTitle, {
            children: b.default.Messages.INSTANT_INVITE_INVITE_CODE
          })
        }), (0, n.jsx)(M.default.Child, {
          grow: G.USES,
          basis: 0,
          className: P.textAlignRight,
          children: (0, n.jsx)(m.FormTitle, {
            children: b.default.Messages.INSTANT_INVITE_USES
          })
        }), (0, n.jsx)(M.default.Child, {
          grow: G.EXPIRES,
          basis: 0,
          className: P.textAlignRight,
          children: (0, n.jsx)(m.FormTitle, {
            children: b.default.Messages.INSTANT_INVITE_EXPIRES
          })
        })]
      }) : (0, n.jsxs)(R.default, {
        theme: H,
        children: [(0, n.jsx)(R.EmptyStateImage, {
          darkSrc: l("553021"),
          lightSrc: l("752499"),
          width: 256,
          height: 130
        }), (0, n.jsx)(R.EmptyStateText, {
          note: b.default.Messages.NO_INVITES_BODY,
          children: b.default.Messages.NO_INVITES_LABEL
        })]
      }), (0, n.jsx)(m.FormSection, {
        className: P.headerSection,
        children: (0, n.jsxs)(m.HeadingLevel, {
          component: (0, n.jsx)(m.FormTitle, {
            tag: m.FormTitleTags.H1,
            children: b.default.Messages.INVITES
          }),
          children: [(0, n.jsx)(m.FormText, {
            className: y.marginBottom20,
            type: m.FormTextTypes.DESCRIPTION,
            children: T ? b.default.Messages.SETTINGS_INVITE_TIP.format({
              onCreateInvite: U
            }) : b.default.Messages.SETTINGS_INVITE_TIP_WITHOUT_CREATE
          }), (h || p || C) && (0, n.jsxs)("div", {
            className: P.inviteDisabledContainer,
            children: [(0, n.jsx)(m.Button, {
              size: m.Button.Sizes.SMALL,
              color: C ? m.Button.Colors.BRAND : m.Button.Colors.RED,
              disabled: !N,
              submitting: x,
              onClick: w,
              children: C ? b.default.Messages.ENABLE_INVITES : b.default.Messages.DISABLE_INVITES
            }), C && (0, n.jsxs)("div", {
              className: P.inviteDisabledTip,
              children: [(0, n.jsx)(v.default, {
                color: f.default.unsafe_rawColors.YELLOW_300.css
              }), (0, n.jsx)(m.Text, {
                variant: "text-sm/normal",
                children: b.default.Messages.INVITES_DISABLED_TIP
              })]
            })]
          }), (0, n.jsx)(m.FormDivider, {
            className: P.headerDivider
          }), e]
        })
      }, "header")
    },
    renderRow: e => {
      let {
        section: t,
        row: l
      } = e;
      if (0 === k.length && 0 === l && I) return (0, n.jsx)(m.Spinner, {
        className: y.marginTop20,
        type: m.Spinner.Type.SPINNING_CIRCLE
      }, "spinner");
      if (t > 0) return null;
      let a = k[l];
      return null == a ? null : (0, n.jsx)(B, {
        hide: i,
        invite: a,
        showChannel: d,
        inviteDisabled: C
      }, a.code)
    },
    rowHeight: (e, t) => e > 0 ? 0 : 0 === k.length && 0 === t && I ? 62 : null != k[t] ? 62 : 0,
    sectionHeight: () => 0 !== k.length || I ? 120 : 344
  })
}