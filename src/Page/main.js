import './main.css';
import { BsQuestionCircle } from "react-icons/bs";
import emerald from './emerald.png'

function main() {
    return (
        <>
            <div id='main'>
                <img src={emerald} alt='emerald' />
                {/* Converter */}
                <div class='gc-main'>
                <h1 class='main-title'>Game Currency Converter</h1> 
                    <form class='gc-form'>
                        <div>
                            <BsQuestionCircle class='gc-icon'/>
                            <span class='gc-icon-tooltip'>
                                The currency is based on the smallest purchase avaliable. No bonus in-game currency and taxes included in the calulations. Information is dependant on the conversion date.
                            </span>
                        </div>
                        <select class='gc-form-game'>
                            <option value='maplestory'>Maplestory</option>
                            <option value='cod'>Call of Duty</option>
                            <option value='runescape'>Runescape</option>
                            <option value=''></option>
                        </select> 

                        <select class='gc-form-cur'>
                            <option value='USD'>USD</option>
                            <option value='CAD'>CAD</option>
                            <option value='EUR'>EUR</option>
                        </select>
                        <input class='gc-form-amt' placeholder='AMT' type="number" min="1" step=".01"></input>

                        <input class='gc-submit' type='submit' value='Calculate'/>
                    </form>
                </div>

                {/* Log */}
                <div>
                    <div class='gc-overlay'></div>
                    <div class='gc-log'>
                        {/* Placeholder Text - Limit to 10 */}
                        <p>Maplestory NX conversion as of DD/MM/YYYY's price is &lt;&gt; to &lt;&gt; USD. $1 USD is &lt;&gt; NX</p>
                        <p>Maplestory NX conversion as of DD/MM/YYYY's price &lt;&gt; USD. $1 USD is &lt;&gt; NX</p>
                        <p>Maplestory NX conversion as of DD/MM/YYYY's price &lt;&gt; to &lt;&gt; USD. $1 USD is &lt;&gt; NX</p>
                        <p>Maplestory NX conversion as of DD/MM/YYYY's price &lt;&gt; to &lt;&gt; USD. $1 USD is &lt;&gt; NX</p>
                        <p>Test</p>
                        <p>Test</p>
                        <p>Test</p>
                        <p>Test</p>
                        <p>Test</p>
                        <p>Maplestory NX conversion as of DD/MM/YYYY's price &lt;&gt; to &lt;&gt; USD. $1 USD is &lt;&gt; NX</p>
                    </div>
                </div>
            </div>
            <footer>
                <p>Design By: Dylan Reyes</p>
                <p>Function By: Ricky La</p>
                <div class='hover'> Test
                    <span class='hover-test'>Hover Test</span>
                </div>
            </footer>
        </>
    );
  }
  
  export default main;
  