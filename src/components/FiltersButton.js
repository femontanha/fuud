import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import '../styles/filters-button.scss';

const FiltersButton = ({ onClick, show }) => {

    const triangleCSS = classNames(
        'filters-button__triangle',
        { 'filters-button__triangle--inverted': show }
    );

    return (
        <button className="filters-button" onClick={ onClick }>
            Filtrar Playlists
            <i className={ triangleCSS } />
        </button>
    );
};

FiltersButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
};

export default FiltersButton;
