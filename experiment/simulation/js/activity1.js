let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <h5>Single Column Manometer</h5>
        <p>Learning Objective: Calculate Pressure</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Volume strain and increase in pressure", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>

        <h5>A single column manometer is connected to a pipe containing liquid of specific gravity 0.8 as shown in the figure. If the ratio of area of Manometer to the area of reservior is  <span style='display: inline-block;' > $$ \\frac{1}{${aria_ratio_denominator}} $$</span>. The Manometer fluid is mercury. Find the pressure in the pipe.</h5>
        <br>
        
        <div style='width: 55%; margin: auto;'><img style='margin-left: 25%; width: 50%;' src="./images/sim1.png" alt=""></div>
        <br>
        <p style='text-align: center;'>Figure 1</p>
        <br>
        <p style='text-align: center; font-size: 18px;'>
        Ratio of Area = 
            <span style='display: inline-block;' >
                $$ \\frac{a}{A} = \\frac{1}{${aria_ratio_denominator}}  $$
            </span>
        </p>


        <p style='text-align: center; font-size: 18px;'>
            <span style='display: inline-block;' >
                $$ \\rho_1 = (1000 \\times 0.8) = 800 \\ kg/m^3  $$
            </span>
        </p>

        <p style='text-align: center; font-size: 18px;'>
            <span style='display: inline-block;' >
                $$ \\rho_2 = (1000 \\times 13.6) = 13600 \\ kg/m^3  $$
            </span>
        </p>

        <p style='text-align: center; font-size: 18px;'>
            <span style='display: inline-block;' >
                $$ g = 9.81 \\ m/sec^2 $$
            </span>
        </p>

        <br>
        <p style='text-align: center; font-size: 18px;'>
            height (H) in meters = 
            <span style='display: inline-block;' >
                $$ P_A = \\frac{a}{A} \\times h_2 (\\rho_2g - \\rho_1g) + h_2 \\rho_2 g - h_1 \\rho_1 g $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal1-inp' > <span id='cal1-val-sp'></span> N/m<sup>2</sup>
        </p>



        <br>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_a1();'  id='temp-btn-120' >Verify</button></div>
        

    
        <br> 

        <div id='nxt' style='display: none;'>
            <div id='tab-1'></div>
        </div>
    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    show_step('tb1-box');
    setTimeout(() => { MathJax.typeset(); }, 300);
    pressure = (1 / aria_ratio_denominator) * h2 * (rho2 * 9.81 - rho1 * 9.81);
    pressure += h2 * rho2 * 9.81 - h1 * rho1 * 9.81;
}
function verify_a1() {
    let btn = document.getElementById('temp-btn-120');
    console.log(`pressure => ${pressure}`);
    let inp1 = document.getElementById('cal1-inp');
    let sp1 = document.getElementById('cal1-val-sp');
    let inp2 = document.getElementById('cal2-inp');
    let sp2 = document.getElementById('cal2-val-sp');
    if (!verify_values(parseFloat(inp1.value), pressure)) {
        alert('first value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(pressure).toFixed(4)}`;
    alert('Your entered values are correct!!');
    let ele = document.getElementById('nxt');
    ele.style.display = 'block';
}
activity1();
//# sourceMappingURL=activity1.js.map