# cdispaly的Grid布局与Flex布局

`Gird`布局与`Flex`布局有一定的相似性，都是对容器的内部项目进行划分。

* `Flex`布局是轴线布局，只能指定项目针对轴线的位置，可以看作成一维布局
* `Grid`布局则是将容器划分成行和列，产生单元格，然后指定项目所在的单元格，可以将它看成二维布局。
* 父元素成为*容器*，父元素内部的多个子元素成为*项目*

## flex弹性布局（容器属性）

`flex`是Flexible Box的缩写（简称：弹性盒子），任何一个容器都可以设定为`felx`布局。

`flex`被称为容器（felx container），所有子元素自动成为容器成员。

* `flex-direction`决定主轴的方向（即项目的排列方向）
* `flex-wrap`
* `flex-flow`
* `justify-content`
* `align-items`
* `align-content`

### flex-direction属性：决定主轴的方向（即项目的排列方向）

- `row`（默认）：主轴水平方向，起点在左端；

```css
.content-box {
       display: flex;
       flex-direction: row;
   }
```

<img src="/image/01.png" alt="image-20200901175538879" style="zoom: 33%;" />


- `row-reverse`：主轴水平方向，起点在右端；

  ```css
  .content-box {
         display: flex;
         flex-direction: row;
     }
  ```

  <img src="/image/02.PNG" style="zoom:33%;" />

- `column`：主轴垂直方向，起点在上边沿；

  ```css
   .content-box {
         display: flex;
         flex-direction: column;
     }
  ```

  <img src="/image/03.PNG" style="zoom:33%;" />

- `column-reserve`：主轴垂直方向，起点在下边沿。

```css
   .content-box {
       display: flex;
       flex-direction:column-reverse;
   }
```

<img src="/image/04.PNG" style="zoom:33%;" />

### flex-wrap属性：定义换行情况

默认情况下，都排在一条轴线上。`flex-wrap`属性定义，如果一条轴线排不下，通过相应的属性进行换行。

* `nowrap`(默认)：不换行。

```css
 .content-box {
       display: flex;
      flex-wrap: nowrap;
   }
```

<img src="/image/05.PNG" style="zoom:33%;" />

* `wrap`：换行，第一行在上方。

```css
.content-box {
       display: flex;
      flex-wrap: wrap;
   }
```

<img src="/image/06.PNG" style="zoom:33%;" />

* `wrap-reverse`：换行，第一行在下方。

```css
   .content-box {
       display: flex;
      flex-wrap: wrap-reverse;
   }
```

<img src="/image/07.PNG" style="zoom:33%;" />

### flex-flow属性：flex-direction和flex-wrap的简写，默认row nowrap

`flex-flow`属性是`flex-direction`属性和`flex-wrap`属性的简写形式，默认值为`row nowrap`。

```css
.content-box { 
	flex-flow: <flex-direction> || <flex-wrap>;
}
```

### justify-content属性：定义项目在主轴上的对齐方式。

`justify-content`属性是定义在主轴上的对齐方式。

* `flex-start`（默认值）：左对齐。

```css
 .content-box {
       display: flex;
       justify-content: flex-start;
   }
```

<img src="/image/08.PNG" style="zoom:33%;" />

* `flex-end`：右对齐。

```css
   .content-box {
       display: flex;
       justify-content: flex-end;
   }
```

<img src="/image/09.PNG" style="zoom:33%;" />

* `center`：居中对齐。

```css
   .content-box {
       display: flex;
       justify-content: center;
   }
```

<img src="/image/10.PNG" style="zoom:33%;" />

* `space-between`：两端对齐，项目之间的间距相等。

```css
   .content-box {
       display: flex;
       justify-content: space-between;
   }
```

<img src="/image/11.PNG" style="zoom:33%;" />

* `space-around`：两侧间隔相等，每个项目两侧的间距相等，而项目之间的间隔比项目与边框的间距大一倍。

```css
   .content-box {
       display: flex;
       justify-content: space-around;
   }
```

<img src="/image/12.PNG" style="zoom:33%;" />

* `space-evenly`：间隔相等，项目与项目之间的间隔相等。

<img src="/image/13.PNG" style="zoom:33%;" />

### align-items属性：定义在交叉轴上的对齐方式

* `stretch`（默认值）：如果项目未设置高度或设为`auto`，将占满整个容器的高度。

```css
   .content-box {
       display: flex;
       align-items: stretch;
   }
```

<img src="/image/14.PNG" style="zoom:33%;" />

