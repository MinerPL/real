"use strict";
s.r(a), s.d(a, {
  default: function() {
    return R
  }
}), s("424973"), s("222007"), s("506083");
var l = s("37983"),
  t = s("884691"),
  n = s("759843"),
  i = s("446674"),
  d = s("627929"),
  o = s("77078"),
  u = s("581354"),
  r = s("798609"),
  E = s("680986"),
  c = s("81732"),
  C = s("690563"),
  N = s("178225"),
  p = s("233069"),
  _ = s("245997"),
  h = s("305961"),
  f = s("145131"),
  T = s("476765"),
  A = s("461380"),
  m = s("593195"),
  I = s("991497"),
  L = s("990745"),
  M = s("368121"),
  x = s("228427"),
  v = s("404008"),
  g = s("991170"),
  b = s("840707"),
  y = s("49111"),
  j = s("843455"),
  D = s("782340"),
  O = s("610200");

function R(e) {
  var a, s;
  let {
    guildId: R,
    transitionState: H,
    onSubmit: S,
    onClose: G
  } = e, P = (0, T.useUID)(), F = (0, T.useUID)(), U = (0, T.useUID)(), B = (0, T.useUID)(), [k, Y] = t.useState("null"), [V, w] = t.useState(y.ChannelTypes.GUILD_TEXT), [X, W] = t.useState(""), [K, z] = t.useState(!1), J = (0, i.useStateFromStores)([h.default], () => h.default.getGuild(R), [R]), q = (0, N.useGuildEligibleForStageChannels)(R), Q = (0, E.useCanCreateForumChannel)(R), Z = (0, C.useGuildEligibleForMediaChannels)(J), $ = t.useMemo(() => (function(e) {
    let {
      canCreateStageChannel: a,
      canCreateForumChannel: s,
      canCreateMediaChannel: t
    } = e, n = [{
      icon: m.default,
      label: D.default.Messages.TEXT_CHANNEL_TYPE,
      value: y.ChannelTypes.GUILD_TEXT,
      description: D.default.Messages.CREATE_TEXT_CHANNEL_DESCRIPTION
    }, {
      icon: M.default,
      label: D.default.Messages.VOICE_CHANNEL_TYPE,
      value: y.ChannelTypes.GUILD_VOICE,
      description: D.default.Messages.CREATE_VOICE_CHANNEL_DESCRIPTION
    }];
    return a && n.push({
      icon: x.default,
      label: D.default.Messages.STAGE_VOICE_CHANNEL_TYPE,
      value: y.ChannelTypes.GUILD_STAGE_VOICE,
      description: D.default.Messages.CREATE_STAGE_CHANNEL_DESCRIPTION
    }), s && (n.push({
      icon: I.default,
      label: D.default.Messages.FORUM_CHANNEL_TYPE,
      value: y.ChannelTypes.GUILD_FORUM,
      description: D.default.Messages.FORUM_CHANNEL_DESCRIPTION
    }), t && n.push({
      icon: L.default,
      label: D.default.Messages.MEDIA_CHANNEL_TYPE,
      value: y.ChannelTypes.GUILD_MEDIA,
      description: D.default.Messages.CREATE_MEDIA_CHANNEL_DESCRIPTION,
      isBeta: !0
    })), n.map(e => {
      let {
        icon: a,
        label: s,
        value: t,
        description: n,
        isBeta: i
      } = e;
      return {
        name: (0, l.jsxs)("div", {
          className: O.channelOptionWrapper,
          children: [(0, l.jsx)(a, {
            className: O.icon
          }), (0, l.jsxs)("div", {
            children: [(0, l.jsxs)(o.Text, {
              variant: "text-md/normal",
              color: "header-primary",
              children: [s, (0, l.jsx)(u.ChannelTypeBadge, {
                isBeta: i
              })]
            }), (0, l.jsx)(o.Text, {
              variant: "text-xs/normal",
              color: "header-secondary",
              children: n
            })]
          })]
        }),
        value: t,
        channelIcon: a
      }
    })
  })({
    canCreateStageChannel: q,
    canCreateForumChannel: Q,
    canCreateMediaChannel: Z
  }), [q, Q, Z]), ee = (0, i.useStateFromStores)([_.default], () => _.default.getCategories(R)._categories, [R]), ea = t.useMemo(() => ee.map(e => {
    let {
      channel: a
    } = e;
    return {
      value: a.id,
      label: a.name
    }
  }), [ee]), es = null !== (s = null === (a = $.find(e => e.value === V)) || void 0 === a ? void 0 : a.channelIcon) && void 0 !== s ? s : j.NOOP_NULL, el = "" !== X;
  return (0, l.jsx)("form", {
    onSubmit: function(e) {
      if (e.preventDefault(), !el) return;
      z(!0);
      let a = {
        type: V,
        name: X,
        parent_id: "null" !== k ? k : void 0,
        permission_overwrites: [{
          id: R,
          type: r.PermissionOverwriteType.ROLE,
          allow: g.default.NONE,
          deny: y.Permissions.VIEW_CHANNEL
        }]
      };
      b.default.post({
        url: y.Endpoints.GUILD_CHANNELS(R),
        body: a,
        oldFormErrors: !0,
        trackedActionData: {
          event: n.NetworkActionNames.CHANNEL_CREATE,
          properties: e => {
            var a, s;
            return (0, d.exact)({
              is_private: !0,
              channel_id: null == e ? void 0 : null === (a = e.body) || void 0 === a ? void 0 : a.id,
              channel_type: null == e ? void 0 : null === (s = e.body) || void 0 === s ? void 0 : s.type
            })
          }
        }
      }).then(e => {
        c.default.checkGuildTemplateDirty(R), S(e.body.id), G()
      }, e => {}).finally(() => {
        z(!1)
      })
    },
    children: (0, l.jsxs)(o.ModalRoot, {
      transitionState: H,
      "aria-labelledby": P,
      children: [(0, l.jsxs)(o.ModalHeader, {
        children: [(0, l.jsx)(o.Heading, {
          id: P,
          variant: "heading-md/semibold",
          children: D.default.Messages.CREATE_CHANNEL
        }), (0, l.jsx)(o.ModalCloseButton, {
          className: O.closeButton,
          onClick: G
        })]
      }), (0, l.jsxs)(o.ModalContent, {
        className: O.modalContent,
        children: [(0, l.jsx)(o.FormItem, {
          title: D.default.Messages.CATEGORY,
          titleId: F,
          children: (0, l.jsx)(o.SingleSelect, {
            placeholder: D.default.Messages.CREATE_CHANNEL_MODAL_CATEGORY_PLACEHOLDER,
            value: k,
            options: ea,
            onChange: e => Y(e),
            "aria-labelledby": F
          })
        }), (0, l.jsx)("div", {
          className: O.spacer
        }), (0, l.jsx)(o.FormItem, {
          title: D.default.Messages.CHANNEL_TYPE,
          titleId: U,
          children: (0, l.jsx)(o.RadioGroup, {
            options: $,
            value: V,
            onChange: e => {
              let {
                value: a
              } = e;
              return w(a)
            },
            "aria-labelledby": U
          })
        }), (0, l.jsx)("div", {
          className: O.spacer
        }), (0, l.jsx)(o.FormItem, {
          title: D.default.Messages.FORM_LABEL_CHANNEL_NAME,
          titleId: B,
          children: (0, l.jsx)(o.TextInput, {
            value: X,
            onChange: function(e) {
              (0, p.isGuildTextChannelType)(V) && (e = (0, v.sanitizeGuildTextChannelName)(e)), W(e)
            },
            maxLength: y.MAX_CHANNEL_NAME_LENGTH,
            placeholder: D.default.Messages.CHANNEL_NAME_PLACEHOLDER,
            className: O.inputWrapper,
            inputClassName: O.inputInner,
            prefixElement: (0, l.jsx)(es, {
              className: O.inputPrefix,
              "aria-hidden": !0
            }),
            "aria-labelledby": B,
            autoFocus: !0
          })
        })]
      }), (0, l.jsxs)(o.ModalFooter, {
        justify: f.default.Justify.BETWEEN,
        children: [(0, l.jsx)(o.Button, {
          type: "submit",
          submitting: K,
          disabled: !el,
          children: D.default.Messages.SAVE
        }), (0, l.jsxs)(o.Button, {
          look: o.Button.Looks.LINK,
          color: o.Button.Colors.PRIMARY,
          className: O.backButton,
          innerClassName: O.backButtonInner,
          onClick: G,
          children: [(0, l.jsx)(A.default, {
            direction: A.default.Directions.LEFT
          }), D.default.Messages.BACK]
        })]
      })]
    })
  })
}