<template>
  <div class="me">
      <!--个人信息-->
      <div v-show="userInfoFalse" class="personalInfo">
          <!--个人头像栏-->
          <div class="headPortrait">
              <div class="back"></div>
              <img src="../../assets/images/me.png">
              <div class="personalName">
                  <img src="../../assets/images/me2.png">
                  <p class="userName">{{ logonNameVal }}</p>
              </div>
          </div>
          <!--个人信息栏导航-->
          <div>
              <div class="personalInfoNav marginTop" @click="clickInstallData">
                  <span>设置个人资料</span>
                  <i class="fa fa-angle-right"></i>
              </div>
              <div class="personalInfoNav" @click="clickSite">
                  <span>收货地址管理</span>
                  <i class="fa fa-angle-right"></i>
              </div>
              <div class="personalInfoNav marginTop">
                  <span>我的订单</span>
                  <i class="fa fa-angle-right"></i>
              </div>
              <div class="personalInfoNav">
                  <span>我的评价</span>
                  <i class="fa fa-angle-right"></i>
              </div>
              <div class="personalInfoNav marginTop">
                  <span>商品收藏</span>
                  <i class="fa fa-angle-right"></i>
              </div>
              <div class="personalInfoNav">
                  <span>店铺收藏</span>
                  <i class="fa fa-angle-right"></i>
              </div>
              <div class="personalInfoNav">
                  <span>浏览记录</span>
                  <i class="fa fa-angle-right"></i>
              </div>
              <div class="signOut">
                  <button @click="clickSureLogin" type="button" class="btn btn-lg btn-danger">退出登录</button>
              </div>
          </div>
      </div>
      <!--登录注册页面-->
      <div v-show="!userInfoFalse" class="loginLogonPage">
          <!--登录注册栏-->
          <div class="loginLogonColumn">
              <p :class="{clickShow:loginFalse}" @click="clickLoginShow">登录</p>
              <p :class="{clickShow:logonShow}" @click="clickLogonShow">注册</p>
          </div>
          <!--登录注册表单-->
          <div class="loginLogonForm">
              <!--登录表单-->
              <div class="loginForm" :class="{loginLogonLeft0:loginFalse}">
                  <p :class="{errorVal:loginPhoneErrorRed,correctVal:loginPhoneCorrectGreen}">
                      <i class="fa fa-mobile"></i>
                      <input type="text" v-model="loginPhoneVal" placeholder="请输入您的手机号" @blur="loginInputBlur('手机')" @focus="loginInputFocus('手机')">
                  </p>
                  <span :class="{errorVal:loginPhoneErrorRed}">请输入11位数字的手机号</span>
                  <p :class="{errorVal:loginPwdErrorRed,correctVal:loginPwdCorrectGreen}">
                      <i class="fa fa-lock"></i>
                      <input type="password" v-model="loginPassWord" placeholder="请输入您的密码" @blur="loginInputBlur('密码')" @focus="loginInputFocus('密码')">
                  </p>
                  <span :class="{errorVal:loginPwdErrorRed}">密码以字母开头,长度在6~18位,不能有特殊字符和汉字</span>
                  <div class="loginBtn">
                      <button type="button" class="btn btn-lg btn-success" @click="sureLogin">登录</button>
                  </div>
              </div>

              <!--注册表单-->
              <div class="logonForm" :class="{loginLogonLeft0:logonShow}">
                  <p :class="{errorVal:phoneErrorRed,correctVal:phoneCorrectGreen}">
                      <i class="fa fa-mobile"></i>
                      <input type="text" v-model="logonPhoneVal" @blur="logonInputBlur('手机')" @focus="logonInputFocus('手机')" placeholder="请输入您的手机号">
                  </p>
                  <span :class="{errorVal:phoneErrorRed}">请输入11位数字的手机号</span>
                  <p :class="{errorVal:nameErrorRed,correctVal:nameCorrectGreen}">
                      <i class="fa fa-user"></i>
                      <input type="text" v-model="logonNameVal" @blur="logonInputBlur('昵称')" @focus="logonInputFocus('昵称')" placeholder="请输入您的昵称">
                  </p>
                  <span :class="{errorVal:nameErrorRed}">用户名只能是汉字,字数在2~6位</span>
                  <p :class="{errorVal:onePassWordErrorRed,correctVal:onePwdCorrectGreen}">
                      <i class="fa fa-lock onePassWord"></i>
                      <input type="password" v-model="logonOnePassWord" @blur="logonInputBlur('首次')" @focus="logonInputFocus('首次')" placeholder="请输入您的密码">
                  </p>
                  <span :class="{errorVal:onePassWordErrorRed}">密码以字母开头,长度在6~18位,不能有特殊字符和汉字</span>
                  <p :class="{errorVal:twoPassWordErrorRed,correctVal:twoPwdCorrectGreen}">
                      <i class="fa fa-lock"></i>
                      <input type="password" v-model="logonTwoPassWord" @blur="logonInputBlur('再次')" @focus="logonInputFocus('再次')" placeholder="请确认您输入的密码">
                  </p>
                  <span :class="{errorVal:twoPassWordErrorRed}">密码以字母开头,长度在6~18位,不能有特殊字符和汉字</span>
                  <div class="logonBtn">
                      <button type="button" @click="clickSure" class="btn btn-lg btn-success">确认注册</button>
                  </div>
              </div>
          </div>

      </div>
      <!--确认注册页面-->
      <div class="sureLogon" :class="{sureLogonPage:sureLogonTrue}">
          <div>
              <p>您是否确认要注册该账号吗？</p>
              <button class="sure" type="button"  @click="sureLogon">确定注册</button>
              <button type="button" @click="clickCancelLogon">取消</button>
          </div>
      </div>
      <!--确认退出登录页面-->
      <div class="cancelLogin sureLogon" :class="{sureLogonPage:quitTrue}">
          <div>
              <p>您是否确认要退出当前账号吗？</p>
              <button class="sure" type="button" @click="quitLogin">确定退出</button>
              <button type="button" @click="clickCancelQuit">取消</button>
          </div>
      </div>
      <!--修改个人资料页面-->
      <div class="reviseData" :class="{reviseDataLeft0:reviseDataLeftFalse}">
          <!--确认修改弹出框-->
          <div class="sureRevise" :class="{hide:sureRevisePage}">
              <div>
                  <p>您是否确认修改当前的个人资料？</p>
                  <button type="button" @click="sureReviseData" class="btn btn-lg btn-success">确认修改</button>
                  <button type="button" @click="cancelRevise" class="btn btn-lg btn-default">取消</button>
              </div>

          </div>
          <div class="title">
              <i class="fa fa-angle-left" @click="returnMe"></i>
              <span>个人资料修改</span>
          </div>
          <form>
              <div>
                  <label>昵称</label>
                  <input type="text" v-model="reviseNameVal" placeholder="请输入您想要的昵称">
              </div>
              <div>
                  <label>E-mail</label>
                  <input type="text" placeholder="请填写您的安全邮箱">
              </div>
              <div>
                  <label>性别</label>
                  <a><span @click="clickChecked(index)" v-for="(gen,index) in gender" :class="{bgGreen:gen.checkedFalse}">{{ gen.gend }}</span></a>
              </div>
              <div>
                  <label>生日</label>
                  <input type="date" class="inputData">
              </div>
              <div>
                  <label>身份证号</label>
                  <input type="text" placeholder="请输入您的18位身份证号">
              </div>
              <div class="describe">
                  <label>个人描述</label>
                  <textarea placeholder="请谈谈您对自己的认识"></textarea>
              </div>
          </form>
          <div class="button">
              <button type="button" @click="reviseData" class="btn btn-lg btn-success">修改</button>
          </div>
      </div>

      <Site
        :addSitePageShow="addSitePageShow"
        :sureAdd="sureAdd"
        :stateSite="'添加'"
        @sureAdd="clickSureAdd"
        @cancelAdd="cancelRevise"
        @returnMePage="returnMe"
        @add="clickAdd"
      />
  </div>
</template>
<script src="./me.js"></script>
<style  lang="scss">
    @import "./me.scss";
    /*修改个人资料页面样式*/
    @import "./site/site.scss";
</style>
