<template>
  <div class="category container-fluid">
      <div class="search row form-group">
          <i class="fa fa-search"></i>
          <input type="search" v-model="inputVal" @keyup="inputSearch" class="col-xs-12 form-control" placeholder="请输入您想查找的图书名称进行搜索">
      </div>
      <div class="booksInfo">
          <div class="bookInfo row" v-for="(book,index) in booksInfo" @click="showBookDetail(index)">
              <img :src="book.cover" class="col-xs-3">
              <div class="col-xs-9">
                  <p class="bookName">{{book.name}}</p>
                  <p class="bookAuthor"><span>{{book.author}}</span><span> ></span></p>
                  <p class="bookPrice">￥ {{book.price}}</p>
              </div>
          </div>
      </div>
      <!--图书详情组件-->
      <BooksDetails
          :bookInfo="bookInfo"
          :bookDetailShow="bookDetailFalse"
          @bookDetailHide="detailHide"
      />
  </div>
</template>
<script>

    import BooksDetails from './booksDetails/BooksDetails'

export default {
    name:'category',
    components:{
        BooksDetails
    },
    data(){
        return {
            booksInfo: '',
            bookInfo:'',
            bookDetailFalse:false,
            inputVal:'',
            booksInfoFilter:''
        }
    },
    methods:{
        /*axios加载数据*/
        axiosCategory(){
            axios.get('../../../static/api/category.json').then((resp)=>{
                this.booksInfoFilter = this.booksInfo = resp.data;
                /*console.log(this.booksInfoFilter);
                console.log(this.booksInfo);*/
            }).catch(()=>{
                console.log('请求数据错误！！！');
            })
        },
        /*显示书的详情*/
        showBookDetail(index){
            this.bookInfo = this.booksInfo[index];
            this.bookDetailFalse = true;
        },
        /*图书详情页面隐藏*/
        detailHide(){
            this.bookDetailFalse = false;
        },
        /*search功能*/
        inputSearch(){
                let book;
                if(this.inputVal.length !== 0){
                    this.book = this.booksInfoFilter.filter((item)=>{
                        return new RegExp(this.inputVal, 'gi').test(item.name);
                    });
                    console.log(this.book);
                    this.booksInfo = this.book;

                }else {
                    this.booksInfo = this.booksInfoFilter;
                }


        },
        /*showInfo(){
            return this.booksInfo=this.booksInfoFilter;
        }*/
    },
    mounted(){
        this.axiosCategory();
    },
    computed:{
        /*showInfo(){
                return this.booksInfo=this.booksInfoFilter;
        }*/
    }
}
</script>
<style  lang="scss">
    @import "./cateorg.scss";
</style>

