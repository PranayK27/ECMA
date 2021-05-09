var article = {
    title: 'Hello Template Literals',
    teaser: 'String interpolation is awesome. Here are some features',
    body: 'Lots and lots of sanitized HTML',
    tags: ['es6', 'template-literals', 'es6-in-depth']
}
var html = `<article>
    <header>
      <h1>${article.title}</h1>
    </header>
    <section>
      <div>${article.teaser}</div>
      <div>${article.body}</div>
    </section>
    <footer>
      <ul>
        ${article.tags.map(tag => `<li>${tag}</li>`).join('\n      ')}
      </ul>
    </footer>
  </article>`

console.log(html);
