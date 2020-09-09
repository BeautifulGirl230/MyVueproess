# java笔记

## 数据类型

### 基本数据类型

* 整型： `byte、short、int、long`

  `java` 的整型常量默认为`int`型，在`java`程序中变量通常声明为`int`型，除非不足以表示较大的数才用`long`，而在声明`long`型常量必须在后面加上`l`或`L`。

  |  类型   | 占用储存空间 |                   表数范围                   |
  | :-----: | :----------: | :------------------------------------------: |
  | `byte`  | 1字节=8`bit` |                  -128 ~ 127                  |
  | `short` |    2字节     |     -2<sup>15</sup> ~ 2<sup>15</sup> - 1     |
  |  `int`  |    4字节     | -2<sup>31</sup> ~ 2<sup>31</sup> -1 (约21亿) |
  | `long`  |    8字节     |     -2<sup>63</sup> ~ 2<sup>63</sup> - 1     |

  

* 浮点型：`float、double`

  ​	浮点型表示小数点的数值，`java`浮点型常量默认类型为`double`。

  * `float`表示数值的范围比`long`还大，在定义`float`变量时，变量要以`f`或`F`结尾（尾数可以精确到7位数字。很多情况下，精度很难满足需求）
  * `double`精度是`float`的两倍。（通常采用此类型定义）

  |      类型      | 占用储存空间 |        表数范围        |
  | :------------: | :----------: | :--------------------: |
  | 单精度`float`  |    4字节     |  -3.403E38 ~ 3.403E38  |
  | 双精度`double` |    8字节     | -1.798E308 ~ 1.798E308 |

  

* 字符型：`char`

  在声明`char`型变量时，通常使用一对`' '`，内部只能写一个字符。

  实列：

  * `char = '世'`  √
  * `char = '世界'` ×

  |  类型  | 占用储存空间  | 表数范围 |
  | :----: | :-----------: | :------: |
  | `char` | 1字符 = 2字节 |  '`字`'  |

  

* 布尔型：`boolean`

  布尔型只有两个值：`true`、`false`，一般用在判断、循环结构中使用。

### 引用数据类型

* 特殊：字符串（`String`属于引用数据类型）

  `String`可以和所用数据类型进行计算，结果都为`String`类型

* 类（`class`）

* 接口（`interface`）

* 数组（`array`）

## 基本数据类型之间的运算规则

### 自动类型提升

（`byte` 、`char`、 `short`） → `int` → `long` → `float` → `double`

> 特别：当`byte`、`char`、`short`三种类型的变量做运算时，结果为`int`类型。

* 当容量小的数据类型的变量与容量大的数据类型的变量做运算时，结果自动提升为容量大的类型

> 说明： 此时的容量大小指的是表示数的范围的大和小。
>
> 比如：`float`容量要大于`long`的容量。

### 强制类型转换

强制类型转换就相当与自动类型提升运算的逆运算

* 强制数据转换需要使用强转符：()

* 注意：强制类型转换，可能导致精度损失

  ```java
  public class VariableTest2 {
      public static void main(String[] args){
         /*精度损失举例1*/
          double d1 = 12.3;
          int i1 = (int)d1;
          System.out.println(i1); // 12
  
          /*没有损失精度*/
          long d2 = 123L;
          short i2 = (short)d2;
          System.out.println(i2); // 123
  
          /*精度损失举例2*/
          int d3 = 128;
          byte i3 = (byte)d3;
          System.out.println(i3); // -128
      }
  }
  ```

## 运算符

### 逻辑运算符

* &-----逻辑与			| ----- 逻辑或			! ----- 逻辑非
* &&-----短路与			|| ----- 断路或			^ ----- 逻辑异或

|   a   |   b   | a & b | a && b | a \| b | a \|\| b |  !a   | a ^ b |
| :---: | :---: | :---: | :----: | :----: | :------: | :---: | :---: |
| true  | true  | true  |  true  |  true  |   true   | false | false |
| true  | false | false | false  |  true  |   true   | false | true  |
| false | true  | false | false  |  true  |   true   | true  | true  |
| false | false | false | false  | false  |  false   | true  | false |

