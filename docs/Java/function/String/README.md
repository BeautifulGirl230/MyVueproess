# 判断String类型是否相等并返回Boolean值

## String.equals（Object anObject）

> * 返回类型为`Boolean`
> * 如果此对象与指定的对象相同，则返回true。

```java
import java.util.Scanner;

public class StringEquals {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("您是男生还是女生？(男生/女生)");
        String sex = scanner.next();
        if (sex.equals("男生")){
            System.out.println("那您一定很帅！");
        }else if (sex.equals("女生")){
            System.out.println("那您一定很漂亮！");
        }else {
            System.out.println("您输入的性别有误");
        }
    }
}
```

