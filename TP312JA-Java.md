# 数据结构类
```java
// 创建列表
Arrays.asList("SIGN_OFF", "SIGN_ON")
// 声明
List<String> xxx;

// UUID
import java.util.Arrays;
Arrays.asList(UUID.fromString("0c312388-5d09-4f44-b670-5461605f0b1e"))

```

# 其他-简单

```java
// package
// 必须是第一条非注释语句。一个文件只有一个包。
// 可以无障碍使用包里的其他文件里定义的类。
package net.java.util; // 那么它的路径应该是 net/java/util/Something.java 这样保存的
public class Something{
   ...
}

// `@`: Java Annotation (注解)
// Java 注解只是检查、对比等工作（方法、类或变量）；而 Python 装饰器直接改变修饰的方法或类的功能。
@Override  //标记重写方法，在编译阶段对方法进行检查


// assert
assertTrue(roleTypeConfig.getRoleType("none").isEmpty());


// Test
@Test
...

// json：JavaScript Object Notation。
// json 里的属性名也是驼峰式地写。

// com.fasterxml.jackson... 包用以 java object 与 json
// deserialize 即 json 转 java对象
// json 里的属性名也是驼峰式地写。

// org.slf4j... 包是一个日志框架（Simple Logging Facade for Java）


```

# Spring Boot

- entity 层：同model层，存放实体类，属性值同于数据库，提供get、set
- dao 层（数据访问层）（后端用嘅数据）：即mapper层，对数据库进行持久化操作，他的方法是针对数据库操作的，基本用到的就是增删改查。它只是个接口，只有方法名字，具体实现在mapper.xml中。（可以写SQL语句的一些部分）
- service 层（业务逻辑层）（后端用嘅方法）：业务层，存放业务逻辑处理，不直接对数据库进行操作，有接口和接口实现类，提供controller层调用的方法。（里面的东西还是后端的类型。）
- controller层（表示层）（前端用嘅方法）：控制器层，导入service层，调用service方法，controller通过接收前端传过来的参数进行业务操作，在返回一个指定的路径或者数据表。（里面的东西转成前端的 request、response 等类型）
总结：具体的一个项目中有：controller层调用了Service层的方法，Service层调用Dao层的方法，其中调用的参数是使用Entity层进行传递的。

```java

```
