import { IRegion } from "../types"

// Function to calculate average calories and fat for each region
export const calculateAverage = (regionData: IRegion[]) => {
  let sumCalories = 0
  let sumFat = 0
  let countCalories = 0
  let countFat = 0

  regionData.forEach((fish) => {
    if (fish.Calories) {
      // Extract numeric part from string like "22 g"
      const calories = Number(fish.Calories.split(" ")[0])
      if (!isNaN(calories)) {
        sumCalories += calories
        countCalories++
      }
    }

    if (fish.FatTotal) {
      // Extract numeric part from string like "0.22 g"
      const fat = Number(fish.FatTotal.split(" ")[0])
      if (!isNaN(fat)) {
        sumFat += fat
        countFat++
      }
    }
  })

  const averageCalories = countCalories ? sumCalories / countCalories : 0
  const averageFat = countFat ? sumFat / countFat : 0

  return { averageCalories, averageFat }
}
