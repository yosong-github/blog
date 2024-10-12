function imageToString(img: HTMLImageElement) {
  const canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext("2d");
  ctx?.drawImage(img, 0, 0, img.width, img.height);
  return canvas.toDataURL("image/png");
}

function cloneImageWithoutReload(originalImageElement: HTMLImageElement) {
  const dataURL = imageToString(originalImageElement);

  // 创建新的图片元素并设置src为Data URL
  const newImageElement = document.createElement("img");
  newImageElement.src = dataURL;

  // 复制其他属性（如alt, title等）
  newImageElement.alt = originalImageElement.alt;
  newImageElement.title = originalImageElement.title;

  return newImageElement;
}

export default cloneImageWithoutReload;
