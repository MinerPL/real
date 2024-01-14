"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
  }
}), s("222007");
var a = s("37983");
s("884691");
var n = s("917351"),
  l = s.n(n),
  i = s("446674"),
  r = s("819855"),
  o = s("77078"),
  d = s("629109"),
  u = s("533222"),
  c = s("42887"),
  S = s("145131"),
  E = s("161778"),
  f = s("597870"),
  T = s("353927"),
  m = s("782340"),
  _ = s("947148"),
  g = s("926622");

function h() {
  let e, t;
  let n = (0, i.useStateFromStores)([E.default], () => E.default.theme),
    {
      canSetInputDevice: h,
      canSetOutputDevice: I,
      inputDeviceId: N,
      outputDeviceId: p
    } = (0, i.useStateFromStoresObject)([c.default], () => ({
      canSetInputDevice: c.default.supports(T.Features.AUDIO_INPUT_DEVICE),
      canSetOutputDevice: c.default.supports(T.Features.AUDIO_OUTPUT_DEVICE),
      inputDeviceId: c.default.getInputDeviceId(),
      outputDeviceId: c.default.getOutputDeviceId()
    })),
    C = (0, i.useStateFromStores)([c.default], () => c.default.getInputDevices()),
    A = (0, i.useStateFromStores)([c.default], () => c.default.getOutputDevices());
  !h && (e = (0, a.jsx)(o.FormText, {
    type: o.FormText.Types.DESCRIPTION,
    className: g.marginTop8,
    children: m.default.Messages.BROWSER_INPUT_DEVICE_WARNING.format({
      onDownloadClick: () => (0, f.openDownloadAppsModal)("Help Text Input Devices")
    })
  })), !I && (t = (0, a.jsx)(o.FormText, {
    type: o.FormText.Types.DESCRIPTION,
    className: g.marginTop8,
    children: m.default.Messages.BROWSER_OUTPUT_DEVICE_WARNING.format({
      onDownloadClick: () => (0, f.openDownloadAppsModal)("Help Text Output Devices")
    })
  }));
  let O = l(C).values().first(),
    x = null != O ? O.disabled : null != e,
    R = l(A).values().first(),
    M = null != R ? R.disabled : null != t;

  function v(e) {
    let t, {
      label: l,
      value: i
    } = e;
    if (u.default.isCertified(i)) {
      let e = (0, r.isThemeLight)(n) ? s("345598") : s("295450");
      t = (0, a.jsx)("img", {
        src: e,
        alt: "Certified",
        className: _.deviceOptionCertified
      })
    }
    return (0, a.jsxs)("span", {
      className: _.deviceOption,
      children: [(0, a.jsx)("span", {
        className: _.deviceOptionLabel,
        children: u.default.getCertifiedDeviceName(i, l)
      }), t]
    }, i)
  }

  function D(e) {
    return v(e[0])
  }
  return (0, a.jsxs)(S.default, {
    className: g.marginBottom20,
    children: [(0, a.jsxs)(S.default.Child, {
      basis: "50%",
      children: [(0, a.jsx)(o.FormTitle, {
        tag: o.FormTitleTags.H5,
        className: g.marginBottom8,
        children: m.default.Messages.FORM_LABEL_INPUT_DEVICE
      }), (0, a.jsx)(o.SingleSelect, {
        value: N,
        onChange: e => d.default.setInputDevice(e, "Settings"),
        options: l.map(C, e => {
          let {
            id: t,
            name: s
          } = e;
          return {
            value: t,
            label: s
          }
        }),
        isDisabled: x,
        renderOptionValue: D,
        renderOptionLabel: v
      }), e]
    }), (0, a.jsxs)(S.default.Child, {
      basis: "50%",
      children: [(0, a.jsx)(o.FormTitle, {
        tag: o.FormTitleTags.H5,
        className: g.marginBottom8,
        children: m.default.Messages.FORM_LABEL_OUTPUT_DEVICE
      }), (0, a.jsx)(o.SingleSelect, {
        value: p,
        onChange: e => d.default.setOutputDevice(e, "Settings"),
        options: l.map(A, e => {
          let {
            id: t,
            name: s
          } = e;
          return {
            value: t,
            label: s
          }
        }),
        isDisabled: M,
        renderOptionValue: D,
        renderOptionLabel: v
      }), t]
    })]
  })
}