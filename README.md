# Brief information about the map

<a href="https://ibb.co/ZBTMdQJ"><img src="https://i.ibb.co/5rcRTQ9/map-photo-1.jpg" alt="map-photo-1" border="0"></a>
#### Work with satellite map through google map
<a href="https://ibb.co/RTdPHKL"><img src="https://i.ibb.co/HT3Ygym/map-photo-2.jpg" alt="map-photo-2" border="0"></a>
#### search for the desired location through the search field and mark it with a marker <br/> the map gives a unique look through the flyTo animation
<a href="https://ibb.co/RHjnLhW"><img src="https://i.ibb.co/bdbhpHn/map-photo-3.jpg" alt="map-photo-3" border="0"></a>
#### the quick search engine works together with the open street map and facilitates geocoding


# You can customize the map to your liking and add convenience and flair to your project. !!!


## For those who want to see the demo version

Follow the steps below in order to view the demo version when you open the project.

### `npm install`

downloads the files needed for the map in package.json

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# For those who want to start their own project

## Libraries

````
npm install axios 
````

````
npm install leaflet 
````

````
npm install react-leaflet
````

### /component/map.js

copy the file and add it to your project file

call the

### `<Map />`

component in your file where you want to escape the map

and complete the following mandatory tasks

# Mandatory tasks

```javascript
const [selectPosition, setSelectPosition] = useState(null); // **mandatory state
const [searchText, setSearchText] = useState('') // **mandatory state
const [listPlace, setListPlace] = useState([]) // **mandatory state
```

Add the above state data to the file where the <Map /> component is called. These are the states needed to manage the
map

# `<Map />` component attributes

```javascript
             <Map
    selectPosition={selectPosition}
    // information of the selected item in the list place || **mandatory
    setSelectPosition={setSelectPosition}
    // change the data of the selected item in the list place || **mandatory
    searchText={searchText}
    // the name of the user-entered location || **mandatory
    listPlace={listPlace}
    // list of places found by search ||  **mandatory
    setListPlace={setListPlace}
    // a list-changing function || **mandatory
    zoom={14}
    // zoom lvl map  || default value 9
    style={{
        margin: '20px 0 5px 0',
        width: "100%",
        height: "400px",
        overflow: "hidden",
        borderRadius: "20px",
    }}
    // style for map
    className={'test className'}
    // your ClassName for map
    lat_long={[41.34557, 69.284599]}
    // default center map
/>
```

These are all attributes that the <Map/> component accepts

## Mandatory attributes

| Attributes          | Description                                                                                                                                                                    | accepts                         |
|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------|
| `selectPosition`    | information of the selected item in the list place                                                                                                                             | state: selectPosition / null    |
| `setSelectPosition` | change the data of the selected item in the list place                                                                                                                         | state: setSelectPosition / null |
| `searchText`        | The name of the location written in the input and stored in the searchText state                                                                                               | state: searchText / string      |
| `listPlace`         | list of places found by search                                                                                                                                                 | state: listPlace / [ ]         |
| `setListPlace`      | a list-changing function                                                                                                                                                       | state: setListPlace / [ ]      |
| `width height`      | Mandatory width and height must be given in style or class, otherwise the map will not be displayed                                                                            | width:100% <br/> height: 400px  |
| `lat_long`          | To determine the center of the map, you need to write the coordinates of a certain place   <br/> example: [38.39248 , 39,4894] ; the first value is lat and the second is lang | [ lat , lang ]                  |

# Example

````javascript

import React, {useState} from 'react';
import Map from "./map";
import styles from "./map.module.css";

const MapExample = () => {
    const [selectPosition, setSelectPosition] = useState(null);
    const [searchText, setSearchText] = useState('')
    const [listPlace, setListPlace] = useState([])
    return (
        <div>
            <Map
                selectPosition={selectPosition}
                setSelectPosition={setSelectPosition}
                searchText={searchText}
                listPlace={listPlace}
                setListPlace={setListPlace}
                zoom={14}
                style={{
                    margin: '20px 0 5px 0',
                    width: "100%",
                    height: "400px",
                    overflow: "hidden",
                    borderRadius: "20px",
                }}
                className={'test className'}
                lat_long={[41.34557, 69.284599]}
            />

            <input type="text"
                   className={styles.searchText}
                   value={searchText} onChange={(e) => setSearchText(e.target.value)}/>


            {listPlace && searchText ? listPlace.map((item) => {
                return (

                    <div className={styles.listItem}
                         onClick={() => {
                             setSelectPosition(item);
                             setSearchText('');
                         }}>
                        {item.display_name}
                    </div>

                )
            }) : !selectPosition?.display_name && 'no data'}
        </div>
    );
};

export default MapExample;

````

### Creator: khasanov_ibroxim
####  [Telegram](https://t.me/Khasanov_ibroxim)
####  [WhatsApp](https://wa.me/998993045475)
####  [Instagram](https://www.instagram.com/khasanov_ibroxim/)