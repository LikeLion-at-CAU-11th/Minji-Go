import { atom } from "recoil";

export const userNameAtom = atom({
    key:'userName',
    default:'홍길동'
})

export const emailAtom = atom({
    key:'email',
    default:'likelion@naver.com'
})

export const isSubmitedAtom = atom({
    key:'isSubmitedAtom',
    default: false
})

export const dateAtom = atom({
    key:'date',
    default: 'YYYY-MM-DD'
})
