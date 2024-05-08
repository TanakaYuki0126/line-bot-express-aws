// オブジェクトに対応するキーがあるかを判定する関数
export const hasKey = (obj, key) =>
  obj ? Object.prototype.hasOwnProperty.call(obj, key) : false;
