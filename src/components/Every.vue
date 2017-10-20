<template>
  <div class="every">
    <div class="ss" v-for='eve in every'>
      <vote-eve
        :eve="eve"
      ></vote-eve>
    </div>
  </div>
</template>

<script>
import VoteEve from './VoteEve'

export default {
  name: 'every',
  components: { VoteEve },
  data: function () {
    return {

    }
  },
  computed:{
    every: function () {
      return this.$store.state.vote.toupiaoxiang
    }
  }
}
</script>

<style>
  .ss{
    display: flex;
    justify-content: center;
    margin-top: 30px;
    width: 80%;
    margin: 0 auto;
    padding: 15px;
    background-color: #fff;
    margin-bottom: 20px;
    flex-direction: column;
    text-align: center;
  }
  .tittle{
    border: 3px solid #81d4fa;
    color: #81d4fa;
    padding: 5px;
    text-align: center;
  }
  .toupiao{
    margin-top: 10px;
  }
  .like{
    display: flex;
    flex-wrap: wrap;
  }
  .like{
    background-color: #ccc;
    margin-right: 5px;
    margin-top: 20px;
  }
</style>
