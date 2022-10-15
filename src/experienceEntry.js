function experienceEntry ({date, location, position, bullets}) {
    return (
        <div className="expContainer">
            <div className="expDate">{date}</div>
            <div className="expContent">
                <div className="expTitle">{position}</div>
                <div className="expSubtitle">{location}</div>
                <ul className="expPointList">{bullets.map(b => 
                        <li key={b}>{b}</li>
                )}</ul>
            </div>
        </div>
    );
};

export default experienceEntry;