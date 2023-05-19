import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { calculateAverage } from "../../lib/calculateAverage"
import { IRegion, NOAAFisheriesRegion } from "../../types" // import your type here

interface RegionSummary {
  name: NOAAFisheriesRegion
  avgCalories: number
  avgFat: number
  fishCount: number
}

function HomePage() {
  const [regions, setRegions] = useState<RegionSummary[]>([])

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/theabr-org/coding-challenge-server/main/fish-data.json"
    )
      .then((response) => response.json())
      .then((data: IRegion[]) => {
        const regionData = Object.values(NOAAFisheriesRegion).map((region) => {
          const regionFish = data.filter(
            (fish) => fish.NOAAFisheriesRegion === region
          )

          const fishCount = regionFish.length
          const { averageCalories, averageFat } = calculateAverage(regionFish)

          return {
            name: region,
            avgCalories: averageCalories,
            avgFat: averageFat,
            fishCount,
          }
        })
        setRegions(regionData)
      })
  }, [])

  return (
    <div className="container py-6 mx-auto">
      <h1 className="mb-4 text-3xl font-bold">Regions</h1>
      {regions.map((region) => (
        <div key={region.name} className="mb-4 space-y-1">
          <Link
            className="text-emerald-600 hover:underline"
            to={`/region/${region.name}`}
          >
            {region.name}
          </Link>
          <p>
            Average calories:{" "}
            <span className="font-bold">{region.avgCalories.toFixed(2)}</span>
          </p>
          <p>
            Average fat:{" "}
            <span className="font-bold">{region.avgFat.toFixed(2)}</span>
          </p>
          <p>
            Fish count: <span className="font-bold">{region.fishCount}</span>
          </p>
        </div>
      ))}
    </div>
  )
}

export default HomePage
