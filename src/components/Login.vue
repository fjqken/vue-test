<template>
    <div class="login">
        <div class="login1">
            <div class="login_title">
                 <div class="content">云智易测试平台</div>
            </div>  
            <form>
                <div class="account">
                    <span>账号</span>
                    <input type="text" name="account" v-model="message.account">
                </div>
                <div>
                    <span>密码</span>
                    <input type="text" name="password" v-model="message.password"><br>
<!--                    <XInput placeholder="请输入" v-model="val1" width="200px"></XInput>-->

                </div>
                <div>
                    <input type="button" value="提交" @click="post1">
                </div>
            </form>
            <a href="https://dormousehole.readthedocs.io/en/latest/">快去看看flask</a>
<!--            <div @click.capture="divEven" style="border:1px #188eee solid;">-->
<!--                <a href="www.baidu.com" @click.prevent="aEven">百度链接</a>-->
<!--            </div>-->
            <!--self的使用：只有点击他本身时才去执行，点击他的子元素不去执行-->
<!--            <div @click.self="divEven" style="border:1px #188eee solid;">-->
<!--            <a href="www.baidu.com" @click.prevent="aEven">百度链接</a>-->
<!--            </div>-->
            <!--第一种情况,先执行子盒子，再执行大盒子的-->
<!--            <div @click="divEven" style="border:1px #188eee solid;">--> 
<!--            <a href="www.baidu.com" @click="aEven">百度链接</a>-->
<!--            </div>-->
<!--            stop的使用：阻止事件冒泡的发生-->
<!--            <div @click="divEven" style="border:1px #188eee solid;">-->
<!--            <a href="www.baidu.com" @click.stop="aEven">百度链接</a>-->
<!--            </div>-->

<!--            prevent的使用：阻止默认事件的发生-->
            <!-- <div @click="divEven" style="border:1px #188eee solid;">
            <a href="https://www.baidu.com" @click.stop.prevent="aEven">百度链接</a>
            </div> -->
<!--                只能支持触发一次-->
            <!-- <div @click.once="divEven" style="border:1px #188eee solid;">
                <a href="https://www.baidu.com" @click.stop.prevent="aEven">百度链接</a>
            </div> -->
        </div>

    </div>
</template>


<style scoped lang="stylus">
    .login
        // position relative
        background-image: url('../../image/loginbackground.jpeg')
        background-position:center
        background-size: cover
        background-repeat no-repeat    
        // background #42b983
        background-attachment: scroll
        height 100%
        width 100%
        overflow-y:scroll;

    .login1
        // padding-top 60px
        top 400px
        margin-right  700px
        margin-left 700px
        background #fff
        position relative
        height 300px
        // width  400px

    .login_title
        overflow hidden 


    .content
        margin 30px 0 25px
        font-size 20px

    .account
        margin-bottom 8px
</style>

<script>
    // import Vue from 'vue'
    var date1 = {account: '邮箱/手机号!', password: '密码'}
    export default {
        data() {
            return {
                message: date1,
                val1: '',
                checked : false,
                checkedNames: []
            }
        },
        methods: {
            post1() {
                this.$axios.post('/v2/corp_auth', this.message).then(response => {
                    this.test1(response)
                    console.log(response)
                }).catch(error => {
                    console.log(error)
                })
            },
            test1(response) {
                console.log(response.status)
                if (response.status == 200) {
                    this.$router.push('/test')
                }
            },
            divEven(){
                alert("我是div的事件");
            },
            aEven(){
                alert("我是a链接事件");
            }
        }
    }

</script>



