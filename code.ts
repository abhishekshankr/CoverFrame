figma.on('run', async () => {

  // Load Fonts
  const font = { family: "Manrope", style: "SemiBold" };
  const fontBold = { family: "Manrope", style: "Bold" };
  await figma.loadFontAsync(font);
  await figma.loadFontAsync(fontBold);

  // Create Main Frame
  const mainFrame = figma.createFrame();
  mainFrame.name = "File Cover";
  mainFrame.resize(1920, 960);
  mainFrame.primaryAxisSizingMode = "AUTO";
  mainFrame.fills = [{ type: "SOLID", visible: true, opacity: 1, blendMode: "NORMAL", color: { r: 1, g: 1, b: 1 } }];
  mainFrame.strokeWeight = 1;
  mainFrame.layoutGrids = [{ pattern: "COLUMNS", visible: true, color: { r: 1, g: 0, b: 0, a: 0.1 }, gutterSize: 20, alignment: "CENTER", count: 1, sectionSize: 1600 }];

  figma.currentPage.appendChild(mainFrame);

  // Create Flex Frame
  const flexFrame = figma.createFrame();
  flexFrame.name = "Flex Frame";
  flexFrame.resize(1600, 960);
  flexFrame.fills = [];
  flexFrame.strokeWeight = 1;
  flexFrame.layoutMode = "VERTICAL";
  flexFrame.itemSpacing = 64;
  flexFrame.paddingLeft = 64;
  flexFrame.paddingRight = 64;
  flexFrame.paddingTop = 64;
  flexFrame.paddingBottom = 64;

  //Center the autolayout flex frame
  const offsetX = (mainFrame.width - flexFrame.width) / 2;
  const offsetY = (mainFrame.height - flexFrame.height) / 2;
  flexFrame.x = offsetX;
  flexFrame.y = offsetY;

  mainFrame.appendChild(flexFrame);


  // Create Category Tag Frame
  const categoryTagFrame = figma.createFrame();
  categoryTagFrame.name = "Category Tag";
  categoryTagFrame.resize(238, 71);
  categoryTagFrame.fills = [{ type: "SOLID", visible: true, opacity: 1, blendMode: "NORMAL", color: { r:255/255, g:153/255, b:0/255 } }];
  categoryTagFrame.cornerRadius = 8;
  categoryTagFrame.strokeWeight = 1;
  categoryTagFrame.layoutMode = "HORIZONTAL";
  categoryTagFrame.itemSpacing = 10;
  categoryTagFrame.paddingLeft = 48;
  categoryTagFrame.paddingRight = 48;
  categoryTagFrame.paddingTop = 24;
  categoryTagFrame.paddingBottom = 24;

  flexFrame.appendChild(categoryTagFrame);

  // Create Category Text
  const categoryText = figma.createText();
  categoryText.name = "Category Text";
  categoryText.resize(142, 23);
  categoryText.fills = [{ type: "SOLID", visible: true, opacity: 1, blendMode: "NORMAL", color: { r: 1, g: 1, b: 1 } }];
  categoryText.fontName = font;
  categoryText.characters = "File Category";
  categoryText.fontSize = 32;
  categoryText.textAutoResize = "WIDTH_AND_HEIGHT";
  categoryText.leadingTrim = 'CAP_HEIGHT';

  categoryTagFrame.appendChild(categoryText);

  // Set Category Tag Frame to hug its contents
  categoryTagFrame.primaryAxisSizingMode = 'AUTO';
  categoryTagFrame.counterAxisSizingMode = 'AUTO';

  const fileNameText = figma.createText();
  fileNameText.name = "Your file name goes here";
  fileNameText.resize(flexFrame.width, 131); // Set width to parent frame's width
  fileNameText.layoutAlign = "STRETCH";
  fileNameText.fills = [{ type: "SOLID", visible: true, opacity: 1, blendMode: "NORMAL", color: { r: 0, g: 0, b: 0 } }];
  fileNameText.fontName = fontBold;
  fileNameText.lineHeight = {"unit":"PERCENT","value":106.1}
  fileNameText.characters = "Your file name goes here";
  fileNameText.fontSize = 128;
  fileNameText.textAutoResize = 'HEIGHT'; // Set textAutoResize to 'HEIGHT'

  flexFrame.appendChild(fileNameText);

  // Move the viewport to the main frame
  figma.viewport.scrollAndZoomIntoView([mainFrame]);

  // Let the plugin know we're done
  figma.closePlugin();
});
