import { hasKey } from '../haskey.js';
import { messageMap } from './message/text-map.js';

// ポストバックイベントが飛んできた時
export const postbackHandler = (event) => {
  let message;
  // ポストバックデータをpostbackDataに格納
  const postbackData = event.postback.data;
  // もしevent.postback.paramsが存在する場合
  if (hasKey(event.postback.params, 'datetime')) {
    // 返信するメッセージを作成
    message = {
      type: 'text',
      text: `日時データを受け取りました！\ndata: ${postbackData}\ndatetime: ${event.postback.params.datetime}`,
    };
    // 存在しない場合
  } else {
    // 返信するメッセージを作成
    const searchParams = new URLSearchParams(postbackData);
    const entries = searchParams.entries();
    const data = Object.fromEntries(entries);
    const { action, day } = data;
    message = messageMap[action][day]();
  }
  // 関数の呼び出し元（bot.jsのindex）に返信するメッセージを返す
  return message;
};
