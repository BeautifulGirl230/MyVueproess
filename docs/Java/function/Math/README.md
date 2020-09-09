# Math

## Math.random（随机生成数字）

> * 默认类型： double
> * 返回大于或等于`0.0 ~ 1.0`的带有正号的双精度值。
> * 公式：[a,b]：Math.random() * (a - b + 1) + a`

如果想让取值范围变为`10 ~ 99`，返回类型为`int`型

```java
int value = (int)(Math.random() * ( 99 - 10 + 1) + 10);
/* 或 */
int value = (int)(Math.random() * 90 + 10);
```

