// @flow
declare interface KiiUser {
  static authenticate(uname: string, passwd: string): Promise;
  static userWithUsername(uname: string, passwd: string): KiiUser;
  register(): Promise;
}

declare interface KiiGroup {
  static groupWithName(name: string): KiiGroup;
  save(): Promise;
}

declare interface Context {
  getAccessToken(): string;
  getAppAdminContext(): Object;
}
