var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsList:[],
    franchiseeId:'',
    franchiseeInfo:{},
    categroyList: [{ id: 0, name: '全部' }],
    categoryActive: 0,
    form:'',
    getSectionData: {
      page: 1,
      loading: false,
      nomore: false
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { 
    var formData=options.detail,
        that=this,
        franchiseeId = options.franchisee,
        goods_type = options.type
    this.setData({
      form: formData,
      franchiseeId: franchiseeId
    })
    app.sendRequest({
    url: '/index.php?r=AppShop/GetAppShopByPage',
      data: {
      sub_shop_app_id: franchiseeId
    },
      success:function(res){
        console.log(res)
       var data={};
       data.franchiseeInfo=res.data[0];
       data.onBusiness = res.data[0].is_open == 0 ? false : true;
       that.setData(data);
      }
  })
    this.categroyList(goods_type);
  },
  categroyList:function(types){
    var that=this;
    app.sendRequest({
     url:'/index.php?r=pc/AppAdminCategory/list',
     data:{
       form:'goods',
       goods_type: types,
       sub_shop_app_id:that.data.franchiseeId
     },
     success:function(data){
      var categroyList=data.data,
      data={};
      data.categroyList = that.data.categroyList.concat(categroyList);
       that.setData(data);
     }
   })
    this.getGoods();
  },
  getGoods:function(){
    var that=this,
      sdata = that.data.getSectionData;
    if (sdata.loading || sdata.nomore) {
      return;
    }
    sdata.loading = true;
    
    app.sendRequest({
      url:'/index.php?r=AppShop/GetGoodsList',
      data:{
        form: that.data.form ,
        sub_shop_app_id: this.data.franchiseeId,
        page: sdata.page,
        idx_arr: {
          idx: 'category',
          idx_value: that.data.categoryActive
        }
      },
      method : 'POST',
      success: function (res) {
        var goodsList = res.data,
          goodsListData = that.data.goodsList;

        goodsListData = goodsListData.concat(goodsList || []);
        that.setData({
          goodsList: goodsListData,
          'getSectionData.page': sdata.page+1 ,
          'getSectionData.loading' : false,
          'getSectionData.nomore' :  res.is_more == 0 ? true : false
        });
      },
      fail : function(res){
        that.setData({
          'getSectionData.loading' : false
        });
      }
    })
  },
  turnToGoodsDetail: function (e) {
    let id = e.currentTarget.dataset.id;
    app.turnToPage('/pages/goodsDetail/goodsDetail?detail=' + id + '&franchisee=' + this.data.franchiseeId + '&cart_num=' + this.data.franchiseeInfo.cart_goods_num);
  },
  clickOrderTab:function(e){
    var that=this;
    var index = e.currentTarget.dataset.id;
    this.setData({
      categoryActive: index,
      goodsList: [],
      getSectionData: {
        page: 1,
        loading: false,
        nomore: false
      }
    })
    this.getGoods();
  },
  scrollfunc : function(){
    this.getGoods();
  }
 
})