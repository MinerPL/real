"use strict";
n.r(t), n.d(t, {
  useFamilyCenterActions: function() {
    return o
  }
}), n("222007");
var a = n("884691"),
  s = n("448993"),
  i = n("544556"),
  l = n("822825"),
  r = n("922832");

function o(e) {
  let {
    onError: t,
    onSuccess: n
  } = null != e ? e : {}, [o, u] = a.useState(!1), [d, c] = a.useState(!1), [f, E] = a.useState(!1), [_, h] = a.useState(!1), [C, I] = a.useState(!1), [T, S] = a.useState(!1), [m, p] = a.useState(!1), [A, g] = a.useState(!1), N = o || d || f || _ || T || A, R = a.useCallback(async e => {
    if (!N) {
      u(!0);
      try {
        await (0, i.updateLinkForUserId)(e.id, r.UserLinkStatus.ACTIVE), null == n || n()
      } catch (n) {
        let e = new s.APIError(n);
        null == t || t(e)
      } finally {
        u(!1)
      }
    }
  }, [N, t, n]), O = a.useCallback(async e => {
    if (!N) {
      c(!0);
      try {
        await (0, i.updateLinkForUserId)(e.id, r.UserLinkStatus.DECLINED), null == n || n()
      } catch (n) {
        let e = new s.APIError(n);
        null == t || t(e)
      } finally {
        c(!1)
      }
    }
  }, [N, t, n]), L = a.useCallback(async e => {
    if (!N) {
      E(!0);
      try {
        await (0, i.updateLinkForUserId)(e.id, r.UserLinkStatus.INACTIVE), null == n || n()
      } catch (n) {
        let e = new s.APIError(n);
        null == t || t(e)
      } finally {
        E(!1)
      }
    }
  }, [N, t, n]), v = a.useCallback(async e => {
    if (!N) {
      h(!0);
      try {
        await (0, i.removeLinkForUserId)(e.id), null == n || n()
      } catch (n) {
        let e = new s.APIError(n);
        null == t || t(e)
      } finally {
        h(!1)
      }
    }
  }, [N, t, n]), M = a.useCallback(async () => {
    if (!C) {
      I(!0);
      try {
        await (0, i.getLinkCodeForCurrentUser)(), null == n || n()
      } catch (n) {
        let e = new s.APIError(n);
        null == t || t(e)
      } finally {
        I(!1)
      }
    }
  }, [C, t, n]), P = a.useCallback(async e => {
    if (!m) {
      p(!0);
      try {
        await i.default.fetchTeenActivity(e), null == n || n()
      } catch (n) {
        let e = new s.APIError(n);
        null == t || t(e)
      } finally {
        p(!1)
      }
    }
  }, [m, t, n]), D = a.useCallback(async (e, a) => {
    if (!T) {
      S(!0);
      try {
        await i.default.requestLink(e, a), null == n || n()
      } catch (n) {
        let e = new s.APIError(n);
        null == t || t(e)
      } finally {
        S(!1)
      }
    }
  }, [T, t, n]), y = a.useCallback(async e => {
    let n = l.default.getActionsForDisplayType(e),
      a = n[n.length - 1],
      r = l.default.getStartId(),
      o = l.default.getSelectedTeenId();
    if (!A && null != r && null != o) {
      g(!0);
      try {
        await i.default.fetchMoreTeenActivity(o, e, r, a.event_id)
      } catch (n) {
        let e = new s.APIError(n);
        null == t || t(e)
      } finally {
        g(!1)
      }
    }
  }, [A, t]);
  return {
    acceptLinkRequest: R,
    declineLinkRequest: O,
    disconnectLinkRequest: L,
    cancelLinkRequest: v,
    selectTeenUser: P,
    getLinkCode: M,
    requestLink: D,
    loadMore: y,
    isAcceptLoading: o,
    isDeclineLoading: d,
    isDisconnectLoading: f,
    isCancelLoading: _,
    isGetLinkCodeLoading: C,
    isSelectTeenUserLoading: m,
    isRequestingLink: T,
    isMoreLoading: A
  }
}