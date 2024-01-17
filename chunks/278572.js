"use strict";
n.r(t), n.d(t, {
  default: function() {
    return Y
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  i = n("414456"),
  l = n.n(i),
  r = n("907002"),
  o = n("446674"),
  u = n("77078"),
  d = n("561288"),
  c = n("228157"),
  f = n("987317"),
  E = n("543155"),
  _ = n("843962"),
  h = n("679653"),
  C = n("393414"),
  I = n("659558"),
  T = n("439141"),
  S = n("648911"),
  m = n("999180"),
  p = n("289180"),
  A = n("19065"),
  g = n("981913"),
  N = n("742683"),
  R = n("116439"),
  O = n("42887"),
  L = n("697218"),
  v = n("471671"),
  M = n("945330"),
  P = n("823050"),
  D = n("439932"),
  y = n("191145"),
  x = n("458685"),
  b = n("49111"),
  U = n("353927"),
  G = n("782340"),
  j = n("597976"),
  w = n("212029");
let k = {
    width: 232,
    height: 315
  },
  F = {
    width: 232,
    height: 267
  },
  H = {
    width: 475,
    height: 267
  };

function B(e) {
  let {
    header: t
  } = e, n = O.default.getCameraComponent(), i = (0, o.useStateFromStores)([O.default], () => O.default.getVideoDeviceId()), l = (0, S.default)();
  return s.useEffect(() => {
    let e = L.default.getCurrentUser();
    if (l && null != e) {
      let t = (0, I.getLastUsedVideoBackgroundOption)(e);
      (0, T.applyBackgroundOptionPreview)(t, i, {
        track: !1
      }).catch(b.NOOP)
    }
  }, [l, i]), (0, a.jsxs)("div", {
    className: j.previewRoot,
    children: [(0, a.jsx)(u.Spinner, {}), (0, a.jsx)("div", {
      className: j.preview,
      children: (0, a.jsx)(n, {
        disabled: !1,
        deviceId: i,
        width: H.width,
        height: H.height
      })
    }), (0, a.jsx)("div", {
      className: j.previewChannelHeader,
      children: t
    })]
  })
}

function V(e) {
  let {
    canVideo: t,
    channel: n,
    numVideoDevices: s
  } = e, {
    cameraUnavailable: i,
    enabled: r
  } = (0, m.default)(), o = (0, p.default)(n);
  return (0, a.jsxs)("div", {
    className: j.actions,
    children: [(0, a.jsx)(g.CenterControlButton, {
      iconComponent: M.default,
      color: "red",
      className: j.actionButton,
      label: G.default.Messages.DISMISS,
      onClick: () => d.default.stopRinging(n.id)
    }), t && (0, a.jsx)(u.Popout, {
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, a.jsx)(x.default, {
          onClose: t
        })
      },
      position: "top",
      align: "center",
      animation: u.Popout.Animation.FADE,
      children: (e, t) => {
        let {
          onClick: l
        } = e, {
          isShown: u
        } = t;
        return (0, a.jsx)(R.default, {
          join: !0,
          enabled: r,
          color: "green",
          centerButton: !0,
          hasPermission: o,
          cameraUnavailable: i,
          channel: n,
          onPopoutClick: s > 1 ? l : null,
          className: j.actionButton,
          popoutOpen: u,
          onCameraUnavailable: A.default,
          onChange: () => {
            f.default.selectVoiceChannel(n.id, !0), (0, C.transitionToGuild)(b.ME, n.id)
          }
        })
      }
    }), (0, a.jsx)(N.default, {
      channel: n,
      color: "green",
      centerButton: !0,
      className: l(j.actionButton, j.last),
      onClick: () => f.default.selectVoiceChannel(n.id)
    })]
  })
}

function Y(e) {
  let {
    animatedStyle: t,
    y: n,
    x: i,
    channel: f
  } = e, [C, I] = s.useState(!1), T = (0, _.getChannelIconURL)(f), S = (0, h.default)(f), [m, p] = (0, o.useStateFromStoresArray)([O.default], () => [O.default.supports(U.Features.VIDEO), Object.keys(O.default.getVideoDevices()).length]), A = (0, o.useStateFromStores)([v.default], () => v.default.isFocused()), g = (0, o.useStateFromStores)([y.default], () => y.default.getMode(f.id)), N = s.useCallback(e => {
    null != e.top && null != e.left && c.default.move(e.left, e.top)
  }, []), R = (0, r.useSpring)({
    value: C ? 1 : 0,
    config: {
      ...r.config.stiff,
      clamp: !0
    }
  });
  s.useEffect(() => {
    let e = e => {
      e.keyCode === b.KeyboardKeys.ESCAPE && d.default.stopRinging(f.id)
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [f]);
  let L = g === b.ChannelModes.VIDEO && m && p > 0,
    M = (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(P.default, {
        className: j.icon,
        ringing: A,
        src: null != T ? T : "",
        ringingType: P.default.RingingType.INCOMING,
        size: C ? u.AvatarSizes.SIZE_40 : u.AvatarSizes.SIZE_80
      }), (0, a.jsxs)("div", {
        className: j.titleGroup,
        children: [(0, a.jsx)(u.Text, {
          className: j.title,
          color: "header-primary",
          variant: C ? "text-md/semibold" : "text-lg/semibold",
          children: S
        }), (0, a.jsx)(u.Text, {
          color: "header-secondary",
          className: j.subtitle,
          variant: C ? "text-sm/normal" : "text-md/normal",
          children: g === b.ChannelModes.VOICE ? G.default.Messages.INCOMING_CALL_ELLIPSIS : G.default.Messages.INCOMING_VIDEO_CALL_ELLIPSIS
        })]
      })]
    }),
    x = L ? k : F;
  return (0, a.jsx)(E.default, {
    className: j.wrapper,
    selector: ".".concat(j.root),
    initialPosition: {
      left: i,
      top: n
    },
    maxX: window.innerWidth,
    maxY: window.innerHeight,
    onDragEnd: N,
    dragAnywhere: !0,
    children: (0, a.jsx)(a.Fragment, {
      children: (0, a.jsxs)(r.animated.div, {
        className: l(j.root, w.elevationHigh, {
          [j.previewCamera]: C
        }, C ? (0, D.getThemeClass)("dark") : null),
        style: {
          ...t,
          width: R.value.interpolate([0, 1], [x.width, H.width]),
          minHeight: R.value.interpolate([0, 1], [x.height, H.height]),
          translateX: R.value.interpolate([0, 1], [0, -1 * Math.abs(H.width - x.width) / 2])
        },
        children: [C ? (0, a.jsx)(B, {
          header: M
        }) : (0, a.jsx)("div", {
          className: j.mainChannelInfo,
          children: M
        }), (0, a.jsx)(V, {
          canVideo: L,
          channel: f,
          numVideoDevices: p
        }), L && !C ? (0, a.jsx)(u.Button, {
          size: u.Button.Sizes.SMALL,
          fullWidth: !0,
          look: u.Button.Looks.LINK,
          color: u.Button.Colors.PRIMARY,
          className: j.previewButton,
          onClick: () => I(!0),
          children: G.default.Messages.INCOMING_CALL_PREVIEW_CAMERA
        }) : null]
      })
    })
  })
}