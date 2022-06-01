import React, {useState} from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const Translate = () => {

    //AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

    const options = [
        {
            label: 'Afrikaans',
            value: 'af'
        },
        {
            label: 'Arabic',
            value: 'ar'
        },
        {
            label: 'Hindi',
            value: 'hi'
        },
    ];

    const [selected, setSelected] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div className="ui form">
            <div className="field" >
                <label>Input text</label>
                <input value={text} onChange={(e) => setText(e.target.value) } />
            </div>
            <Dropdown options={options} selected={selected} onSelectedChange={setSelected} label="Select language"/>
            <Convert text={text} language={selected}/>
        </div>
    );
}

export default Translate;
