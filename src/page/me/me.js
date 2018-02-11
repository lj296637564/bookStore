import Site from "./site/Site.vue"
export default {
    name:'Me',
    components:{
        Site
    },
    data(){
        return {
            logonShow:true,
            loginFalse:false,
            userInfoFalse:false,
            reviseNameVal:'',
            loginPhoneVal:'',
            loginPassWord:'',
            logonPhoneVal:'',
            logonNameVal:'',
            logonOnePassWord:'',
            logonTwoPassWord:'',
            phoneErrorRed:false,
            nameErrorRed:false,
            onePassWordErrorRed:false,
            twoPassWordErrorRed:false,
            phoneCorrectGreen:false,
            nameCorrectGreen:false,
            onePwdCorrectGreen:false,
            twoPwdCorrectGreen:false,
            loginPhoneErrorRed:false,
            loginPhoneCorrectGreen:false,
            loginPwdErrorRed:false,
            loginPwdCorrectGreen:false,
            sureLogonTrue:true,
            quitTrue:true,
            gender:[
                {gend:'男',checkedFalse:false},
                {gend:'女',checkedFalse:false},
                {gend:'保密',checkedFalse:true}
                ],
            sureRevisePage:true,
            reviseDataLeftFalse:false,

            addSitePageShow:false,
            sureAdd:true

        }
    },
    methods:{
        /*点击登录注册切换内容*/
        clickLoginShow(){
            this.loginFalse = true;
            this.logonShow = false;
        },
        clickLogonShow(){
            this.loginFalse = false;
            this.logonShow = true;
        },
        /*点击登录按钮显示个人信息(确认登录)*/
        sureLogin(){
            if(this.loginPhoneVal === ''){
                this.loginPhoneErrorRed = true;
            }
            if(this.loginPassWord === ''){
                this.loginPwdErrorRed = true;
            }
            if(this.loginPhoneVal !== '' && this.loginPassWord !== '' && this.loginPhoneVal === this.logonPhoneVal && this.loginPassWord === this.logonOnePassWord){
                this.userInfoFalse = true;
            }else {
                this.userInfoFalse = false;
            }

        },
        /*确定注册*/
        sureLogon(){
            this.loginFalse = true;
            this.logonShow = false;
            this.sureLogonTrue = true;
        },
        /*退出登录*/
        quitLogin(){
            this.userInfoFalse = !this.userInfoFalse;
            this.loginFalse = true;
            this.quitTrue = true;
            this.loginPhoneVal = '';
            this.loginPassWord = '';
            this.loginPhoneCorrectGreen = false;
            this.loginPwdCorrectGreen = false;

        },
        /*注册表单失去焦点验证*/
        logonInputBlur(val){
            switch (val){
                case "手机":
                    let phoneValRegExp = /^1(3|4|5|7|8)\d{9}$/.test(this.logonPhoneVal);
                    if(this.logonPhoneVal === ''){
                        this.phoneErrorRed = true;
                    }else if(phoneValRegExp){
                        this.phoneCorrectGreen = true;
                    }else {
                        this.phoneErrorRed = true;
                    }
                    break;
                case "昵称":
                    if(this.logonNameVal === ''){
                        this.nameErrorRed = true;
                    }else if(/^[\u4e00-\u9fa5]{0,6}$/.test(this.logonNameVal)){
                        this.nameCorrectGreen = true;
                    }else {
                        this.nameErrorRed = true;
                    }
                    break;
                case "首次":
                    let onePassWordRegExp = /^[a-zA-Z]\w{5,17}$/.test(this.logonOnePassWord);
                    if(this.logonOnePassWord === ''){
                        this.onePassWordErrorRed = true;
                    }else if(onePassWordRegExp){
                        this.onePwdCorrectGreen = true;
                    }else {
                        this.onePassWordErrorRed = true;
                    }
                    break;
                case "再次":
                    if(this.logonTwoPassWord === ''){
                        this.twoPassWordErrorRed = true;
                    }else
                    if(this.logonTwoPassWord===this.logonOnePassWord){
                        this.twoPwdCorrectGreen = true;
                    }else {
                        this.twoPassWordErrorRed = true;
                    }
                    break;
                default:
                    break;
            }
        },
        /*注册表单获取焦点*/
        logonInputFocus(val){
            switch (val){
                case "手机":
                    this.phoneCorrectGreen = false;
                    this.phoneErrorRed = false;
                    break;
                case "昵称":
                    this.nameCorrectGreen = false;
                    this.nameErrorRed = false;
                    break;
                case "首次":
                    this.onePwdCorrectGreen = false;
                    this.onePassWordErrorRed = false;
                    break;
                case "再次":
                    this.twoPwdCorrectGreen = false;
                    this.twoPassWordErrorRed = false;
                    break;
                default:
                    break;
            }
        },
        /*登录表单失去焦点验证*/
        loginInputBlur(val){
            switch (val){
                case "手机":
                    let phoneValRegExp = /^1(3|4|5|7|8)\d{9}$/.test(this.loginPhoneVal);
                    if(this.loginPhoneVal === ''){
                        this.loginPhoneErrorRed = true;
                    }else if(phoneValRegExp){
                        this.loginPhoneCorrectGreen = true;
                    }else {
                        this.loginPhoneErrorRed = true;
                    }
                    break;
                case "密码":
                    let onePassWordRegExp = /^[a-zA-Z]\w{5,17}$/.test(this.loginPassWord);
                    if(this.loginPassWord === ''){
                        this.loginPwdErrorRed = true;
                    }else if(onePassWordRegExp){
                        this.loginPwdCorrectGreen = true;
                    }else {
                        this.loginPwdErrorRed = true;
                    }
                    break;
                default:
                    break;
            }
        },
        /*登录表单获取焦点验证*/
        loginInputFocus(val){
            switch (val){
                case "手机":
                    this.loginPhoneErrorRed = false;
                    this.loginPhoneCorrectGreen = false;
                    break;
                case "密码":
                    this.loginPwdErrorRed = false;
                    this.loginPwdCorrectGreen = false;
                    break;
                default:
                    break;
            }
        },
        /*点击确认注册*/
        clickSure(){
            if(this.phoneCorrectGreen && this.nameCorrectGreen && this.onePwdCorrectGreen && this.twoPwdCorrectGreen){
                this.sureLogonTrue = false;
            }else {
                if(this.phoneCorrectGreen === false){
                    this.phoneErrorRed = true;
                }
                if(this.nameCorrectGreen === false){
                    this.nameErrorRed = true;
                }
                if(this.onePwdCorrectGreen === false){
                    this.onePassWordErrorRed = true;
                }
                if(this.twoPwdCorrectGreen === false){
                    this.twoPassWordErrorRed = true;
                }
            }
        },
        /*点击取消注册*/
        clickCancelLogon(){
            this.sureLogonTrue = true;
            this.logonPhoneVal = '';
            this.logonNameVal = '';
            this.logonOnePassWord = '';
            this.logonTwoPassWord = '';
            this.phoneCorrectGreen = false;
            this.nameCorrectGreen = false;
            this.onePwdCorrectGreen = false;
            this.twoPwdCorrectGreen = false;
        },
        /*点击取消退出*/
        clickCancelQuit(){
            this.quitTrue = true;
        },
        /*点击退出登录*/
        clickSureLogin(){
            this.quitTrue = false;
        },
        /*性格选中*/
        clickChecked(index){
            for(let i = 0;i < 3;i++){
                this.gender[i].checkedFalse = false;
            }
            this.gender[index].checkedFalse = true;
        },
        /*取消修改个人资料*/
        cancelRevise(){
            this.sureRevisePage = true;
            this.sureAdd = true;
        },
        /*点击修改*/
        reviseData(){
            this.sureRevisePage = false;
        },
        /*确认修改个人资料*/
        sureReviseData(){
            this.sureRevisePage = true;
            this.logonNameVal = this.reviseNameVal;
            this.reviseDataLeftFalse = false;
        },
        /*点击设置个人资料*/
        clickInstallData(){
            this.reviseDataLeftFalse = true;
            this.reviseNameVal = this.logonNameVal;
        },
        /*点击"<"退出当前页面*/
        returnMe(){
            this.reviseDataLeftFalse = false;
            this.logonNameVal = this.reviseNameVal;
            this.addSitePageShow = false;
        },
        /*点击收货地址管理显示收货地址页面*/
        clickSite(){
            this.addSitePageShow = true;
        },
        /*点击添加*/
        clickAdd(){
            this.sureAdd = false;
        },
        /*点击确认添加*/
        clickSureAdd(){
            this.sureAdd = true;
            this.addSitePageShow = false;
        }

    }
}
