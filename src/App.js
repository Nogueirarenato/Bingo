import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import BingoPNG from './bingo.gif'


function App() {


  var vetorInicial = [];

  useEffect(() => {



    for (let index = 0; index <= 75; index++) {
      if (localStorage.getItem("bola_" + index) != "black") {
        localStorage.setItem("bola_" + index, "rgb(199, 197, 201)");
      }
      else {
        vetorInicial.push(index);
      }

    }


  }, [])

  const [coluna, qualColuna] = useState("");
  const [bola_principal, bola_principal_fn] = useState("");
  const [bola_1, setColor1] = useState(localStorage.getItem("bola_1"));
  const [bola_2, setColor2] = useState(localStorage.getItem("bola_2"));
  const [bola_3, setColor3] = useState(localStorage.getItem("bola_3"));
  const [bola_4, setColor4] = useState(localStorage.getItem("bola_4"));
  const [bola_5, setColor5] = useState(localStorage.getItem("bola_5"));
  const [bola_6, setColor6] = useState(localStorage.getItem("bola_6"));
  const [bola_7, setColor7] = useState(localStorage.getItem("bola_7"));
  const [bola_8, setColor8] = useState(localStorage.getItem("bola_8"));
  const [bola_9, setColor9] = useState(localStorage.getItem("bola_9"));
  const [bola_10, setColor10] = useState(localStorage.getItem("bola_0"));
  const [bola_11, setColor11] = useState(localStorage.getItem("bola_11"));
  const [bola_12, setColor12] = useState(localStorage.getItem("bola_12"));
  const [bola_13, setColor13] = useState(localStorage.getItem("bola_13"));
  const [bola_14, setColor14] = useState(localStorage.getItem("bola_14"));
  const [bola_15, setColor15] = useState(localStorage.getItem("bola_15"));
  const [bola_16, setColor16] = useState(localStorage.getItem("bola_16"));
  const [bola_17, setColor17] = useState(localStorage.getItem("bola_17"));
  const [bola_18, setColor18] = useState(localStorage.getItem("bola_18"));
  const [bola_19, setColor19] = useState(localStorage.getItem("bola_19"));
  const [bola_20, setColor20] = useState(localStorage.getItem("bola_20"));
  const [bola_21, setColor21] = useState(localStorage.getItem("bola_1"));
  const [bola_22, setColor22] = useState(localStorage.getItem("bola_22"));
  const [bola_23, setColor23] = useState(localStorage.getItem("bola_23"));
  const [bola_24, setColor24] = useState(localStorage.getItem("bola_24"));
  const [bola_25, setColor25] = useState(localStorage.getItem("bola_25"));
  const [bola_26, setColor26] = useState(localStorage.getItem("bola_26"));
  const [bola_27, setColor27] = useState(localStorage.getItem("bola_27"));
  const [bola_28, setColor28] = useState(localStorage.getItem("bola_28"));
  const [bola_29, setColor29] = useState(localStorage.getItem("bola_29"));
  const [bola_30, setColor30] = useState(localStorage.getItem("bola_30"));
  const [bola_31, setColor31] = useState(localStorage.getItem("bola_31"));
  const [bola_32, setColor32] = useState(localStorage.getItem("bola_32"));
  const [bola_33, setColor33] = useState(localStorage.getItem("bola_33"));
  const [bola_34, setColor34] = useState(localStorage.getItem("bola_34"));
  const [bola_35, setColor35] = useState(localStorage.getItem("bola_35"));
  const [bola_36, setColor36] = useState(localStorage.getItem("bola_36"));
  const [bola_37, setColor37] = useState(localStorage.getItem("bola_37"));
  const [bola_38, setColor38] = useState(localStorage.getItem("bola_38"));
  const [bola_39, setColor39] = useState(localStorage.getItem("bola_39"));
  const [bola_40, setColor40] = useState(localStorage.getItem("bola_40"));
  const [bola_41, setColor41] = useState(localStorage.getItem("bola_41"));
  const [bola_42, setColor42] = useState(localStorage.getItem("bola_42"));
  const [bola_43, setColor43] = useState(localStorage.getItem("bola_43"));
  const [bola_44, setColor44] = useState(localStorage.getItem("bola_44"));
  const [bola_45, setColor45] = useState(localStorage.getItem("bola_45"));
  const [bola_46, setColor46] = useState(localStorage.getItem("bola_46"));
  const [bola_47, setColor47] = useState(localStorage.getItem("bola_47"));
  const [bola_48, setColor48] = useState(localStorage.getItem("bola_48"));
  const [bola_49, setColor49] = useState(localStorage.getItem("bola_49"));
  const [bola_50, setColor50] = useState(localStorage.getItem("bola_50"));
  const [bola_51, setColor51] = useState(localStorage.getItem("bola_51"));
  const [bola_52, setColor52] = useState(localStorage.getItem("bola_52"));
  const [bola_53, setColor53] = useState(localStorage.getItem("bola_53"));
  const [bola_54, setColor54] = useState(localStorage.getItem("bola_54"));
  const [bola_55, setColor55] = useState(localStorage.getItem("bola_55"));
  const [bola_56, setColor56] = useState(localStorage.getItem("bola_56"));
  const [bola_57, setColor57] = useState(localStorage.getItem("bola_57"));
  const [bola_58, setColor58] = useState(localStorage.getItem("bola_58"));
  const [bola_59, setColor59] = useState(localStorage.getItem("bola_59"));
  const [bola_60, setColor60] = useState(localStorage.getItem("bola_60"));
  const [bola_61, setColor61] = useState(localStorage.getItem("bola_61"));
  const [bola_62, setColor62] = useState(localStorage.getItem("bola_62"));
  const [bola_63, setColor63] = useState(localStorage.getItem("bola_63"));
  const [bola_64, setColor64] = useState(localStorage.getItem("bola_64"));
  const [bola_65, setColor65] = useState(localStorage.getItem("bola_65"));
  const [bola_66, setColor66] = useState(localStorage.getItem("bola_66"));
  const [bola_67, setColor67] = useState(localStorage.getItem("bola_67"));
  const [bola_68, setColor68] = useState(localStorage.getItem("bola_68"));
  const [bola_69, setColor69] = useState(localStorage.getItem("bola_69"));
  const [bola_70, setColor70] = useState(localStorage.getItem("bola_70"));
  const [bola_71, setColor71] = useState(localStorage.getItem("bola_71"));
  const [bola_72, setColor72] = useState(localStorage.getItem("bola_72"));
  const [bola_73, setColor73] = useState(localStorage.getItem("bola_73"));
  const [bola_74, setColor74] = useState(localStorage.getItem("bola_74"));
  const [bola_75, setColor75] = useState(localStorage.getItem("bola_75"));


  function verificar1() {
    console.log("funcionou...")
  }

  function sortear() {

    var a = (parseInt(Math.random() * 75)) + 1;
    return verificar(a);

  }



  function verificar(a) {

    if (a == 1) var b = bola_1;
    if (a == 2) var b = bola_2;
    if (a == 3) var b = bola_3;
    if (a == 4) var b = bola_4;
    if (a == 5) var b = bola_5;
    if (a == 6) var b = bola_6;
    if (a == 7) var b = bola_7;
    if (a == 8) var b = bola_8;
    if (a == 9) var b = bola_9;
    if (a == 10) var b = bola_10;
    if (a == 11) var b = bola_11;
    if (a == 12) var b = bola_12;
    if (a == 13) var b = bola_13;
    if (a == 14) var b = bola_14;
    if (a == 15) var b = bola_15;
    if (a == 16) var b = bola_16;
    if (a == 17) var b = bola_17;
    if (a == 18) var b = bola_18;
    if (a == 19) var b = bola_19;
    if (a == 20) var b = bola_20;
    if (a == 21) var b = bola_21;
    if (a == 22) var b = bola_22;
    if (a == 23) var b = bola_23;
    if (a == 24) var b = bola_24;
    if (a == 25) var b = bola_25;
    if (a == 26) var b = bola_26;
    if (a == 27) var b = bola_27;
    if (a == 28) var b = bola_28;
    if (a == 29) var b = bola_29;
    if (a == 30) var b = bola_30;
    if (a == 31) var b = bola_31;
    if (a == 32) var b = bola_32;
    if (a == 33) var b = bola_33;
    if (a == 34) var b = bola_34;
    if (a == 35) var b = bola_35;
    if (a == 36) var b = bola_36;
    if (a == 37) var b = bola_37;
    if (a == 38) var b = bola_38;
    if (a == 39) var b = bola_39;
    if (a == 40) var b = bola_40;
    if (a == 41) var b = bola_41;
    if (a == 42) var b = bola_42;
    if (a == 43) var b = bola_43;
    if (a == 44) var b = bola_44;
    if (a == 45) var b = bola_45;
    if (a == 46) var b = bola_46;
    if (a == 47) var b = bola_47;
    if (a == 48) var b = bola_48;
    if (a == 49) var b = bola_49;
    if (a == 50) var b = bola_50;
    if (a == 51) var b = bola_51;
    if (a == 52) var b = bola_52;
    if (a == 53) var b = bola_53;
    if (a == 54) var b = bola_54;
    if (a == 55) var b = bola_55;
    if (a == 56) var b = bola_56;
    if (a == 57) var b = bola_57;
    if (a == 58) var b = bola_58;
    if (a == 59) var b = bola_59;
    if (a == 60) var b = bola_60;
    if (a == 61) var b = bola_61;
    if (a == 62) var b = bola_62;
    if (a == 63) var b = bola_63;
    if (a == 64) var b = bola_64;
    if (a == 65) var b = bola_65;
    if (a == 66) var b = bola_66;
    if (a == 67) var b = bola_67;
    if (a == 68) var b = bola_68;
    if (a == 69) var b = bola_69;
    if (a == 70) var b = bola_70;
    if (a == 71) var b = bola_71;
    if (a == 72) var b = bola_72;
    if (a == 73) var b = bola_73;
    if (a == 74) var b = bola_74;
    if (a == 75) var b = bola_75;
    




    if (b === 'black') {
      sortear();
    }
    else {
      localStorage.setItem("bola_" + a, "black")
      console.log(a)
      return setarBola(a)
      

    }
  }


  function setarBola(a) {
    bola_principal_fn(a);
    return setarCor(a)
  }

  function setarCor(a) {
    if (a == 1) setColor1('black');
    if (a == 2) setColor2('black');
    if (a == 3) setColor3('black');
    if (a == 4) setColor4('black');
    if (a == 5) setColor5('black');
    if (a == 6) setColor6('black');
    if (a == 7) setColor7('black');
    if (a == 8) setColor8('black');
    if (a == 9) setColor9('black');
    if (a == 10) setColor10('black');
    if (a == 11) setColor11('black');
    if (a == 12) setColor12('black');
    if (a == 13) setColor13('black');
    if (a == 14) setColor14('black');
    if (a == 15) setColor15('black');
    if (a == 16) setColor16('black');
    if (a == 17) setColor17('black');
    if (a == 18) setColor18('black');
    if (a == 19) setColor19('black');
    if (a == 20) setColor20('black');
    if (a == 21) setColor21('black');
    if (a == 22) setColor22('black');
    if (a == 23) setColor23('black');
    if (a == 24) setColor24('black');
    if (a == 25) setColor25('black');
    if (a == 26) setColor26('black');
    if (a == 27) setColor27('black');
    if (a == 28) setColor28('black');
    if (a == 29) setColor29('black');
    if (a == 30) setColor30('black');
    if (a == 31) setColor31('black');
    if (a == 32) setColor32('black');
    if (a == 33) setColor33('black');
    if (a == 34) setColor34('black');
    if (a == 35) setColor35('black');
    if (a == 36) setColor36('black');
    if (a == 37) setColor37('black');
    if (a == 38) setColor38('black');
    if (a == 39) setColor39('black');
    if (a == 40) setColor40('black');
    if (a == 41) setColor41('black');
    if (a == 42) setColor42('black');
    if (a == 43) setColor43('black');
    if (a == 44) setColor44('black');
    if (a == 45) setColor45('black');
    if (a == 46) setColor46('black');
    if (a == 47) setColor47('black');
    if (a == 48) setColor48('black');
    if (a == 49) setColor49('black');
    if (a == 50) setColor50('black');
    if (a == 51) setColor51('black');
    if (a == 52) setColor52('black');
    if (a == 53) setColor53('black');
    if (a == 54) setColor54('black');
    if (a == 55) setColor55('black');
    if (a == 56) setColor56('black');
    if (a == 57) setColor57('black');
    if (a == 58) setColor58('black');
    if (a == 59) setColor59('black');
    if (a == 60) setColor60('black');
    if (a == 61) setColor61('black');
    if (a == 62) setColor62('black');
    if (a == 63) setColor63('black');
    if (a == 64) setColor64('black');
    if (a == 65) setColor65('black');
    if (a == 66) setColor66('black');
    if (a == 67) setColor67('black');
    if (a == 68) setColor68('black');
    if (a == 69) setColor69('black');
    if (a == 70) setColor70('black');
    if (a == 71) setColor71('black');
    if (a == 72) setColor72('black');
    if (a == 73) setColor73('black');
    if (a == 74) setColor74('black');
    if (a == 75) setColor75('black');

    if (a > 0 && a <= 15) qualColuna("Letra B")
    if (a > 15 && a <= 30) qualColuna("Letra I")
    if (a > 30 && a <= 45) qualColuna("Letra N")
    if (a > 45 && a <= 60) qualColuna("Letra G")
    if (a > 60 && a <= 75) qualColuna("Letra O")
  }













  return (
    <>
      <div className="principal">
        <div className="esquerda">


          <div>

            <button className="btn btn-light newGame" onClick={() => {
              localStorage.clear();
              window.location.reload()
            }}>
              começar nova partida...
            </button>

          <h1> Bingo da Amizade!!</h1>

            <div className='coluna'><p>{coluna}</p></div>

            <div className='bola'><p>{bola_principal}</p></div>

            <button className="btn btn-light sortear" onClick={() => {

              sortear()

            }




            }>
              Sortear!
            </button>





            <div className='meuNome'><p>Desenvolvido por Renato Nogueira   (11) 98230-9903</p></div>
            

          </div>
        </div>
        <div className="direita">



          <table className="tableizer-table table">
            <thead><tr className="tableizer-firstrow"><th colSpan="2">B</th><th colSpan="2">I</th><th colSpan="2">N</th><th colSpan="2">G</th><th colSpan="2">O</th></tr></thead><tbody>
              <tr>
                <td style={{ color: bola_1 }}>01</td>
                <td style={{ color: bola_2 }}>02</td>
                <td style={{ color: bola_16 }}>16</td>
                <td style={{ color: bola_17 }}>17</td>
                <td style={{ color: bola_31 }}>31</td>
                <td style={{ color: bola_32 }}>32</td>
                <td style={{ color: bola_46 }}>46</td>
                <td style={{ color: bola_47 }}>47</td>
                <td style={{ color: bola_61 }}>61</td>
                <td style={{ color: bola_62 }}>62</td>
              </tr>
              <tr>
                <td style={{ color: bola_3 }}>03</td>
                <td style={{ color: bola_4 }}>04</td>
                <td style={{ color: bola_18 }}>18</td>
                <td style={{ color: bola_19 }}>19</td>
                <td style={{ color: bola_33 }}>33</td>
                <td style={{ color: bola_34 }}>34</td>
                <td style={{ color: bola_48 }}>48</td>
                <td style={{ color: bola_49 }}>49</td>
                <td style={{ color: bola_63 }}>63</td>
                <td style={{ color: bola_64 }}>64</td>
              </tr>
              <tr>
                <td style={{ color: bola_5 }}>05</td>
                <td style={{ color: bola_6 }}>06</td>
                <td style={{ color: bola_20 }}>20</td>
                <td style={{ color: bola_21 }}>21</td>
                <td style={{ color: bola_35 }}>35</td>
                <td style={{ color: bola_36 }}>36</td>
                <td style={{ color: bola_50 }}>50</td>
                <td style={{ color: bola_51 }}>51</td>
                <td style={{ color: bola_65 }}>65</td>
                <td style={{ color: bola_66 }}>66</td>
              </tr>
              <tr>
                <td style={{ color: bola_7 }}>07</td>
                <td style={{ color: bola_8 }}>08</td>
                <td style={{ color: bola_22 }}>22</td>
                <td style={{ color: bola_23 }}>23</td>
                <td style={{ color: bola_37 }}>37</td>
                <td style={{ color: bola_38 }}>38</td>
                <td style={{ color: bola_52 }}>52</td>
                <td style={{ color: bola_53 }}>53</td>
                <td style={{ color: bola_67 }}>67</td>
                <td style={{ color: bola_68 }}>68</td>
              </tr>

              <tr>
                <td style={{ color: bola_9 }}>09</td>
                <td style={{ color: bola_10 }}>10</td>
                <td style={{ color: bola_24 }}>24</td>
                <td style={{ color: bola_25 }}>25</td>
                <td style={{ color: bola_39 }}>39</td>
                <td style={{ color: bola_40 }}>40</td>
                <td style={{ color: bola_54 }}>54</td>
                <td style={{ color: bola_55 }}>55</td>
                <td style={{ color: bola_69 }}>69</td>
                <td style={{ color: bola_70 }}>70</td>
              </tr>

              <tr>
                <td style={{ color: bola_11 }}>11</td>
                <td style={{ color: bola_12 }}>12</td>
                <td style={{ color: bola_26 }}>26</td>
                <td style={{ color: bola_27 }}>27</td>
                <td style={{ color: bola_41 }}>41</td>
                <td style={{ color: bola_42 }}>42</td>
                <td style={{ color: bola_56 }}>56</td>
                <td style={{ color: bola_57 }}>57</td>
                <td style={{ color: bola_71 }}>71</td>
                <td style={{ color: bola_72 }}>72</td>
              </tr>

              <tr>
                <td style={{ color: bola_13 }}>13</td>
                <td style={{ color: bola_14 }}>14</td>
                <td style={{ color: bola_28 }}>28</td>
                <td style={{ color: bola_29 }}>29</td>
                <td style={{ color: bola_43 }}>43</td>
                <td style={{ color: bola_44 }}>44</td>
                <td style={{ color: bola_58 }}>58</td>
                <td style={{ color: bola_59 }}>59</td>
                <td style={{ color: bola_73 }}>73</td>
                <td style={{ color: bola_74 }}>74</td>
              </tr>
              <tr>
                <td colSpan="2" style={{ color: bola_15 }}>15</td>
                <td colSpan="2" style={{ color: bola_30 }}>30</td>
                <td colSpan="2" style={{ color: bola_45 }}>45</td>
                <td colSpan="2" style={{ color: bola_60 }}>60</td>
                <td colSpan="2" style={{ color: bola_75 }}>75</td>
              </tr>


            </tbody></table>
        </div>

      </div>
    </>


  )
}
export default App;
