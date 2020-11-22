import React from 'react';
import { Input } from 'reactstrap';
const SelectCurrency = ({currencies, onSelectCurrency}) => {

    const filteredCurrencies = currencies.filter(currency => currency.code !== 'AUD');

    return <Input type="select" onChange={(e) => onSelectCurrency(e.target.value)}>
        {
            filteredCurrencies.map(currency => {
                const {code, name} = currency;
                return <option key={code} value={code}>{name}</option>
            })
        }
    </Input>
}

export default SelectCurrency;