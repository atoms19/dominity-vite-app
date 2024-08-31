import "./style.css";
import dominityLogo from "./Dominity.svg";
import viteLogo from "/vite.svg";
import { div, a, button, img, state, h1 ,p, section, input, h2, DominityRouter, $el} from "dominity";
import counter from "./counter";



function welcomeScreen(){



return div({id:'app'},
 a( img({ src: viteLogo, class: "logo", alt: "vite logo" })),
  a(img({ src: dominityLogo, class: "logo vanilla", alt: "js logo" })),
  h1("hello vite + Dominity"),
  div({ class: "card" },
  counter()    
    ,p({class:'read-the-docs'},'click on the dominity logo for dominity docs'))
    
  )
}


welcomeScreen()