* `flex-start`：起点对齐。

```css
   .content-box {
       display: flex;
       align-items: flex-start;
   }
```

​					<img src="/image/15.PNG" style="zoom:33%;" />

* `flex-end`：终点对齐。

```css
   .content-box {
       display: flex;
       align-items: flex-end;
   }
```

<img src="/image/16.PNG" style="zoom:33%;" />

* `center`：中点对齐。

```css
   .content-box {
       display: flex;
       align-items: center;
   }
```

<img src="/image/17.PNG" style="zoom:33%;" />

* `baseline`：项目的第一行文字的基线对齐。

```css
   .content-box {
       display: flex;
       align-items: baseline;
   }
```

<img src="/image/18.PNG" style="zoom:33%;" />

### align-content属性：定义多根轴线的对齐方式

如果项目只有一根轴线，该属性不起最用。所以在属性里必须设置`flex-wrap`。

* `stretch`：（默认值）轴线占满整个交叉轴

```css
   .content-box {
       display: flex;
       flex-wrap: wrap;
       align-content: stretch;
   }
```

<img src="/image/19.PNG" style="zoom:33%;" />

* `flex-start`：起点对齐，与交叉轴的起点对齐

```css
   .content-box {
       display: flex;
       flex-wrap: wrap;
       align-content: flex-start;
   }
```

<img src="/image/20.PNG" style="zoom:33%;" />

* `flex-end`：终点对齐，与交叉轴的终点对齐

```css
   .content-box {
       display: flex;
       flex-wrap: wrap;
       align-content: flex-end;
   }
```

<img src="/image/21.PNG" style="zoom:33%;" />

* `center`：中点对齐，与交叉轴的中点对齐

```css
   .content-box {
       display: flex;
       flex-wrap: wrap;
       align-content: center;
   }
```

<img src="/image/22.PNG" style="zoom:33%;" />

* `space-between`：轴线之间等间距，与交叉轴的两端对齐，轴线之间的间隔平均分布

```css
   .content-box {
       display: flex;
       flex-wrap: wrap;
       align-content: space-between;
   }
```

<img src="/image/23.PNG" style="zoom:33%;" />

* `space-around`：轴线两侧等间距，每根轴线两侧的间隔相等，即轴线之间的间隔比轴线与边框的间隔大一倍

```css
   .content-box {
       display: flex;
       flex-wrap: wrap;
       align-content: space-around;
   }
```

<img src="/image/24.PNG" style="zoom:33%;" />

## flex弹性布局（项目属性）

###  order属性：定义项目的排列顺序。

数值越小，排列越靠前，默认为0，可以负值

```css
   .box:nth-child(2) {
       order:-2
   }
   .box:nth-child(3) {
       order:-3
   }
   .box:nth-child(4) {
       order:4
   }
   .box:nth-child(5) {
       order:5
   }
   .box:nth-child(6) {
       order:6
   }
```

<img src="/image/25.PNG" style="zoom:33%;" />

### flex-grow属性：定义项目的放大比例

默认值为0，即如果空间有剩余，也不放大。可以是小数，按比例占据剩余空间。

*若所有项目的`flex-grow`的数值都相同，则等分剩余空间。*

```css
   .box {
       flex-grow: 5;
   }
```

<img src="/image/26.PNG" style="zoom:33%;" />

*若果有一个项目`flex-grow`为2，其余都为1，则该项目占据剩余空间是其余的2倍*

```css
   .box:nth-child(3) {
       flex-grow: 8;
   }
```

<img src="/image/27.PNG" style="zoom:33%;" />

*实例：*

```css
   .box {
       flex-grow: 0;
   }
   .box:nth-child(2) {
       flex-grow: 3;
   }
   .box:nth-child(3) {
       flex-grow: 8;
   }
   .box:nth-child(4) {
       flex-grow: 2;
   }
   .box:nth-child(5) {
       flex-grow: 7;
   }
```

<img src="/image/28.PNG" style="zoom:33%;" />

## Gird网格布局（容器属性）

1. `Gird`布局是将网页划分成一个个网格，可以任意组合不同的网格，做出各种各样的布局。以前，只能通过复杂的CSS框架达到的效果，现在用过`Gird`布局就能实现。
2. 容器里面的水平区域称为*行*（row），垂直区域称为*列*（column），*行*和*列*交叉区域称为*单元格*（cell）。
3. 正常情况下，`n`行和`m`列会产生`n * m`个单元格。（行3列就有9个单元格）。
4. 划分网格的线，称为“网格线”（grid line）。水平网格线划分出行，垂直网格线划分出列。
   * 正常情况下`n`行有`n + 1`根水平网格线，`m`列有`m + 1`根垂直网格线。（三行就有四根水平网格线）

