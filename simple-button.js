import { LitElement, html, css } from 'lit-element';

export class SimpleButton extends LitElement {
  static get styles() {
    return css`
        
    `;
  }

  static get properties() {
    return { 
      backgroundColor: { type: String },
      textColor: { type: String },
	    borderColor: { type: String },
      linkLocation: { type: String },
      hoverBackgroundColor: { type: String },
      hoverBorderColor: { type: String },
      hoverTextColor: { type: String },
      disabled: { type: Boolean, reflect: true },
    };
  }

  constructor() {
    super();
    this.disabled = false;
    this.backgroundColor = '#ffffff';
    this.textColor = '#ffffff';
	  this.borderColor = '#ffffff';
    this.linkLocation = '#';
    this.hoverBackgroundColor = '#ffffff';
    this.hoverBorderColor = '#ffffff';
    this.hoverTextColor = '#ffffff';
  }

  render() {
    return html`
      <style>
        button {
          height: 60px;
          width: 200px;
          background-color: ${this.backgroundColor};
          color: ${this.textColor};
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 18px;
          margin: 4px 2px;
          border-radius: 5px;
          border-style: solid;
          border-color: ${this.borderColor};
          cursor: pointer;
        }

        button:hover {
          background-color: ${this.hoverBackgroundColor};
          color: ${this.hoverTextColor};
          border-color: ${this.hoverBorderColor};  
        }

        button[disabled] {
          background-color: ${this.backgroundColor};
          color: ${this.textColor};
          border-color: ${this.borderColor};
          cursor: no-drop;
        }
        
      </style>
      <button @click="${this._handleClick}" ?disabled=${this.disabled}>${this.borderColor}</button> 
    `;
  }

  _handleClick(e) {
    alert('I am Clicked');
    /*let x = this.linkLocation;
    location.href = x;*/
  }
}

window.customElements.define('simple-button', SimpleButton);