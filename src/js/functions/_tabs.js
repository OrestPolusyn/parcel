import * as refs from '../_config.js';

let tabsBtn = [...document[refs._querySelectorAll]('.tabs__btn')];
let tabsContent = [...document[refs._querySelectorAll]('.tabs__panel')];

if (tabsBtn.length <= 0) return;
for (let i = 0; i < tabsBtn.length; i += 1) {
  tabsBtn[i].index = i;
  tabsBtn[i].addEventListener('click', tabSwitcher);
}

function tabSwitcher() {
  tabsBtn.forEach(item =>
    item[refs._classList][refs._remove]('tabs__btn--active')
  );
  tabsContent.forEach(item =>
    item[refs._classList][refs._remove]('tabs__panel--active')
  );

  tabsContent[this.index][refs._classList][refs._add]('tabs__panel--active');
  this[refs._classList][refs._add]('tabs__btn--active');
}
