<template>
  <el-container class="container">
    <el-header>
      <h1 class="title">注册</h1>
    </el-header>
    <el-main class="center-form">
      <el-row type="flex" justify="center">
        <el-col :span="7">
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="用户名" prop="username">
              <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="身份">
              <el-radio-group v-model="ruleForm.radio">
                <el-radio :label="1">消防</el-radio>
                <el-radio :label="2">司法</el-radio>
                <el-radio :label="3">鉴定</el-radio>
                <el-radio :label="4">管理员</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item>
              <el-row type="flex" justify="center">
                <el-col :span="9">
                  <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                  <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-col>
              </el-row>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'Regist',
  data () {
    return {
      ruleForm: {
        pass: '',
        checkPass: '',
        username: '',
        radio: 1
      },
      rules: {
        pass: [
          { validator: this._validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: this._validatePass2, trigger: 'blur' }
        ],
        username: [
          { validator: this._checkeUsername, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },

    _checkeUsername (rule, value, callback) {
      if (!value) {
        return callback(new Error('用户名不能为空'))
      }
    },
    _validatePass (rule, value, callback) {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    },
    _validatePass2 (rule, value, callback) {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  width 100%
  min-width 1000px
  overflow hidden
  padding-top 20vh

  .title
    text-align center
    position relative
    left 30px
</style>
