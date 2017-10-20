<template>
  <div id="home">
    <div class="ads">
      <login-form></login-form>
      <every></every>
      <add></add>
      <datas></datas>
    </div>
  </div>
</template>

<script>
import LoginForm from './Loginform'
import Add from './Add'
import Every from './Every'
import Datas from './Datas.vue'

export default {
  name: 'Home',
  components: { LoginForm,Add,Every,Datas }
}
</script>

<style scoped>
  #home{
    width: 100%;
    margin: 0 auto;
    background-color: #81d4fa;
    padding: 30px;
    display: flex;
    flex-direction:column;
    min-height: 100vh;
  }

</style>
