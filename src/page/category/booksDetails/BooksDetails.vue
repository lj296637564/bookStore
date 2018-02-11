<template>
    <div class="booksDetails" :class="{bookDetailShw:bookDetailShow}">
        <!--booksDetailsTitle-->
        <div class="booksDetailsTitle">
            <i class="fa fa-chevron-left" @click="$emit('bookDetailHide')"></i>
            <span>图书详情</span>
            <i class="fa fa-ellipsis-v"></i>
        </div>
        <!--booksDetails-->
        <div class="container-fluid bookDetail">
            <div class="row">
                <img  class="col-xs-5" :src="bookInfo.cover">
                <div class="col-xs-7">
                    <p>作者: <span>{{bookInfo.author}}</span></p>
                    <p>页数: <span>520页</span></p>
                    <p>书号: <span>B00CBBJS5Y</span></p>
                    <p>出版日期: <span>2012年5月1日</span></p>
                    <p>售价: <span class="price">￥ {{bookInfo.price}}</span></p>
                </div>
                <!--书的title-->
                <div class="col-xs-12">
                    <h4>{{bookInfo.name}}</h4>
                    <!--加入购物车按钮-->
                    <div class="btnStyle">
                        <button type="button">加入购物车</button>
                        <button type="button" class="click" @click="buy">立即购买</button>
                    </div>
                </div>
                <!--图书简介-->
                <div class="col-xs-12 introduce">
                    <span>图书简介</span>
                    <p>&nbsp;{{bookInfo.describe}}</p>
                </div>
                <!--内容简介-->
                <div class="col-xs-12 introduce">
                    <span>内容概要</span>
                    <p>&nbsp;{{bookInfo.describe}}</p>
                </div>
                <!--作者介绍-->
                <div class="col-xs-12 introduce">
                    <span>作者简介</span>
                    <p>&nbsp;{{bookInfo.describe}}</p>
                </div>


            </div>
        </div>
        <SettlementPage
            :fixedLeftFalse="setPageShow"
            @returnHm="quitBuy"
        />
    </div>
</template>

<script>
    import SettlementPage from "../../cart/settlementPage/SettlementPage.vue"
    export default {
        name: 'BooksDetails',
        components:{
            SettlementPage
        },
        props:['bookInfo','bookDetailShow'],
        data(){
            return {
                detailShow:this.$props[1],
                setPageShow:false
            }
        },
        computed:{

        },
        methods:{
            bookDetailFalse(){
                this.detailShow = false;
            },
            /*立即购买*/
            buy(){
                this.setPageShow = true;
            },
            /*点击“<”退出购买页面*/
            quitBuy(){
                this.setPageShow = false;
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "./booksDetails.scss";
</style>