* 区分 `&` 与 `&&`
  * 相同点1：`&` 与 `&&` 的运算结果相同
  * 相同点2：当符号左边是`true`时，二者都会执行符号右边的运算
  * 不同点：当符号左边是`false`时，`&`继续执行符号右边的运算。而`&&`不再执行符号右边的

* 区分 `|` 与 `||`
  * 相同点1：`|` 与 `||` 的结果相同
  * 形同点2：当符号左边是`false`时，二者都会执行后面的操作
  * 不同点：当符号左边时`true`时，`|`继续执行符号右边的运算，而 `||`不在执行符号右边的操作

### 位运算符

位运算符操作的都是整型的数据。

位运算符是直接对整数的二进制进行计算。

| 运算符 |    运算    |               范例               |
| :----: | :--------: | :------------------------------: |
|  `<<`  |    左移    | `3 <<` 2 = 12 ( 3 * 2 * 2 = 12 ) |
|  `>>`  |    右移    |   3 `>>` 1 = 1 （ 3 / 2 = 1 ）   |
| `>>>`  | 无符号右移 |   3 `>>>` 1 = 1 ( 3 / 2 = 1 )    |
|  `&`   |   与运算   |           6 `&` 3 = 2            |
|  `|`   |   或运算   |           6 `|` 3 = 7            |
|  `^`   |  异或运算  |           6 `^` 3 = 5            |
|  `~`   |  取反运算  |            `~` 6 = -7            |

* 注意：没有`<<<`无符号左移

|       |                        位运算符的细节                        |
| :---: | :----------------------------------------------------------: |
| `<<`  |            空位补0，被移除的高位丢弃，空缺位补0。            |
| `>>`  | 被移位的二进制最高位是0，右移后，空缺位补0；最高位如果是1，则空缺位补1。 |
| `>>>` |       被移位二进制最高位无论是0或者是1，空缺位都补0。        |
|  `&`  |     二进制位进行`&`运算，只有1 `&` 1时结果是1，否则是0。     |
|  `|`  |      二进制位进行`|`运算，只有0`|`0时结果是0，否则是1。      |
|  `^`  | 相同二进制位进行`^`运算，结果是0；（ 1 `^` 1 = 0, 0 `^` 0 = 0 ）<br />不相同二进制位`^`运算结果是1。（ 1 `^` 0 = 1, 0 `^` 1 = 1 ） |
|  `~`  | 正数取反，各二进制码按补码各位取反<br />负数取反，各二进制码按补码各位取反 |

`<<` ：在一定范围内，每项左移1位，相当于 `*` 2

`>>`： 在一定范围内，每项右移1位，相当于 `/`  2

```java
public class BitTest {
    public static void main(String[] args) {
        int i = 21;
        int j = -21;
        System.out.println(" j << 2 = " + ( j << 2 ));  // -21 * 2 * 2 = -84
        System.out.println(" i << 2 = " + ( i << 2 ));  // 21 * 2 * 2 = 84
        System.out.println(" i << 3 = " + ( i << 3 ));  // 21 * 2 * 2 * 2 = 168

        System.out.println(" j >> 2 = " + ( j >> 2 ));  // -21 / 2 / 2 = -6
        System.out.println(" i >> 2 = " + ( i >> 2 ));  // 21 / 2 / 2 = 5
        System.out.println(" i >> 3 = " + ( i >> 3 ));  // 21 / 2 / 2 / 2 = 2

        int m = 12;
        int n = 5;
        System.out.println(" m & n = " + ( m & n ));    // 4
        System.out.println(" m | n = " + ( m | n ));    // 13
        System.out.println(" m ^ n = " + ( m ^ n ));    // 9
    }
}

```

数值之间的交换：

