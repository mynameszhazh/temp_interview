import { Rule, RuleType } from "@midwayjs/validate";

export class UserLoginDTO {
  @Rule(RuleType.string().required().max(10).min(1))
  username: string;

  @Rule(RuleType.string().required().max(18).min(6))
  password: string;
}