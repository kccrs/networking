const {
  $newSnippetTitle,
  $newSnippetCode,
  $newSnippetSubmit
} = require('./elements');

module.exports = () => {
  const bothFieldsHaveContent = $newSnippetTitle.val() && $newSnippetCode.text();
  $newSnippetSubmit.attr('disabled', !bothFieldsHaveContent);
};
