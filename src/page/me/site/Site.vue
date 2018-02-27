<template>
    <div class="reviseData" :class="{reviseDataLeft0:addSitePageShow}">
        <!--确认添加地址弹出框-->
        <div class="sureRevise" :class="{hide:sureAdd}">
            <div>
                <p>您是否确认{{stateSite}}当前收货地址？</p>
                <button type="button" @click="$emit('sureAdd')" class="btn btn-lg btn-success">确认{{stateSite}}</button>
                <button type="button" @click="$emit('cancelAdd')" class="btn btn-lg btn-default">取消</button>
            </div>

        </div>
        <div class="title">
            <i class="fa fa-angle-left" @click="$emit('returnMePage')"></i>
            <span>{{stateSite}}收货地址</span>
        </div>
        <form>
            <div>
                <label>姓名</label>
                <input type="text" placeholder="请填写您的真实姓名">
            </div>
            <div>
                <label>联系电话</label>
                <input type="text" placeholder="请填写我们联系您的电话号码">
            </div>
            <div>
                <label>邮政编码</label>
                <input type="text" placeholder="请填写您所在地区的邮政编码">
            </div>
            <div class="address">
                <select class="form-control">
                    <option>四川省</option>
                    <option>重庆</option>
                    <option>山东省</option>
                    <option>贵州省</option>
                    <option>湖南省</option>
                    <option>陕西省</option>
                    <option>广东省</option>
                </select>
                <select class="form-control">
                    <option>成都市</option>
                    <option>绵阳市</option>
                    <option>遂宁市</option>
                    <option>南充市</option>
                    <option>德阳市</option>
                    <option>广元市</option>
                    <option>广安市</option>
                </select>
                <select class="form-control">
                    <option>金牛区</option>
                    <option>锦江区</option>
                    <option>武侯区</option>
                    <option>成华区</option>
                    <option>温江区</option>
                    <option>双流县</option>
                    <option>高新区</option>
                </select>

            </div>
            <div>
                <label>详细地址</label>
                <input type="text" placeholder="请填写详细的街道、楼栋、门牌号">
            </div>
        </form>
        <div class="button">
            <button type="button" @click="$emit('add')" class="btn btn-lg btn-success">{{stateSite}}</button>
        </div>
    </div>
</template>

<script>
    export default {
        name:"Site",
        props:['addSitePageShow','sureAdd','stateSite']
    }
</script>

<style lang="scss">
    @import "./site.scss";
</style>
