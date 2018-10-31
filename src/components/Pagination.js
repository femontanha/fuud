import React from 'react';
import PropTypes from 'prop-types';
import '../styles/pagination.scss';

const Pagination = ({
    limit,
    next,
    previous,
    total,
    onClick,
}) => {
    return (
        <div className="pagination">
            <div className="pagination__btn-holder">
                {
                    previous &&
                    <button className="pagination__btn" onClick={ onClick.bind(null, previous) }>Anterior</button>
                }
            </div>
            {
                total > 0 && limit < total &&
                <span className="pagination__total">Total de <strong>{ total }</strong> playlists</span>
            }
            <div className="pagination__btn-holder">
                {
                    next &&
                    <button className="pagination__btn" onClick={ onClick.bind(null, next) }>Próxima</button>
                }
            </div>
        </div>
    );
};

Pagination.propTypes = {
    limit: PropTypes.number.isRequired,
    next: PropTypes.string,
    previous: PropTypes.string,
    total: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Pagination;
