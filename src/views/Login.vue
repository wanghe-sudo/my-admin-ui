<!--
  *@name Login.vue
  *@date 2025/5/5 14:20
  *@description
-->
<template>
  <div class="login-container">
    <div class="login-title">后台通用管理系统</div>
    <el-form :model="loginForm" class="login-form" label-width="60px">
      <el-form-item label="用户名" prop="username">
        <el-input placeholder="请输入用户名" prefix-icon="el-icon-user" v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input placeholder="请输入密码" type="password" prefix-icon="el-icon-key"
                  v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item class="captcha">
          <el-input placeholder="请输入验证码" prefix-icon="el-icon-view" class="captchaInput"
                    v-model="loginForm.captchaInput"></el-input>
          <el-image class="captchaImg"></el-image>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">登录</el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
        captchaInput: "",
      }
    }
  },
  methods: {}
}
</script>

<style scoped lang="less">
.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  background-image: url("../assets/images/login_background.jpg");
  background-repeat: no-repeat;
  background-size: cover;

  .login-title {
    text-align: center;
    font-weight: bold;
    font-size: 24px;
    font-family: Arial, ui-serif;
    margin-bottom: 10px;
  }

  .login-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    width: 400px;
    margin: 0 auto;
    padding: 20px;
  }
  .captcha {
    overflow: hidden; /* 触发 BFC 来包含浮动 */
    .captchaInput{
      width: 150px;
      margin-right: 30px;
      float: left;
    }
    .captchaImg{
      float: left;
    }
  }

/*  ::v-deep(.captcha) {
    & > div {
      display: flex;
      align-items: center;

      .captchaInput {
        width: 150px;
      }

    }

    .captchaImg {
      width: 100px;
    }
  }*/
}

</style>

