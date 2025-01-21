import './Header.css'

const Header = ({title, leftChild, rightChild}) => {
    return (
        <header className="Header">
            <div className="Header-left">{leftChild}</div>
            <div className="Header-center">{title}</div>
            <div className="Header-right">{rightChild}</div>
        </header>
    );
}
export default Header;
