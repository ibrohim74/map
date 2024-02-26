import Map from "./component/map";
import {useState} from "react";
import styles from './component/map.module.css'

function App() {

    // Learn more in the README.md file

    const [selectPosition, setSelectPosition] = useState(null); // **mandatory state
    const [searchText, setSearchText] = useState('') // **mandatory state
    const [listPlace, setListPlace] = useState([]) // **mandatory state


    return (
        <div className={styles.container}>

            {/*MAP Content*/}

            <Map
                selectPosition={selectPosition} // information of the selected item in the list place || **mandatory
                setSelectPosition={setSelectPosition} // change the data of the selected item in the list place || **mandatory
                searchText={searchText} // the name of the user-entered location || **mandatory
                listPlace={listPlace} // list of places found by search ||  **mandatory
                setListPlace={setListPlace} // a list-changing function || **mandatory
                zoom={14} // zoom lvl map  || default value 9
                style={{
                    margin: '20px 0 5px 0',
                    width: "100%",
                    height: "400px",
                    overflow: "hidden",
                    borderRadius: "20px",}} // style for map
                className={'test className'}  // your ClassName for map
                lat_long={[41.34557, 69.284599]} // default center map
            />

            {/* END MAP Content */}

            {/* information found and selected through search */}
            <div className={styles.mapCurrentLocation}>
                {selectPosition && selectPosition.display_name}
            </div>
            {/* End information found and selected through search */}


            {/* Search part */}
            <input type="text"
                   className={styles.searchText}
                   value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
            {/* End Search part */}


            {/* places found by the name of the location entered in the search */}
            <div className={styles.listTable}>
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

            {/* END places found by the name of the location entered in the search */}

        </div>
    );
}

export default App;
