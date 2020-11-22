import styled from 'styled-components';

export const Header = styled.header`
    margin-bottom: 20px;
    text-align: center;
    img {
        max-width: 120px;
    }
`;

export const Content = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 7px;
    box-shadow: 1px 1px 4px rgba(0,0,0,0.2);
    .table {
        margin-bottom: 0;
        td,th {
            vertical-align: middle
        }
        .mRight {
            margin-right: 20px;
        }
    }
    .row {
        margin-bottom: 20px;
        h3 {
            padding-left: 40px;
        }
        .currency-flag {
            background: url('images/aud.png') no-repeat left center;
            background-size: 30px auto;
            &.CAD {background-image: url('images/cad.png')}
            &.USD {background-image: url('images/usd.png')}
            &.JPY {background-image: url('images/jpy.png')}
            &.NZD {background-image: url('images/nzd.png')}
            &.GBP {background-image: url('images/gbp.png')}
        }
    }
    .row-select-currency {
        text-align: center;
    }
    @media(min-width: 768px){

        .currency-from-input {
            position: relative;
            padding-right: 20px;
            &:after {
                content: '=';
                display: block;
                position: absolute;
                right: -8px;
                bottom: 4px;
                font-weight: bold;
                font-size: 30px;
                line-height: 0.9
            }
        }
        .currency-to-input {
            padding-left: 20px;
        }

    }
`;