import { counter } from "./counter";

const appStore: any = {};

/**
 * 注册app状态库
 */
export function registerStore() {
  appStore.counter = counter();
}

export default appStore;
