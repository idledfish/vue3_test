import { defineStore } from 'pinia';
import axios from 'axios';
import type { ExternalTalent } from '@/types/index';

let talentlist: any[] = [];

export const useTalentStore = defineStore('ExternalTalent', {
  state: () => ({
    talentlist: talentlist as ExternalTalent[],
  }),
  getters: {
    getTalents: (state) => state.talentlist,
    findTalentById: (state) => (id: number) => state.talentlist.find(talent => talent.id === id),
  },
  actions: {
    async fetchTalents() {
      try {
        const response = await axios.get('/api/getTalents');
        this.talentlist = response.data.data;
        console.log('获取人才数据成功');
      } catch (error) {
        console.error('获取人才数据失败:', error);
      }
    },
    async addTalent(talent: ExternalTalent) {
      try {
        const response = await axios.post('/api/addTalent', talent);
        this.talentlist.push(response.data.data);
        console.log('增加人才成功');
      } catch (error) {
        console.error('增加人才失败:', error);
      }
    },
    async deleteTalent(id: number) {
      try {
        await axios.delete(`/api/deleteTalent/${id}`);
        this.talentlist = this.talentlist.filter(talent => talent.id !== id);
        console.log('删除人才成功');
      } catch (error) {
        console.error('删除人才失败:', error);
      }
    },
  }
});
