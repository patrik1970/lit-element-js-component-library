import {SimpleButton} from '../simple-button.js';
import {fixture, html} from '@open-wc/testing';

const assert = chai.assert;

suite('simple-button', () => {
  test('is defined', () => {
    const el = document.createElement('simple-button');
    assert.instanceOf(el, SimpleButton);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<simple-button></simple-button>>`);
    assert.shadowDom.equal(
      el,
      `
      <button>#ffffff</button>
    `
    );
  });

   test('renders button with bordercolor #FF0000', async () => {
    const el = await fixture(html`<simple-button backgroundColor="#FF0000" bordercolor="#FF0000" hoverBackgroundColor="#cc0000" hoverBorderColor="#cc0000" linkLocation="https://somepage.com/"></simple-button>`);
    assert.shadowDom.equal(
      el,
      `
      <button>#FF0000</button>
    `
    );
   });

   test('renders disabled button with bordercolor #FF6666', async () => {
    const el = await fixture(html`<simple-button backgroundColor="#FF6666" borderColor="#FF6666" textColor="#f2f2f2" disabled></simple-button>`);
    expect(el.getAttribute('borderColor')).to.equal('#FF6666'); 
   });

   test('throws an event with the expected value', async () => {
        const el = await fixture(html`<simple-button></simple-button>`);
        const button = el.shadowRoot.querySelector("button");
        button.click();
        //assert.ok(button, 'It is a button');
        //expect(el.location.href).to.equal("+1");
        //expect(el).shadowDom.to.equalSnapshot();
        expect(button.click).to.equal('${this._handleClick}')
    });

   test('handles onclick', async () => {
       const el = await fixture(html`<simple-button linkLocation="Test"></simple-button>`);
       const button = el.shadowRoot.querySelector("button");
       button.click();
       await el.updateComplete;
       assert.shadowDom.equal(
       el,
       `
       <h3 class="label-container__header-label"></h3>
       <div class="label-container__sub"></div>
       <div class="counter-picker">
           <div class="counter-picker__labelled-counter">
               <div class="counter-picker__label"></div>
               <div class="counter-picker__counter">
                   <div class="counter-picker__button counter-increment">
                       <img class="counter-picker__icon" src="./img/TH-Plus.svg" />
                   </div>
                   <span class="counter-picker__input counter-picker__input--number">1</span>
                   <div class="counter-picker__button counter-decrement" style="pointer-events: auto; background-color: red;">
                       <img class="counter-picker__icon" src="./img/TH-Minus.svg" />
                   </div>
               </div>
           </div>
       </div>
       `
       );
   });

   test('can not pick negative number', async () => {
       const el = await fixture(html`<counter-picker counter="1"></counter-picker>`);
       const button = el.shadowRoot.querySelector(".counter-decrement");
       button.click();
       button.click();
       await el.updateComplete;
       assert.shadowDom.equal(
       el,
       `
       <h3 class="label-container__header-label"></h3>
       <div class="label-container__sub"></div>
       <div class="counter-picker">
           <div class="counter-picker__labelled-counter">
               <div class="counter-picker__label"></div>
               <div class="counter-picker__counter">
                   <div class="counter-picker__button counter-increment">
                       <img class="counter-picker__icon" src="./img/TH-Plus.svg" />
                   </div>
                   <span class="counter-picker__input counter-picker__input--number">0</span>
                   <div class="counter-picker__button counter-decrement" style="pointer-events: none; background-color: grey;">
                       <img class="counter-picker__icon" src="./img/TH-Minus.svg" />
                   </div>
               </div>
           </div>
       </div>
       `
       );
   });
});