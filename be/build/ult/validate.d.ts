import { SignupType } from "../type/signup";
export declare const validate: (body: SignupType) => Promise<"this username is existed" | "this email is existed" | "your username must be equal or larger than 6 character" | "your password must be equal or larger than 6 character" | "your email is not valid" | undefined>;
//# sourceMappingURL=validate.d.ts.map