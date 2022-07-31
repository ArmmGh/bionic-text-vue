const transformToBionic = (content) => {
  // TODO: make cachable
  const words = content.split(' ');
  const newWords = words.map((word) => {
    const newWord = [...word];
    const diff = newWord.length % 2;
    let idx = newWord.length / 2;

    if (diff) {
      idx = Math.ceil(idx);
    }

    newWord.splice(idx, 0, '</span>');
    newWord.unshift('<span class="bionic">');

    return newWord.join('');
  });

  return newWords.join(' ');
};

export default transformToBionic;
