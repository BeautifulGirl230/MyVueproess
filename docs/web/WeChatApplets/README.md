# 获取用户信息

> `wx.getUserInfo({})`
>
> 在用户未授权过的情况下调用此接口，将不再出现授权弹窗，会直接进入 fail 回调（详见[《公告》](https://developers.weixin.qq.com/community/develop/doc/0000a26e1aca6012e896a517556c01))。在用户已授权的情况下调用此接口，可成功获取用户信息。
>
> 授权（`wx.getSetting`）

## 参数  (Object object)

|      属性       | 类型     | 默认值 | 必填 | 说明                                                         |
| :-------------: | -------- | ------ | ---- | ------------------------------------------------------------ |
| withCredentials | boolean  |        | 否   | 是否带上登录态信息。当 withCredentials 为 true 时，要求此前有调用过 wx.login 且登录态尚未过期，此时返回的数据会包含 encryptedData, iv 等敏感信息；当 withCredentials 为 false 时，不要求有登录态，返回的数据不包含 encryptedData, iv 等敏感信息。 |
|      lang       | string   | en     | 否   | 显示用户信息的语言                                           |
|     success     | function |        | 否   | 接口调用成功的回调函数                                       |
|      fail       | function |        | 否   | 接口调用失败的回调函数                                       |
|    complete     | function |        | 否   | 接口调用结束的回调函数（调用成功、失败都会执行）             |

> object.lang 的合法值

| 值    | 说明     |
| ----- | -------- |
| en    | 英文     |
| zh_CN | 简体中文 |
| zh_TW | 繁体中文 |

> object.success 回调函数
>
> 参数（Object res）

| 属性          | 类型                                                         | 说明                                                         |
| ------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| userInfo      | [UserInfo](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/UserInfo.html) | 用户信息对象，不包含 openid 等敏感信息                       |
| rawData       | string                                                       | 不包括敏感信息的原始数据字符串，用于计算签名                 |
| signature     | string                                                       | 使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息，详见 [用户数据的签名验证和加解密](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html) |
| encryptedData | string                                                       | 包括敏感数据在内的完整用户信息的加密数据，详见 [用户数据的签名验证和加解密](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#加密数据解密算法) |
| iv            | string                                                       | 加密算法的初始向量，详见 [用户数据的签名验证和加解密](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#加密数据解密算法) |
| cloudID       | string                                                       | 敏感数据对应的云 ID，开通[云开发](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)的小程序才会返回，可通过云调用直接获取开放数据，详细见[云调用直接获取开放数据](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#method-cloud) |



```javascript
wx.getUserInfo({
   success: function(result) {
   let userInfo = result.userInfo;
   console.log('图像地址',userInfo.avatarUrl);
   console.log('匿名：',userInfo.nickName);
   console.log('地址：',userInfo.city);
   console.log('语言：',userInfo.language);
   console.log('性别：',userInfo.gender);
   console.log('省份：',userInfo.province);
  }
})
```

