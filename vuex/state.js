const state = {
  // 应用启动时， count置为0
  count: 0
}

const mutation = {
  // mutation的第一个参数是当前的state
  // 你可以在函数里修改 state
  increment (state, amount) {
    state.count = state.count + amount
  }
  reduce (state, amount) {
    state.count = state.count - amount
  }

}
