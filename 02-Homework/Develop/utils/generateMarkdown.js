// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.Description}

## license
${data.license}

## Github
${data.github}


`;
}

module.exports = generateMarkdown;
