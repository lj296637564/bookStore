<template>
  <div class="home">
      <!--首页商品展示-->
      <div class="homeInfo">
          <!--轮播-->
          <div class="swiper-container">
              <div class="swiper-wrapper">
                  <div class="swiper-slide"><img src="../../assets/images/carousel1.jpg"></div>
                  <div class="swiper-slide"><img src="../../assets/images/carousel2.jpg"></div>
                  <div class="swiper-slide"><img src="../../assets/images/carousel3.jpg"></div>
                  <div class="swiper-slide"><img src="../../assets/images/carousel4.jpg"></div>
              </div>
              <!-- Add Pagination -->
              <div class="swiper-pagination"></div>
              <!-- Add Arrows -->
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
          </div>
          <!--打折消息-->
          <div class="saleInfo">
              <i class="fa fa-bell"></i>
              <span>双11图书全场打骨折，更有惊喜等你来抢!!!</span>
          </div>
          <!--新书上架-->
          <div class="container-fluid">
              <h4>新书上架</h4>
              <div class="row">
                  <div class="col-xs-6" v-for="(sale,index) in onSale" @click="bookClick(index,onSale)">
                      <img :src="sale.cover">
                      <p>{{ sale.name }}</p>
                      <span>￥ {{ sale.price }}</span>
                  </div>
              </div>
          </div>
          <!--编辑推荐-->
          <div class="container-fluid">
              <h4>编辑推荐</h4>
              <div class="row">
                  <div class="col-xs-6" v-for="(rec,index) in recommend" @click="bookClick(index,recommend)">
                      <img :src="rec.cover">
                      <p>{{ rec.name }}</p>
                      <span>￥ {{ rec.price }}</span>
                  </div>
              </div>
          </div>
          <!--热门新书-->
          <div class="container-fluid">
              <h4>热门新书</h4>
              <div class="row">
                  <div class="col-xs-6" v-for="(book,index) in hotBook"  @click="bookClick(index,hotBook)">
                      <img :src="book.cover">
                      <p>{{ book.name }}</p>
                      <span>￥ {{ book.price }}</span>
                  </div>
              </div>
          </div>
      </div>
      <!--点击查看图书信息-->
      <div class="container-fluid bookInfo" :class="{bookInfoShw:bookInfoShow}">
          <div class="row">
              <p class="col-xs-12 cancel"><span @click="bookInfoShow=false">x</span></p>
              <img :src="bookInfo.cover" class="col-xs-5">
              <div class="col-xs-7">
                  <p>作者: <span>{{bookInfo.author}}</span></p>
                  <p>页数: <span>520页</span></p>
                  <p>书号: <span>B00CBBJS5Y</span></p>
                  <p>出版日期: <span>2012年5月1日</span></p>
                  <p class="detail" @click="bookDetailShow">详情 ></p>
              </div>
              <!--书的简介-->
              <div class="col-xs-12">
                  <h4>{{bookInfo.name}}</h4>
                  <p>{{bookInfo.describe}}</p>
              </div>
              <p class="col-xs-6">￥ {{bookInfo.price}}</p>
              <p class="col-xs-6">
                  <select class="form-control">
                      <option>1 本</option>
                      <option>2 本</option>
                      <option>3 本</option>
                      <option>4 本</option>
                      <option>5 本</option>
                  </select>
              </p>
              <!--加入购物车按钮-->
              <div class="col-xs-12 btnStyle">
                  <button type="button" :class="{click:clickCheckedFalse}" @click="clickButton">加入购物车</button>
                  <button type="button" :class="{click:clickCheckedTrue}" @click="promptlyBuy">立即购买</button>
              </div>
          </div>
      </div>
      <BooksDetails
            :bookInfo="bookInfo"
            :bookDetailShow="bookDetailShw"
            @bookDetailHide="bookDetailShow"
      />
      <!--立即购买组件-->
      <SettlementPage
            :fixedLeftFalse="SettlementPageShow"
            @returnHm="returnHome"
      />
  </div>
</template>
<script src="./home.js"></script>
<style  lang="scss" scoped>
  @import './home.scss';
</style>

