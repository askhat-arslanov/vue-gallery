import Vue from 'vue'
import VueRouter from 'vue-router'

import * as paths from '@/constants/paths'

import AuthHandler from '@/components/AuthHandler'
import ImageList from '@/components/ImageList'
import UploadForm from '@/components/UploadForm'

Vue.use(VueRouter)

const routes = [
  { path: paths.MAIN_PAGE, component: ImageList },
  { path: paths.UPLOAD_PAGE, component: UploadForm },
  { path: paths.OAUTH_PAGE, component: AuthHandler }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
