import { button, state } from "dominity"

export default function counter(){
    
let count=state(0)

let increase=()=>{
  count.value+=1
}
    return button("count is ",()=>`${count.value}`, { type: "button" }).on('click',increase)
}
