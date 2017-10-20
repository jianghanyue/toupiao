<template>
  <div class="dat">
    <div class="paiming">
      {{ e.paiming }}
    </div>
    <div class="xiang">
      {{ e.name }}
    </div>
    <!-- <div class="tiaowarp">
      <div class="tiao" v-bind:style="{width: `${width}`}">
      </div>
    </div> -->
    <div class="yuan">
      <span class="ssss">
        {{baifen}}
      </span>
      <div class="pie-yum">
      <svg width="50" height="50" viewBox="0 0 32 32">
        <circle r="16" cx="16" cy="16" fill="#ffffff" stroke="orange" stroke-width="16" />
        <circle r="16" cx="16" cy="16" fill="#ffffff" fill-opacity="0.5" stroke="red" stroke-width="16" :stroke-dasharray="baifenbi"/>
      </svg>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dat',
  props: ['e','votes','suaneve'],
  computed: {
    width: function () {
      console.log(this.e.uv,this.suaneve[0].uv);
      return (Math.round(this.e.uv/this.suaneve[0].uv * 10000) / 100.00 + "%")
    },
    baifenbi: function () {
      let num = Math.round(this.e.uv/this.votes * 100 )
      return num  + ' 100'
    },
    baifen: function () {
      let num = Math.round(this.e.uv/this.votes * 100 )
      return num + '%'
    }
  }
}
</script>

<style>
</style>
