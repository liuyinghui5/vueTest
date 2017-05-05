/**
 * Created by liuyinghui on 17/4/7.
 */
import PublicComponent from './components/public'



const Public = {
  install:function(Vue) {
    vue.component ('Public',PublicComponent)
  }
}


export default Public
