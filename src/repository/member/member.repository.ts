import { dodamV6Axios } from "../../lib/axios/customAxios";
import { MyMemberResponse } from "../../types/member/member.type";

class MemberRepository {
  public async getMyMember(): Promise<MyMemberResponse> {
    const { data } = await dodamV6Axios.get<MyMemberResponse>("/members/my");
    return data;
  }
}

export default new MemberRepository();
