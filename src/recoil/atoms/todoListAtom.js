import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const {persistAtom} = recoilPersist();

export const todoListAtoms = atom({
    key:"todoListAtoms",
    default:[{
        id:1,
        task:"fix UI",
        isCompleted:false
    },
],
effects_UNSTABLE:[persistAtom]
})