// 判断浏览器是否支持对图片进行回正操作
// 一张 2x1 的 JPEG 图片, EXIF Orientation: 6
const testAutoOrientationImageURL =
  'data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAA' +
  'AAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBA' +
  'QEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQE' +
  'BAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/x' +
  'ABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAA' +
  'AAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q=='
let isImageAutomaticRotation

export function detectImageAutomaticRotation () {
  return new Promise((resolve) => {
    if (isImageAutomaticRotation === undefined) {
      const img = new Image()

      img.onload = () => {
        // 如果图片变成 1x2，说明浏览器对图片进行了回正
        isImageAutomaticRotation = img.width === 1 && img.height === 2
        resolve(isImageAutomaticRotation)
      }
      img.src = testAutoOrientationImageURL
    } else {
      // console.log('isImageAutomaticRotation === undefined');
      resolve(isImageAutomaticRotation)
    }
  })
}
