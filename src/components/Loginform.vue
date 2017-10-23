<template>
  <div id="login-form">
    <div class="header">
      <div v-if="shouquan">
        <span>你是 </span>
        <input type="text" v-model='username' placeholder="你的名字">
        <button type="button" @click="handleClick"> 保存 </button>
      </div>
      <div v-else>
        我是{{ name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login-form',
  data: function () {
    return {
      username: ""
    }
  },
  methods: {
    handleClick: function () {
      if(this.username.trim()){
        this.$store.commit({ type: 'SET_SHOUQUAN', username: this.username  })
        this.username = ''
      }
    }
  },
  computed: {
    shouquan: function () {
      return !this.$store.state.auth.shouquan
    },
    name: function () {
      return this.$store.state.auth.username
    }
  }
}
</script>

<style scoped>
.header{
  display: flex;
  justify-content: center;
  margin-top: 30px;
  width: 80%;
  margin: 0 auto;
  padding: 15px;
  background-color: #fff;
  margin-bottom: 20px;
}
.header input{
  border: 0;
  outline: 0;
  border-bottom: 2px solid blue;
  margin-left: 5px;
  background: none;
  width: 100px;
}
.header button{
  border: 0;
  outline: 0;
  background-color: red;
  border-radius: 5px;
  color: #fff;
  margin-left: 3px;
}
</style>
