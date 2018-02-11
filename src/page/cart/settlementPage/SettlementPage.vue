<template>
    <div class="SettlementCorePage" :class="{fixedTop0:fixedLeftFalse}">
        <div class="title">
            <i class="fa fa-angle-left" @click="$emit('returnHm')"></i>
            <span>结算中心</span>
        </div>
        <!--结算中心页面-->
        <div class="settlementPage content">
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
        <!--修改地址的组件-->
        <Site
            :addSitePageShow="reviseSitePageShow"
            :sureAdd="sureReviseSitePageShow"
            :stateSite="'修改'"
            @returnMePage="returnCart"
            @add="clickRevise"
            @sureAdd="clickSureRevise"
            @cancelAdd="cancelReviseSite"
        />
        <!--添加地址的组件-->
        <Site
            :addSitePageShow="addSitePageShow"
            :sureAdd="sureAddSitePageShow"
            :stateSite="'添加'"
            @returnMePage="returnCart"
            @add="addReviseSite"
            @sureAdd="sureAddSite"
            @cancelAdd="cancelReviseSite"
        />
    </div>
</template>

<script src="./SettlementPage.js"></script>

<style lang="scss">
    @import "./SettlementPage.scss";
</style>
