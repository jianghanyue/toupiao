<template>
  <div class="add">
    <input type="text" v-model='toupiaoxiang'>
    <button type="button" @click="handleClick">新增</button>
  </div>
</template>

<script>


export default {
  name: 'add',
  data: function () {
    return {
      toupiaoxiang: ""
    }
  },
  methods: {
    handleClick: function () {
        this.$store.commit({type: "ADD_XIANG", toupiaoxiang: this.toupiaoxiang})
        this.toupiaoxiang = ''
    }
  },
  computed: {

  }
}

</script>

<style>
.add{
  display: flex;
  justify-content: center;
  margin-top: 30px;
  width: 80%;
  margin: 0 auto;
  padding: 15px;
  background-color: #fff;
}
.add input{
  border: 0;
  outline: 0;
  border-bottom: 2px solid blue;
  margin-left: 5px;
  background: none;
  width: 150px;
}
.add button{
  border: 0;
  outline: 0;
  background-color: #e91e63;
  border-radius: 5px;
  color: #fff;
  margin-left: 3px;
}
</style>
