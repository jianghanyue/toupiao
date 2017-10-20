<template>
    <div class="data-suv">
      <div class="xiangming">
        <div>
          排名
        </div>
        <div>
          菜名
        </div>
        <!-- <div>
          票数
        </div> -->
        <div>
          占比
        </div>
      </div>
      <div class="tiaos" v-for="e in suaneve">
        <dat
          :e="e"
          :suaneve="suaneve"
          :votes="votes"
        ></dat>
      </div>
    </div>
</template>

<script>
import Dat from './Dat'

export default {
  name: 'datas',
  components: { Dat },
  computed:{
    every: function () {
      return this.$store.state.vote.toupiaoxiang
    },
    eve: function () {
      console.log(this.every);
      return this.every.map( t => {
        const piao = this.$store.state.vote.votes.filter( re => re.eveId === t.id).length
        const meiyixiang = { name: t.toupiaoxiang, uv: piao ,paiming: 1}

        return meiyixiang
      })
    },
    suaneve: function () {
      let le = this.eve
      const len = le.length
      for( var i = 0; i < len; i++) {
        for ( var j = 0; j < len-1-i ;j++ ){
          if(le[j].uv>le[j+1].uv) {
            let temp = le[j+1]
            le[j+1] = le[j]
            le[j] = temp
          }
        }
        }
      let suv = le.slice()
        return suv.reverse().map( (t,i) => {
          const pai = t.paiming+i
          const x = {...t,paiming:pai}
          return x
        })

    },
    votes: function () {
      return this.$store.state.vote.votes.length
    }
  }
  }

</script>

<style>
svg {
  transform: rotate(-90deg);
  border-radius: 50%;
  width: 50px;
  height: 50px;
}

.css-pie {
  border-radius: 50%;
  background: #5C63A9;
  background-image: linear-gradient(to right, transparent 50%, pink 0);
  width: 130px;
  height: 130px;
}

.css-pie:before {
  content: '';
  margin-left: 50%;
  display: block;
  border-radius: 0 100% 100% 0 / 50%;
  background-color: inherit;
  transform-origin: left;
  height: 100%;
  // to give active "percentage"
  transform: rotate(.2turn);
}

.css-pie-2 {
  border-radius: 50%;
  background: #221A46;
  background-image: linear-gradient(to right, transparent 50%, pink 0);
  width: 130px;
  height: 130px;
}

.css-pie-2:before {
  content: '';
  margin-left: 50%;
  display: block;  position: fixed;
  left: 15%;
  top: 8%;
  background-color: inherit;
  transform-origin: left;
  height: 100%;
  // to give active "percentage"
  transform: rotate(.45turn);
}

.data-suv{
  width: 80%;
  height: 80%;
  background-color: #fff;
  padding: 20px;
  margin: 20px auto;
}
.tanchuang{
  background-color: rgba(0, 0, 0, 0.5);
}
.tiaos .dat{
  display: flex;
}
.tiao{
  height: 30px;
  background-color: blue;
  margin: 10px 0;
}
.xiang{
  width: 100px;
  line-height: 80px;
}
.xiangming{
  display: flex;
  line-height: 30px;

}
.xiangming div:nth-child(1){
  width: 80px;
}
.xiangming div:nth-child(2){
  width: 100px;
}
/*.xiangming div:nth-child(3){
  width: 550px;
}*/
.xiangming div:nth-child(3){
  width: 80px;
  padding-left: 5px;
}
.paiming{
  width: 60px;
  line-height: 80px;
  padding-left: 10px;
}
.tiaowarp{
  width: 500px;
}
.yuan{
  text-align: center;
}
</style>