```java
	   //  交换两个变量的值
        int num1 = 10;
        int num2 = 20;
        System.out.println(" num1 = " + num1 + " ,num2 = " + num2);

        //  方法一：推荐以定义临时变量的方式进行交换
        //  好处：适用于多种类型
        int temp = num1;
        num1 = num2;
        num2 = temp;
        System.out.println(" num1 = " + num1 + " ,num2 = " + num2);

        // 方法二：
        // 好处：不用定义临时变量
        // 弊端：①相加操作可能超出存储范围②有局限性：只针对数值类型
        int num3 = 10;
        int num4 = 20;
        num3 = num3 + num4; // num3 = 30;
        num4 = num3 - num4; // num4 = 10;
        num3 = num3 - num4; // num3 = 20;

        System.out.println(" num3 = " + num3 + " ,num4 = " + num4);

        // 方法三：实用位运算符
        // 好处：不用定义临时变量
        // 弊端：有局限性：只针对数值类型
        int num5 = 10;
        int num6 = 20;
        num5 = num5 ^ num6;
        num6 = num5 ^ num6;
        num5 = num5 ^ num6;
        System.out.println(" num5 = " + num5 + " ,num6 = " + num6);
```

## 程序流程控制

* 顺序结构
  * 程序从上到下逐行执行，中间没有任何判断和跳转
* 分支结构
  * 根据条件，选择性的执行某段代码
  * 有`if……else`和`switch-case`两种分支语句
* 循环结构
  * 根据循环条件，重复性的执行某段代码
  * 有`while`、`do……while`、`for`三种循环语句
  * 注：JDK1.5提供了`foreach`循环，方便的遍历集合、数组元素

### Switch-case

1. 根据`switch`表达式中的值，依次匹配各个`case`中的常量。一旦匹配成功，则进入相应`case`结构中，调用其执行语句。当调用完执行语句以后，则任然继续向下执行其它`case`结构中的执行语句，直到遇到`break`关键字或此`switch-case`结构末尾结束为止。
2. `break`，可以使用在`switch-case`结构中，表示一旦执行到此关键字，就跳出`switch-case`结构。
3. `switch0`结构中的表达式，只能是如下的6中类型之一：`byte`、`short`、`char`、`int`、枚举类型（JDK5.0新增）、`String`类型（JDK7.0新增）。
4. `case`后面的值只能放置常量。不能声明范围。
5. `break`关键字是可选的。
6. `default`相当于`if-else`中的`else`。是可选的，而且位置是灵活的。

```java
public class SwitchCaseTest {
    public static void main(String[] args) {
        String season = "summer";
        switch(season) {
            case "spring":
                System.out.println("春暖花开");
                break;
            case "summer":
                System.out.println("夏日炎炎");
                break;
            case "autumn":
                System.out.println("秋高气爽");
                break;
            case "winter":
                System.out.println("白雪皑皑");
                break;
            default:
                System.out.println("季节输入有误！");
                break;
        }
    }
}
```

### For循环结构的使用

1. 循环结构的四个要素

   ①	初始化条件

   ②	循环条件（结果是Boolean类型）

   ③	循环体

   ④	迭代条件
   
   > for (①，②，④){
   > 	③
   > }
   
2. 执行过程：① → ② → ③ → ④→ ② → ③ → ④→ ② → ③ → ④ ....直到②不满足条件（false）跳出循环。

   ```java
   for (int i = 1; i < 100; i++) {
       System.out.println(i)
   }
   ```

   ### while循环的结构使用

   1. 循环结构的四个要素

      ①	初始化条件

      ②	循环条件（结果是Boolean类型）

      ③	循环体

      ④	迭代条件

      > ①
      >
      > while( ② ){
      > 	③；
      >
      > ​	④；
      >
      > }

   2. 执行过程：① → ② → ③ → ④→ ② → ③ → ④→ ② → ③ → ④ ....直到②不满足条件（false）跳出循环。

   3. 在写`while`循环千万小心不要丢了迭代条件。一旦丢了，就可能导致程序死循环！

   4. `for`循环和`while`循环是可以相互转换的。

      区别： `for`循环和`while`循环的初始化条件部分的作用范围不同。

   ```java
   int i = 1;
   while (i <= 100) {
       System.out.println(i);
       i++;
   }
   System.out.println(i); // 101
   ```

## Array数组

**一、数组的概述**

