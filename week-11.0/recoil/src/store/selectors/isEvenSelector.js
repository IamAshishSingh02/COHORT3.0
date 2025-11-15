import {selector} from "recoil"
import { counterAtom } from "../atoms/counter";

export const isEvenSelector = selector({
  key: "isEven",
  get: ({get}) => {
    const currentCount = get(counterAtom)
    return currentCount % 2 == 0
  }
})