### grid-template-columns 属性， grid-template-rows 属性

容器指定网格布局以后，接着就要划分*行*和*列*。`grid-template-column`属性定义没一列的宽，`grid-template-rows`属性定义每一行的高。

```css
   .content-box {
       display: grid;
       grid-template-columns: 160px 160px 160px 160px 160px;
       grid-template-rows: 160px 160px 160px 160px 160px;
   }
/*或*/
   .content-box {
       display: grid;
       grid-template-columns: 20% 20% 20% 20% 20%;
       grid-template-rows: 20% 20% 20% 20% 20%;
   }
```

*上面代码指定了一个五行五列的网格，列宽和行高都是<font color=red>160px</font>*

<img src="/image/Grid/01.PNG" style="zoom:33%;" />

#### repeat()函数

有时候，重复写同样的值非常麻烦，尤其网格很多时。这时我们可以用<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>repeat()</span>函数，简化重复的值。

* `repeat()`接受两个参数，第一个为重复的次数，第二个为重复的值。

```css
   .content-box {
       display: grid;
       grid-template-columns: repeat(5, 160px);
       grid-template-rows: repeat(5, 160px);
   }
/*或*/
    .content-box {
        display: grid;
        grid-template-columns: repeat(5, 20%);
        grid-template-rows: repeat(5, 20%);
    }
```

<img src="/image/Grid/01.PNG" style="zoom:33%;" />

* `repeat()`重复某种模式也是可以的。

*第一列和第四列的宽度为<font color=red>160px</font>，第二列和第五列为<font color=red>100px</font>，第三列和第六列为<font color=red>140px</font>*。

```css
   .content-box {
       display: grid;
       grid-template-columns: repeat(2, 160px 100px 140px);
   }
```

<img src="/image/Grid/02.PNG" style="zoom:33%;" />

#### auto-fill关键字

*有时，单元格的大小是固定的，但是容器的大小不确定。如果希望每一行（或每一列）容纳尽可能多的单元格，这时可以使用<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>auto-fill</span>关键字表示自动填充*

```css
   .content-box {
       display: grid;
       grid-template-columns: repeat(auto-fill, 160px);
   }
```

<img src="/image/Grid/03.PNG" style="zoom:33%;" />

#### fr关键字

为了方便表示比例关系，网格布局提供了<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>fr</span>关键字（fraction的缩写，意为“片段”）。如果两列的宽度风别为<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>1fr</span>和<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>2fr</span>,

就表示后者是前者的两倍。

```css
   .content-box {
       display: grid;
       grid-template-columns: 1fr 1fr;
   }
```

<img src="/image/Grid/04.PNG" style="zoom:33%;" />

<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>fr</span>可以与绝对长度的单位结合使用，这时会非常方便。

```css
   .content-box {
       display: grid;
       grid-template-columns: 150px 1fr 2fr;
   }
```

<img src="/image/Grid/05.PNG" style="zoom:33%;" />

*第一列的宽度为<font color=red>**150px**</font>，第二列是第三列的一半*

#### auto关键字

<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**auto**</span>关键字表示有浏览器自己决定长度。

```css
   .content-box {
       display: grid;
       grid-template-columns: 160px auto 160px;
   }
```

<img src="/image/Grid/07.PNG" style="zoom:33%;" />

*第一列和第三列的宽度是<font color=red>**160px**</font>，中间则为最大宽度，除非单元格内容设置了<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**min-width**</span>*,且这个值大于最大宽度。

#### minmax()函数

<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**minmax()** </span>函数产生一个长度范围，表示长度就在这个范围之中。它接受两个参数，分别为最小值和最大值。

```css
   .content-box {
       display: grid;
       grid-template-columns: 1fr 1fr minmax(100px, 1fr);
   }
```

<img src="/image/Grid/06.PNG" style="zoom:33%;" />

*<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**minmax(<font color=red>100px</font> 1fr)**</span>函数表示列宽不能小于<font color=red>**100px**</font>，不能大于<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**1fr**</span>。*

#### 网格线的名称

<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**grid-template-columns**</span>属性和<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**grid-template-rows**</span>属性里面，还可以使用括号，指定每一根网格线的名字，方便以后的引用。

