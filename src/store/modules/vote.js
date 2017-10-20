import axios from 'axios'
import shortid from 'shortid'
// var shortid = require('shortid')

const state = {
  toupiaoxiang: [
    {
      toupiaoxiang: '水煮鱼',
      id: 1
    },
    {
      toupiaoxiang: '宫保鸡丁',
      id: 2
    },
    {
      toupiaoxiang: '鱼香肉丝',
      id: 3
    }
  ],
  votes:  [
    {
      id: 2,
      voter: "Luxi",
      eveId: 1
    },
    {
      voter: "Jock",
      eveId: 1,
      id: 5
    },
    {
      voter: "sss",
      eveId: 1,
      id: 6
    },
    {
      voter: "sss",
      eveId: 2,
      id: 7
    },
    {
      voter: "sss",
      eveId: 3,
      id: 8
    },
    {
      voter: "3532",
      eveId: 3,
      id: 9
    },
    {
      voter: "cas5",
      eveId: 3,
      id: 10
    },
    {
      voter: "vcaszx231",
      eveId: 3,
      id: 11
    },
    {
      voter: "aa",
      eveId: 2,
      id: 12
    }
  ]
}

const mutations = {
  'ADD_XIANG' (state,{ toupiaoxiang }) {
    state.toupiaoxiang.push( { toupiaoxiang: toupiaoxiang, id: shortid.generate() } )
  },
  'ADD_TOUPIAO' (state, { every }) {
    console.log({...every,id: shortid.generate()});
    state.votes.push({...every,id: shortid.generate()})
  },
  'LOAD_VOTE' (state, { votes }) {
    state.votes = votes
  },
  'DELETE_TOUPIAO' (state, { id }){
    console.log(id)
    state.votes = state.votes.filter( t => t.id != id)
  }
}

export default {
  state,
  mutations
}
