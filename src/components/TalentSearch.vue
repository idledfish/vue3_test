<template>
  <div class="login-container">
    <div class="talent-search-container">
      <h2>人才搜索</h2>
      <el-form :model="searchForm" class="search-form" label-width="100px">
        <el-form-item label="姓名">
          <el-input v-model="searchForm.name" placeholder="请输入人才姓名" />
        </el-form-item>
        <el-form-item label="应聘岗位">
          <el-select v-model="searchForm.idealPosition" placeholder="选择应聘岗位" clearable>
            <el-option v-for="position in idealPositions" :key="position" :label="position" :value="position" />
            <el-option label="全部" :value="null" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button  @click="search" round plain>搜索</el-button>
          <el-button type="success" @click="recommend" round plain>人才推荐</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="talents" class="talent-table" stripe>
        <el-table-column prop="id" label="编号" width="80" />
        <el-table-column prop="name" label="姓名" />
        <el-table-column prop="position" label="应聘岗位" />
        <el-table-column label="工作技能">
          <template #default="scope">
            <div>
              <el-tag v-for="skill in scope.row.skills" :key="skill" type="info" effect="dark" class="skill-tag">
                {{ skill }}
              </el-tag>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="contactInfo" label="联系方式" />
        <el-table-column prop="experience" label="工作经验" />
        <el-table-column label="操作">
        <template #default="scope">
          <el-button @click="deleteTalentById(scope.row.id)" type="success" >招聘</el-button>
        </template>
      </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { ElMessage } from 'element-plus';
import {useTalentStore} from '@/store/talent'

const searchForm = ref({
  name: '',
  idealPosition: null 
});


const useTalent=useTalentStore();
const talents = ref<any[]>([]);

onMounted(async () => {
  try {
    await useTalent.fetchTalents();
    talents.value = useTalent.talentlist;
    // 更新 ID 计数器
  } catch (error) {
    console.error('获取人才数据失败:', error);
  }
});
const idealPositions = ['后端开发工程师', '测试工程师', '产品经理', 'UI设计师', '前端开发工程师', '数据分析师'];

const search = () => {
  try {
    talents.value = useTalent.getTalents.filter(
      (talent) =>
        (!searchForm.value.name || talent.name.includes(searchForm.value.name)) &&
        (searchForm.value.idealPosition === null || talent.position === searchForm.value.idealPosition)
    );
      } 
  catch (error) {
        ElMessage.error('搜索失败，请重试');
      }
};

const recommend = () => {
  try {
    talents.value = [...talents.value].sort((a, b) => {
      const expA = parseInt(a.experience?.replace(/\D/g, '') || '0', 10);
      const expB = parseInt(b.experience?.replace(/\D/g, '') || '0', 10);
      return expB - expA; 
    });
  } catch (error) {
    ElMessage.error('推荐失败，请重试');
  }
};
const deleteTalentById = async (id: number) => {
  try {
    await useTalent.deleteTalent(id);
    ElMessage.success('聘用人才成功');
    talents.value = useTalent.getTalents;
  } catch (error) {
    ElMessage.error('聘用人才失败，请重试');
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #baff97;
  min-height: 100vh;
}

.talent-search-container {
  background-color: #ffffff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 100%;
}

h2 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 24px;
}

.search-form {
  margin-bottom: 20px;
}

.talent-table {
  margin-top: 20px;
}

.skill-tag {
  margin-right: 5px;
}

.el-button {
  margin-right: 10px;
}

.el-table th {
  background-color: #f9fafb;
  color: #333;
  font-weight: 500;
  text-align: center;
}

.el-table td {
  text-align: center;
  color: #555;
}

.el-table .el-tag {
  border-radius: 8px;
  padding: 2px 8px;
}
</style>