1. **数组的理解**：

    ①	数组（Array），是多个相同类型数据按一定顺序排列的集合，并使用一个名字命名，并通过编号的方式对这些数据进行统一管理。

    ②	数组属于引用数据类型，数组的元素也可以是引用类型。

2. **数组相关的概念**：

   * 数组名
   * 元素
   * 角标、下标、索引
   * 数组的长度：元素 的个数

3. **数组的特点**：

   ①	数组是有序排列的

   ②	数组属于引用数据类型变量。

   ③	创建数组对象会在内存中开辟一整快连续的空间

   ④	数组的长度一旦确定，就不能修改。

   ⑤	**数组的元素**：

   * 既可以是基本数据类型 （`byte`、`short`、`int`、`long`）

   * 也可以是引用类型（`String`）

4. **数组分类**：

    ①	按照维数：一维数组、二维数组、.....

    ②	按照数组元素的类型：基本数据类型元素的数组，引用数据类型元素的数组

### 一维数组的使用

#### 一维数组的声明和初始化

* **静态初始化**：数组的初始化和数组元素的赋值操作同时进行

```java
//		声明
 		int num; 
// 		初始化
 		num = new int[]{1001, 1002, 1003, 1004}; 
		/* 或 */
// 		声明 + 初始化
 		int num = new int[]{1001, 1002, 1003, 1004}; 
```

* **动态初始化**：数组的初始化和数组元素的赋值操作分开进行

```java
//		声明
 		String names; 
// 		初始化
 		names = new String[5]; 
		/* 或 */
// 		声明 + 初始化
String[] names = new String[5];
```

* **简写：**

```Java
// 方式一
int[] arr6 = { { 1, 2, 3 }, { 4, 5 }, { 6, 7, 8, 9 } };

// 方式二
String arr7[] = new String[3];
```

*总结：数组一旦初始化完成，其长度就确认了。*

#### 调用指定位置的一维数组元素：

**通过角标的反方式调用：**数组的角标（或索引）从0开始的，到数组的长度`-1`结束。

```java
names[0] = "王二";
names[1] = "李四";
names[2] = "张三";
names[3] = "王五";
names[4] = "老六";
```

#### 获取一维数组的长度。

> 属性：`length`

```java
System.out.println(names.length);
```

#### 遍历一维数组

```java
for (int i = 0; i < names.length; i++) {
    System.out.println(names[i]);
}
```

#### 一维数组元素的默认初始化值

* **数组元素是整形：**0
* **数组元素是浮点型:** 0.0
* **数组元素是`char`型：**0 或 '\u0000',而非'0'
* **数组元素是`boolean`型：**`false`
* **数组元素是引用类型:** `null`,而非 `"null"`

```java
//		整形
		int[] arr = new int[4];
		for(int i = 0; i < arr.length; i++) {
			System.out.println(arr[i]);	// 00000
		}
		System.out.println("*********************");
		
//		整型
		short[] arr1 = new short[4];
		for(int i = 0; i < arr1.length; i++) {
			System.out.println(arr1[i]); // 00000
		}
		System.out.println("*********************");
		
//		浮点型
		float[] arr2 = new float[4];
		for(int i = 0; i < arr2.length; i++) {
			System.out.println(arr2[i]); //0.0
		}
		System.out.println("*********************");
		
//		字符型
		char[] arr3 = new char[4];
		for(int i = 0; i < arr3.length; i++) {
			System.out.println("----" + arr3[i] + "****"); // ---- ****
		}
		
		if(arr3[0] == 0) {
			System.out.println("您好！"); // 您好！
		}
		System.out.println("*********************");
		
//		布尔型
		boolean[] arr4 = new boolean[5];
		System.out.println("布尔型默认值：" + arr4[0]); // 布尔型默认值：false
		System.out.println("*********************");
		
//		引用类型
		String[] arr5 = new String[5];
		System.out.println(arr5[0]); // null
		if (arr5[0] == null) {
			System.out.println("深圳天气不错！"); // 深圳天气不错！
		}
```

####  数组的内存解析

