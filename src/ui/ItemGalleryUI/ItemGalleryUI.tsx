import { useState } from 'react';
import ImageGallery from "react-image-gallery";
import ReactImageMagnify from "react-image-magnify";
import "react-image-gallery/styles/css/image-gallery.css";
import styled from 'styled-components';
export const ItemGalleryUI = (props: any) => {
    const { images } = props;
    const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
    return (
        <GalleryWrapper>
            <ImageGallery
                thumbnailPosition={"bottom"}
                useBrowserFullscreen={false}
                showPlayButton={false}
                onScreenChange={() => setIsFullScreen(!isFullScreen)}
                renderItem={isFullScreen ? undefined : (item) => {
                    return (
                        <ReactImageMagnify
                            {...{
                                smallImage: {
                                    // alt: "Wristwatch by Ted Baker London",
                                    isFluidWidth: true,
                                    src: item?.original
                                },
                                largeImage: {
                                    src: item?.original,
                                    width: 640,
                                    height: 480
                                },
                                enlargedImagePortalId: "galleryPortal"
                            }}
                        />
                    )
                }}
                items={images.map((img: string) => {
                    return {
                        original: img,
                        thumbnail: img
                    }
                })}
            />
            <div id="galleryPortal"></div>
        </GalleryWrapper>
    )
}

const GalleryWrapper = styled.div`
    max-width: 412px;
    position: relative;
    & #galleryPortal {
        position: absolute;
        left: 100%;
        top: 0;
    }
`