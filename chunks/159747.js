"use strict";
a.r(t), a.d(t, {
  default: function() {
    return U
  }
}), a("222007"), a("424973");
var n = a("37983"),
  i = a("884691"),
  s = a("759843"),
  l = a("446674"),
  r = a("77078"),
  u = a("450911"),
  o = a("685073"),
  d = a("819689"),
  c = a("812204"),
  f = a("685665"),
  p = a("428958"),
  m = a("843962"),
  h = a("679653"),
  I = a("305961"),
  E = a("705955"),
  A = a("27618"),
  C = a("697218"),
  v = a("646240"),
  g = a("578706"),
  T = a("83900"),
  x = a("599110"),
  N = a("315102"),
  R = a("306160"),
  y = a("354023"),
  _ = a("159885"),
  S = a("158998"),
  L = a("969380"),
  w = a("49111"),
  j = a("91366"),
  D = a("782340"),
  F = a("764786");

function U(e) {
  let {
    activityItem: t,
    analyticsLocations: a,
    ...m
  } = e, h = (0, l.useStateFromStores)([C.default], () => C.default.getCurrentUser()), {
    analyticsLocations: I
  } = (0, f.default)(a);
  (0, p.default)({
    type: s.ImpressionTypes.MODAL,
    name: s.ImpressionNames.ACTIVITY_BOOKMARK_SHARE_MODAL,
    properties: {
      application_id: t.application.id,
      location_stack: I
    }
  });
  let [A, g] = i.useState(""), [T, N] = i.useState([]), R = (0, L.default)({
    applicationId: t.application.id,
    size: 256
  }), _ = "".concat(window.location.origin).concat(w.Routes.ACTIVITY_DETAILS(t.application.id)), S = (0, l.useStateFromStoresArray)([E.default], () => E.default.getInviteSuggestionRows());
  i.useEffect(() => {
    (0, o.loadInviteSuggestions)({
      omitUserIds: new Set,
      applicationId: t.application.id,
      inviteTargetType: j.InviteTargetTypes.EMBEDDED_APPLICATION
    })
  }, [t.application.id]), i.useEffect(() => (0, o.searchInviteSuggestions)(A), [A]);
  let U = i.useCallback(async () => {
    let e = 0,
      a = 0,
      n = 0,
      i = E.default.getInviteSuggestionRows().filter(e => T.includes(e.item.id)).map(t => (function(t, i) {
        switch (t.type) {
          case y.RowTypes.DM:
          case y.RowTypes.FRIEND:
            e++;
            break;
          case y.RowTypes.GROUP_DM:
            a++;
            break;
          case y.RowTypes.CHANNEL:
            n++
        }
        return t.type === y.RowTypes.GROUP_DM || t.type === y.RowTypes.CHANNEL ? d.default.sendActivityBookmark(t.item.id, i, c.default.ACTIVITY_DETAIL_PAGE, null) : t.type === y.RowTypes.DM || t.type === y.RowTypes.FRIEND ? u.default.ensurePrivateChannel(t.item.id).then(e => d.default.sendActivityBookmark(e, _, c.default.ACTIVITY_DETAIL_PAGE, null)) : Promise.resolve()
      })(t, _));
    await i, x.default.track(w.AnalyticEvents.ACTIVITY_BOOKMARK_SHARED, {
      user_id: null == h ? void 0 : h.id,
      application_id: t.application.id,
      n_users: e,
      n_gdms: a,
      n_channels: n
    }), m.onClose()
  }, [t, T, m, _, h]);
  return (0, n.jsxs)(r.ModalRoot, {
    ...m,
    className: F.modalRoot,
    children: [(0, n.jsxs)(r.ModalHeader, {
      className: F.header,
      children: [(0, n.jsx)(r.Heading, {
        variant: "heading-md/semibold",
        children: D.default.Messages.EMBEDDED_ACTIVITIES_SHARE_ACTIVITY_WITH.format({
          activityName: t.application.name
        })
      }), (0, n.jsx)(r.ModalCloseButton, {
        onClick: m.onClose
      })]
    }), (0, n.jsxs)(r.ModalContent, {
      className: F.modalContent,
      children: [(0, n.jsx)(v.default, {
        className: F.searchBar,
        placeholder: D.default.Messages.SEARCH,
        label: D.default.Messages.SEARCH,
        searchTerm: A,
        onChange: e => g(e),
        onClear: () => g("")
      }), S.map((e, t) => (0, n.jsxs)(i.Fragment, {
        children: [0 === t ? null : (0, n.jsx)("div", {
          className: F.rowDivider
        }), (0, n.jsx)(O, {
          row: e,
          onClick: () => {
            let t = [...T];
            t.includes(e.item.id) ? t = t.filter(t => t !== e.item.id) : t.push(e.item.id), N(t)
          },
          checked: T.includes(e.item.id)
        })]
      }, e.item.id))]
    }), (0, n.jsxs)(r.ModalFooter, {
      className: F.footer,
      children: [(0, n.jsx)("div", {
        className: F.activityInfoOuterContainer,
        children: (0, n.jsxs)("div", {
          className: F.activityInfoInnerContainer,
          children: [(0, n.jsx)("img", {
            src: R.url,
            className: F.activityInfoImage,
            alt: t.application.name
          }), (0, n.jsxs)("div", {
            className: F.activityInfoText,
            children: [(0, n.jsx)(r.Text, {
              variant: "text-md/semibold",
              className: F.ellipsis,
              children: t.application.name
            }), (0, n.jsx)(r.Text, {
              variant: "text-sm/medium",
              className: F.ellipsis,
              children: t.application.description
            }), (0, n.jsx)(r.Text, {
              variant: "text-xs/medium",
              className: F.ellipsis,
              children: (0, n.jsx)(r.Anchor, {
                href: _,
                children: _
              })
            })]
          })]
        })
      }), (0, n.jsx)("div", {
        className: F.footerDivider
      }), (0, n.jsxs)("div", {
        className: F.copySendBar,
        children: [(0, n.jsx)(M, {
          link: _,
          applicationId: t.application.id
        }), (0, n.jsx)(r.Button, {
          onClick: U,
          disabled: T.length <= 0,
          children: D.default.Messages.SEND
        })]
      })]
    })]
  })
}

