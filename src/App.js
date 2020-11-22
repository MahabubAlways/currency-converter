import React, {useState} from 'react';
import { Container, Row, Col, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import image from './images/cash-calculator.svg';
import data from './data/Data';
import { Header, Content } from './App.styles';
import SelectCurrency from './components/SelectCurrency';

function App() {

  const [currencies] = useState(data.currencies);
  const [currencyA] = useState(data.currencies[0]);
  const [currencyB, setCurrencyB] = useState(data.currencies[1]);
  const [currencyAval, setCurrencyAval] = useState(data.currencies[0].sellRate);
  const [currencyBval, setCurrencyBval] = useState(data.currencies[1].sellRate);


  function onSelectCurrency(code){
    //console.log('selecting currency: '+code);
    const currency = currencies.filter(currency => currency.code === code);

    setCurrencyB (currency[0]); // this is an array with one item
    setCurrencyBval (currencyAval * currency[0].sellRate);

  }

  function onChangeHandler(e, currency){
    if(currency === 'A'){
      const newValueA = e.target.value;
      setCurrencyAval(newValueA);
      setCurrencyBval(newValueA * currencyB.sellRate);

    } else if(currency === 'B'){ 
      const newValueB = e.target.value;
      setCurrencyAval(newValueB / currencyB.sellRate);
      setCurrencyBval(newValueB);

    }

  }


  return (
    <Container>
      <Row>
        <Col sm="12" md={{ size: 8, offset: 2 }}>
            <Header>
              <img src={image} alt="Currency Converter" />
              <h1>Currency Converter</h1>
            </Header>
            <Content>
                <Row className="row-select-currency">
                  <Col md={{ size: 6, offset: 3 }}>
                    <h2>Select Currency</h2>
                    <p>
                      {
                        //Select currency
                      }
                      <SelectCurrency currencies={currencies} onSelectCurrency={onSelectCurrency} />
                    </p>
                  </Col>
                </Row>
                

                <Row>
                  <Col sm="6" className="currency-from-input">
                    <h3 className={`currency-flag ${currencyA.code}`}>{currencyA.name}</h3>
                    {
                        //Currency A input
                    }
                    <InputGroup>
                      <InputGroupAddon>{currencyA.sign}</InputGroupAddon>
                      <Input type="number" value={currencyAval} className="form-control" aria-describedby="basic-addon2" step="1" pattern="\d\.\d{2}" onChange={(e) => {
                        onChangeHandler(e, 'A');
                      }} />
                      <InputGroupAddon id="basic-addon2">{currencyA.code}</InputGroupAddon>
                    </InputGroup>

                  </Col>

                  <Col sm="6" className="currency-to-input">
                    <h3 className={`currency-flag ${currencyB.code}`}>{currencyB.name}</h3>
                    {
                        //Currency B input
                    }
                    <InputGroup>
                      <InputGroupAddon>{currencyB.sign}</InputGroupAddon>
                      <Input type="number" value={currencyBval} className="form-control" aria-describedby="basic-addon3" step="1" pattern="\d\.\d{2}"  onChange={(e) => {
                        onChangeHandler(e, 'B');
                      }}/>
                      <InputGroupAddon id="basic-addon3">{currencyB.code}</InputGroupAddon>
                    </InputGroup>

                  </Col>
                </Row>


                <Row>
                  <Col sm="12">
                    {
                        //Update to currently selected currency
                    }
                    <p>
                      Exchange Rate {`${currencyA.sign} ${currencyA.sellRate} ${currencyA.code}`} = {`${currencyB.sign} ${currencyB.sellRate} ${currencyB.code}`}
                    </p>
                  </Col>
                </Row>
            </Content>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
