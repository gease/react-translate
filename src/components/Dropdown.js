import React, {useState, useRef, useEffect} from "react";


const Dropdown = ({options, selected, onSelectedChange, label}) => {

    const [open, setOpen] = useState(false);

    const ref = useRef();

    useEffect(() => {
        const clickBody = (event) => {
            if (!ref.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.body.addEventListener('click', clickBody, {capture: true});
        return () => {
            document.body.removeEventListener('click', clickBody, {capture: true});
        }
    }, []);

    const renderedItems = options.map(
        (item) => {
            if (item.value === selected.value) return null;
            return (
                <div className="item" key={item.value} onClick={() => onSelectedChange(item)}>
                    {item.label}
                </div>
        );
        }
    );

    return (
        <div className="ui form" ref={ref}>
            <div className="field">
                <label className="label">{label}</label>
                <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="icon dropdown"></i>
                    <div className="text">{selected.label} </div>
                    <div className={`ui menu ${open ? 'visible transition' : ''}`}>{renderedItems}</div>
                </div>
            </div>
        </div>
    );
}

export default Dropdown;