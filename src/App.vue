<template>
    <div id="app">
      <main>
        <header>{{ headerTitle }}</header>
        <router-view class="content"/>
      </main>
        <footer>
            <nav>
                <router-link tag="div" :to="{name: 'Home'}" exact><p @click="headTitle('掌上书城')"><i class="fa fa-home"></i><span>首页</span></p></router-link>
                <router-link tag="div" :to="{name:'Category'}"><p @click="headTitle('分类')"><i class="fa fa-align-justify"></i><span>分类</span></p></router-link>
                <router-link tag="div" :to="{name: 'Cart'}"><p @click="headTitle('购物车')"><i class="fa fa-shopping-cart"></i><span>购物车</span></p></router-link>
                <router-link tag="div" :to="{name: 'Me'}"><p  @click="headTitle('个人中心')"><i class="fa fa-user"></i><span>个人</span></p></router-link>
            </nav>
        </footer>
    </div>
</template>

<script>
export default {
  name: "App",
  data(){
      return {
          headerTitle: '掌上书城'
      }
  },
  methods:{
      headTitle(txt){
          this.headerTitle = txt;
      }
  }

};
</script>

<style lang="scss">
    @import "./assets/style/app.scss";
</style>
