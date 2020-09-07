# 用户授权

> 首先我们通过`wx.getSetting`先查询一下用户是否授权了 "scope.record" 这个 scope户是否授权



```javaScript
wx.getSetting({
  success(res) {
    if (!res.authSetting['scope.record']) {
      wx.authorize({
        scope: 'scope.record',
        success () {
        }
      })
    }
  }
})
```

