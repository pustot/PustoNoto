# 数据结构类

```java
// List
// 创建列表
Arrays.asList("SIGN_OFF", "SIGN_ON")
// 声明
List<String> list;
// stream
if (list.stream().noneMatch(i -> i.getKey().equals(someElse))) {
        throw new ResponseStatusException(
            HttpStatus.BAD_REQUEST, "invalid someElse: " + someElse);
}
List<AForPublic> publicList = entityList.stream().map(
            x -> AConverter.INSTANCE.toAForPublic(
                    x,
                    aTypeService.get(x.getTypeKey()).getName(),
                    BConverter.INSTANCE.toBForPublic(bService.get(x.getBId()))
            )
    ).collect(Collectors.toList());

// String
// .substring()
// It throws IndexOutOfBoundsException If the beginIndex is less than zero OR beginIndex > endIndex OR endIndex is greater than the length of String.
"strawberries".substring(2, 5); // == "raw" ，跟python那样前闭后开
"strawberries".substring(6, 5); // 抛出异常
// String.equals() 用于比较内容相等，而 `==` 比较地址是否相等

// Boolean
// Boolean.parseBoolean("True") 将字符串参数解析为布尔值。 boolean返回的代表值为true 当字符串等于"true"，忽略大小写
Boolean.parseBoolean("True") // 返回true 。
Boolean.parseBoolean("yes") //返回false 。

// UUID
import java.util.Arrays;
Arrays.asList(UUID.fromString("0c312388-5d09-4f44-b670-5461605f0b1e"))

// Map<fromlichType, zulichType>

//
public interface xxx extends xxx2 {
    ;
}
```

# 其他-简单

```java
// 方法重载（overload）：编译时的多态
// 方法重写（override）：运行时的多态

// try ... catch ... finally
// 其中 finally 不管是否有异常都会执行
// catch 捕捉其中一个后，后面的都不会catch
// 因此如果把范围大的写范围小的前面，编译会报错
// 下面这段程序会报错
import java.io.IOException;
public class ExceptionTryCatchTest {
    public void doSomething() throws IOException{
        System.out.println("do somthing");
    }
    public static void main(String[] args){
        ExceptionTryCatchTest etct = new ExceptionTryCatchTest();
        try {
            etct.doSomething();
        } catch (Exception e) {

        } catch (IOException e) {  // !!!这里报错

        }
    }
}
// Exception，Error 是 Throwable 的两大子类，catch Exception 的话对 Error 无效

// this 指向当前对象，super 指向最近的父类

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


// JavaBean
// c'est ett Klass specialeux, escripté de Java,
// die langgehen JavaBean API, d.h.
// - eine arg-less Konstrukter
// - getter, setter, isser
// - serializeble
// und sie'est in JSP <jsp:useBean> benutzbar


// JSP, nämlich Java Server Pages
// womit man insertiert Java Koden ins HTML Pagen

```

`BATIS` is a persistence framework which automates the mapping between SQL databases and objects in Java, .NET, and Ruby on Rails. In Java, the objects are POJOs (Plain Old Java Objects).

MyBatis

In software engineering, a p`lain old Java object (POJO)` is an ordinary Java object, not bound by any special restriction.

`JPA` 全称是 Java Persistence API，jpa 定义了各种注解（用来定义实体，映射关系）。JPA 仅仅是一个规范，它的实现比较出名的是 Hibernate。JPA 的函数定义方式

`Protocol Buffers`（简称：`ProtoBuf`）是一种序列化数据结构的协议。对于透过管道(pipeline)或存储资料进行通信的程序开发上是很有用的。这个方法包含一个接口描述语言，描述一些数据结构，并提供程序工具根据这些描述产生代码，用于将这些数据结构产生或解析资料流。

`Apache Maven` ist ein auf Java basierendes Build-Management-Tool der Apache Software Foundation, mit dem insbesondere die Erstellung von Java-Programmen standardisiert verwaltet und durchgeführt werden kann.

- Maven versucht, den Grundgedanken „Konvention vor Konfiguration“ (englisch _Convention over Configuration_) konsequent für den gesamten Zyklus der Softwareerstellung abzubilden. Dabei sollen Softwareentwickler von der Anlage eines Softwareprojekts über das Kompilieren, Testen und Verpacken bis zum Verteilen der Software so unterstützt werden, dass möglichst viele Schritte automatisiert werden können. Folgt man dabei den von Maven vorgegebenen Standards, braucht man für die meisten Aufgaben des Build-Managements nur sehr wenige Konfigurationseinstellungen vorzunehmen, um den Lebenszyklus eines Softwareprojekts abzubilden.

# Test, Mockito

JUnit，单元测试框架。

Mockito，生成模拟的对象。

```java
@BeforeMethod
void setUp() {
    pass;
}

@Test
public void testSomething() {
    // mock()

    // when().thenReturn()

    // doAnswer().when(someClass).someMethod()

    // als-Args-gegeben-zu-werdende Methoden:
    // eq(); any();


    // loe assertEquals()
    assertEquals(thing1, thing2);

    SomeException throwable =
        expectThrows(SomeException.class, () -> service.get(id));
    assertEquals(throwable.getStatus(), HttpStatus.NOT_FOUND);


    // loe verify() de Mockito
    // it's used to verify interaction's times, order, arg, etc.
    // 能验证的只能是 mock 的对象
    verify(someObj, times(1))
        .someMethod(eq(
            someThingInner
        ));
    verify(someObj, never()).someMethod(any());
}


```

# Spring Boot

- entity 层：同 model 层，存放实体类，属性值同于数据库，提供 get、set
- dao 层（数据访问层）（后端用嘅数据）：即 mapper 层，对数据库进行持久化操作，他的方法是针对数据库操作的，基本用到的就是增删改查。它只是个接口，只有方法名字，具体实现在 mapper.xml 中。（可以写 SQL 语句的一些部分）
- service 层（业务逻辑层）（后端用嘅方法）：业务层，存放业务逻辑处理，不直接对数据库进行操作，有接口和接口实现类，提供 controller 层调用的方法。（里面的东西还是后端的类型。）
- controller 层（表示层）（前端用嘅方法）：控制器层，导入 service 层，调用 service 方法，controller 通过接收前端传过来的参数进行业务操作，在返回一个指定的路径或者数据表。（里面的东西转成前端的 request、response 等类型）
  总结：具体的一个项目中有：controller 层调用了 Service 层的方法，Service 层调用 Dao 层的方法，其中调用的参数是使用 Entity 层进行传递的。

```java

```

# OpenAPI

```java
// org.openapitools.codegen.languages.SpringCodegen
```
