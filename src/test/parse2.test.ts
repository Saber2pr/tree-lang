import { parse } from ".."

describe("parser", () => {
  it("test1", () => {
    const code = `
CSS层叠样式表
  flex
  三角形
  垂直居中
  水平垂直居中
  水平居中
  盒子模型
Github-API
  github鉴权
  使用github-issue api做评论系统
Git版本控制
  branch
  checkout
  github与git
  log
HTTP协议
  HTTP跨域之OPTIONS请求
  基本概念
Javascript基础
  HTML特殊字符转义
  JSONP跨域
  bind call apply和原理
  es6
    promise原理
  es7
    async & await原理
  fiber遍历
  vdom渲染
  事件捕获冒泡
  作用域和闭包
  原型链
  双向绑定
  可迭代对象(iterable)
  实现URL参数parser
  封装一个ajax
  数组克隆&数组 ES6 API实现
  深拷贝
  矩形相交
  类和继承
  节流防抖
  进入视口范围检测
Node
  koa中间件机制
  promisify
React原理
  React-Fiber实现
  reconciler实现
    beginWork
    commitAllWork
    commitWork
    createElement
    hook
      createContext
      useEffect
      useMemo
      useRef
      useState
    performUnitOfWork
    performWork
    reconcileChildren
    render
    updateHostProperties
    workLoop
    全局变量
  数据结构类型
    Fiber数据结构
    关于TSX的类型定义
  浏览器API
    requestIdleCallback方法
React基本布局
  下拉菜单
React生态
  React-Redux干了什么
  React生态源码阅读
  hoist-non-react-statics源码阅读
  useSelector和reselect源码阅读
Redux状态管理
  applyMiddleware
  bindActionCreators
  combineReducers
  compose
  createStore
  redux-thunk
  redux思想
Reflect反射原理
  reflect-metadata中HashMap巨大Object的读取速度优化
  reflect-metadata实现及其原理
  依赖注入(IOC)实现
  实现一个基于IOC的HttpServer框架
    实现一个基于IOC的HttpServer框架(上)
    实现一个基于IOC的HttpServer框架(下)
Typescript基础
  对比Monad在TS和Haskell中的使用
saber2prの窝
性能优化
  前端性能优化
我的思考
  INTJ的自我救赎
  保持学习
  如何面对选择
  学习方法论
  对失败的思考
  计划优先级
  障
数据结构算法
  base64算法
  排序算法
浏览器API(BOM)
  MutationObserver
  requestAnimationFrame
  requestIdleCallback方法
浏览器基础
  从输入URL到页面渲染
  浏览器内核
练习
  来测试一下？
`

    const tree = {
      name: "root",
      children: [
        {
          name: "CSS层叠样式表",
          children: [
            {
              name: "flex"
            },
            {
              name: "三角形"
            },
            {
              name: "垂直居中"
            },
            {
              name: "水平垂直居中"
            },
            {
              name: "水平居中"
            },
            {
              name: "盒子模型"
            }
          ]
        },
        {
          name: "Github-API",
          children: [
            {
              name: "github鉴权"
            },
            {
              name: "使用github-issue api做评论系统"
            }
          ]
        },
        {
          name: "Git版本控制",
          children: [
            {
              name: "branch"
            },
            {
              name: "checkout"
            },
            {
              name: "github与git"
            },
            {
              name: "log"
            }
          ]
        },
        {
          name: "HTTP协议",
          children: [
            {
              name: "HTTP跨域之OPTIONS请求"
            },
            {
              name: "基本概念"
            }
          ]
        },
        {
          name: "Javascript基础",
          children: [
            {
              name: "HTML特殊字符转义"
            },
            {
              name: "JSONP跨域"
            },
            {
              name: "bind call apply和原理"
            },
            {
              name: "es6",
              children: [
                {
                  name: "promise原理"
                }
              ]
            },
            {
              name: "es7",
              children: [
                {
                  name: "async & await原理"
                }
              ]
            },
            {
              name: "fiber遍历"
            },
            {
              name: "vdom渲染"
            },
            {
              name: "事件捕获冒泡"
            },
            {
              name: "作用域和闭包"
            },
            {
              name: "原型链"
            },
            {
              name: "双向绑定"
            },
            {
              name: "可迭代对象(iterable)"
            },
            {
              name: "实现URL参数parser"
            },
            {
              name: "封装一个ajax"
            },
            {
              name: "数组克隆&数组 ES6 API实现"
            },
            {
              name: "深拷贝"
            },
            {
              name: "矩形相交"
            },
            {
              name: "类和继承"
            },
            {
              name: "节流防抖"
            },
            {
              name: "进入视口范围检测"
            }
          ]
        },
        {
          name: "Node",
          children: [
            {
              name: "koa中间件机制"
            },
            {
              name: "promisify"
            }
          ]
        },
        {
          name: "React原理",
          children: [
            {
              name: "React-Fiber实现"
            },
            {
              name: "reconciler实现",
              children: [
                {
                  name: "beginWork"
                },
                {
                  name: "commitAllWork"
                },
                {
                  name: "commitWork"
                },
                {
                  name: "createElement"
                },
                {
                  name: "hook",
                  children: [
                    {
                      name: "createContext"
                    },
                    {
                      name: "useEffect"
                    },
                    {
                      name: "useMemo"
                    },
                    {
                      name: "useRef"
                    },
                    {
                      name: "useState"
                    }
                  ]
                },
                {
                  name: "performUnitOfWork"
                },
                {
                  name: "performWork"
                },
                {
                  name: "reconcileChildren"
                },
                {
                  name: "render"
                },
                {
                  name: "updateHostProperties"
                },
                {
                  name: "workLoop"
                },
                {
                  name: "全局变量"
                }
              ]
            },
            {
              name: "数据结构类型",
              children: [
                {
                  name: "Fiber数据结构"
                },
                {
                  name: "关于TSX的类型定义"
                }
              ]
            },
            {
              name: "浏览器API",
              children: [
                {
                  name: "requestIdleCallback方法"
                }
              ]
            }
          ]
        },
        {
          name: "React基本布局",
          children: [
            {
              name: "下拉菜单"
            }
          ]
        },
        {
          name: "React生态",
          children: [
            {
              name: "React-Redux干了什么"
            },
            {
              name: "React生态源码阅读"
            },
            {
              name: "hoist-non-react-statics源码阅读"
            },
            {
              name: "useSelector和reselect源码阅读"
            }
          ]
        },
        {
          name: "Redux状态管理",
          children: [
            {
              name: "applyMiddleware"
            },
            {
              name: "bindActionCreators"
            },
            {
              name: "combineReducers"
            },
            {
              name: "compose"
            },
            {
              name: "createStore"
            },
            {
              name: "redux-thunk"
            },
            {
              name: "redux思想"
            }
          ]
        },
        {
          name: "Reflect反射原理",
          children: [
            {
              name: "reflect-metadata中HashMap巨大Object的读取速度优化"
            },
            {
              name: "reflect-metadata实现及其原理"
            },
            {
              name: "依赖注入(IOC)实现"
            },
            {
              name: "实现一个基于IOC的HttpServer框架",
              children: [
                {
                  name: "实现一个基于IOC的HttpServer框架(上)"
                },
                {
                  name: "实现一个基于IOC的HttpServer框架(下)"
                }
              ]
            }
          ]
        },
        {
          name: "Typescript基础",
          children: [
            {
              name: "对比Monad在TS和Haskell中的使用"
            }
          ]
        },
        {
          name: "saber2prの窝"
        },
        {
          name: "性能优化",
          children: [
            {
              name: "前端性能优化"
            }
          ]
        },
        {
          name: "我的思考",
          children: [
            {
              name: "INTJ的自我救赎"
            },
            {
              name: "保持学习"
            },
            {
              name: "如何面对选择"
            },
            {
              name: "学习方法论"
            },
            {
              name: "对失败的思考"
            },
            {
              name: "计划优先级"
            },
            {
              name: "障"
            }
          ]
        },
        {
          name: "数据结构算法",
          children: [
            {
              name: "base64算法"
            },
            {
              name: "排序算法"
            }
          ]
        },
        {
          name: "浏览器API(BOM)",
          children: [
            {
              name: "MutationObserver"
            },
            {
              name: "requestAnimationFrame"
            },
            {
              name: "requestIdleCallback方法"
            }
          ]
        },
        {
          name: "浏览器基础",
          children: [
            {
              name: "从输入URL到页面渲染"
            },
            {
              name: "浏览器内核"
            }
          ]
        },
        {
          name: "练习",
          children: [
            {
              name: "来测试一下？"
            }
          ]
        }
      ]
    }

    expect(parse(code)).toEqual(tree)
  })
})
