import Button from "./Button"

const Header = ({title}) => {

    const onClick = () => {
        console.log("addToList")
    }

    return (
        <header className="header">
            <h1>{title}</h1>    
            <Button onClick={onClick}/>      
        </header>
    )
}
Header.defaultProps = {
    title: "Task Tracker"
}
export default Header
