"use strict";
n.r(t), n.d(t, {
  Steps: function() {
    return l
  },
  default: function() {
    return N
  }
}), n("222007");
var l, i, r = n("37983"),
  s = n("884691"),
  a = n("627445"),
  o = n.n(a),
  u = n("446674"),
  c = n("77078"),
  d = n("583367"),
  f = n("735201"),
  p = n("305961"),
  h = n("625634"),
  E = n("751433"),
  m = n("599110"),
  _ = n("427459"),
  g = n("903016"),
  I = n("936992"),
  S = n("658206"),
  C = n("49111"),
  L = n("782340"),
  R = n("822841");
(i = l || (l = {})).UNUSED_QUANTITY_SELECT = "UNUSED_QUANTITY_SELECT", i.GUILD_SELECT = "GUILD_SELECT", i.CONFIRM = "CONFIRM", i.SUCCESS = "SUCCESS";
var N = e => {
  var t, n;
  let {
    guildBoostSlots: l,
    selectedGuild: i,
    locationSection: a,
    transitionState: N,
    onClose: T
  } = e, v = (0, _.getAvailableGuildBoostSlots)(h.default.boostSlots);
  o(null != l || null != i, "Must either provide slots or an initial selected guild"), o(!(null == l ? void 0 : l.some(e => e.isOnCooldown())), "If slots are provided, they must not be on cooldown");
  let A = [null == l ? "UNUSED_QUANTITY_SELECT" : null, null == i ? "GUILD_SELECT" : null, "CONFIRM", "SUCCESS"].filter(e => null != e),
    [x, M] = (0, u.useStateFromStoresArray)([f.default], () => [f.default.isModifyingAppliedBoost, f.default.applyBoostError]),
    [U, D] = s.useState(""),
    [O, w] = s.useState(A[0]),
    [P, y] = s.useState(!1),
    [b, B] = s.useState(i),
    [G, j] = s.useState(null != l ? l : v.slice(0, 1)),
    F = s.useMemo(() => null == G ? [] : G.map(e => {
      let {
        premiumGuildSubscription: t
      } = e;
      return p.default.getGuild(null == t ? void 0 : t.guildId)
    }).filter(e => null != e), [G]),
    k = s.useMemo(() => {
      var e;
      return (null == G ? void 0 : null === (e = G[0]) || void 0 === e ? void 0 : e.premiumGuildSubscription) != null
    }, [G]),
    V = () => {
      T("SUCCESS" === O), m.default.track(C.AnalyticEvents.MODAL_DISMISSED, {
        type: C.AnalyticsSections.PREMIUM_GUILD_SUBSCRIBE_MODAL,
        location_section: a
      })
    },
    H = {
      UNUSED_QUANTITY_SELECT: {
        body: () => (o(!(null == l && 0 === v.length), "Cannot provide no slots if there are no other available slots"), (0, r.jsxs)("div", {
          className: R.quantitySelectorBody,
          children: [(0, r.jsx)(c.Heading, {
            variant: "heading-md/semibold",
            className: R.quantitySelectorHeader,
            children: L.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_HEADER
          }), (0, r.jsx)(c.Text, {
            variant: "text-md/normal",
            className: R.quantitySelectorDescription,
            children: L.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_DESCRIPTION
          }), (0, r.jsxs)("div", {
            className: R.quantitySelectorWrapper,
            children: [(0, r.jsx)(E.default, {
              value: G.length,
              onChange: e => j(v.slice(0, e)),
              minValue: 1,
              maxValue: v.length
            }), (0, r.jsx)(c.Text, {
              className: R.quantitySelectorLabel,
              variant: "text-md/normal",
              children: L.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_COUNTER
            })]
          })]
        })),
        footer: () => (0, r.jsxs)(c.ModalFooter, {
          children: [(0, r.jsx)(c.Button, {
            onClick: () => w("CONFIRM"),
            children: L.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_NEXT
          }), (0, r.jsx)(c.Button, {
            look: c.Button.Looks.LINK,
            color: c.Button.Colors.PRIMARY,
            onClick: V,
            children: L.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_CANCEL
          })]
        })
      },
      GUILD_SELECT: {
        header: () => (0, r.jsx)(I.GuildSelectModalHeader, {
          isTransfer: k,
          query: U,
          setQuery: D
        }),
        bodyClass: R.selectContent,
        body: () => (0, r.jsx)(I.GuildSelectModalBody, {
          onClose: V,
          onSelectGuild: e => {
            B(e), w("CONFIRM")
          },
          isTransfer: k,
          selectedSlotGuilds: F,
          query: U
        })
      },
      CONFIRM: {
        body() {
          if (null == b) return null;
          let e = G.filter(e => (0, _.isGuildBoostSlotCanceled)(e)).length,
            t = G.length,
            n = F.length;
          return k ? (0, r.jsx)(g.default.TransferBody, {
            fromGuilds: F,
            toGuild: b,
            blurb: L.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_BLURB.format({
              slotCount: t,
              guildCount: n
            }),
            imageClass: R.transferConfirmImage,
            error: P ? M : null,
            onDismissError: () => y(!1),
            slotCount: t,
            canceledCount: e
          }) : (0, r.jsx)(g.default.ApplyBody, {
            guild: b,
            blurb: L.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_BLURB,
            warning: L.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_COOLDOWN_WARNING.format({
              days: C.GUILD_BOOST_APPLY_COOLDOWN_DAYS,
              slotCount: t
            }),
            imageClass: R.confirmImage,
            error: P ? M : null,
            onDismissError: () => y(!1),
            slotCount: t,
            canceledCount: e
          })
        },
        footer() {
          let e = G.length,
            t = "CONFIRM" === A[0] ? V : () => w(A[A.indexOf(O) - 1]),
            n = async () => {
              if (null != b && (null == G ? void 0 : G.length) !== 0) {
                o(!G.some(e => e.isOnCooldown()), "Cannot use a premium guild subscription slot while on cooldown");
                try {
                  await Promise.all(G.map(e => {
                    let {
                      premiumGuildSubscription: t
                    } = e;
                    return null != t ? (0, d.unapplyFromGuild)(t.guildId, t.id) : Promise.resolve()
                  })), await (0, d.applyToGuild)(b.id, G.map(e => {
                    let {
                      id: t
                    } = e;
                    return t
                  })), w("SUCCESS")
                } catch (e) {
                  y(!0)
                }
              }
            };
          return (0, r.jsx)(g.default.Footer, {
            confirmation: k ? L.default.Messages.PREMIUM_GUILD_SUBSCRIBE_TRANSFER_CONFIRM_CONFIRMATION.format({
              slotCount: e
            }) : L.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CONFIRMATION.format({
              slotCount: e
            }),
            confirmationLabel: k ? L.default.Messages.PREMIUM_GUILD_SUBSCRIBE_TRANSFER_CONFIRM_CONFIRMATION_LABEL.format({
              slotCount: e
            }) : L.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CONFIRMATION_LABEL.format({
              slotCount: e
            }),
            onConfirm: n,
            onCancel: t,
            isModifyingSubscription: x
          })
        }
      },
      SUCCESS: {
        body: () => (0, r.jsx)(S.GuildBoostingConfirmation, {
          guild: b,
          isTransfer: k,
          guildBoostQuantity: G.length,
          onClose: V
        })
      }
    };
  s.useEffect(() => {
    m.default.track(C.AnalyticEvents.OPEN_MODAL, {
      type: C.AnalyticsSections.PREMIUM_GUILD_SUBSCRIBE_MODAL,
      location_section: a
    })
  }, [a]);
  let W = H[O];
  return (0, r.jsxs)(c.ModalRoot, {
    transitionState: N,
    className: R.modal,
    size: c.ModalSize.SMALL,
    children: [null === (t = W.header) || void 0 === t ? void 0 : t.call(W), (0, r.jsx)(c.ModalContent, {
      className: W.bodyClass,
      children: (0, r.jsx)(c.Sequencer, {
        step: O,
        steps: A,
        children: W.body()
      })
    }), null === (n = W.footer) || void 0 === n ? void 0 : n.call(W), (0, r.jsx)(c.ModalCloseButton, {
      className: R.modalCloseButton,
      onClick: V
    })]
  })
}