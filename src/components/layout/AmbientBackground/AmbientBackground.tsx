import './AmbientBackground.scss';

export default function AmbientBackground() {
    return (
        <div className="ambientBackground" aria-hidden="true">
            <div className="ambientBackground__orb ambientBackground__orb--top" />
            <div className="ambientBackground__orb ambientBackground__orb--left" />
            <div className="ambientBackground__orb ambientBackground__orb--right" />
        </div>
    );
}
