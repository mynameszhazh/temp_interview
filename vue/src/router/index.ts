/**
  ts版本的路由
  2022年2月28日21:00:46
  CL
 */
 
  import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
 
  import login from '@/components/login.vue'    // 自定义的 登录页
  import main from '@/components/index.vue'  // 自定义的登出页
   
  /**
   * 定义路由模块
   * 2022年2月28日21:41:54
   * CL
   */
  const routes = [
    {
      path: '/',
      name: 'Login',
      component: login
    },
    {
      path: '/main',
      name: 'Main',
      component: main
    }
  ]
   
  /**
   * 定义返回模块
   */
  const router = createRouter({
    history: createWebHistory('/#/'),  // 设置为history模式，就是路径里面没有#,  createWebHashHistory 是默认的，括号里面的就是基础路径，可以理解为项目名称，就是请求路径的基础url
    routes
  })
   
  export default router
  