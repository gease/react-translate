import axios from "axios";

export default axios.create(
    {
        baseURL: 'https://en.wikipedia.org/w/api.php',
        params: {
            action: 'query',
            list: 'search',
            prop: 'info',
            inprop: 'url',
            utf8: null,
            format: 'json',
            origin: '*',
            srlimit: 20,
        }
    }
);