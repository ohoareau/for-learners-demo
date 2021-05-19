import {useState} from 'react';

export function useTransactionList() {
    const [state, setState] = useState({loading: true, data: undefined});
    !state.data && fetch('http://localhost:3001/transactions', {method: 'GET'}).then((response) => {
        response.json().then(data => {
            setState({
                loading: false,
                data
            })
        })
    })
    return state;
}
