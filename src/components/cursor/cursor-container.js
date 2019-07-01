import React from 'react'

import CursorView from './cursor-view'

export default class CursorContainer extends React.Component {
  constructor(props) {
    super(props)

    this.mousePosition = { x: 100, y: 100 }
    this.posX = 100
    this.posY = 100
    this.posX2 = 100
    this.posY2 = 100

    const hasTouch = () => 'ontouchstart' in window
    this.shouldRender = !hasTouch()
    this.update = this.update.bind(this)
  }

  getMousePos(ev) {
    let posx = 0, posy = 0
    if (!ev) ev = window.event;
    if (ev.pageX || ev.pageY) {
      posx = ev.pageX;
      posy = ev.pageY;
    } else if (ev.clientX || ev.clientY) 	{
      posx = ev.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      posy = ev.clientY + document.body.scrollTop + document.documentelement.scrollTop;
    }
    return { x: posx, y: posy }
  }

  update() {
    const lerp = (a, b, n) => (1 - n) * a + n * b
    const r1 = document.querySelector('.pointer-outer')
    const r2 = document.querySelector('.pointer-inner')
    this.posX = lerp(this.mousePosition.x, this.posX, 0.8);
    this.posY = lerp(this.mousePosition.y, this.posY, 0.8);
    r1.style.top = `${this.posY- 22}px`;
    r1.style.left = `${this.posX-22}px`;
    this.posX2 = lerp(this.mousePosition.x, this.posX2, 0.4);
    this.posY2 = lerp(this.mousePosition.y, this.posY2, 0.4);
    r2.style.top = `${this.posY2- 1}px`;
    r2.style.left = `${this.posX2-2}px`;
    requestAnimationFrame(this.update)
  }

  componentDidMount() {
    window.addEventListener('mousemove', ev => {
      this.mousePosition = this.getMousePos(ev)
    })

    if(this.shouldRender) {
      this.update()
    }
  }

  render() {
    if(!this.shouldRender) return null
    return <CursorView {...this.props} />
  }
}