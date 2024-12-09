//用户
export interface Users {
  id: number;
  username: string;
  password:string;
}
//外部人才
export interface ExternalTalent {
  id: number;
  name: string;
  position: string; // 理想职位
  skills: string[]; // 技能列表
  contactInfo?: string; // 联系方式
  experience?: string; // 工作经验
}



