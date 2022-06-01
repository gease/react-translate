import React, {useState} from "react";
import Translate from "./components/Translate";
import Dropdown from "./components/Dropdown";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Router from "./components/Router";
import Header from "./components/Header";

const App = () => {

    const options = [
        {
            label: 'Color Red',
            value: 'red'
        },
        {
            label: 'Color Green',
            value: 'green'
        },
        {
            label: 'A shade of blue',
            value: 'blue'
        },
    ];

    const [selected, setSelected] = useState(options[0]);


    const items = [
        {
            title: "First item title",
            content: "First item content"
        },
        {
            title: "Second item title",
            content: "Second item content"
        },
        {
            title: "Third item title",
            content: "Third item content"
        },
    ];

    return (
        <div>
            <Header />
            <Router path='/'>
                <Accordion items={items}/>
            </Router>
            <Router path='/search'>
                <Search />
            </Router>
            <Router path='/dropdown'>
                <Dropdown options={options} selected={selected} onSelectedChange={setSelected} label='Choose color' />
            </Router>
            <Router path='/translate'>
                <Translate />
            </Router>
        </div>

    );
}

export default App;