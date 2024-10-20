export function getLocalStorage(item: string) {
  const local = window.localStorage
  const content = local.getItem(item)
  if (!content) return 'Is not null'
  return JSON.parse(content)
}

export function setLocalStorageItem(item: string, content: string) {
  const local = window.localStorage
  return local.setItem(item, content)
}