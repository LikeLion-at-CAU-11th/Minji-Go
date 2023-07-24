import { atom } from "recoil";

export const userNameAtom = atom({
    key:'userName',
    default:'홍길동'
})

export const emailAtom = atom({
    key:'email',
    default:'000'
})

export const isSubmitedAtom = atom({
    key:'isSubmitedAtom',
    default: false
})

export const dateAtom = atom({
    key:'date',
    default: '000'
})
