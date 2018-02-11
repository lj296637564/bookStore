<template>
  <div class="cart">
      <SettlementPage
        :fixedLeftFalse="buyPageShow"
        @returnHm="quitBuyPage"
      />
      <!--<div class="title">
          <i class="fa fa-angle-left"></i>
          <span>结算中心</span>
      </div>
      &lt;!&ndash;结算中心页面&ndash;&gt;
      <div class="settlementPage">
          <h4>商品信息确认</h4>
          <div>
              <div class="goodsInfo">
                  <div>
                      <h5>价格信息</h5>
                      <p>
                          <span>商品总价：</span>
                          <span>￥ 128.60</span>
                      </p>
                      <p>
                          <span>运送费：</span>
                          <span>￥ 10.00</span>
                      </p>
                      <p>
                          <span style="color: black">订单总价：</span>
                          <span style="color: #ff0b0b;font-size: 18px;padding-right: 10px">￥ 10.00</span>
                      </p>
                  </div>
                  <div>
                      <h5>收货信息</h5>
                      <p>
                          <span>收货地址：</span>
                          <label>四川省 成都市 武侯区 簇桥 望锦东街34号</label>
                      </p>
                      <p>
                          <span>收&nbsp;&nbsp;货&nbsp;&nbsp;人：</span>
                          <span>刘军</span>
                      </p>
                      <p>
                          <span>邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;编：</span>
                          <span>621000</span>
                      </p>
                      <p>
                          <span>电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话：</span>
                          <span>18328043308</span>
                      </p>
                  </div>
                  <div @click="clickReviseSite">
                      <p>
                          <span>修改地址</span>
                          <i class="fa fa-angle-right"></i>
                      </p>
                  </div>
                  <div @click="clickAddSite">
                      <p>
                          <span>新增地址</span>
                          <i class="fa fa-angle-right"></i>
                      </p>
                  </div>
              </div>
          </div>
          <h4>选择支付方式</h4>
          <div class="payment">
              <p><span><i class="fa fa-weixin"></i>微信支付</span><i class="fa fa-angle-right"></i></p>
              <p><span><i class="fa fa-weibo"></i>支付宝</span><i class="fa fa-angle-right"></i></p>
              <p><span><i class="fa fa-credit-card"></i>银行卡</span><i class="fa fa-angle-right"></i></p>
              <p><span><i class="fa fa-credit-card"></i>信用卡</span><i class="fa fa-angle-right"></i></p>
              <p><span><i class="fa fa-cc-visa"></i>VISA</span><i class="fa fa-angle-right"></i></p>
          </div>
      </div>
      &lt;!&ndash;修改地址的组件&ndash;&gt;
      <Site
          :addSitePageShow="reviseSitePageShow"
          :sureAdd="sureReviseSitePageShow"
          @returnMePage="returnCart"
          @add="clickRevise"
          @sureAdd="clickSureRevise"
          @cancelAdd="cancelReviseSite"
      />
      &lt;!&ndash;添加地址的组件&ndash;&gt;
      <Site
          :addSitePageShow="addSitePageShow"
          :sureAdd="sureAddSitePageShow"
          @returnMePage="returnCart"
          @add="addReviseSite"
          @sureAdd="sureAddSite"
          @cancelAdd="cancelReviseSite"
      />-->
      <!--购物车没有商品时-->
      <div class="notGoods" v-if="booksData.length === 0">
          <p>购物车内完全没有您要购买的商品</p>
          <p>去逛逛？</p>
      </div>
      <!--购物车有商品时-->
      <div class="yesGoods" v-else>
          <p class="edit" v-if="!checkboxFalse"><span @click="clickEdit">编辑</span></p>
          <p class="cancel" v-else><span @click="clickCancel">取消</span><span @click="deleteChecked">删除选中</span></p>
          <div class="goodsInfo">
              <div class="row" v-for="(book,index) in booksData">
                  <div class="col-xs-1" v-if="checkboxFalse">
                      <i class="fa fa-circle" :class="{hide:!booksData[index].checkedFalse}" @click="yesChecked(index)"></i>
                      <i class="fa fa-check-circle" :class="{hide:booksData[index].checkedFalse}" @click="notChecked(index)"></i>
                  </div>
                  <!--<input type="checkbox" class="col-xs-1" v-if="checkboxFalse">-->
                  <!--<i class="fa fa-circle col-xs-1" v-if="checkboxFalse"></i>-->
                  <div class="bookInfo col-xs-11">
                      <img :src="book.cover" class="col-xs-3">
                      <div class="col-xs-9">
                          <p class="bookName">{{book.name}}</p>
                          <p class="bookAuthor"><span>{{book.author}}</span></p>
                          <p class="bookPrice">￥ {{book.price}}</p>
                      </div>
                  </div>
              </div>
          </div>
          <div class="button">
              <button type="button" @click="clickBuy" class="btn btn-lg btn-success">前往支付</button>
          </div>

      </div>
  </div>
</template>
<script >

    import SettlementPage from "./settlementPage/SettlementPage.vue"

