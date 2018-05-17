import Vue from 'vue'

const app = new Vue({
  el: '#root',
  template: '<div>{{text}}</div>',
  data: {
    text: 'text'
  },
  beforeCreate () {
    // 在创建之前
    console.log(this, 'beforeCreate')
  },
  created () {
    // 和数据有关的操作可以放在created里面也可以放在mounted里面
    console.log(this, 'created')
  },
  beforeMount () {
    // 在插入之前
    console.log(this, 'beforeMount')
  },
  mounted () {
    // dom操作要放在mounted里面，因为在此之前节点没有准备完全，拿不到组件对应的dom节点
    // 操作数据可以放在created或者mounted里面
    console.log(this, 'mounted')
  },
  beforeUpdate () {
    console.log(this, 'beforeUpdate')
  },
  updated () {
    console.log(this, 'updated')
  },
  activated () {
    console.log(this, 'activated')
  },
  deactivated () {
    console.log(this, 'deactivated')
  },
  beforeDestroy () {
    console.log(this, 'beforeDestroy')
  },
  destroyed () {
    console.log(this, 'destroyed')
  }
})
