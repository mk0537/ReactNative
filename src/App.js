import styled from "styled-components";
import User from "./components/User";
import { UserProvider } from "./contexts/UserContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import Input from "./components/input";
import Theme from "./components/ThemeComponent";
import ThemedComponent from "./components/ThemeComponent";
import HomeScreen from "./components/HomeScreen";
import { CartProvider } from "./contexts/CartContext";
import CartScreen from "./components/CartScreen";

const Container = styled.View`
    flex : 1;
    background-color : #fff;
    justify-content : center;
    align-items : center;
`

const App = () => {
    return(
        // Provider 컴포넌트로 부터 value를 전달하는 하위 컴포넌트의 수에는 제한이 없다.
        // 하지만 Consumer 컴포넌트는 가장 가까운 Provider 컴포넌트에서 값을 받으므로
        // 자식 컴포넌트 중 Provider 컴포넌트가 있다면 그 중간에 있는 내용을 사용한다.
        // <UserProvider>
        //     <Container>
        //         {/* <User />
        //         <Input /> */}
        //     </Container>
        // </UserProvider>  

        // <ThemeProvider>
        //         <ThemedComponent />
        // </ThemeProvider>

        // <UserProvider>
        //      <Container>
        //          <HomeScreen />
        //      </Container>
        // </UserProvider>

        <CartProvider>
            <Container>
                <CartScreen />
            </Container>
        </CartProvider>
    )
}

export default App;