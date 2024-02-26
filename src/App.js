import Map from "./component/map";
import {useState} from "react";
import styles from './component/map.module.css'

function App() {
    const [selectPosition, setSelectPosition] = useState(null);
    const [searchText, setSearchText] = useState('')
    const [listPlace, setListPlace] = useState([])
    console.log(listPlace)
    return (
        <div className={styles.container}>
            <Map
                selectPosition={selectPosition}
                setSelectPosition={setSelectPosition}
                searchText={searchText}
                listPlace={listPlace}
                setListPlace={setListPlace}
                style={{
                    margin: '20px 0 5px 0',
                    width: "100%",
                    height: "400px",
                    overflow: "hidden",
                    borderRadius: "20px",
                }}
            />
            <div className={styles.mapCurrentLocation}>
                {selectPosition && selectPosition.display_name}
            </div>

            <input type="text"
                   className={styles.searchText}
                   value={searchText} onChange={(e) => setSearchText(e.target.value)}/>

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
        </div>
    );
}

export default App;
