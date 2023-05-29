'use strict'
new fullpage('#fullpage', {
	licenseKey: "gplv3-license",
  keyboardScrolling: true,
  // scrollBar: true
   scrollOverflow: false,
  css3: true,
  autoScrolling: true,
  fitToSection: true,
  fitToSectionDelay: 1000,
  verticalCentered: true,
  
  onLeave: (origin, destination, direction, trigger) => {
    const Nextnodes = destination.item.querySelectorAll('[data-aos]');
    const previousNodes = origin.item.querySelectorAll('[data-aos]');
    previousNodes.forEach(node => {
      node.classList.remove('aos-animate')
    });

    Nextnodes.forEach(node => {
      node.classList.add('aos-animate')
    });
  }
});