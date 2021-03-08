/**
 * 日時のフォーマットを行う便利関数
 * @param date
 * @param format
 */
export const formatDate = (date: Date, format = 'hh:mm') => {
  format = format.replace(/YYYY/g, `${date.getFullYear()}`)
  format = format.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2))
  format = format.replace(/DD/g, ('0' + date.getDate()).slice(-2))
  format = format.replace(/hh/g, ('0' + date.getHours()).slice(-2))
  format = format.replace(/mm/g, ('0' + date.getMinutes()).slice(-2))
  format = format.replace(/ss/g, ('0' + date.getSeconds()).slice(-2))
  format = format.replace(/h/g, `${date.getHours()}`)
  format = format.replace(/m/g, `${date.getMinutes()}`)
  return format
}

/**
 * YYYY/MM/DD
 *
 * @param date
 */
export const formatYmd = (date: Date) => {
  return formatDate(date, 'YYYY/MM/DD')
}
