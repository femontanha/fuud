import React, { PureComponent } from 'react';
import { REFRESH_INTERVAL, COUNTDOWN_INTERVAL } from '../constants';
import '../styles/spotify-timer.scss';

class SpotifyTimer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            countdown: COUNTDOWN_INTERVAL,
        }

        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        this.timer = setInterval(this.tick, 1000);
        this.countdown = setInterval(() => {
            this.setState({
                countdown: COUNTDOWN_INTERVAL,
            });
        }, REFRESH_INTERVAL);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        clearInterval(this.countdown);
    }

    tick() {
        const countdown = this.state.countdown;
        this.setState({ countdown: countdown - 1 });
    }

    render() {
        return (<p className="spotify-timer">
            As playlists serão atualizadas em: <span className="spotify-timer__seconds">{ this.state.countdown }</span></p>
        );
    }
};

export default SpotifyTimer;