```css
   .content-box {
       display: grid;
       grid-template-columns: [c1] 160px [c2] 160px [c3] auto [c4];
       grid-template-rows: [r1] 160px [r2] 160px [r3] auto [r4];
   }
```

<img src="/image/Grid/08.PNG" style="zoom:33%;" />

*上面代码指定网格布局为3行×3列，因此有4根垂直网格线和4根水平网格线。方括号里面依次是这八根线的名字，网格布局允许同一根线有多个名字，比如<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**[fifth-line row-5]**</span>。*

#### 布局实例

<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**grid-template-columns**</span>属性对于网页布局非常有用。两列式布局只需要一行代码。

```css
   .content-box {
       display: grid;
       grid-template-columns: 70% 30%;
   }
```

<img src="/image/Grid/09.PNG" style="zoom:33%;" />

*左边栏设为<font color=red>70%</font>,右边栏设为<font color=red>30%</font>*。

传统的十二网格布局，写起来也很容易。

```css
   .content-box {
       display: grid;
       grid-template-columns: repeat(12, 1fr);
   }
```

<img src="/image/Grid/10.PNG" style="zoom:33%;" />

### gird-row-gap属性，gird-column-gap属性

<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**grid-row-gap**</span>属性设置行与行的间隔（行间隔），<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**grid-column-gap**</span>属性设置列与列的间隔（列间隔）。

```css
   .content-box {
       display: grid;
       grid-template-rows: repeat(4, 160px);
       grid-template-columns: repeat(4, 160px);
       grid-row-gap: 50px;
       grid-column-gap: 50px;
   }
```

<img src="/image/Grid/11.PNG" style="zoom:33%;" />

### grid-gap属性

<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**grid-gap**</span>属性是<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**grid-column-gap**</span>与<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**grid-row-gap**</span>的合并简写形式。

> `grid-gap`: `<grid-row-gap> <grid-column-gap>`

```css
   .content-box {
       display: grid;
       grid-template-rows: repeat(4, 160px);
       grid-template-columns: repeat(4, 160px);
       grid-gap: 50px;
   }
```

<img src="/image/Grid/11.PNG" style="zoom:33%;" />

*如果<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**grid-gap**</span>省略了第二个值，浏览器认为第二个值等于第一个值。根据最新标准，上面三个属性名的<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**grid-**</span>前缀已经删除，<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**grid-column-gap**</span>和<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**grid-row-gap**</span>写成<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**column-gap**</span>和<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**row-gap**</span>，<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**grid-gap**</span>写成<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**gap**</span>。*

### grid-template-areas属性

网格布局允许指定“区域”（area），一个区域由单个或多个单元格组成。<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**grid-template-areas**</span>属性用于定于区域。

```css
   .content-box {
       display: grid;
       grid-template-areas: 'a b c'
                            'd e f'
                            'g h i';
   }
```

<img src="/image/Grid/12.PNG" style="zoom:33%;" />

*上面代码先划分出9个单元格，然后将其定名为<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**a**</span>到<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**i**</span>的九个区域，分别对应这九个单元格，也可以将9个单元格分成<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**a**</span>、<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**b**</span>、<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**c**</span>三个区域。*

```css
   .content-box {
       display: grid;
       grid-template-areas: 'a a a'
                            'b b b'
                            'c c c';
   }
```

可以用页眉区域<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**header**</span>,底部是页脚区域<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**footer**</span>,中间部分则为<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**main**</span>和<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**sidebar**</span>。

```css
   .content-box {
       display: grid;
       grid-template-areas: "header header header"
                            "main main sidebar"
                            "footer footer footer";
   }
```

当我们某些区域不需要利用，则使用“点”（<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**.**</span>）表示。

```css
   .content-box {
       display: grid;
       grid-template-areas: 'a . c'
                            'd . f'
                            'g . i';
   }
```

### grid-auto-flow属性

一、划分网格以后，容器的子元素会按照顺序，自动放置在每一个网格。默认的放置顺序是“先行后列”，先填满第一行，在开始放入第二行。

二、这个顺序由<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**grid-auto-flow**</span>属性决定，默认值是<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**row**</span>,”先行后列”。也可以将它设成<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**column**</span>,变成“先列后行”。

```css
// 先列后行   
.content-box {
       display: grid;
       grid-template-areas: 'a a a'
                            'b b b'
                            'c c c';
       grid-auto-flow: column;
   }
```

