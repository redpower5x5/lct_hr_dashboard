type Value = string | number | Record<string | number, any> | string[] | number[]

let storage: Storage

const set = async (name: string, value: Value): Promise<void> => {
  // eslint-disable-next-line @typescript-eslint/no-base-to-string
  storage.setItem(name, value.toString())
}

const get = async (name: string): Promise<any | null> => {
  return storage.getItem(name)
}

const remove = async (name: string): Promise<void> => {
  return storage.removeItem(name)
}

export default { set, get, remove }

export const setStorage = (instance: Storage): void => {
  storage = instance
}
