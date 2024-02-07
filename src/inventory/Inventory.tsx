import { render, screen } from "@testing-library/react"
import BarChart from "../core/compoents/BarChart"
import Widget from "../core/compoents/Widget"

type Props = {}

export default function Inventory({ }: Props) {
    
    return (
        <div>
            <Widget heading="Bar Chart">
                
            </Widget>
            
            <hr/>
            <Widget heading="Bar Chart">
                
            </Widget>
        </div>
    )
}


// test('', () => {
//     render(<BarChart dropdownData={["", "", "", "", ""]}></BarChart>)
//     expect(screen.getAllByRole('option').length).toBe(5)
// },)
// test('', () => {
//     render(<BarChart dropdownData={["", "", "", "", ""]}></BarChart>)
//     expect(screen.getAllByRole('option').length).toBe(5)
// },)