![](/image/java/Array1.png)

### 二维数组的使用

#### 二维数组的理解

对于二维数组的理解，我们可以看成是一维数组`array1`里又作为另一个一维数组`array2`的元素而存在。<font color=red>数组底层的运行机制来看，其实没有多维数组</font>（都是一维数组，只不过在一维数组的元素中重新指向了一个新的一维数组）。

#### 二维数组的声明和初始化

* **静态初始化**：数组的初始化和数组元素的赋值操作同时进行

```java
int[][] arr = new int[][] { { 1, 2, 3 }, { 4, 5 }, { 6, 7, 8, 9 } };
```

* **动态初始化**：数组的初始化和数组元素的赋值操作分开进行

```java
// 动态初始化:方式一
String[][] arr1 = new String[3][2];
		
// 动态初始化:方式二
String[][] arr2 = new String[3][];
```

* **简写：**

```Java
// 方式一
int[][] arr6 = { { 1, 2, 3 }, { 4, 5 }, { 6, 7, 8, 9 } };

// 方式二
String[] arr7[] = new String[3][2];

// 方式三
String arr8[][] = new String[3][2];
```

*总结：数组一旦初始化完成，其长度就确认了。*

#### 调用指定位置的二维数组元素

**通过角标的反方式调用：**数组的角标（或索引）从0开始的，到数组的长度`-1`结束。

```java
int[][] arr = new int[][] { { 1, 2, 3 }, { 4, 5 }, { 6, 7, 8, 9 } };
String[][] arr1 = new String[3][2];

System.out.println(arr[0][1]);	// 2
System.out.println(arr1[1][1]);	// null

arr2[1] = new String[4];
System.out.println(arr2[1][1]);	// null
```

#### 获取二维数组的长度。

> 属性：`length`

```java
int[][] arr = new int[][] { { 1, 2, 3 }, { 4, 5 }, { 6, 7, 8, 9 } };

System.out.println(arr.length);	// 3
System.out.println(arr[0].length); // 3
System.out.println(arr[1].length); // 2
```

#### 遍历二维数组

```java
int[][] arr = new int[][] { { 1, 2, 3 }, { 4, 5 }, { 6, 7, 8, 9 } };

for (int i = 0; i < arr.length; i++) {
    for (int j = 0; j < arr[i].length; j++) {
        System.out.print(arr[i][j] + " ");
    }
    System.out.println();
}
/*
1 2 3 
4 5
6 7 8 9
*/
```

#### 二维数组元素的默认初始化值

**针对于初始方式一：**`int[][] arr = new int[4][3]`。

* **外层元素的初始化值为：**地址值（用来指定内层元素的位置）

* **内层元素的初始化值为：**于一维数组初始化情况相同

**针对于初始方式二：**`int[][] arr = new int[4][]`。

* **外层元素的初始化值为：**`null`

* **内层元素的初始化值为：**不能调用，报错空指针异常

```java
int[][] arr = new int[4][3];
		
// 整型
System.out.println(arr[0]);	// 地址值：[I@15db9742
System.out.println(arr[0][0]);	// 0

// 浮动型
float[][] arr1 = new float[4][3];
System.out.println(arr1[0]);	// 地址值：[F@6d06d69c
System.out.println(arr1[0][0]); // 0.0

// 引用型
String[][] arr2 = new String[4][3];
System.out.println(arr2[1]);	// 地址值：[Ljava.lang.String;@7852e922
System.out.println(arr2[1][1]); // null

double[][] arr3 = new double[4][];
System.out.println(arr3[1]);	// null
System.out.println(arr3[1][0]); // 报错：空指针异常
```

####  数组的内存解析

<img src="/image/java/Array2.png" style="zoom:80%;" />

### 数组中常见的异常

#### 数组角标越界的异常

> <font color=red>ArrayIndexOutOfBoundsExcetion</font>

```java
int[] arr = new int[]{1,2,3,4,5,6};
for (int i = 0; i <= arr.length; i++) {
    System.out.println(arr[i]);
}
System.out.println(arr[-2]);
```

#### 空指针异常

