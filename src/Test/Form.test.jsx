import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import Form from "../Components/Form";

describe("Form testing", ()  => {
    test("Se debe disparar evento del boton", () => {
        const handleClick = vi.fn()
        render(<Form handleClick={handleClick}/>)
        const btn = screen.getByTestId("boton")
        fireEvent.click(btn)
        expect(handleClick).toBeCalledTimes(1)
    })

    //^[^0-9]*$

    test("Debe evaluar que el input no contenga números", () => {
        render(<Form/>)
        const regexNoNumeros = /^[^0-9]*$/
        const input = screen.getByTestId('boton')
        fireEvent.change(input, {target: {value: "texto"}})
        expect(regexNoNumeros.test(input.value)).toBeTruthy()
    })
})