import { FaCalculator } from 'react-icons/fa'
import propTypes from 'prop-types'
const Header = ({ title }) => {
    return (
        <header>
            <h1>{title} <FaCalculator /></h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'Calculator'
}

Header.propTypes = {
    title: propTypes.string
}

export default Header
