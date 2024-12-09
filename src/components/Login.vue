<template>
  <div class="login-container">
    <div class="form-container">
      <h1>人才招聘系统</h1>
      <div class="form-item">
        <label for="username">账号:</label>
        <el-input v-model="inputusername" id="username" placeholder="请输入账号"/>
      </div>
      <div class="form-item">
        <label for="password">密码:</label>
        <el-input v-model="inputpassword" id="password" type="password" placeholder="请输入密码"/>
      </div>
      <div class="form-item">
        <div class="m-4">
        <p>请选择进入的系统</p>
        <el-cascader v-model="radio1" :options="options" @change="handleChange" />
        </div>
      </div>
      <el-button class="mb-4" type="success" @click="login">登陆</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { ElMessage } from 'element-plus';
import axios from 'axios';
import { useRouter } from 'vue-router';

const inputusername = ref('');
const inputpassword = ref('');
const radio1 = ref(''); 
const router = useRouter();
const options = [
{
    value: '1',
    label: '人才搜寻系统',
},
{
    value: '2',
    label: '人才管理系统',
}
]
const handleChange = (value: any) => {
  console.log(value)
}
//获取user的数据
let userlist: any[] = [];
onMounted(async () => {
  try {
    const response = await axios.get('/api/getusers');
    userlist = response.data.data;
    console.error('获取用户数据成功');
    console.log(response.data)
  } catch (error) {
    console.error('获取用户数据失败:', error);
  }
});


const login = async () => {
  if (!inputusername.value || !inputpassword.value) {
    ElMessage.error('请输入账号和密码');
    return;
  }

  //数据验证
  const user = userlist.find(
    (User: { username: string; password: string; }) => User.username === inputusername.value && User.password === inputpassword.value
  );

  if (user) 
  {
    // 导航到不同的页面
    if (radio1.value == '1') {
      router.push('/talent-search');
    } 
    else if (radio1.value == '2') {
      router.push('/talent-manage');
    }
  } else {
    ElMessage.error('用户名或密码错误');
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #baff97;
}

.form-container {
  background-color: rgb(255, 255, 255);
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
}

h1 {
  text-align: center;
  margin-bottom: 24px;
  color: #333;
}

.form-item {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  color: #555;
}

p {
  margin-bottom: 8px;
  color: #555;
}
</style>
