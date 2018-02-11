import Site from "../../me/site/Site.vue"

export default {
    name:'cart',
    props:['fixedLeftFalse'],
    components:{
        Site
    },
    data(){
        return {
            reviseSitePageShow:false,
            sureReviseSitePageShow:true,
            addSitePageShow:false,
            sureAddSitePageShow:true,
            // fixedLeftFalse:false

        }
    },
    methods:{

        /*修改地址的事件*/

        /*点击修改地址显示修改页面*/
        clickReviseSite(){
            this.reviseSitePageShow = true;
        },
        /*点击“<”返回到购物车页面*/
        returnCart(){
            this.reviseSitePageShow = false;
            this.addSitePageShow = false;
        },
        /*点击修改*/
        clickRevise(){
            this.sureReviseSitePageShow = false;
        },
        /*点击确认修改*/
        clickSureRevise(){
            this.sureReviseSitePageShow = true;
            this.reviseSitePageShow = false;
        },
        /*取消修改*/
        cancelReviseSite(){
            this.sureReviseSitePageShow = true;
            this.sureAddSitePageShow = true;
        },

        /*点击添加地址的事件*/

        /*点击添加地址显示添加地址页面*/
        clickAddSite(){
            this.addSitePageShow = true;
        },
        /*点击添加地址*/
        addReviseSite(){
            this.sureAddSitePageShow = false;
        },
        /*确认添加地址*/
        sureAddSite(){
            this.addSitePageShow = false;
            this.sureAddSitePageShow = true;
        }
    }
}
