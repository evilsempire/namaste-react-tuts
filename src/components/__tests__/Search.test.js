import "@testing-library/jest-dom";
const { render, waitFor, fireEvent } = require("@testing-library/react")
import { Provider } from "react-redux";
import Body from "../Body";
import store from "../../utils/store.js";
import { StaticRouter } from "react-router-dom/server"
import { RESTAURANT_DATA } from "../mocks/data";

global.fetch = jest.fn(() => {
     return Promise.resolve({
        json: () => Promise.resolve(RESTAURANT_DATA)
    })
})

test("Shimmar should load on homepage", () => {

    const search = render(<StaticRouter>
        <Provider store={store}>
            <Body />
        </Provider>
    </StaticRouter>)

    const shimmer = search.getByTestId("shimmer");

    // expect(shimmer.children.length).toBeInTheDocument();
    expect(shimmer.children.length).toBe(8);

});


test("Restaurant should load on homepage", async () => {

    const body = render(<StaticRouter>
        <Provider store={store}>
            <Body />
        </Provider>
    </StaticRouter>)

    // console.log(search);
    await waitFor(() => expect(body.getByTestId("search-btn")));
    
    const resList = body.getByTestId("res-list");

    expect(resList.children.length).toEqual(20);
     
});


test("Should show search results when input=(food) is present", async()=>  {
    const body = render(<StaticRouter>
        <Provider store={store}>
            <Body />
        </Provider>
    </StaticRouter>)
    await waitFor(() => expect(body.getByTestId("search-btn")));
    const input = body.getByTestId("input")
    fireEvent.change(input, {
        target: {
            value: "Ice"
        }
    })

    // console.log(search);
    const searchBtn = body.getByTestId("search-btn")
    fireEvent.click(searchBtn);
    const resList = body.getByTestId("res-list");

    expect(resList.children.length).toEqual(5);
})
