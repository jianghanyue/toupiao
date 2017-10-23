<template>
  <div class="voteeve">
    <span class="tittle">
      {{ eve.toupiaoxiang }}
    </span>
    <div class="xxx">
      <div class="like" v-for="vote in votes">
        {{ vote.voter }}
      </div>
    </div>
    <div v-if="voted" class="yitou">
      <button type="button">已投</button>
      <button type="button" @click="handleRemoreClick">撤消投票</button>
    </div>
    <div class="toupiao" v-else>
      <button type="button" @click="handleClick">
        投票
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vote-eve',
  props: ['eve'],
  computed: {
    votes: function () {
      return this.$store.state.vote.votes.filter( t => t.eveId == this.eve.id)
    },
    voted: function () {
      return this.votes.filter( t => t.voter === this.$store.state.auth.username).length
    }
  },
  methods: {
    handleClick: function () {
      if(this.$store.state.auth.shouquan){
        const voted = this.votes.filter( t => t.voter === this.$store.state.auth.username)
        if(voted.length) return
        const every = { voter: this.$store.state.auth.username,eveId: this.eve.id }
        this.$store.commit({ type: 'ADD_TOUPIAO', every})
      }else{
        alert("请输入你的名字")
      }
    },
    handleRemoreClick: function () {
      const id = this.votes.find( t => t.voter == this.$store.state.auth.username).id
      this.$store.commit({ type: 'DELETE_TOUPIAO', id })
    }
  }
}
</script>

<style>
.voteeve{
  position: relative;
}
.toupiao button{
  border: 0;
  outline: 0;
  background-color: red;
  border-radius: 3px;
  color: #fff;
}
.yitou{
  margin-top: 10px;
}
.yitou button{
  background-color: blue;
  border-radius: 3px;
  color: #fff;
  font-size: 14px;
  text-align: center;
  border: 0;
  outline: 0;
}
.yitou button:nth-child(2){
  background-color: red;
}
.xxx{
  display: flex;
  flex-wrap: wrap;
}
.like{
  margin-right: 15px;
  background-color: #81d4fa;
  padding: 0 8px;
}
</style>
