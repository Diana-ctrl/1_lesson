import React, { ChangeEvent, useState } from "react";

const Code: React.FC = () => {
    let [value, setValue] = useState("2");
    let callBack = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(e.currentTarget.value);
    };
    return (
        <div>
            <select>
                <option>none</option>
                <option>Москва</option>
                <option>Минск</option>
                <option>Киев</option>
            </select>
            <input type="email" />
            <input type="range" min="0" max="10" step="2" />
            <input type="text" list="list" />

            <datalist id="list">
                <option value="розы" />
                <option value="тюльпаны" />
                <option value="нарциссы" />
            </datalist>

            <select value={value} onChange={callBack}>
                <option>none</option>
                <option value={2}>2c</option>
                <option value={3}>3c</option>
                <option value={1}>1c</option>
            </select>
        </div>
    );
};

export default Code;
