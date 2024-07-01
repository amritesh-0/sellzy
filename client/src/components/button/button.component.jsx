import styles from "./button.module.css"

const Button = ({txt, clr, bg, br, fw, fs, py, px, my, mx, mt, p, m, w, center, submit}) => {
    // const marginX = mx ? mx : "0px";
    // const marginY = my ? my : "0px";
  
  return (
    <button type={submit ? "submit": "button" } className={styles.btn} 
    style={
        {
            "--clr": clr,
            "--bg": bg,
            "--br": br,
            "--fw": fw,
            "--py": py,
            "--px": px, 
            "--my": my, 
            "--mx": mx,
            "--mt": mt,
            "--p": p, "--m": m, 
            "--fs": fs, 
            "--width": w, 
            "--align-c": center && "center"
        }
    }
    >
        {txt}
        </button>
  )
}

export default Button



// txt = Button Content
// clr = font color
// bg = background color
// br = border radius
// fw = font weight
// p = padding
// py = padding top and bottom
// px = padding left and right,
// m = margin
// my = margin top and bottom
// mx = margin left and right,
// w = width
// center = self align center
// submit = type submit     default type is Button
