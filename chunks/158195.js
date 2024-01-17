"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("222007");
var s = n("884691"),
  l = n("404118"),
  a = n("448993"),
  i = n("242278"),
  r = n("153587"),
  o = n("782340");

function u(e, t) {
  let [n, u] = s.useState(!1), d = s.useCallback(async n => {
    if (null != e && null != t) {
      u(!0);
      try {
        let {
          url: s
        } = await i.requestDownloadUrl({
          guildId: e,
          productId: t,
          attachmentId: n
        });
        await r.download(s)
      } catch (t) {
        let e = t instanceof a.APIError ? t.getAnyErrorMessage() : void 0;
        l.default.show({
          title: o.default.Messages.ERROR_GENERIC_TITLE,
          body: null != e ? e : o.default.Messages.GENERIC_ERROR_BODY
        })
      } finally {
        u(!1)
      }
    }
  }, [e, t]);
  return {
    isLoading: n,
    downloadAttachment: d
  }
}