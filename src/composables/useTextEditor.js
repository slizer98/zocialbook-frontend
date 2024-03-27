// useTextEditor.js

import { ref } from 'vue';

export function useTextEditor() {
  const selectedText = ref('');

  const getSelectedText = () => {
    if (window.getSelection) {
      selectedText.value = window.getSelection().toString()
    } else if (document.selection && document.selection.type != 'Control') {
      selectedText.value = document.selection.createRange().text
    }
  };

  const applyFormatting = (format) => {
    const text = selectedText.value;
    return text ? `<${format}>${text}</${format}>` : ''
  };

  const applyFormattingList = (format) => {
    const text = selectedText.value
    if (!text) return ''

    const lines = text.split('\n');
    const listItems = lines.map((line) => {
      return `<li>${line}</li>`
    });

    return `<${format}>${listItems.join('')}</${format}>`
  }


  return {
    selectedText,
    getSelectedText,
    applyFormatting,
    applyFormattingList
  };
}
