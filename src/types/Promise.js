// @flow
declare interface Promise {
  static all(arr: Array<any>): Promise;
  then(e: (a: any) => any): Promise;
  catch(e: (a: any) => any): Promise;
}
