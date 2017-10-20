

const state = {
  shouquan: false,
  username: ''
}


const mutations = {
  'SET_SHOUQUAN' (state,{ username }) {
    state.username = username
    state.shouquan = true
    console.log(state.shouquan);
  }
}


export default {
  state,
  mutations
}
