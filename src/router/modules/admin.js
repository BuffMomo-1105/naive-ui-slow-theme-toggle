import Admin from '@/views/admin/index.vue'

const adminRouter = {
  path: '/admin',
  component: Admin,
  //   redirect: 'noRedirect',
  name: 'Admin',
  meta: {
    title: 'Admin',
    icon: 'chart',
    requiresAdmin: true,
  },
  //   children: [
  //     {
  //       path: 'keyboard',
  //       component: () => import('@/views/charts/keyboard'),
  //       name: 'KeyboardChart',
  //       meta: { title: 'Keyboard Chart', noCache: true }
  //     },
  //     {
  //       path: 'line',
  //       component: () => import('@/views/charts/line'),
  //       name: 'LineChart',
  //       meta: { title: 'Line Chart', noCache: true }
  //     },
  //     {
  //       path: 'mix-chart',
  //       component: () => import('@/views/charts/mix-chart'),
  //       name: 'MixChart',
  //       meta: { title: 'Mix Chart', noCache: true }
  //     }
  //   ]
}

export default adminRouter
