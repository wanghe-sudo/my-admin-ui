<!--
  *@name Login.vue
  *@date 2025/5/5 14:20
  *@description
-->
<template>
  <div class="login-form">
    <h2>后台通用管理系统</h2>
    <el-form :model="loginForm">
      <el-form-item label="用户名" prop="username" :model="loginForm.username">
        <el-input placeholder="请输入用户名" prefix-icon="el-icon-user"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" :model="loginForm.password">
        <el-input placeholder="请输入密码" type="password" prefix-icon="el-icon-key"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="请输入验证码" prefix-icon="el-icon-view" class="captchaInput" maxlength="6"></el-input>
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
        password: ""
      }
    }
  },
  methods: {}
}
</script>

<style scoped>
.login-form {
  display: flex;
  height: 100%;
  background-image: url("../assets/images/login_background.jpg");
}

.captchaInput {
  width: 200px;
}

.captchaImg {
  width: 200px;
  float: left;
}
</style>
