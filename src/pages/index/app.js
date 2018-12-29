import React, { Component } from 'react';
import classNames from 'classnames'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import index from './index.less';

class App extends Component {
  static defaultProps = {
    bannerImg: [
      {
        id: 1,
        image: 'http://image4.suning.cn/uimg/cms/img/154589505107653779.jpg',
      },{
        id: 2,
        image: 'https://oss.suning.com/aps/aps_learning/image/429081201/20181227/f6f8513c20924c8f88d17c05fb7deff6.jpg?from=mobile',
      },{
        id: 3,
        image: 'http://image.suning.cn/uimg/aps/material/154581676741105445.jpg?from=mobile',
      },
    ],
    enterList: [
      {
        id: 1,
        image: '//image4.suning.cn/uimg/cms/img/154591057850454046.gif',
        title: '爆款手机'
      },
      {
        id: 2,
        image: '//image2.suning.cn/uimg/cms/img/154563365366724857.png?from=mobile',
        title: '苏宁超市'
      },
      {
        id: 3,
        image: '//image5.suning.cn/uimg/cms/img/154563372528627426.png?from=mobile',
        title: '生活家电'
      },
      {
        id: 4,
        image: '//image2.suning.cn/uimg/cms/img/154563379792690279.png?from=mobile',
        title: '苏宁拼购'
      },
      {
        id: 5,
        image: '//image2.suning.cn/uimg/cms/img/154563390014525240.png?from=mobile',
        title: '母婴玩具'
      },
      {
        id: 6,
        image: '//image4.suning.cn/uimg/cms/img/154563395864759273.png?from=mobile',
        title: '大聚惠'
      },
      {
        id: 7,
        image: '//image3.suning.cn/uimg/cms/img/154563403805412200.png?from=mobile',
        title: '赚钱'
      },
      {
        id: 8,
        image: '//image5.suning.cn/uimg/cms/img/154563411354755623.png?from=mobile',
        title: '领云钻'
      },
      {
        id: 9,
        image: '//image4.suning.cn/uimg/cms/img/154563415318661485.png?from=mobile',
        title: '苏宁家电'
      },
      {
        id: 10,
        image: '//image3.suning.cn/uimg/cms/img/154563433040335473.png?from=mobile',
        title: '分类'
      }
    ],
    totiaoList:[
        {
          id: 1,
          tag: '热议',
          text: '苏宁智能体重秤测评|你有健身教练，我有减肥好帮手',
        },{
          id: 2,
          tag: '热议',
          text: '千首歌曲从KTV下架，音磅给你唱歌娱乐新选择',
        },{
          id: 3,
          tag: '热议',
          text: '衣服洗护有讲究，有他们不担忧',
        },{
          id: 4,
          tag: '热议',
          text: '这样布置工作台，让你左手梦想右手高薪',
        },{
          id: 5,
          tag: '热议',
          text: '大吉大利！学生党喜欢的“吃鸡”本',
        },{
          id: 6,
          tag: '热议',
          text: '想要“欢乐洗澡澡”，常用热水器区别了解下',
        }
    ],
    beyondYearList:[
      {
        id: 1,
        image: '//image3.suning.cn/uimg/cms/img/154599698706875284.png',
      },{
        id: 2,
        image: '//image4.suning.cn/uimg/cms/img/154599700102833566.png',
      },{
        id: 3,
        image: '//image1.suning.cn/uimg/cms/img/154597978449071587.png',
      },{
        id: 4,
        image: '//image3.suning.cn/uimg/cms/img/154598552766282145.png',
      },
    ],
    saleList:{
      bc: '//image5.suning.cn/uimg/cms/img/154598887862656879.png?from=mobile',
      productList:[
        {
          id: 1,
          image: '//image2.suning.cn/uimg/cms/img/153458619277417635.jpg?from=mobile',
          title: '冰箱洗衣机',
          subTitle: '最高减1000',
        },{
          id: 2,
          image: '//image3.suning.cn/uimg/cms/img/154563200217543751.jpg?from=mobile',
          title: '日用家居',
          subTitle: '满69减10',
        },{
          id: 3,
          image: '//image2.suning.cn/uimg/cms/img/154408176041588061.jpg?from=mobile',
          title: '年终大赏',
          subTitle: '爆款5折起',
        },{
          id: 4,
          image: '//image2.suning.cn/uimg/cms/img/154416441460831522.jpg?from=mobile',
          title: '办公打印',
          subTitle: '8.8元起',
        },
      ]
    },
    guessFav:{
      titbar: {
        url: '',
        image: '//image3.suning.cn/uimg/cms/img/152838231269295627.png',
      },
      list:[
        {
          id:1,
          image: '//imgservice.suning.cn/uimg1/b2c/image/YdIH47HxKxoJlH2MS0a0qA.jpg?format=400h_400w_4e_80q.webp',
          tag: 'data:image/png;base64,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',
          title: '金龙鱼 盘锦大米 5kg袋装粳米',
          info: ['大聚惠','领劵60元'],
          price: 34.9,
        },{
          id:2,
          image: '//imgservice.suning.cn/uimg1/b2c/image/FdgMmM6sxRkR6x9bibrrNQ.jpg?format=400h_400w_4e_80q.webp',
          tag: 'data:image/png;base64,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',
          title: '【限量领券立减】Apple iPhone XS Max 256GB 金色 移动联通电信4G手机 双卡双待',
          info: ['大聚惠','领劵1200元'],
          price: 10999,
        },{
          id:3,
          image: '//imgservice.suning.cn/uimg1/b2c/image/tP4UYC9oxZLqnNSK1MvAFQ.jpg?format=400h_400w_4e_80q.webp',
          tag: 'data:image/png;base64,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',
          title: '【领券立减 】Apple iPhone X 64GB 深空灰 移动联通电信4G手机',
          info: ['大聚惠','领劵60元'],
          price: 6488,
        },{
          id:4,
          image: '//imgservice.suning.cn/uimg1/b2c/image/KmHz7LsGADqi06d2VxaJEg.jpg?format=400h_400w_4e_80q.webp',
          tag: 'data:image/png;base64,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',
          title: 'Lipo 进口糕点 面包干奶油味200g 休闲零食 越南进口',
          info: ['拼购'],
          price: 9.9,
        },{
          id:5,
          image: '//imgservice.suning.cn/uimg1/b2c/image/Ia4pruE4FLnTNI8jJy9xSw.jpg?format=400h_400w_4e_80q.webp',
          tag: 'data:image/png;base64,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',
          title: '先锋(SINGFUN)取暖器油汀DYT-Z2 2200W大面积13片 全屋立体升温 家用恒温节能 电暖器电暖气片',
          info: ['抢'],
          price: 347,
        },{
          id:6,
          image: '//imgservice.suning.cn/uimg1/b2c/image/5buUDWu3nPTq9PyEwvcYpg.jpg?format=400h_400w_4e_80q.webp',
          tag: 'data:image/png;base64,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',
          title: '福临门 水晶米5kg/袋 粳米',
          info: ['大聚惠','领劵60元'],
          price: 32.9,
        },
      ]
    }
  }
  componentWillMount(){
  }
  componentDidMount(){
    new Swiper('.swiperBox',{
      loop: true,
      autoplay:{
        disableOnInteraction: false,
      },
      pagination:{
        el: '.egPagin',
        clickable: true,
      },
      navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      speed: 800
    })
    new Swiper('.swiperBox1',{
      loop: true,
      direction: 'vertical',
      autoplay:{
        delay: 1000,
        disableOnInteraction: false,
      },
      slidesPerView: 2,
	    onlyExternal : true, //设置为true时，slide无法拖动
	    speed: 600
    })
  }
  render() {
    const navbarType = classNames({
      'iconfont': true,
      [index.navbarType]: true,
    })
    const bannerImg = this.props.bannerImg;
    const enterList = this.props.enterList;
    const totiaoList = this.props.totiaoList;
    const beyondYearList = this.props.beyondYearList;
    const saleList = this.props.saleList;
    const saleListBc = saleList.bc;
    const saleProductList = saleList.productList;
    const guessFavTitbar = this.props.guessFav.titbar;
    const guessFavList = this.props.guessFav.list;
    return (
      <div className={index.App}>
        <main className={index.conCont}>
          {/*导航 begin*/}
          <nav className={index.navbar}>
            <a href="#" className={navbarType}>&#59072;</a>
            <div className={index.navbarSearch}>
              <form action="">
                <input id="searchInput" type="text" placeholder="空调爆款低至5折" />
              </form>
            </div>
            <a href="" className={index.btnLogin}>登录</a>
          </nav>
          {/*导航 end*/}
          {/* 焦点图 begin */}
          <div className="swiper-container swiperBox">
            <div className="swiper-wrapper">
              {
                bannerImg.map((item, index) => {
                  return(
                    <div key={item.id} className="swiper-slide">
                      <div className="pic">
                        <img src={item.image} alt=""/>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <div className="egPagin"></div>
          </div>
          {/*焦点图 end*/}
          {/*分类 begin*/}
          <ul className={index.enterList}>
            {
              enterList.map((item, index) => {
                return(
                  <li key={item.id}>
                    <a href="">
                      <img src={item.image} alt=""/>
                      <h3 className="sTitle">{item.title}</h3>
                    </a>
                  </li>
                )
              })
            }
          </ul>
          {/*分类 end*/}
          {/*头条轮播图 begin*/}
          <div className={index.totiao}>
            <img src="//image4.suning.cn/uimg/cms/img/153248811787088861.png" alt="" className={index.logo} />
            <div className="swiper-container swiperBox1">
              <div className="swiper-wrapper">
                {
                  totiaoList.map((item, key) => {
                    return(
                      <div key={item.id} className="swiper-slide">
                        <li>
                          <a href="">
                            <i className="tag">{item.tag}</i>
                            <span className="text">{item.text}</span>
                          </a>
                        </li>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
          {/*头条轮播图 end*/}
          {/*跨年狂欢 新年换新 begin*/}
          <div className={index.beyondYear}>
            <div className={index.logo}>
              <a href="">
                <img src="//image5.suning.cn/uimg/cms/img/154598805689865927.jpg" alt=""/>
              </a>
            </div>
            {/*活动列表 begin*/}
            <ul className={index.viewList}>
              {
                beyondYearList.map((item, key) => {
                  return(
                    <li key={item.id}>
                      <a href="">
                        <img src={item.image} alt=""/>
                      </a>
                    </li>
                  )
                })
              }
            </ul>
            {/*活动列表 end*/}
            {/*打折商品列表 begin*/}
            <ul className={index.saleList}>
              {
                saleProductList.map((item,key) => {
                  return(
                    <li key={item.id}>
                      <a href="">
                        <img src={saleListBc} alt="" className={index.bc}/>
                        <img src={item.image} alt="" className={index.product}/>
                        <h3 className={index.sTitle}>{item.title}</h3>
                        <h3 className={index.subTitle}>{item.subTitle}</h3>
                      </a>
                    </li>
                  )
                })
              }
            </ul>
            {/*打折商品列表 end*/}
          </div>
          {/*跨年狂欢 新年换新 end*/}
          {/*栏目 begin*/}
          <div className={index.view1}>
              <div className={index.titbar}></div>
              <div className={index.cont}>

              </div>
          </div>
          <div className={index.view2}>
              <div className={index.titbar}></div>
              <div className={index.cont}>

              </div>
          </div>
          {/*猜你喜欢 begin*/}
          <div className={index.view3}>
            <div className={index.titbar}>
              <a href={guessFavTitbar.url}>
                <img src={guessFavTitbar.image} alt=""/>
              </a>
            </div>
            <div className={index.cont}>
              {
                guessFavList.map((item,key) => {
                  return(
                    <li key={item.id}>
                      <a href="">
                        <img src={item.image} alt=""/>
                        <h3 className={index.sTitle}><i style={{background: "url("+item.tag+") no-repeat"}}></i>{item.title}</h3>
                        <p className={index.info}>
                            {
                              item.info.map((item, key) => {
                                return(
                                  <span key={key}>{item}</span>
                                )
                              })
                            }
                        </p>
                        <h3 className={index.price}>￥{item.price}</h3>
                      </a>
                    </li>
                  )
                })
              }
            </div>
          </div>
          {/*猜你喜欢 end*/}
        {/*栏目 end*/}
        </main>
      </div>
    );
  }
}

export default App;
