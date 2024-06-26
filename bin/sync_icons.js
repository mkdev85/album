const fs = require('fs').promises;
const path = require('path');

const sourceFolder = 'src/ui-kit/icons';
const destinationFolder = 'src/ui-kit/iconComponents';

// Function to convert a string to PascalCase
function toPascalCase(str) {
  return str.replace(/(?:^|[-_ ])([a-zA-Z])/g, (_, letter) => letter.toUpperCase());
}

// Function to create an SVG component content
function createSvgComponent(iconName, svgContent) {
  return `// DO NOT EDIT THIS FILE. This file auto-generated, use \`npm run sync-icons\` to update icons\n
    import type { SVGProps } from 'react';
    import React from 'react';

    const Icon${iconName}: React.FC<SVGProps<SVGSVGElement>> = (props) => {
      return (
        ${svgContent}
      );
    };

    export default Icon${iconName};`;
}

// Read the SVG files from the source folder and process them
async function processSvgFiles() {
  try {
    const files = await fs.readdir(sourceFolder);

    for (const file of files) {
      if (path.extname(file) === '.svg') {
        const iconName = toPascalCase(path.basename(file, '.svg'));
        const svgFilePath = path.join(sourceFolder, file);

        // Read SVG file content
        const svgFileContent = await fs.readFile(svgFilePath, 'utf-8');

        // Create SVG component content
        const svgComponentContent = createSvgComponent(
          iconName,
          svgFileContent.replace(
            /(<svg[^>]*)(>)/i,
            (_, startTag, endTag) => `${startTag} {...props}${endTag}`,
          ),
        );

        // Write SVG component to the destination folder
        const destinationFile = path.join(
          destinationFolder,
          `Icon${iconName}.tsx`,
        );
        await fs.writeFile(destinationFile, svgComponentContent);
      }
    }
  } catch (err) {
    console.error('Error:', err);
  }
}

console.log('Syncing icons, please wait...')
// Call the function to process SVG files
processSvgFiles();
