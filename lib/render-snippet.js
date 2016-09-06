const $ = require('jquery');
const escape = require('escape-html');

module.exports = (title, code) => {
  const $snippetElement = $(`
    <article class="snippet">
      <h2 class="snippet--title">${escape(title)}</h2>
      <pre><code class="snippet--code">${escape(code)}</code></pre>
      <button>Remove</button>
    </article>
  `);

  return $snippetElement;
};
