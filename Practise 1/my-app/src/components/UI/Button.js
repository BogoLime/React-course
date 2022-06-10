import styles from "./Button.module.css"

export function Button (props){
    return (<button onClick= {props.onClick} className={props.className || ""}>{props.children}</button>)
}