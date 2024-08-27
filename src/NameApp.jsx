import PropTypes from 'prop-types';

export const Name = ( { title, subtitle }  ) => {

    return (
        <>

            <h1>{ title }</h1>
            <p> { subtitle } </p>

        </>
    )
}


Name.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
}

Name.defaultProps = {
    title: 'No hay título',
    subtitle: 'No hay subtítulo'
}

