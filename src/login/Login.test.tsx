import { fireEvent, render, screen } from "@testing-library/react"
import Login from "./Login"
import { Provider } from "react-redux"
import { store } from "../redux/store"
import { MemoryRouter } from "react-router-dom"

const dumyFun = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => dumyFun
}));

test('Login redirect to dashboard', () => {
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        </Provider>)
        ;
    const btn = screen.getByTestId('btn');
    fireEvent.click(btn)
    expect(dumyFun).toBeCalledWith('/dashboard')
})