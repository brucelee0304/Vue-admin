<template>
    <div class="header clearfix">
       <div class="logo pull-left">
       	Logo
       </div>
       <div class="logoNmae pull-left">
       	管理系统
       </div>
       <div class="login pull-right">
       		登陆
       </div>
    </div>
</template>
<script>
    export default {
        /*data() {
            return {
                name: 'linxin'
            }
        },
        computed:{
            username(){
                let username = localStorage.getItem('ms_username');
                return username ? username : this.name;
            }
        },
        methods:{
            handleCommand(command) {
                if(command == 'loginout'){
                    localStorage.removeItem('ms_username')
                    this.$router.push('/login');
                }
            }
        }*/
    }
</script>
<style scoped>
    .header {
        width: 100%;
        height: 70px;
        font-size: 22px;
        line-height: 70px;
        background: #242f42;
        color: #fff;
    }
    .header .logo{
    	margin: 0 20px;
    }
    .header .login{
    	margin: 0 20px;
    }
</style>