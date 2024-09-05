import { LinkPersonalizado, NavCenter } from './styled';

function NavBar() {
    return (
        <>  <NavCenter>
                <LinkPersonalizado to={"/"}>Menu</LinkPersonalizado>
                <LinkPersonalizado to={"/cont"}>Contador</LinkPersonalizado>
                <LinkPersonalizado to={"/calc"}>Calculadora certa</LinkPersonalizado>
                <LinkPersonalizado to={"/calculator"}>Calculadora</LinkPersonalizado>
                <LinkPersonalizado to={"/todo"}>List</LinkPersonalizado>
            </NavCenter>
        </>
    );
}
export default NavBar