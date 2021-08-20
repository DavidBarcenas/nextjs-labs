import Link from 'next/link'
import Button from '@material-ui/core/Button'
import { Excerpt } from '@components/Excerpt';
import { CustomImage, FitValues, LayoutTypes } from '@components/CustomImage';
import { AspectRatio } from './CustomImage';

interface PlantItemProps {
    plant: Plant;
    showDesc: Boolean;
    width?: number;
    aspecRatio?: AspectRatio;
    fit?: FitValues;
    layout?: LayoutTypes
}

export const PlantItem = ({ plant, showDesc, width = 460, aspecRatio = '16:9', fit = 'scale', layout = 'intrinsic' }: PlantItemProps) => {
    const { slug, plantName, image, category, description } = plant

    return (
        <>
            <article className="plant-item">
                <Link href={`/entry/${slug}`}>
                    <a title={`Go to ${plantName}`}>
                        <div className="plant-picture">
                            <CustomImage
                                src={image.url}
                                layout={layout}
                                width={width}
                                aspectRatio={aspecRatio}
                                fit={fit}
                            />
                            <p className="category">{category.title}</p>
                        </div>
                        <h4 className="plant-title">{plantName}</h4>
                    </a>
                </Link>
                {
                    showDesc && (
                        <>
                            <Excerpt richText={description} className="excerpt" />
                            <Link href={`/entry/${slug}`} passHref>
                                <Button>Read more</Button>
                            </Link>
                        </>
                    )
                }
            </article>

            <style jsx>{`
                .plant-item {
                    margin-bottom: 1rem;
                }
                .plant-picture {
                    position: relative;
                    margin-bottom: .75rem;
                }
                .plant-title {
                    font-size: 2rem;
                    margin: 0;
                }
                .plant-title:hover {
                    text-decoration: underline;
                }
                .category {
                    position: absolute;
                    top: .5rem;
                    right: 1rem;
                }
            `}</style>
        </>
    )
}