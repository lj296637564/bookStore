import 'swiper/dist/css/swiper.css'
import Swiper from 'swiper'
import BooksDetails from '@/page/category/booksDetails/BooksDetails'
import SettlementPage from "../cart/settlementPage/SettlementPage"

export default {
    name: "Home",
    components:{
        BooksDetails,
        SettlementPage
    },
    data(){
       return {
           onSale:'',
           hotBook:'',
           recommend:'',
           clickCheckedFalse:false,
           clickCheckedTrue:true,
           bookInfoShow:false,
           bookInfo: '',
           bookDetailShw:false,

           SettlementPageShow:false
       }
    },
    methods: {
        /*首页轮播*/
        runSwiper() {
            var swiper = new Swiper('.swiper-container', {
                spaceBetween: 30,
                centeredSlides: true,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        },
        /*axios加载数据*/
        requestAxios(){
            axios.get('../../../static/api/onSale.json').then((resp)=>{
                this.onSale = resp.data;
            }).catch(()=>{
                console.log('请求数据错误！！！')
            });
            axios.get('../../../static/api/hotBook.json').then((resp)=>{
                this.hotBook = resp.data;
            }).catch(()=>{
                console.log('请求数据错误！！！')
            });
            axios.get('../../../static/api/recommend.json').then((resp)=>{
                this.recommend = resp.data;
            }).catch(()=>{
                console.log('请求数据错误！！！')
            })
        },
        /*加入购物车*/
        clickButton(){
            this.clickCheckedFalse = !this.clickCheckedFalse;
            this.clickCheckedTrue = !this.clickCheckedTrue;
        },
        /*图书信息*/
        bookClick(index,data){
            this.bookInfoShow = true;
            this.bookInfo = data[index];
        },
        /*图书信息取消*/
        bookCancel(){
           this.bookInfoShow = false;
        },
        /*图书详情显示*/
        bookDetailShow(){
            this.bookDetailShw = !this.bookDetailShw;
        },
        /*立即购买*/
        promptlyBuy(){
            this.SettlementPageShow = true;
        },
        /*点击“<”退出立即购买页面*/
        returnHome(){
            this.SettlementPageShow = false;
        }

    },
    mounted() {
        this.runSwiper();
        this.requestAxios();
    },
};
