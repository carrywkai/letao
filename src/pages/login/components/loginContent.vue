<template>
     <div>
         <label for="username">
             用户名<input type="text" id="username" placeholder="请输入用户名" v-model='username'>
         </label>
         
         <label for="password">
             密  码<input type="psd" id="password" placeholder="请输入密码" v-model="password">
        </label>
        <el-button type="primary" class="login" @click='login'>登录</el-button>
        <router-link to='/register'>免费注册</router-link>
     </div>
</template>

<script>
export default {
    name: 'loginContent',
    data () {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        login () {
            // 表单验证
            if (this.username == '') {
                this.$message({
                    type: 'warning',
                    message: '请输入用户名'
                })

                return;
            } 

            if (this.password == '') {
                this.$message({
                    type: 'warning',
                    message: '请输入密码'
                })
                return;
            }

            this.$axios.post('/user/login',{username: this.username, password:this.password}).then( response => {
                // console.log(response);
                if (response.data.success) {
                    this.$router.push({path: '/user'})
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
    div{
        margin-top: 1.1rem;
        display: flex;
        flex-direction: column;
        > label {
            width: 100%;
            height: .6rem;
            line-height: .6rem;
            border-bottom: 1px solid #ccc;
            padding-left: .2rem;
            &:first-of-type {
                margin-bottom: .1rem;
            }
            > input {
                margin-left: 1rem;
                
            }
        }
        .login {
            margin-top: .5rem;
            margin-bottom: .2rem;
        }
        > a {
            text-align: right;
            color: #006699;
            display: block;
            margin-right: .1rem;
        }
    }
</style>


