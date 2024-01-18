"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
});
var s = n("37983"),
  a = n("884691"),
  l = n("171210"),
  i = n("77078"),
  r = n("811475"),
  o = n("685665"),
  u = n("716849"),
  d = n("552917"),
  c = n("967241"),
  f = n("351825"),
  h = n("956089"),
  C = n("599110"),
  p = n("659500"),
  m = n("254490"),
  E = n("412861"),
  g = n("149022"),
  S = n("64096"),
  A = n("49111"),
  _ = n("186859"),
  T = n("782340"),
  M = n("648198");

function N(e, t, a, l) {
  (0, i.openModalLazy)(async () => {
    let {
      default: i
    } = await n.el("811475").then(n.bind(n, "811475"));
    return n => (0, s.jsx)(i, {
      ...n,
      activity: e,
      channel: t,
      activityActionType: a,
      analyticsLocations: l
    })
  }, {
    modalKey: r.activityInviteKey
  })
}
let I = /(.*)```(\w+)\n(.*)```(.*)/s;

function v(e) {
  let {
    channel: t,
    options: r,
    onFileUpload: v,
    onClose: L,
    onSelect: x,
    draftType: R,
    editorTextContent: y,
    setValue: D,
    openClips: O
  } = e;
  (0, u.useMaybeFetchPremiumLikelihood)(d.default);
  let {
    analyticsLocations: j
  } = (0, o.default)();
  a.useEffect(() => {
    C.default.track(A.AnalyticEvents.OPEN_POPOUT, {
      type: "Send Attachment",
      channel_id: t.id,
      guild_id: t.guild_id
    })
  }, [t.guild_id, t.id]);

  function P() {
    (0, c.openThreadSidebarForCreating)(t, void 0, "Plus Button")
  }

  function b() {
    C.default.track(A.AnalyticEvents.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), D("/", (0, g.toRichValue)("/"))
  }

  function H() {
    O()
  }

  function F() {
    (0, i.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("487757").then(n.bind(n, "487757"));
      return n => (0, s.jsx)(e, {
        ...n,
        channel: t
      })
    }, {
      modalKey: _.POLL_CREATION_MODAL_KEY
    })
  }

  function U() {
    let e = y,
      n = "txt",
      s = "",
      a = y.match(I);
    null != a && (s = a[1], n = a[2], e = a[3], s += a[4]), (0, E.promptToUpload)([(0, m.makeFile)(new Blob([e], {
      type: "text/plain"
    }), "message.".concat(n))], t, R), p.ComponentDispatch.dispatchToLastSubscribed(A.ComponentActions.CLEAR_TEXT), "" !== s && p.ComponentDispatch.dispatchToLastSubscribed(A.ComponentActions.INSERT_TEXT, {
      plainText: s
    })
  }
  return (0, s.jsx)(i.Menu, {
    onSelect: x,
    navId: "channel-attach",
    onClose: L,
    "aria-label": T.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    className: M.menu,
    children: r.map(function(e) {
      var n;
      let a = (0, s.jsxs)("div", {
        className: M.optionLabel,
        children: [(0, s.jsx)(e.icon, {
          className: M.optionIcon
        }), (0, s.jsx)("div", {
          className: M.optionName,
          children: e.display
        }), null != e.badgeVal && e.badgeVal > 0 && (0, s.jsx)(h.NumberBadge, {
          className: M.badge,
          color: null !== (n = e.badgeColor) && void 0 !== n ? n : l.default.STATUS_DANGER,
          count: e.badgeVal
        })]
      });
      switch (e.type) {
        case S.AttachmentTypes.UPLOAD_A_FILE:
          return (0, s.jsx)(i.MenuItem, {
            id: "upload-file",
            label: a,
            subtext: (0, s.jsx)("span", {
              className: M.tipSubtext,
              children: T.default.Messages.UPLOAD_FILE_SUBTEXT.format({
                icon: (e, t) => (0, s.jsx)(f.default, {
                  className: M.tipIcon,
                  width: 16,
                  height: 16
                }, t)
              })
            }),
            action: v
          }, "upload-file");
        case S.AttachmentTypes.UPLOAD_TEXT_AS_FILE:
          if ("" === y) return null;
          return (0, s.jsx)(i.MenuItem, {
            id: "upload-text-as-file",
            label: a,
            action: U
          }, "upload-text-as-file");
        case S.AttachmentTypes.CLIPS:
          return (0, s.jsx)(i.MenuItem, {
            id: "clips",
            label: a,
            action: H
          }, "clips");
        case S.AttachmentTypes.POLL:
          return (0, s.jsx)(i.MenuItem, {
            id: "poll",
            label: a,
            action: F
          }, "poll");
        case S.AttachmentTypes.INVITE_TO_PLAY_GAME:
          return (0, s.jsx)(i.MenuItem, {
            id: "play",
            label: a,
            action: () => {
              var n;
              return n = e.activity, void(C.default.track(A.AnalyticEvents.OPEN_MODAL, {
                type: "Send Join Invite",
                application_id: n.application_id,
                location: A.AnalyticsSections.CHANNEL_TEXT_AREA
              }), N(n, t, A.ActivityActionTypes.JOIN, j))
            }
          }, "play");
        case S.AttachmentTypes.INVITE_TO_LISTEN:
          return (0, s.jsx)(i.MenuItem, {
            id: "listen",
            label: a,
            action: () => {
              var n;
              return n = e.activity, void(C.default.track(A.AnalyticEvents.OPEN_MODAL, {
                type: "Send Listen Invite",
                location: A.AnalyticsSections.CHANNEL_TEXT_AREA
              }), N(n, t, A.ActivityActionTypes.LISTEN, j))
            }
          }, "listen");
        case S.AttachmentTypes.INVITE_TO_WATCH:
          return (0, s.jsx)(i.MenuItem, {
            id: "watch",
            label: a,
            action: () => {
              var n;
              return n = e.activity, void(C.default.track(A.AnalyticEvents.OPEN_MODAL, {
                type: "Send Watch Invite",
                location: A.AnalyticsSections.CHANNEL_TEXT_AREA
              }), N(n, t, A.ActivityActionTypes.WATCH, j))
            }
          }, "watch");
        case S.AttachmentTypes.CREATE_THREAD:
          return (0, s.jsx)(i.MenuItem, {
            id: "THREAD",
            label: a,
            action: P
          }, "THREAD");
        case S.AttachmentTypes.SLASH_COMMAND:
          return (0, s.jsx)(i.MenuItem, {
            id: "SLASH_COMMAND",
            label: a,
            action: b
          }, "SLASH_COMMAND");
        default:
          return null
      }
    })
  })
}