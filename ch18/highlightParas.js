'use strict'

function highlightParas(containing) {
  if (typeof containing === 'string')
    containing = new RegExp(`\\b${containing}\\b`, 'i');
  const paras = document.getElementsByTagName('p');
  console.log(paras);
  for (let p of paras) {
    if (!containing.test(p.textContent)) continue;
    p.classList.add('highlight');
  }
}

// Add highlight class to paragraphs containing word 'unique'
highlightParas('unique');

function removeParaHighlights() {
  const paras = document.querySelectorAll('p.highlight');
  for (let p of paras) {
    p.classList.remove('highlight');
  }
}

const highlightActions = document.querySelectorAll('[data-action="highlight"]');
for(let a of highlightActions) {
  a.addEventListener('click', evt => {
    evt.preventDefault();
    highlightParas(a.dataset.containing);
  });
}

const removeHighlightActions = document.querySelectorAll('[data-action="removeHighlights"]');
for(let a of removeHighlightActions) {
  a.addEventListener('click', evt => {
    evt.preventDefault();
    removeParaHighlights();
  });
}
