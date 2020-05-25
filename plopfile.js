module.exports = function (plop) {
  plop.setGenerator('post', {
    description: 'Create new blog post',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Article title, please'
    }],
    actions: [{
      type: 'add',
      path: `content/blog/{{kebabCase name}}/index.md`,
      templateFile: 'plop-templates/blogPost.hbs'
    }]
  })

  plop.setPartial('isoDate', new Date().toISOString())
};