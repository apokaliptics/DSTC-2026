const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const t = require('@babel/types');

const targets = {
  'HeroSection.tsx': ['HeroSection'],
  'AboutSection.tsx': ['AboutSection', 'LightFlareEffect1'],
  'PhotoGalleryAndPrizes.tsx': ['Photo', 'PrizesSection', 'PrizeDetailsFrames', 'CompetitionRulesBadge'],
  'FooterSection.tsx': ['FooterSection'],
  'ParticipantSection.tsx': ['Group82', 'DivInlineBlock', 'DiTngThamGia'],
  'FeaturedEventsSection.tsx': ['PTextXl1', 'Group94', 'DivGrid'],
  'IntroStatsSection.tsx': ['DivGrid1'],
  'OrganizerSection.tsx': ['Group95'],
  'PartnerSection.tsx': ['H2Text5Xl2', 'Group96'],
  'SponsorsSection.tsx': ['SponsorsSection'],
  'TimelineSection.tsx': ['TimelineSection']
};

for (const [filename, functions] of Object.entries(targets)) {
  const filePath = path.join('src', 'imports', 'UnscrollableContent', 'sections', filename);
  if (!fs.existsSync(filePath)) continue;

  const code = fs.readFileSync(filePath, 'utf8');
  let ast;
  try {
    ast = parser.parse(code, {
      sourceType: 'module',
      plugins: ['jsx', 'typescript']
    });
  } catch (e) {
    console.error(`Error parsing ${filename}:`, e);
    continue;
  }

  let modified = false;
  let hasMotionImport = false;

  traverse(ast, {
    ImportDeclaration(p) {
      if (p.node.source.value === 'motion/react' || p.node.source.value === 'framer-motion') {
        hasMotionImport = true;
      }
    },
    FunctionDeclaration(p) {
      const funcName = p.node.id ? p.node.id.name : '';
      if (functions.includes(funcName)) {
        p.traverse({
          ReturnStatement(retPath) {
            const arg = retPath.node.argument;
            if (arg && arg.type === 'JSXElement') {
              const opening = arg.openingElement;
              const closing = arg.closingElement;

              let tagName = '';
              if (opening.name.type === 'JSXIdentifier') {
                 tagName = opening.name.name;
              }

              if (tagName === 'div' || tagName === 'section') {
                const newTagName = t.jsxMemberExpression(
                  t.jsxIdentifier('motion'),
                  t.jsxIdentifier(tagName)
                );
                opening.name = newTagName;
                if (closing) {
                  closing.name = newTagName;
                }

                // Add props: initial={{ opacity: 0, y: 50 }}
                opening.attributes.push(
                  t.jsxAttribute(
                    t.jsxIdentifier('initial'),
                    t.jsxExpressionContainer(
                      t.objectExpression([
                        t.objectProperty(t.identifier('opacity'), t.numericLiteral(0)),
                        t.objectProperty(t.identifier('y'), t.numericLiteral(50))
                      ])
                    )
                  ),
                  t.jsxAttribute(
                    t.jsxIdentifier('whileInView'),
                    t.jsxExpressionContainer(
                      t.objectExpression([
                        t.objectProperty(t.identifier('opacity'), t.numericLiteral(1)),
                        t.objectProperty(t.identifier('y'), t.numericLiteral(0))
                      ])
                    )
                  ),
                  t.jsxAttribute(
                    t.jsxIdentifier('viewport'),
                    t.jsxExpressionContainer(
                      t.objectExpression([
                        t.objectProperty(t.identifier('once'), t.booleanLiteral(true)),
                        t.objectProperty(t.identifier('amount'), t.numericLiteral(0.1))
                      ])
                    )
                  ),
                  t.jsxAttribute(
                    t.jsxIdentifier('transition'),
                    t.jsxExpressionContainer(
                      t.objectExpression([
                        t.objectProperty(t.identifier('duration'), t.numericLiteral(0.8)),
                        t.objectProperty(t.identifier('ease'), t.stringLiteral('easeOut'))
                      ])
                    )
                  )
                );
                
                modified = true;
                retPath.skip(); // Only modify the outermost returned element
              }
            }
          }
        });
      }
    }
  });

  if (modified) {
    if (!hasMotionImport) {
      const importDecl = t.importDeclaration(
        [t.importSpecifier(t.identifier('motion'), t.identifier('motion'))],
        t.stringLiteral('motion/react')
      );
      ast.program.body.unshift(importDecl);
    }

    const output = generate(ast, { retainLines: false }, code);
    fs.writeFileSync(filePath, output.code);
    console.log(`Updated ${filename}`);
  }
}