<img src="/image/Grid/13.PNG" style="zoom:33%;" />

#### row dense 和 column dense

<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**grid-auto-flow**</span>属性除了设置成<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**row**</span>和<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**column**</span>,还可以设成<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**row dense**</span>和<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**column dense**</span>。这两个值主要用于给某些项目指定位置以后，剩下的项目怎么自动设置。

*让1号项目和2号项目各三个单元格，然后在默认的<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**grid-auto-flow**</span>情况下，会产生下面这样的布局。*

```css
   .content-box {
       display: grid;
       grid-template-columns: repeat(5, 160px);
       grid-template-rows: repeat(5, 160px);
       grid-auto-flow: row;
   }
   .box:nth-child(1) {
        grid-column-start: 1;
        grid-column-end: 4;  
   }
   .box:nth-child(2) {
        grid-column-start: 1;
        grid-column-end: 4;  
   }
```

<img src="/image/Grid/14.PNG" style="zoom:33%;" />

在上图中，1号项目后面的位置是空的，这是因为3号项目默认跟着2号项目，所以会排在2号项目后面。当我们修改设置，设为<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**row dense**</span>,表示“先行后列”，并且尽可能精密填满，尽量不出现空格。

```css
.content-box {
       display: grid;
       grid-template-columns: repeat(5, auto);
       grid-template-rows: repeat(5, auto);
       grid-auto-flow: row dense;	/* 避免出现空格 */ 
   }
.box:nth-child(1) {
       grid-column-start: 1;
       grid-column-end: 4;  
   }
.box:nth-child(2) {
       grid-column-start: 1;
       grid-column-end: 4;  
   }
```

<img src="/image/Grid/15.PNG" style="zoom:33%;" />

*上图会先填满第一行，再填满第二行，所以3三号项目就会紧跟在1号项目的后面。*

如果将设置改为<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**column dense**</span>,表示“先列后行”，并且尽量填满空格。

```css
.content-box {
       display: grid;
       grid-template-columns: repeat(5, auto);
       grid-template-rows: repeat(5, auto);
       grid-auto-flow: column dense;	/* 避免出现空格 */ 
   }
.box:nth-child(1) {
       grid-column-start: 1;
       grid-column-end: 4;  
   }
.box:nth-child(2) {
       grid-column-start: 1;
       grid-column-end: 4;  
   }
```

<img src="/image/Grid/16.PNG" style="zoom:33%;" />

### justify-items属性，align-items属性

<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**justify-items**</span>属性设置单元格内容的水平位置（左中右），<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**align-items**</span>属性设置单元格内容的垂直位置（上中下）。

这两属性的写法完全相同，都可以使用一下属性值。

```css
.content-box {
  justify-items: start | end | center | stretch;
  align-items: start | end | center | stretch;
}
```



* <span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**start**</span>：对齐单元格的起始边缘。

*单元格的内容左对齐，效果如下图。*

```css
   .content-box {
       display: grid;
       grid-template-columns: repeat(5, 160px);
       grid-template-rows: repeat(5, 160px);
       justify-items: start;	/* 对齐单元格的起始边缘 */
   }
   .box {
        width: 100px;
        height: 100px;
   }
```

![](/image/Grid/17.PNG)

*单元格的内容头部对齐，效果如下图。*

```css
   .content-box {
       display: grid;
       grid-template-columns: repeat(5, 160px);
       grid-template-rows: repeat(5, 160px);
       align-items: start;	/* 单元格的内容头部对齐 */
   }
   .box {
        width: 100px;
        height: 100px;
   }
```

![](/image/Grid/18.PNG)

* <span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**end**</span>：对齐单元格的结束边缘。

*单元格的内容结束边缘对齐，效果如下图。*

```css
   .content-box {
       display: grid;
       grid-template-columns: repeat(5, 160px);
       grid-template-rows: repeat(5, 160px);
       justify-items: end;	/* 单元格的内容结束边缘对齐 */
   }
   .box {
        width: 100px;
        height: 100px;
   }
```

![](/image/Grid/19.png)

* <span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**center**</span>：单元格内部居中。
* <span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**stretch**</span>：拉伸，占满单格的整个宽度（默认值）。

### place-items属性

<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**place-items**</span>属性是<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**align-items**</span>属性和<span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**justify-items**</span>属性的合并简写形式。

* <span style='padding:2px 4px; color:#FFF;background: #FFB6C1;border-radius: 4px;'>**place-items:**</span> `<align-items> <justify-items>`;
