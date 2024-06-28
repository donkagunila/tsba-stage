import {APIProvider, Map} from "@vis.gl/react-google-maps";
import {Constants} from "../../../config/env.ts";


const MapsHolder = () => {
    return (
        <div>
            <APIProvider apiKey={Constants.MAP_API_KEY}>
                <Map
                    style={{width: '100vw', height: '100vh'}}
                    defaultCenter={{lat: 22.54992, lng: 0}}
                    defaultZoom={3}
                    gestureHandling={'greedy'}
                    disableDefaultUI={true}
                />
            </APIProvider>
        </div>
    );
};

export default MapsHolder;