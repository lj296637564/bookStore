<template>
    <div id="app">
      <header>掌上书城</header>
      <main>
        <router-view/>
      </main>
        <footer>
            <nav>
                <router-link tag="div" :to="{name: 'Home'}" exact>首页</router-link>           
                <router-link tag="div" :to="{name:'Category'}">分类</router-link>
                <router-link tag="div" :to="{name: 'Cart'}">购物车</router-link>
                <router-link tag="div" :to="{name: 'Me'}">我</router-link>               
            </nav>
        </footer>
    </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
$height44:44px;
*,*::before,**::after{box-sizing: border-box}
html,
body {
  height: 100%;
  font: 14px "Microsoft YaHei", sans-serif, Arial;
}
header{text-align: center;height: $height44;line-height: $height44;background: rgb(47, 47, 47);color: #fff}
footer{
  position: fixed;bottom:0;width:100%;
  nav{display:flex;justify-content: space-between;text-align:center;background:rgb(79, 79, 79);
  .active{color: green};
  div{height: $height44;line-height:$height44 ;width: 25%;color: #fff}
  }
}
#app {

  height: 100%;
  &>main{height: calc(100% -  88px);
  overflow-y:auto;
  overflow-x:hidden

  }

  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

}
</style>
