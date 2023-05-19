// RegionPage.tsx

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { calculateAverage } from "../../lib/calculateAverage"
import { IRegion, NOAAFisheriesRegion } from "../../types" // import your type here
import "./RegionPage.css"

interface Region {
  name: NOAAFisheriesRegion
  avgCalories: number
  avgFat: number
  fish: IRegion[]
}

function RegionPage() {
  const [region, setRegion] = useState<Region | null>(null)
  const { regionName } = useParams<{ regionName: NOAAFisheriesRegion }>()

  useEffect(() => {
    if (!regionName) {
      return
    }
    fetch(
      "https://raw.githubusercontent.com/theabr-org/coding-challenge-server/main/fish-data.json"
    )
      .then((response) => response.json())
      .then((data: IRegion[]) => {
        const regionFish = data.filter(
          (fish) => fish.NOAAFisheriesRegion === regionName
        )

        const { averageCalories, averageFat } = calculateAverage(regionFish)

        setRegion({
          name: regionName,
          avgCalories: averageCalories,
          avgFat: averageFat,
          fish: regionFish,
        })
      })
  }, [regionName])

  if (!region) {
    return <div>Loading...</div>
  }

  return (
    <div className="container py-6 mx-auto space-y-2">
      <h1 className="mb-4 text-3xl font-bold">{region.name}</h1>
      <p>
        Average calories:{" "}
        <span className="font-bold">{region.avgCalories.toFixed(2)}</span>
      </p>
      <p>
        Average fat:{" "}
        <span className="font-bold">{region.avgFat.toFixed(2)}</span>
      </p>

      {region.fish.map((fish) => (
        <div
          key={fish.ScientificName}
          className="p-4 mb-4 space-y-1 border rounded"
        >
          <h2 className="text-xl font-bold">{fish.SpeciesName}</h2>
          <img
            src={fish.SpeciesIllustrationPhoto.src}
            alt={fish.SpeciesIllustrationPhoto.alt}
            title={fish.SpeciesIllustrationPhoto.title}
            className="w-64"
          />
          <p>
            Calories: <span className="font-bold">{fish.Calories}</span>
          </p>
          <p>
            Fat: <span className="font-bold">{fish.FatTotal}</span>
          </p>
          <p className="fish-biology">
            {" "}
            <span dangerouslySetInnerHTML={{ __html: fish.Biology }} />
          </p>
        </div>
      ))}
    </div>
  )
}

export default RegionPage