> <font color=red>NullPointerException</font>

```java
// 情况一:
int[] arr1 = new int[]{1,2,3};
arr1 = null;
System.out.println(arr1[0]);

// 情况二:
int[][] arr2 = new int[4][];
System.out.println(arr2[0][0]);

// 情况三:
String[] arr3 = new String[]{"AA","BB","CC"};
arr3[0] = null;
System.out.println(arr3[0].toString());
```

## 面向对象

### 什么是面向对象

**java类及类的成员：**属性、方法、构造器、代码块、内部类

**面向对象的三大特点：**封装性、继承性、多态性、（抽象性）

**其它关键字：**`this`、`super`、`static`、`final`、`abstract`、`interface`、`package`、`import`等

**面向过程：**强调的是功能行为，以函数为最小单位，考虑怎么做。

**面向对象：**强调具备功能的对象，以类/对象为最小单位，考虑谁来做。

### 面向对象的思想概述

**类(`Class`)和对象(`Object`)是是面向对象的核心概念**

* 类是对一类事物的描述，是抽象的、概念上的定义
* 对象是实际存在的该类事物的每个个体，因而也称为实例（`instance`）

**类：**设计类的成员

* **属性：**成员变量（`field`）
* **方法：**成员方法（`method`）

### 类和对象的使用

#### 创建类，设计类的成员

```java
class Person {
	// 属性
	String name;
	int age = 1;
	boolean isMale;

	// 方法
	public void eat() {
		System.out.println("人可以吃饭");
	}
	public void sleep() {
		System.out.println("人可以睡觉");
	}
	public void talk(String language) {
		System.out.println("人可以说话，使用的是：" + language);
	}
}
```

#### 创建类的对象

> 创建类的对象，也称为类的实例化、实例化类。

```java
Person p1 = new Person();
```

#### 通过“对象.属性”或“对象.方法”调用对象的结构

```java
// 调用对象结构:属性
p1.name = "Tom";
p1.isMale = true;
System.out.println(p1.name);
// 调用对象结构:方法
p1.eat();
p1.sleep();
p1.talk("Chinese");
```

***如果创建了一个类的多个对象，则每个对象都是独立的拥有一套类的属性。（非static的）***

***如果我们修改一个对象的属性，则不影响其它对象属性的值***

### 对象的内存解析

![](/image/java/OOP01.png)

### <font color=red>属性（成员变量）与局部变量的区别</font>

**相同点：**

* 定义变量的格式：`数据类型 变量名 = 变量值`
* 先声明：后使用
* 变量都有其对应的作用域

**不同点：**

一、在类中声明的位置不同

* **属性：**直接定义在类的一对`{ }`内。
* **局部变量：**声明在方法内、方法形参、代码快内、构造器形参、构造器内部的变量。

二、关于权限修饰符的不同

* **属性：**可以在声明属性时：指明其权限，使用权限修饰符。

  常用的权限修饰符：`private`、`public`、`protected`、缺省（默认）

* **局部变量：**不可以使用权限修饰符

三、默认初始化值的情况

* **属性：**类的属性，根据其类型，都是默认初始化值。

  整形（`byte`、`short`、`int`、`long`）： 0

  浮点型（`float`、`double`）：0.0

  字符型（`char`）：0 或 ‘\u0000’

  布尔型（`boolean`）：`false`

  引用数据类型（类、数组、接口）： `null`

* **局部变量：**没有默认初始化值。

  注意：我们在调用局部变量前一定要先赋值。

  特别：形参在调用时进行赋值即可。

四、在内存中加载的位置

* **属性：**加载到堆空间中（heap）（非`static`）

* **局部变量：**加载到栈空间中（stack）

### 有返回值和没有返回值

* 如果方法有返回值，则必须在方法声明时，指定返回值的类型。

  同时，方法中，需要使用`return`关键字来返回指定类型的变量或常量的数据。

* 如果方法没有返回值，则方法声明时，使用`void`来表示。

  通常，在没有返回值的方法中，就不需要使用`return`，如果使用`return;`，则表示结束此方法的意思。

