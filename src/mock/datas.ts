import type { Users,ExternalTalent} from '@/types/index';
import Mock from 'mockjs';
//用户数据
export const users: Users[] =[
  {
    id: 1,
    username: "admin",
    password: "123456",
  },
]
//人才数据
export let externalTalents: ExternalTalent[] = [
  {
    id: 1,
    name: '李明',
    position: '前端开发工程师',
    skills: ['JavaScript', 'Vue.js', 'TypeScript'],
    contactInfo: 'li.ming@gmail.com',
    experience: '5年',
  },
  {
    id: 2,
    name: '王芳',
    position: '后端开发工程师',
    skills: ['Java', 'Spring Boot', 'MySQL'],
    contactInfo: 'wang.fang@gmail.com',
    experience: '6年',
  },
  {
    id: 3,
    name: '张伟',
    position: '测试工程师',
    skills: ['自动化测试', 'Selenium', 'Jenkins'],
    contactInfo: 'zhang.wei@gmail.com',
    experience: '4年',
  },
  {
    id: 4,
    name: '刘洋',
    position: '数据分析师',
    skills: ['Python', 'SQL', 'Pandas'],
    contactInfo: 'liu.yang@gmail.com',
    experience: '3年',
  },
  {
    id: 5,
    name: '赵敏',
    position: '产品经理',
    skills: ['需求分析', '项目管理', '用户体验'],
    contactInfo: 'zhao.min@gmail.com',
    experience: '7年',
  },
  {
    id: 6,
    name: '孙涛',
    position: '测试工程师',
    skills: ['自动化测试', 'Cypress', 'Postman'],
    contactInfo: 'sun.tao@gmail.com',
    experience: '5年',
  },
  {
    id: 7,
    name: '周娜',
    position: 'UI设计师',
    skills: ['Sketch', 'Photoshop', 'Illustrator'],
    contactInfo: 'zhou.na@gmail.com',
    experience: '4年',
  },
  {
    id: 8,
    name: '马龙',
    position: '后端开发工程师',
    skills: ['C++', 'Python', 'Linux'],
    contactInfo: 'ma.long@gmail.com',
    experience: '6年',
  },
  {
    id: 9,
    name: '陈莉',
    position: '数据分析师',
    skills: ['R', 'Tableau', 'SQL'],
    contactInfo: 'chen.li@gmail.com',
    experience: '3年',
  },
  {
    id: 10,
    name: '杨杰',
    position: '前端开发工程师',
    skills: ['React', 'JavaScript', 'CSS'],
    contactInfo: 'yang.jie@gmail.com',
    experience: '8年',
  },
];
//虚拟接口
export default [
  //获取用户信息
  {
    url: "/api/getusers", // 请求地址
    method: "get",     // 请求方式
    response: () => {
    // 返回 users 数组作为响应数据
      return {
        code: 200,        // 状态码，表示成功
        data: users,      // 返回用户数据
        message: "获取用户数据成功" // 可选的消息信息
      };
    }
  },
  //获取人才信息
  {
    url: "/api/getTalents", // 请求地址
    method: "get",     // 请求方式
    response: () => {
    // 返回 users 数组作为响应数据
      return {
        code: 201,        // 状态码，表示成功
        data: externalTalents,      // 返回用户数据
        message: "获取人才数据成功(mock)" // 可选的消息信息
      };
    }
  },

  {
    url: "/api/addTalent", 
    method: "post",     
    response: ({ body }: { body: ExternalTalent }) => {
      externalTalents.push(body);
      return {
        code: 200,
        data: body,
        message: "增加人才成功(mock)" 
      };
    }
  },
  // 删除人才信息
  {
    url: /\/api\/deleteTalent\/\d+/, 
    method: "delete", 
    response: ({ url }: { url: string }) => {
      const id = parseInt(url.split('/').pop()!, 10); 
      externalTalents = externalTalents.filter(talent => talent.id !== id); 
      return {
        code: 200, 
        message: "人才删除成功(mock)" 
      };
    }
  },
];