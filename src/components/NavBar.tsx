import { Link } from "react-router-dom"
import { NOAAFisheriesRegion } from "../types"

function NavBar() {
  return (
    <nav className="bg-sky-600 p-6">
      <ul className="flex justify-between list-none">
        <li>
          <Link
            to="/"
            className="text-2xl font-bold text-white hover:text-sky-200"
          >
            Fish HQ
          </Link>
        </li>
        <li>
          <ul className="flex space-x-4 list-none">
            {Object.values(NOAAFisheriesRegion).map((regionName) => (
              <li key={regionName}>
                <Link
                  to={`/region/${regionName}`}
                  className="text-white hover:text-sky-200"
                >
                  {regionName}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
