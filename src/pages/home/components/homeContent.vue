<template>
    <div class="home-content">
        <!-- 轮播图 -->
        <swiper class="home-banner" :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
            <!-- slides -->
            <swiper-slide>
                <a href="javascript:;">
                    <img src="../../../assets/images/banner1.png" alt="">
                </a>
            </swiper-slide>
            <swiper-slide>
                <a href="javascript:;">
                    <img src="../../../assets/images/banner2.png" alt="">
                </a>
            </swiper-slide>
            <swiper-slide>
                <a href="javascript:;">
                    <img src="../../../assets/images/banner3.png" alt="">
                </a>
            </swiper-slide>
            <swiper-slide>
                <a href="javascript:;">
                    <img src="../../../assets/images/banner4.png" alt="">
                </a>
            </swiper-slide>
            <swiper-slide>
                <a href="javascript:;">
                    <img src="../../../assets/images/banner5.png" alt="">
                </a>
            </swiper-slide>
            <swiper-slide>
                <a href="javascript:;">
                    <img src="../../../assets/images/banner6.png" alt="">
                </a>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>

        <!-- 导航栏 -->
        <nav class="home-nav">
            <a href="javascript:;"><img src="../../../assets/images/nav1.png" alt=""></a>
            <a href="javascript:;"><img src="../../../assets/images/nav2.png" alt=""></a>
            <a href="javascript:;"><img src="../../../assets/images/nav3.png" alt=""></a>
            <a href="javascript:;"><img src="../../../assets/images/nav4.png" alt=""></a>
            <a href="javascript:;"><img src="../../../assets/images/nav5.png" alt=""></a>
            <a href="javascript:;"><img src="../../../assets/images/nav6.png" alt=""></a>
        </nav>

        <!-- 品牌展示 -->
        <div class="home-brand">
            <img src="../../../assets/images/title0.png">
            <ul>
                <li><img src="../../../assets/images/brand1.png" alt=""></li>
                <li><img src="../../../assets/images/brand2.png" alt=""></li>
                <li><img src="../../../assets/images/brand3.png" alt=""></li>
                <li><img src="../../../assets/images/brand4.png" alt=""></li>
                <li><img src="../../../assets/images/brand5.png" alt=""></li>
                <li><img src="../../../assets/images/brand6.png" alt=""></li>
                <li><img src="../../../assets/images/brand7.png" alt=""></li>
                <li><img src="../../../assets/images/brand8.png" alt=""></li>
            </ul>
        </div>

        <!-- 商品展示 -->
        <div class="home-product">
            <img src="../../../assets/images/title1.png" alt="">
            <ul>
                <li>
                    <a href="javascript:;">
                        <img src="../../../assets/images/product.jpg" alt="">
                        <span>adidas阿迪达斯 男式 场下休闲篮球鞋S83700</span>
                        <span>&yen;520.00</span>
                        <span>&yen;280.00</span>
                        <button></button>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'homeContent',
    data () {
        return {
          swiperOption: {
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            loop: true,
            autoplay: {
                autoplay: true,
                delay: 1000
            }
         }
        }
    }
}
</script>

<style scoped lang='less'>
    .home-content {
        width: 100%;
        margin-top: 1rem;
        margin-bottom: 1rem;
        .home-banner {
            width: 100%;
            a {
                display: block;
                width: 100%;
                height: 100%;
                >img {
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }

    .home-nav {
        padding: .1rem;
        display: flex;
        flex-wrap: wrap;
        > a {
            width: 33.3333%;
            > img {
                width: 100%;
                display: block;
            }
        }
    }

    .home-brand {
        width: 100%;
        > img {
            width: 100%;
            display: block;
        }
        > ul {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            > li {
                width: 25%;
                > img {
                    width: 100%;
                    display: block;
                }
            }
        }
    }

</style>


