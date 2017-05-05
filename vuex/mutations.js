/**
 * Created by liuyinghui on 17/4/7.
 */


// const store = new Vuex.Store({
//   state: {
//     count: 1
//   },
//   mutations: {
//     increment (state) {
//       // 变更状态
//       state.count++
//     }
//   }
// })
// store.commit('increment')
// 建议把此区当做事件注册来看（同步不是马上执行的意思，而是在当函数执行时，就得到结果）
const mutations = {
  increment(state) {
    state.count++
  },
  jianshao(state) {
    state.count--
  }
}
