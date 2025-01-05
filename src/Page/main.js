import './main.css';
import { BsQuestionCircle } from "react-icons/bs";
import emerald from './emerald.png'
import { useState } from 'react';

function Main() {
    
    const games = [
        {
            game: "MapleStory",
            amountPerDollar: 1000,
        },
        {
            game: "COD",
            amountPerDollar: 100,
        },
        {
            game: "RuneScape",
            amountPerDollar: 10,
        },
    ]

    const currencies = {
        USD: 1,
        CAD: 1.44,
        EUR: 0.96,
    }

    const [amount, setAmount] = useState(0);
    const [currency, setCurrency] = useState('USD');
    const [currentGame, setCurrentGame] = useState();
    const [list, setList] = useState([]);

    const pushToList = (message) => {
        if(list.length === 10) {
            list.pop();
        }
        setList([message, ...list]);
    }

    const nxCalculation = (cur) => {
        return 1/currencies[cur] * amount * 1000
    }

    const handleChange = (e) => {
        setAmount(e.target.value);
        console.log(list.reverse())
    }
 
    const handleSubmit = (e) => {
        e.preventDefault();
        pushToList(`${games[currentGame].game} NX conversion as of DD/MM/YYYY's price is ${games[currentGame].amountPerDollar} to $${currencies[currency]} ${currency}. $${amount} ${currency} is ${nxCalculation(currency)} NX`);
    }

    return (
        <>
            <div id='main'>
                <img src={emerald} alt='emerald' />
                {/* Converter */}
                <div className='gc-main'>
                <h1 className='main-title'>Game Currency Converter</h1> 
                    <form className='gc-form'>
                        <div>
                            <BsQuestionCircle className='gc-icon'/>
                            <span className='gc-icon-tooltip'>
                                The currency is based on the smallest purchase avaliable. No bonus in-game currency and taxes included in the calulations. Information is dependant on the conversion date.
                            </span>
                        </div>
                        <select className='gc-form-game' onChange={(e) => setCurrentGame(e.target.value)}>
                            <option value=''>Choose a game</option>
                            {games.map((game, index) => {
                                return (
                                    <option key={index} value={index}>{game.game}</option>
                                )
                            })
                            }
                        </select> 

                        <select className='gc-form-cur' onChange={(e) => setCurrency(e.target.value)}>
                            {Object.keys(currencies).map((cur, index) => {
                                return (    
                                    <option key={index} value={cur}>{cur}</option>
                                )
                            })}
                        </select>
                        <input className='gc-form-amt' name='amount' placeholder='AMT' type="number" min="1" step=".01" onChange={(e) => handleChange(e)}></input>

                        <input className='gc-submit' type='submit' value='Calculate' onClick={(e) => handleSubmit(e)}/>
                    </form>
                </div>

                {/* Log */}
                <div>
                    <div className='gc-overlay'></div>
                    <div className='gc-log'>
                        {list.map((msg, index) => {
                            return ( 
                                <h1 key={index}>{msg}</h1>
                            )
                        }
                    )}
                    </div>
                </div>
            </div>
            <footer>
                <p>Design By: Dylan Reyes</p>
                <p>Function By: Ricky La</p>
                <div className='hover'> Test
                    <span className='hover-test'>Hover Test</span>
                </div>
            </footer>
        </>
    );
  }
  
  export default Main;
  