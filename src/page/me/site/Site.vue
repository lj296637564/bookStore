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
            <div>
                <label>生日</label>

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
