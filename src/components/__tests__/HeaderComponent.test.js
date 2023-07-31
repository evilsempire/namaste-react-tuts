import { render } from "@testing-library/react";
import HeaderComponent from "../HeaderComponent"
import { Provider } from "react-redux";
import store from "../../utils/store.js";
import {StaticRouter} from "react-router-dom/server"
test("Should render logo when header component loads", () => {

    const header = render(<StaticRouter>
        <Provider store={store}>
            <HeaderComponent />
        </Provider>
    </StaticRouter>);

    const logo = header.getAllByTestId("logo");

    console.log(logo);

    expect(logo[0].src).toBe("https://i.ibb.co/z4HY78T/pngegg.png")
})

test("Should show online green status when header component loads", () => {

    const header = render(<StaticRouter>
        <Provider store={store}>
            <HeaderComponent />
        </Provider>
    </StaticRouter>);

    const onlineStatus = header.getByTestId("online-status");

    console.log(onlineStatus);

    expect(onlineStatus.innerHTML).toBe("🟢")
})


test("Should have cart items = 0 when header component loads", () => {

    const header = render(<StaticRouter>
        <Provider store={store}>
            <HeaderComponent />
        </Provider>
    </StaticRouter>);


    const cart = header.getByTestId("cart");

    console.log(cart);

    expect(cart.innerHTML).toBe(" (0 Items)")
})