export default {
    name:'cart',
    components:{
        SettlementPage
    },
    data(){
        return {
            booksData:[
                {
                    "name": "C语言接口与实现--创建可重用软件的技术",
                    "describe": "C语言接口与实现：创建可重用软件的技术》概念清晰、实例详尽，是一本有关设计、实现和有效使用C语言库函数，掌握创建可重用C语言软件模块技术的参考指南。书中提供了大量实例，重在阐述如何用一种与语言无关的方法将接口设计实现独立出来，从而用一种基于接口的设计途径创建可重用的API。",
                    "author": "David R. Hanson",
                    "cover": "https://images-cn.ssl-images-amazon.com/images/I/51yTmi-UkpL._SX396_BO1,204,203,200_.jpg",
                    "price": 63.10
                },
                {
                    "name": "流畅的Python",
                    "describe": "《流畅的Python》一书致力于帮助Python开发人员挖掘这门语言及相关程序库的优秀特性，避免重复劳动，同时写出简洁、流畅、易读、易维护，并且具有地道Python风格的代码。本书尤其深入探讨了Python语言的高级用法，涵盖数据结构、Python风格的对象、并行与并发，以及元编程等不同的方面。",
                    "author": "Luciano Ramalho",
                    "cover": "https://images-cn.ssl-images-amazon.com/images/I/514dQDW9qUL._SX422_BO1,204,203,200_.jpg",
                    "price": 109.80
                },
                {
                    "name": "PHP编程基础与实例教程（第2版）",
                    "describe": "PHP简单易学且功能强大，是开发WEB应用程序理想的脚本语言。本书由浅入深、循序渐进，系统地介绍了PHP的相关知识及其在WEB应用程序开发中的实际应用，并通过具体案例，使读者巩固所学知识，更好地进行开发实践。本书共分为13章，涵盖了PHP开发环境的搭建、PHP语法、FORM表单、数据库设计、PHP与数据库连接、会话控制、界面设计等内容。",
                    "author": "孔祥盛",
                    "cover": "https://images-cn.ssl-images-amazon.com/images/I/514ZBccTq3L._SX353_BO1,204,203,200_.jpg",
                    "price": 36.20
                },
                {
                    "name": "Linux环境编程：从应用到内核",
                    "describe": "本书的写作布局正是以APUE的章节作为参考，针对Linux环境，不仅对用户空间的接口进行阐述，同时还引导读者分析该接口在内核的源码实现，使得读者不仅可以知道接口怎么用，同时还可以理解接口是怎么工作的。对于Linux的系统调用，做到知其然，知其所以然。",
                    "author": "高峰 & 李彬",
                    "cover": "https://images-cn.ssl-images-amazon.com/images/I/41wVm2di7uL._SX358_BO1,204,203,200_.jpg",
                    "price": 84.80
                }
            ],
            buyPageShow:false,
            checkboxFalse:false,
            checkedGoods:[]
//            checkedFalse:false

        }
    },
   /* data(){
        return {
            reviseSitePageShow:false,
            sureReviseSitePageShow:true,
            addSitePageShow:false,
            sureAddSitePageShow:true

        }
    },
    methods:{

        /!*修改地址的事件*!/

        /!*点击修改地址显示修改页面*!/
        clickReviseSite(){
            this.reviseSitePageShow = true;
        },
        /!*点击“<”返回到购物车页面*!/
        returnCart(){
            this.reviseSitePageShow = false;
            this.addSitePageShow = false;
        },
        /!*点击修改*!/
        clickRevise(){
            this.sureReviseSitePageShow = false;
        },
        /!*点击确认修改*!/
        clickSureRevise(){
            this.sureReviseSitePageShow = true;
            this.reviseSitePageShow = false;
        },
        /!*取消修改*!/
        cancelReviseSite(){
            this.sureReviseSitePageShow = true;
            this.sureAddSitePageShow = true;
        },

        /!*点击添加地址的事件*!/

        /!*点击添加地址显示添加地址页面*!/
        clickAddSite(){
            this.addSitePageShow = true;
        },
        /!*点击添加地址*!/
        addReviseSite(){
            this.sureAddSitePageShow = false;
        },
        /!*确认添加地址*!/
        sureAddSite(){
            this.addSitePageShow = false;
            this.sureAddSitePageShow = true;
        }
    }*/
   /*computed:{
      checkedShow(index){
          return this.booksData[index].checkedFalse
       },
      checkedGoodsLen(){
          return this.checkedGoods.length
      }
   },*/
   methods:{
       /*点击前往支付显示支付页面*/
       clickBuy(){
           this.buyPageShow = true;
       },
       /*点击“<”退出支付页面*/
       quitBuyPage(){
           this.buyPageShow = false;
       },
       /*点击取消*/
       clickCancel(){
           this.checkboxFalse = false;
           for(let i = 0;i < this.booksData.length;i++){
               this.booksData[i].checkedFalse = true;
           }
       },
       /*点击编辑*/
       clickEdit(){
           this.checkboxFalse=true;
//           this.checkedFalse=true;
           for(let i = 0;i < this.booksData.length;i++){
               this.booksData[i].checkedFalse = true;
           }
       },
       /*点击选中*/
       yesChecked(index){
//           console.log(index);
           this.booksData[index].checkedFalse = false;
//           this.booksData[index].goodsChecked = true;
//           console.log(this.booksData);
//           console.log(!this.booksData[index].checkedFalse);
           this.checkedGoods.push(this.booksData[index]);
           /*console.log(this.checkedGoods)
           console.log(this.booksData)*/
       },
       /*点击不选中*/
       notChecked(index){
//           console.log(index);
           this.booksData[index].checkedFalse = true;
//           console.log(this.booksData[index].checkedFalse);
       },
       /*删除选中*/
       deleteChecked(){
           let chGdLen = this.checkedGoods.length;
           while (chGdLen>0){
               for(let i = 0;i < this.booksData.length;i++){
                   if(this.booksData[i].checkedFalse===false){
                       this.booksData.splice(i,1);
                       console.log(this.booksData.length);
                       break;
                   }
               }
               chGdLen--;

           }
       }


   }
}
</script>
<style  lang="scss">
    @import "./Cart.scss";
</style>

