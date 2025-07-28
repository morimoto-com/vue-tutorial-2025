import { toValue, watchEffect } from 'vue'
import { useRefHistory } from './RefHistory.js'
export function useRefLHistory(source, limit) {
  const { history, undo } = useRefHistory(source)
  watchEffect(() => {
    // composableを作成する際の引数ではオブジェクト、
    // 値どちらも受け取れるように、toValueを作成すること
    if (history.value.length > toValue(limit)) {
      history.value.shift()
    }
  })
  // 返り値を複数返したい場合はオブジェクトで返す
  return {
    history,
    undo,
  }
}