function O(e) {
  let {
    row: t,
    onClick: a,
    checked: i
  } = e, s = null, l = null, u = null;
  switch (t.type) {
    case y.RowTypes.DM:
    case y.RowTypes.FRIEND:
      s = (0, n.jsx)(r.Avatar, {
        size: r.AvatarSizes.SIZE_40,
        src: t.item.getAvatarURL(null, 128, !1),
        "aria-label": t.item.username
      }), l = S.default.getName(t.item), u = S.default.getUserTag(t.item);
      break;
    case y.RowTypes.GROUP_DM: {
      let e = (0, m.getChannelIconURL)(t.item),
        a = (0, h.computeChannelName)(t.item, C.default, A.default);
      s = (0, n.jsx)(r.Avatar, {
        src: e,
        "aria-label": a,
        size: r.AvatarSizes.SIZE_40
      }), l = (0, h.computeChannelName)(t.item, C.default, A.default);
      break
    }
    case y.RowTypes.CHANNEL: {
      let e = t.item,
        a = I.default.getGuild(e.guild_id);
      if (null == a) return null;
      if (l = "#".concat((0, h.computeChannelName)(e, C.default, A.default)), u = a.name, null != a.icon) {
        let t = N.default.getGuildIconURL({
          id: e.guild_id,
          icon: a.icon,
          size: 40
        });
        s = (0, n.jsx)(r.Avatar, {
          src: t,
          "aria-label": l,
          size: r.AvatarSizes.SIZE_40
        })
      } else {
        let e = (0, _.getAcronym)(a.name);
        s = (0, n.jsx)("div", {
          className: F.acronym,
          "aria-hidden": !0,
          children: e
        })
      }
    }
  }
  return (0, n.jsxs)(r.Clickable, {
    onClick: a,
    className: F.rowContainer,
    children: [(0, n.jsxs)("div", {
      className: F.rowLeft,
      children: [(0, n.jsx)("div", {
        className: F.rowAvatar,
        children: s
      }), (0, n.jsxs)("div", {
        className: F.rowNameContainer,
        children: [(0, n.jsx)(r.Text, {
          variant: "text-md/semibold",
          className: F.rowName,
          children: l
        }), (0, n.jsx)(r.Text, {
          variant: "text-xs/medium",
          className: F.rowSubName,
          children: u
        })]
      })]
    }), (0, n.jsx)(r.Checkbox, {
      value: i,
      type: r.Checkbox.Types.INVERTED,
      displayOnly: !0,
      className: F.rowRight
    })]
  })
}

function M(e) {
  let {
    applicationId: t,
    link: a
  } = e, s = (0, l.useStateFromStores)([C.default], () => C.default.getCurrentUser()), [u, o] = i.useState(!1);
  return i.useEffect(() => {
    let e;
    return u && (e = setTimeout(() => {
      o(!1)
    }, 1e3)), () => {
      null != e && clearTimeout(e)
    }
  }, [u]), (0, n.jsxs)(r.Button, {
    look: r.Button.Looks.LINK,
    color: r.Button.Colors.LINK,
    onClick: function() {
      x.default.track(w.AnalyticEvents.ACTIVITY_BOOKMARK_COPY_URL, {
        user_id: null == s ? void 0 : s.id,
        application_id: t
      }), (0, R.copy)(a), o(!0)
    },
    innerClassName: F.copyButton,
    children: [u ? (0, n.jsx)(g.default, {}) : (0, n.jsx)(T.default, {}), u ? D.default.Messages.COPIED : D.default.Messages.COPY_LINK]
  })
}