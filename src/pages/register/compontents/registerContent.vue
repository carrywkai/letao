<template>
    <div class="register-content">
        <label for="username">用户名<input type="text" placeholder="请输入用户名" v-model="username"></label>
        <label for="mobile">手机号<input type="text" placeholder="请输入手机号" v-model="mobile"></label>
        <label for="password">密码<input type="password" placeholder="请输入密码" v-model="password"></label>
        <label for="username">确认密码<input type="password" placeholder="确认密码" v-model="comfirmPwd"></label>
        <label for="username">验证码<input type="text" v-model="code"><span @click="getCode">获取验证码</span></label>
        <el-button type="primary" @click="register">注册</el-button>
        <router-link to='/login' class="login-link">立即登录</router-link>
    </div>
</template>

<script>

export default {
    name: 'registerContent',
    data () {
        return {
            username: '',
            password: '',
            comfirmPwd: '',
            code: '',
            mobile: ''
        }
    },
    methods: {
        getCode () { // 获取验证码
            this.$axios.get('/user/vCode').then(response => {
                // console.log(response)
                this.code = response.data.vCode;
                this.$message({
                    type: 'success',
                    message: '验证码是' + this.code
                })
            })
        },
        register () { // 注册
            // 1 表单验证
            if (this.username == '') { // 用户名不能为空
                this.$message({
                    type: 'warning',
                    message: '请输入用户名'
                })

                return;
            }

             if (this.mobile == '') { // 用户名不能为空
                this.$message({
                    type: 'warning',
                    message: '手机号不能为空'
                })

                return;
            }

            if (this.password == '') { // 密码不能为空
                this.$message({
                    type: 'warning',
                    message: '请输入密码'
                })

                return;
            }

            // 密码 和 确认密码必须相同
            if (this.password != this.comfirmPwd) {
                this.$message({
                    type: 'warning',
                    message: '二次输入密码不一致'
                })

                return;
            }

            // 验证是否输入验证码
            if (this.code == '') {
                this.$message({
                    type: 'warning',
                    message: '请输入验证码'
                })

                return;
            }

            // 表单验证完，发送请求
            this.$axios.post('/user/register',{
                username: this.username,
                mobile: this.mobile,
                password: this.password,
                vCode: this.vCode

            }).then(response => {
                console.log(response)
            })

        }
    }
}
</script>

<style lang="less" scoped>
    .register-content {
        margin-top: 1.2rem;
        display: flex;
        flex-direction: column;
        padding: 0 .2rem;
        > label {
            height: .8rem;
            width: 100%;
            line-height: .8rem;
            border-bottom: 1px solid #ccc;
            > input {
                height: .7rem;
                margin-left: .2rem;
            }
            > span {
                display: inline-block;
                margin-left: 2rem;
                color: #006699;
            }
            &:last-of-type {
                margin-bottom: .2rem;
            }
        }
        .login-link {
            margin-top: .2rem;
            color: #006699;
            text-align: right;
        }
    }
</style>

