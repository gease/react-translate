import React, {useEffect, useState} from "react";
import axios from "axios";

const Convert = ({text, language}) => {

    const [output, setOutput] = useState('');
    const [debouncedText, setDebounced] = useState('');

    useEffect(
        () => {
            const timerId = setTimeout(
                () => {setDebounced(text)}, 500
            );
            return () => {
                if (timerId) clearTimeout(timerId);
            }
        },
        [text]
    );

    useEffect(() => {
            (async () => {
                    const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2', {},
                    {
                        params: {
                            q: debouncedText,
                            target: language.value,
                            key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                        }
                    });
                    setOutput(data.data.translations[0].translatedText);
            })();
        },
        [debouncedText, language]
    );

    return <h1 className="header">{output}</h1>;
}

export default Convert;