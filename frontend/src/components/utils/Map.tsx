import React, { useEffect, useRef, useState } from "react";

type Props = {
    center: google.maps.LatLngLiteral,
    zoom: number,
    children?: React.ReactNode
};

const Map = ({ center, zoom, children }: Props) => {
    const ref = useRef<HTMLDivElement>(null);
    const [map, setMap] = useState<google.maps.Map>();

    useEffect(() => {
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, {
                center,
                zoom
            }));
        }
    }, [ref, map, center, zoom]);
    return <><div ref={ref} id="map" style={{ width: '100%', height: '200px'}} />
        {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            // set the map prop on the child component
            // @ts-ignore
            return React.cloneElement(child, { map });
        }
        })}
        </>
    
}

export default Map;