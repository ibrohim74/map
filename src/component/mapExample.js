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
                    borderRadius: "20px",}}
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