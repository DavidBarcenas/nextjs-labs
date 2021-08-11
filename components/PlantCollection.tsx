import Link from 'next/link'
import { Typography } from '@material-ui/core'

interface PlantCollectionProps {
    plants: Plant[]
}

export const PlantCollection = ({plants}: PlantCollectionProps) => {
    return (
        <>
            <div className="plant-collection">
                {
                    plants.map(plant => <PlantItem key={plant.id} {...plant} />)
                }
            </div>

            <style jsx>{`
                .plant-collection {
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-gap: .5rem;
                }
                @media screen and (min-width: 480px) {
                    .plant-collection {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
                @media screen and (min-width: 960px) {
                    .plant-collection {
                        grid-template-columns: repeat(3, 1fr);
                        grid-gap: 2rem;
                    }
                }
            `}</style>
        </>
    )
}


const PlantItem = ({slug, plantName, image}) => {
    return (
        <Link href={`/entry/${slug}`}>
            <a title={`Go to ${plantName}`}>
                <div>
                    <img src={image.url} />
                    <div className="p-4">
                        <Typography variant="h4">
                            {plantName}
                        </Typography>
                    </div>
                </div>
            </a>
        </Link>
    )
}