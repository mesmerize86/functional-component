import { defaultPath, imageNotFound } from '../images/image-source';
/* 
  - handle image error 
  get an image path as a parameter. If there is no image, replace with image not found.

 i. check if there is a image property
 ii. check if the image path is null
 iii. check if the image path is empty string
 
*/
export const handleImageError = (imageSrc) => {
  return (typeof imageSrc === 'undefined' || imageSrc === null || imageSrc == '') ? 
    `${imageNotFound.imagePath}${imageNotFound.imageName}` : `${defaultPath}${imageSrc}` 
}
