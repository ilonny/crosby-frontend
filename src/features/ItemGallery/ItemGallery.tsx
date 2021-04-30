import PledImage from "../../assets/images/pled.png";
import { ItemGalleryUI } from "../../ui";
export const ItemGallery = () => {
    const images = [PledImage, PledImage, PledImage, PledImage, PledImage, PledImage];
    return <ItemGalleryUI images={images} />
}