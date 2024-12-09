<template>
  <div class="login-container">
    <div class="talent-search-container">
      <h2>人才管理</h2>
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
          <el-button @click="openAddForm" type="success" round plain>增加人才</el-button>
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
          <el-button @click="deleteTalentById(scope.row.id)" type="danger" round plain>删除</el-button>
        </template>
      </el-table-column>
      </el-table>
    </div>
    <el-dialog v-model="addFormVisible" title="添加人才">
            <el-form :model="newTalent"  label-width="120px">
              <el-form-item label="姓名">
                <el-input v-model="newTalent.name" placeholder="请输入人才姓名"/>
              </el-form-item>
              <el-form-item label="应聘岗位">
                <el-select v-model="newTalent.position" placeholder="请选择应聘岗位" clearable>
                  <el-option v-for="position in idealPositions" :key="position" :label="position" :value="position" />
                  <el-option label="全部" :value="null" />
                </el-select>
              </el-form-item>
              <el-form-item label="工作技能">
                <div v-for="(skill, index) in newTalent.skills" :key="index" class="skill-item">
                  <el-input v-model="newTalent.skills[index]" placeholder="请输入技能" style="width: calc(100% - 100px); display: inline-block;" />
                  <el-button @click="removeSkill(index)" type="danger" icon="el-icon-delete" style="margin-left: 10px;">删除</el-button> 
                </div>
                <el-button @click="addSkill" type="primary" style="margin-top: 0px;">添加技能</el-button>
              </el-form-item>
              <el-form-item label="联系方式">
                <el-input v-model="newTalent.contactInfo"  placeholder="请填写联系方式"/>
              </el-form-item>
              <el-form-item label="工作经验">
                <el-input v-model="newTalent.experience"  placeholder="请填写工作经验"/>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="addFormVisible = false">取消</el-button>
              <el-button type="success" @click="addNewTalent" plain>添加</el-button>
            </span>
    </el-dialog>
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
const addFormVisible = ref(false);
let idCounter = ref(1);
const nextId = computed(() => idCounter.value);
const newTalent = ref({
  id: 0,
  name: '',
  position: '', // 理想职位
  skills: [] as string[], // 技能列表
  contactInfo: '', // 联系方式
  experience: '',
});
const useTalent=useTalentStore();
const talents = ref<any[]>([]);

onMounted(async () => {
  try {
    await useTalent.fetchTalents();
    talents.value = useTalent.talentlist;
    // 更新 ID 计数器
    idCounter.value = talents.value.length ? Math.max(...talents.value.map(t => t.id)) + 1 : 1;
  } catch (error) {
    console.error('获取人才数据失败:', error);
  }
});
const addSkill = () => {
  newTalent.value.skills.push('');
};

const removeSkill = (index: number) => {
  newTalent.value.skills.splice(index, 1);
};
const idealPositions = ['后端开发工程师', '测试工程师', '产品经理', 'UI设计师', '前端开发工程师', '数据分析师'];
const openAddForm = () => {
      
      addFormVisible.value = true;
    };
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

const addNewTalent = async () => {
  
  try {
    newTalent.value.id = nextId.value;
    await useTalent.addTalent(newTalent.value);
    ElMessage.success('增加人才成功');
    addFormVisible.value = false;
    // 重置表单数据
    newTalent.value = {
      id: 0,
      name: '',
      position: '',
      skills: [],
      contactInfo: '',
      experience: '',
    };
    // 更新 ID 计数器
    idCounter.value++;
    talents.value = useTalent.getTalents;
  } catch (error) {
    ElMessage.error('增加人才失败，请重试');
  }
};

const deleteTalentById = async (id: number) => {
  try {
    await useTalent.deleteTalent(id);
    ElMessage.success('删除人才成功');
    talents.value = useTalent.getTalents;
  } catch (error) {
    ElMessage.error('删除人才失败，请重试');
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
